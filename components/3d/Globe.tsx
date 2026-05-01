'use client';

import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useRef } from 'react';
import * as THREE from 'three';

export function Globe({ progress }: { progress: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(TextureLoader, 'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg');

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * (0.08 + progress * 0.12);
  });

  return (
    <mesh ref={meshRef} scale={0.9 + progress * 0.2}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={texture} emissive="#1ca8ff" emissiveIntensity={0.2 + progress * 0.45} roughness={0.6} metalness={0.1} transparent opacity={Math.max(0.18, progress * 1.2)} />
    </mesh>
  );
}
