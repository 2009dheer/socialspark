import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface SparkStage3DProps {
  variant?: 'hero' | 'ambient';
}

/**
 * Spatial Apple-style Obsidian Crystal Halo & Lens.
 * Disabled on narrow mobile viewports (<768px) to guarantee 60fps battery-cool scrolling
 * alongside autoplaying reels, while delivering full WebGL optics on tablet & desktop.
 */
export const SparkStage3D: React.FC<SparkStage3DProps> = ({ variant = 'hero' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Keep mobile scrolling silky & cool alongside inline video autoplay
    if (isMobile || variant !== 'hero') return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      38,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 9.5);

    const ambient = new THREE.AmbientLight(0xffffff, 0.28);
    scene.add(ambient);

    const topRim = new THREE.DirectionalLight(0xffffff, 2.2);
    topRim.position.set(5, 6, 4);
    scene.add(topRim);

    const sideCool = new THREE.PointLight(0xe2e8f0, 16, 22, 1.5);
    sideCool.position.set(-4, 2, 5);
    scene.add(sideCool);

    const warmBrandEdge = new THREE.PointLight(0xf97316, 10, 20, 1.5);
    warmBrandEdge.position.set(4.5, -3.5, 2);
    scene.add(warmBrandEdge);

    const envScene = new THREE.Scene();
    envScene.background = new THREE.Color(0x040406);
    const panel = new THREE.Mesh(
      new THREE.PlaneGeometry(14, 14),
      new THREE.MeshBasicMaterial({ color: 0xe5e7eb, side: THREE.DoubleSide })
    );
    panel.position.set(6, 7, 5);
    panel.lookAt(0, 0, 0);
    envScene.add(panel);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const envRT = pmrem.fromScene(envScene, 0.05);
    scene.environment = envRT.texture;

    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    const outerRingGeo = new THREE.TorusGeometry(2.1, 0.065, 48, 180);
    const outerRingMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x1e1f26),
      metalness: 0.92,
      roughness: 0.14,
      clearcoat: 1.0,
      clearcoatRoughness: 0.06,
      envMapIntensity: 1.3,
      transparent: true,
      opacity: 0.9,
    });
    const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    outerRing.rotation.x = Math.PI * 0.34;
    outerRing.rotation.y = -Math.PI * 0.18;
    masterGroup.add(outerRing);

    const innerRingGeo = new THREE.TorusGeometry(1.62, 0.016, 24, 160);
    const innerRingMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xd4d4d8),
      metalness: 0.95,
      roughness: 0.1,
      transparent: true,
      opacity: 0.5,
    });
    const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
    innerRing.rotation.x = -Math.PI * 0.28;
    innerRing.rotation.z = Math.PI * 0.2;
    masterGroup.add(innerRing);

    const lensGeo = new THREE.SphereGeometry(1.12, 64, 64);
    const lensMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x09090c),
      metalness: 0.12,
      roughness: 0.08,
      clearcoat: 1.0,
      clearcoatRoughness: 0.04,
      ior: 1.45,
      envMapIntensity: 1.1,
      transparent: true,
      opacity: 0.85,
    });
    const lensMesh = new THREE.Mesh(lensGeo, lensMat);
    masterGroup.add(lensMesh);

    const anchorX = 2.3;
    const baseScale = 0.95;
    masterGroup.position.set(anchorX, 0, -1.6);
    masterGroup.scale.setScalar(baseScale);

    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let targetScroll = 0;
    let currentScroll = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const onScroll = () => {
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      targetScroll = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    onScroll();

    const clock = new THREE.Clock();
    let rafId = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      if (document.hidden) return;

      const elapsed = clock.getElapsedTime();
      const mScale = prefersReducedMotion ? 0.15 : 1;

      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;
      currentScroll += (targetScroll - currentScroll) * 0.07;

      const s = currentScroll;
      const heroFade = Math.max(0, 1 - s * 4.5);
      masterGroup.visible = heroFade > 0.01;

      if (masterGroup.visible) {
        masterGroup.position.x = anchorX + currentMouseX * 0.18;
        masterGroup.position.y = Math.sin(elapsed * 0.7) * 0.08 * mScale + s * 1.4;
        masterGroup.position.z = -1.6 - s * 5.0;
        masterGroup.scale.setScalar(baseScale * (1 + s * 0.45));

        outerRing.rotation.z = elapsed * 0.16 * mScale + s * 2.2 + currentMouseX * 0.25;
        outerRing.rotation.x = Math.PI * 0.34 - currentMouseY * 0.16;
        innerRing.rotation.z = -elapsed * 0.22 * mScale - s * 1.8;

        outerRingMat.opacity = 0.9 * heroFade;
        innerRingMat.opacity = 0.5 * heroFade;
        lensMat.opacity = 0.85 * heroFade;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      outerRingGeo.dispose();
      outerRingMat.dispose();
      innerRingGeo.dispose();
      innerRingMat.dispose();
      lensGeo.dispose();
      lensMat.dispose();
      panel.geometry.dispose();
      (panel.material as THREE.Material).dispose();
      envRT.dispose();
      pmrem.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [variant]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden hidden md:block"
      aria-hidden="true"
    />
  );
};
