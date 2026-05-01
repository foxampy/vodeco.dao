'use client';
import { MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export function WaterDrop({ progress }: { progress: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    const pulse = 1 + Math.sin(t * 1.6) * 0.03;
    ref.current.scale.setScalar((0.1 + progress * 1.35) * pulse);
  });

  return (
    <mesh ref={ref} visible={progress > 0.02}>
      <icosahedronGeometry args={[1.2, 5]} />
      <MeshTransmissionMaterial thickness={0.3} roughness={0.1} transmission={1} ior={1.15} chromaticAberration={0.07} backside transparent opacity={Math.min(0.75, progress * 2)} />
    </mesh>
  );
}
