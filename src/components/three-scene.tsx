"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeSceneProps {
    backgroundColor?: number;
    objectColor?: number;
}

export default function ThreeScene({ backgroundColor = 0x000000, objectColor = '#1CDEFF' }: ThreeSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(backgroundColor, 0.015);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 25;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setClearColor(backgroundColor, 1);
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    currentMount.appendChild(renderer.domElement);

    // Objects Group
    const objectsGroup = new THREE.Group();
    scene.add(objectsGroup);

    // Main Object Material
    const mainMaterial = new THREE.MeshPhysicalMaterial({
      color: objectColor,
      metalness: 0.2,
      roughness: 0.05,
      transmission: 0.9,
      thickness: 1.5,
      ior: 1.5,
      emissive: new THREE.Color(objectColor).multiplyScalar(0.5),
      emissiveIntensity: 0.1,
      sheen: 1.0,
      sheenColor: new THREE.Color(0xffffff),
      sheenRoughness: 0.3,
      clearcoat: 1.0,
      clearcoatRoughness: 0.2
    });

    const secondMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xff4da6, // accent color
      metalness: 0.5,
      roughness: 0.2,
      emissive: new THREE.Color(0xff4da6),
      emissiveIntensity: 0.2,
      sheen: 0.8,
      sheenColor: new THREE.Color(0xffffff),
    });
    
    const mainObject = new THREE.Mesh(new THREE.TorusKnotGeometry(4, 1.2, 256, 32), mainMaterial);
    objectsGroup.add(mainObject);

    const smallObjectsCount = 20;
    for(let i = 0; i < smallObjectsCount; i++) {
        const geometry = Math.random() > 0.5 ? new THREE.IcosahedronGeometry(1, 0) : new THREE.TorusGeometry(0.6, 0.25, 24, 100);
        const material = Math.random() > 0.5 ? mainMaterial : secondMaterial;
        const mesh = new THREE.Mesh(geometry, material);

        const angle = Math.random() * Math.PI * 2;
        const radius = 8 + Math.random() * 8;
        const yPos = (Math.random() - 0.5) * 12;

        mesh.position.set(Math.cos(angle) * radius, yPos, Math.sin(angle) * radius);
        mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        mesh.scale.setScalar(Math.random() * 0.4 + 0.2);

        objectsGroup.add(mesh);
    }

    // Particles
    const particlesCount = 20000;
    const positions = new Float32Array(particlesCount * 3);
    const velocities = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 100;
        positions[i3 + 1] = (Math.random() - 0.5) * 100;
        positions[i3 + 2] = (Math.random() - 0.5) * 100;

        velocities[i3] = (Math.random() - 0.5) * 0.02;
        velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
        velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));


    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.03,
        color: 0xffffff,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Starfield
    const starCount = 2000;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
        starPositions[i] = (Math.random() - 0.5) * 150;
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
        size: 0.1,
        color: 0xaaaaaa,
        transparent: true,
        opacity: 0.5
    });
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);


    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.1));

    const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
    directionalLight.position.set(2, 2, 2).normalize();
    scene.add(directionalLight);

    const backlight = new THREE.DirectionalLight(objectColor, 4);
    backlight.position.set(-3, -2, -4).normalize();
    scene.add(backlight);
    
    const pLight1 = new THREE.PointLight(objectColor, 150, 80);
    scene.add(pLight1);
    
    const pLight2 = new THREE.PointLight(0xff4da6, 150, 80);
    scene.add(pLight2);


    // Animation
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    document.addEventListener('mousemove', handleMouseMove);


    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      const particlePositions = particlesGeometry.attributes.position.array as Float32Array;
      const particleVelocities = particlesGeometry.attributes.velocity.array as Float32Array;
      for(let i=0; i < particlesCount; i++) {
          const i3 = i * 3;
          particlePositions[i3] += particleVelocities[i3];
          particlePositions[i3+1] += particleVelocities[i3+1];
          particlePositions[i3+2] += particleVelocities[i3+2];

          if(Math.abs(particlePositions[i3+1]) > 50) {
              particlePositions[i3+1] = (Math.random() - 0.5) * 100;
          }
      }
      particlesGeometry.attributes.position.needsUpdate = true;


      objectsGroup.rotation.y = .1 * elapsedTime;
      objectsGroup.rotation.x = .05 * elapsedTime;
      objectsGroup.rotation.z = .03 * elapsedTime;

      particlesMesh.rotation.y = -.02 * elapsedTime;
      starField.rotation.y = -0.005 * elapsedTime;

      pLight1.position.x = Math.sin(elapsedTime * 0.5) * 20;
      pLight1.position.y = Math.cos(elapsedTime * 0.3) * 20;
      pLight1.position.z = Math.cos(elapsedTime * 0.4) * 20;
      
      pLight2.position.x = Math.cos(elapsedTime * 0.2) * 25;
      pLight2.position.y = Math.sin(elapsedTime * 0.4) * 25;
      pLight2.position.z = Math.sin(elapsedTime * 0.6) * 25;


      // Animate camera
      camera.position.x += (mouseX * 8 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 8 - camera.position.y) * 0.05;
      camera.position.z = 25 + Math.sin(elapsedTime * 0.2) * 2;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!currentMount) return;
      const { clientWidth, clientHeight } = currentMount;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    const currentRef = mountRef.current;

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      if (currentRef && renderer.domElement.parentNode === currentRef) {
        currentRef.removeChild(renderer.domElement);
      }
      renderer.dispose();
      mainMaterial.dispose();
      secondMaterial.dispose();
      objectsGroup.children.forEach(child => {
          if (child instanceof THREE.Mesh) {
              child.geometry.dispose();
          }
      });
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
    };
  }, [backgroundColor, objectColor]);

  return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full" />;
}
