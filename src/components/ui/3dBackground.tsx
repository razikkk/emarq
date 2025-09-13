"use client";
import * as THREE from "three";
import { useEffect, useRef } from "react";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function ThreeDBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current!;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a102f);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 15);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    // Create "heads"
    const headGeometry = new THREE.SphereGeometry(0.6, 32, 32);
    const materials = [
      new THREE.MeshStandardMaterial({ color: 0xe8c1c5 }),
      new THREE.MeshStandardMaterial({ color: 0xf59e0b }),
      new THREE.MeshStandardMaterial({ color: 0x06b6d4 }),
      new THREE.MeshStandardMaterial({ color: 0x8b5cf6 }),
    ];

    const heads: THREE.Mesh[] = [];
    const cols = 5;
    const rows = 4;
    const spacing = 2;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const material = materials[Math.floor(Math.random() * materials.length)];
        const head = new THREE.Mesh(headGeometry, material);
        head.position.set(
          (j - cols / 2) * spacing,
          (i - rows / 2) * spacing,
          0
        );
        scene.add(head);
        heads.push(head);
      }
    }

    // Cursor interaction
    const mouse = new THREE.Vector2();
    window.addEventListener("mousemove", (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      heads.forEach((head) => {
        // Make heads "look at cursor" in 3D
        head.lookAt(mouse.x * 10, mouse.y * 5, 0);
        // Add floating animation
        head.position.y += Math.sin(clock.getElapsedTime() + head.position.x) * 0.001;
      });

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="w-full h-screen" />;
}
