"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { cn } from "@/lib/utils";

interface InteractiveObjectProps {
    className?: string;
    objectType?: 'torusKnot' | 'icosahedron' | 'sphereCluster' | 'dodecahedron';
    objectColor?: string;
}

const InteractiveObject = ({ className, objectType = 'torusKnot', objectColor = '#1CDEFF' }: InteractiveObjectProps) => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentMount = mountRef.current;
        if (!currentMount) return;

        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        camera.position.set(0, 1.5, 6);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.0;
        currentMount.appendChild(renderer.domElement);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.03;
        controls.enableZoom = true;
        controls.minDistance = 3;
        controls.maxDistance = 10;
        controls.enablePan = false;
        controls.minPolarAngle = Math.PI / 4;
        controls.maxPolarAngle = Math.PI * (3/4);
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;
        controls.target.set(0, 1, 0);

        // Object
        const material = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(objectColor).convertSRGBToLinear(),
            metalness: 0.1,
            roughness: 0,
            transmission: 1.0,
            thickness: 2.0,
            ior: 2.4, // Index of refraction closer to diamond
            emissive: objectColor,
            emissiveIntensity: 0.25,
            specularIntensity: 1.0,
            specularColor: new THREE.Color(0xffffff),
            sheen: 1.0,
            sheenColor: new THREE.Color(0xffffff),
            sheenRoughness: 0.25,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
        });

        let object: THREE.Mesh | THREE.Group;
        switch (objectType) {
            case 'icosahedron':
                object = new THREE.Mesh(new THREE.IcosahedronGeometry(1.5, 1), material);
                break;
            case 'dodecahedron':
                object = new THREE.Mesh(new THREE.DodecahedronGeometry(1.5, 1), material);
                break;
            case 'sphereCluster':
                object = new THREE.Group();
                const mainSphere = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 64), material);
                mainSphere.castShadow = true;
                mainSphere.receiveShadow = true;
                (object as THREE.Group).add(mainSphere);
                for(let i=0; i<5; i++) {
                    const smallSphere = new THREE.Mesh(new THREE.SphereGeometry(0.3, 32, 32), material);
                    const phi = Math.random() * Math.PI * 2;
                    const theta = Math.random() * Math.PI;
                    smallSphere.position.setFromSphericalCoords(1.3, phi, theta);
                    smallSphere.castShadow = true;
                    smallSphere.receiveShadow = true;
                    (object as THREE.Group).add(smallSphere);
                }
                break;
            case 'torusKnot':
            default:
                object = new THREE.Mesh(new THREE.TorusKnotGeometry(1, 0.4, 256, 32), material);
                break;
        }
        
        if (object instanceof THREE.Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;
        }
        object.position.y = 1.2;
        scene.add(object);

        // Ground for shadows & reflections
        const ground = new THREE.Mesh(
            new THREE.PlaneGeometry(20, 20),
            new THREE.MeshStandardMaterial({
              color: 0x444444,
              metalness: 0.9,
              roughness: 0.2,
            })
        );
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        scene.add(ground);

        // Lights
        scene.add(new THREE.AmbientLight(0xffffff, 0.2));
        const spotLight = new THREE.SpotLight(0xffffff, 50, 50, Math.PI / 6, 0.5, 1);
        spotLight.position.set(5, 15, 5);
        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 4096;
        spotLight.shadow.mapSize.height = 4096;
        spotLight.shadow.bias = -0.0001;
        spotLight.shadow.camera.near = 0.5;
        spotLight.shadow.camera.far = 100;
        scene.add(spotLight);
        
        const keyLight = new THREE.PointLight(objectColor, 50);
        keyLight.position.set(-4, 3, 5);
        scene.add(keyLight);
        
        const fillLight = new THREE.PointLight(0x00ffff, 40);
        fillLight.position.set(4, 2, -4);
        scene.add(fillLight);


        // Post-processing
        const composer = new EffectComposer(renderer);
        const renderPass = new RenderPass(scene, camera);
        composer.addPass(renderPass);
        
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(currentMount.clientWidth, currentMount.clientHeight),
            0.3, // strength
            0.5, // radius
            0.1 // threshold
        );
        composer.addPass(bloomPass);

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            composer.render();
        };
        animate();

        // Handle resize
        const handleResize = () => {
            if (!currentMount) return;
            const { clientWidth, clientHeight } = currentMount;
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(clientWidth, clientHeight);
            composer.setSize(clientWidth, clientHeight);
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        const currentRef = mountRef.current;

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (currentRef && renderer.domElement.parentNode === currentRef) {
                currentRef.removeChild(renderer.domElement);
            }
            composer.dispose();
            renderer.dispose();
            material.dispose();
            if(object instanceof THREE.Mesh) {
                if (object.geometry) object.geometry.dispose();
            } else if (object instanceof THREE.Group) {
                 object.children.forEach(child => {
                    if (child instanceof THREE.Mesh && child.geometry) {
                        child.geometry.dispose();
                    }
                });
            }
            ground.geometry.dispose();
            (ground.material as THREE.Material).dispose();
        };
    }, [objectType, objectColor]);

    return <div ref={mountRef} className={cn("w-full h-full", className)} />;
}

export default InteractiveObject;
