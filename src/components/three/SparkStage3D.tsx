import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface SparkStage3DProps {
  /** Ambient subdued mode on inner pages vs. full interactive kinetic choreography on Home */
  variant?: 'hero' | 'ambient';
}

/**
 * Real-time Three.js WebGL 3D Scroll Stage.
 * Renders a sculptural 3D metallic-ember lightning monolith, gyroscopic orbital rings,
 * kinetic glass prisms, and a volumetric ember spark field driven directly by scroll progress,
 * scroll velocity, and mouse parallax — running cleanly at 60fps with zero external scene downloads.
 */
export const SparkStage3D: React.FC<SparkStage3DProps> = ({ variant = 'hero' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const isMobile = window.innerWidth < 768;

    // Renderer setup (hardware accelerated, capped pixelRatio for silky 60fps)
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isMobile,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.35 : 1.75));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      46,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, isMobile ? 10.5 : 8.8);

    // Architectural studio lighting rig
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambientLight);

    const orangeKeyLight = new THREE.PointLight(0xff5a1f, 38, 30, 1.5);
    orangeKeyLight.position.set(4.5, 3.2, 5.5);
    scene.add(orangeKeyLight);

    const magentaRimLight = new THREE.PointLight(0xff2e93, 32, 28, 1.5);
    magentaRimLight.position.set(-5.2, -3.5, 4.0);
    scene.add(magentaRimLight);

    const goldTopLight = new THREE.PointLight(0xffb800, 26, 25, 1.4);
    goldTopLight.position.set(0, 6.2, 3.5);
    scene.add(goldTopLight);

    const coolBackLight = new THREE.DirectionalLight(0x60a5fa, 0.85);
    coolBackLight.position.set(-4, 2, -6);
    scene.add(coolBackLight);

    // Master stage group driven by scroll & pointer
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // --- 1. Sculptural 3D Lightning Monolith ---
    const boltShape = new THREE.Shape();
    boltShape.moveTo(0.85, 2.25);
    boltShape.lineTo(-0.82, 0.16);
    boltShape.lineTo(-0.08, 0.16);
    boltShape.lineTo(-1.12, -2.25);
    boltShape.lineTo(0.82, -0.08);
    boltShape.lineTo(0.06, -0.08);
    boltShape.closePath();

    const boltGeo = new THREE.ExtrudeGeometry(boltShape, {
      depth: 0.34,
      bevelEnabled: true,
      bevelThickness: 0.12,
      bevelSize: 0.08,
      bevelSegments: 4,
    });
    boltGeo.center();

    const boltCoreMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x14131a),
      metalness: 0.92,
      roughness: 0.14,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      emissive: new THREE.Color(0xff4d12),
      emissiveIntensity: 0.22,
    });

    const boltWireGeo = new THREE.EdgesGeometry(boltGeo, 24);
    const boltWireMat = new THREE.LineBasicMaterial({
      color: 0xff8c2b,
      transparent: true,
      opacity: 0.55,
    });

    const boltMesh = new THREE.Mesh(boltGeo, boltCoreMat);
    const boltWire = new THREE.LineSegments(boltWireGeo, boltWireMat);
    boltMesh.add(boltWire);

    const monolithGroup = new THREE.Group();
    monolithGroup.add(boltMesh);

    if (variant === 'ambient') {
      monolithGroup.scale.setScalar(0.7);
      monolithGroup.position.set(2.4, 0.2, -2.5);
    } else {
      monolithGroup.scale.setScalar(isMobile ? 0.72 : 0.96);
    }
    masterGroup.add(monolithGroup);

    // --- 2. Gyroscopic Orbital Rings ---
    const ring1Geo = new THREE.TorusGeometry(2.85, 0.018, 16, 140);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xffb800,
      metalness: 0.9,
      roughness: 0.18,
      emissive: 0xff5a1f,
      emissiveIntensity: 0.45,
      transparent: true,
      opacity: 0.65,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI * 0.36;
    ring1.rotation.y = Math.PI * 0.15;

    const ring2Geo = new THREE.TorusGeometry(3.45, 0.012, 12, 160);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xff2e93,
      metalness: 0.85,
      roughness: 0.2,
      emissive: 0xff2e93,
      emissiveIntensity: 0.38,
      transparent: true,
      opacity: 0.42,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI * 0.28;
    ring2.rotation.z = Math.PI * 0.25;

    const ring3Geo = new THREE.TorusGeometry(4.15, 0.008, 12, 160);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0xf5f3ee,
      transparent: true,
      opacity: 0.14,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.x = Math.PI * 0.48;

    const ringsGroup = new THREE.Group();
    ringsGroup.add(ring1, ring2, ring3);
    if (variant === 'ambient') {
      ringsGroup.scale.setScalar(0.85);
      ringsGroup.position.copy(monolithGroup.position);
    }
    masterGroup.add(ringsGroup);

    // --- 3. Orbiting Kinetic Octahedral Prisms ---
    const shardGeo = new THREE.OctahedronGeometry(0.14, 0);
    const shardMat = new THREE.MeshPhysicalMaterial({
      color: 0xff7a18,
      metalness: 0.85,
      roughness: 0.12,
      emissive: 0xff2e93,
      emissiveIntensity: 0.28,
    });

    const shards: { mesh: THREE.Mesh; radius: number; speed: number; offset: number; yAmp: number }[] = [];
    const shardCount = isMobile ? 8 : 14;
    for (let i = 0; i < shardCount; i++) {
      const mesh = new THREE.Mesh(shardGeo, shardMat);
      const scale = 0.55 + Math.random() * 0.9;
      mesh.scale.setScalar(scale);
      const radius = 2.6 + Math.random() * 2.8;
      const offset = (i / shardCount) * Math.PI * 2;
      const speed = 0.18 + Math.random() * 0.22;
      const yAmp = (Math.random() - 0.5) * 2.4;
      masterGroup.add(mesh);
      shards.push({ mesh, radius, speed, offset, yAmp });
    }

    // --- 4. Procedural Glow Sprite + Volumetric Ember Particle Field ---
    const spriteCanvas = document.createElement('canvas');
    spriteCanvas.width = 64;
    spriteCanvas.height = 64;
    const ctx = spriteCanvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(32, 32, 2, 32, 32, 30);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.28, 'rgba(255,180,90,0.85)');
      grad.addColorStop(0.65, 'rgba(255,46,147,0.2)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(spriteCanvas);

    const particleCount = isMobile ? 240 : 520;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const palette = [
      new THREE.Color(0xffb800),
      new THREE.Color(0xff5a1f),
      new THREE.Color(0xff2e93),
      new THREE.Color(0xf5f3ee),
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 24;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 16 - 2;
      const c = palette[i % palette.length];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: isMobile ? 0.14 : 0.16,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.78,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const particleField = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleField);

    // --- Scroll & Mouse State (zero React re-renders!) ---
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let targetScroll = 0;
    let currentScroll = 0;
    let prevScrollY = window.scrollY;
    let scrollVelocity = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const y = window.scrollY;
      targetScroll = Math.min(Math.max(y / maxScroll, 0), 1);
      scrollVelocity = Math.min(Math.max((y - prevScrollY) * 0.015, -1.5), 1.5);
      prevScrollY = y;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    handleScroll();

    // --- Render Loop ---
    const clock = new THREE.Clock();
    let rafId = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      if (document.hidden) return;

      const elapsed = clock.getElapsedTime();

      currentMouseX += (targetMouseX - currentMouseX) * 0.06;
      currentMouseY += (targetMouseY - currentMouseY) * 0.06;
      currentScroll += (targetScroll - currentScroll) * 0.075;
      scrollVelocity *= 0.92;

      const motionScale = prefersReducedMotion ? 0.15 : 1;

      if (variant === 'hero') {
        // Choreographed 3D flight path driven by scroll progress
        // Act 1 (0.0 -> 0.25): Center hero hover tilted toward pointer
        // Act 2 (0.25 -> 0.65): Sweeps dynamically to right/left depth orbit & expands rings
        // Act 3 (0.65 -> 1.0): Pulls back into deep cosmic horizon aura
        const s = currentScroll;
        const arcX = Math.sin(s * Math.PI * 1.8) * (isMobile ? 1.1 : 2.8);
        const arcY = Math.cos(s * Math.PI) * 0.35 - s * 0.6;
        const arcZ = -s * 4.2 + Math.sin(s * Math.PI) * 1.4;

        monolithGroup.position.x += (arcX - monolithGroup.position.x) * 0.08;
        monolithGroup.position.y +=
          (arcY + Math.sin(elapsed * 1.4) * 0.16 * motionScale - monolithGroup.position.y) * 0.08;
        monolithGroup.position.z += (arcZ - monolithGroup.position.z) * 0.08;

        // Spin accelerates cleanly with scroll position + velocity
        monolithGroup.rotation.y =
          elapsed * 0.32 * motionScale + s * Math.PI * 2.6 + currentMouseX * 0.42;
        monolithGroup.rotation.x =
          Math.sin(elapsed * 0.8) * 0.12 * motionScale +
          s * 0.65 -
          currentMouseY * 0.32;
        monolithGroup.rotation.z = -0.14 + Math.sin(s * Math.PI * 2) * 0.25;

        // Rings follow monolith and expand outward dramatically during mid-scroll
        ringsGroup.position.copy(monolithGroup.position);
        const ringExpand = 1 + Math.sin(s * Math.PI) * 0.55;
        ringsGroup.scale.setScalar((isMobile ? 0.72 : 1) * ringExpand);
        ring1.rotation.z = elapsed * 0.35 * motionScale + s * 2.2;
        ring2.rotation.y = -elapsed * 0.28 * motionScale - s * 1.8;
        ring3.rotation.z = elapsed * 0.18 * motionScale;

        // Subtle atmospheric fade in deep footer region so foreground cards stay crisp
        const heroOpacity = s > 0.72 ? Math.max(0.28, 1 - (s - 0.72) * 2.4) : 1;
        boltCoreMat.emissiveIntensity = 0.22 * heroOpacity + Math.abs(scrollVelocity) * 0.35;
        boltWireMat.opacity = 0.58 * heroOpacity;
        ring1Mat.opacity = 0.65 * heroOpacity;
        ring2Mat.opacity = 0.42 * heroOpacity;
      } else {
        // Ambient mode on inner routes
        monolithGroup.rotation.y = elapsed * 0.22 * motionScale + currentScroll * Math.PI + currentMouseX * 0.25;
        monolithGroup.rotation.x = -currentMouseY * 0.2;
        ringsGroup.rotation.z = elapsed * 0.15 * motionScale;
      }

      // Orbiting shards respond to both time and scroll depth
      for (let i = 0; i < shards.length; i++) {
        const sh = shards[i];
        const angle = elapsed * sh.speed * motionScale + sh.offset + currentScroll * 3.2;
        const spread = 1 + currentScroll * 0.65;
        sh.mesh.position.set(
          monolithGroup.position.x + Math.cos(angle) * sh.radius * spread,
          monolithGroup.position.y + Math.sin(angle * 1.3) * sh.yAmp,
          monolithGroup.position.z + Math.sin(angle) * sh.radius * 0.75
        );
        sh.mesh.rotation.x = elapsed * 0.8 + i;
        sh.mesh.rotation.y = elapsed * 0.6;
      }

      // Volumetric ember drift + subtle warp stretch on scroll
      particleField.rotation.y = elapsed * 0.03 * motionScale + currentMouseX * 0.08;
      particleField.rotation.x = currentMouseY * 0.06 + currentScroll * 0.25;
      particleField.position.z = currentScroll * 2.6;

      // Dynamic light orbit
      orangeKeyLight.position.x = 4.5 + currentMouseX * 2.5;
      orangeKeyLight.position.y = 3.2 + currentMouseY * 2.0;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      boltGeo.dispose();
      boltWireGeo.dispose();
      boltCoreMat.dispose();
      boltWireMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      shardGeo.dispose();
      shardMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      particleTexture.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [variant]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    />
  );
};
