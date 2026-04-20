"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Reduce particle count on small/low-dpr screens for performance
function getParticleCount(): number {
  if (typeof window === "undefined") return 2000;
  const isMobile = window.innerWidth < 768;
  const isLowDpr = window.devicePixelRatio < 1.5;
  if (isMobile) return 800;
  if (isLowDpr) return 1500;
  return 2500;
}

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Renderer ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x0a0a12, 1);
    mount.appendChild(renderer.domElement);

    // ── Scene & Camera ────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 120;

    // ── Particles ─────────────────────────────────────────────────────────────
    const PARTICLE_COUNT = getParticleCount();
    const SPREAD = 200;

    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const velocities: number[] = [];
    const colors = new Float32Array(PARTICLE_COUNT * 3);

    // Colour palette: muted blue-white tones
    const palette = [
      new THREE.Color(0x8ba8ff), // blue-white
      new THREE.Color(0x6688ee), // medium blue
      new THREE.Color(0xaabfff), // soft lavender-white
      new THREE.Color(0x3b6ef5), // electric blue (accent)
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * SPREAD;
      const y = (Math.random() - 0.5) * SPREAD;
      const z = (Math.random() - 0.5) * SPREAD;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Gentle random drift velocity
      velocities.push(
        (Math.random() - 0.5) * 0.03,
        (Math.random() - 0.5) * 0.03,
        (Math.random() - 0.5) * 0.015
      );

      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Build a circular disc texture so particles render as circles, not squares.
    const discCanvas = document.createElement("canvas");
    discCanvas.width = 64;
    discCanvas.height = 64;
    const ctx = discCanvas.getContext("2d")!;
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.45, "rgba(255,255,255,0.85)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();
    const discTexture = new THREE.CanvasTexture(discCanvas);

    const particleMat = new THREE.PointsMaterial({
      size: 1.2,
      map: discTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true,
      depthWrite: false,
      alphaTest: 0.01,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ── Connection lines ──────────────────────────────────────────────────────
    // Pre-built as a LineSegments with a dynamic position buffer.
    // We update it each frame for particles within threshold distance.
    const MAX_LINE_PAIRS = 3000;
    const linePositions = new Float32Array(MAX_LINE_PAIRS * 6); // 2 endpoints × 3 coords
    const lineGeo = new THREE.BufferGeometry();
    const linePosAttr = new THREE.BufferAttribute(linePositions, 3);
    linePosAttr.setUsage(THREE.DynamicDrawUsage);
    lineGeo.setAttribute("position", linePosAttr);
    lineGeo.setDrawRange(0, 0);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x3b6ef5,
      transparent: true,
      opacity: 0.12,
      depthWrite: false,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMaterial);
    scene.add(lines);

    // ── Wireframe icosahedron ──────────────────────────────────────────────────
    const icoGeo = new THREE.IcosahedronGeometry(22, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x3b6ef5,
      wireframe: true,
      transparent: true,
      opacity: 0.07,
    });
    const icosahedron = new THREE.Mesh(icoGeo, icoMat);
    icosahedron.position.set(0, 0, -40);
    scene.add(icosahedron);

    // Second, larger, even more subtle ring
    const outerIcoGeo = new THREE.IcosahedronGeometry(40, 1);
    const outerIcoMat = new THREE.MeshBasicMaterial({
      color: 0x3b6ef5,
      wireframe: true,
      transparent: true,
      opacity: 0.03,
    });
    const outerIco = new THREE.Mesh(outerIcoGeo, outerIcoMat);
    outerIco.position.set(0, 0, -60);
    scene.add(outerIco);

    // ── Mouse parallax state ──────────────────────────────────────────────────
    const mouse = { x: 0, y: 0 };
    const targetCameraOffset = { x: 0, y: 0 };
    const currentCameraOffset = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalise to -0.5 → 0.5
      mouse.x = (e.clientX / window.innerWidth - 0.5);
      mouse.y = (e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);

    // ── Resize handler ────────────────────────────────────────────────────────
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // ── Connection-line helper ────────────────────────────────────────────────
    const CONNECTION_THRESHOLD = 28;
    const CONNECTION_THRESHOLD_SQ = CONNECTION_THRESHOLD * CONNECTION_THRESHOLD;

    function updateLines(pos: Float32Array) {
      let lineIndex = 0;

      outer: for (let i = 0; i < PARTICLE_COUNT; i++) {
        const ix = pos[i * 3];
        const iy = pos[i * 3 + 1];
        const iz = pos[i * 3 + 2];

        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          if (lineIndex >= MAX_LINE_PAIRS) break outer;

          const dx = ix - pos[j * 3];
          const dy = iy - pos[j * 3 + 1];
          const dz = iz - pos[j * 3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < CONNECTION_THRESHOLD_SQ) {
            const base = lineIndex * 6;
            linePositions[base] = ix;
            linePositions[base + 1] = iy;
            linePositions[base + 2] = iz;
            linePositions[base + 3] = pos[j * 3];
            linePositions[base + 4] = pos[j * 3 + 1];
            linePositions[base + 5] = pos[j * 3 + 2];
            lineIndex++;
          }
        }
      }

      linePosAttr.needsUpdate = true;
      lineGeo.setDrawRange(0, lineIndex * 2);
    }

    // ── Animation loop ────────────────────────────────────────────────────────
    let frameId: number;
    let frame = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      frame++;

      const pos = particleGeo.attributes.position.array as Float32Array;

      // Move particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        pos[i * 3] += velocities[i * 3];
        pos[i * 3 + 1] += velocities[i * 3 + 1];
        pos[i * 3 + 2] += velocities[i * 3 + 2];

        // Wrap around bounds so particles never leave the volume
        const half = SPREAD / 2;
        if (pos[i * 3] > half) pos[i * 3] = -half;
        else if (pos[i * 3] < -half) pos[i * 3] = half;
        if (pos[i * 3 + 1] > half) pos[i * 3 + 1] = -half;
        else if (pos[i * 3 + 1] < -half) pos[i * 3 + 1] = half;
        if (pos[i * 3 + 2] > half) pos[i * 3 + 2] = -half;
        else if (pos[i * 3 + 2] < -half) pos[i * 3 + 2] = half;
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Update connection lines every 2 frames to save CPU
      if (frame % 2 === 0) {
        updateLines(pos);
      }

      // Rotate icosahedra
      icosahedron.rotation.x += 0.0015;
      icosahedron.rotation.y += 0.002;
      outerIco.rotation.x -= 0.0008;
      outerIco.rotation.y += 0.001;

      // Smooth camera parallax (lerp toward target)
      targetCameraOffset.x = mouse.x * 12;
      targetCameraOffset.y = -mouse.y * 8;
      currentCameraOffset.x += (targetCameraOffset.x - currentCameraOffset.x) * 0.05;
      currentCameraOffset.y += (targetCameraOffset.y - currentCameraOffset.y) * 0.05;
      camera.position.x = currentCameraOffset.x;
      camera.position.y = currentCameraOffset.y;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      // Dispose Three.js objects
      particleGeo.dispose();
      particleMat.dispose();
      discTexture.dispose();
      lineGeo.dispose();
      lineMaterial.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      outerIcoGeo.dispose();
      outerIcoMat.dispose();
      renderer.dispose();

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none", zIndex: 0 }}
    />
  );
}
