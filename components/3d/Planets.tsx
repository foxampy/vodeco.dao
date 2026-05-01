'use client';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef, useState } from 'react';
import { Group } from 'three';

const NODES = ['DAO', 'Projects', 'Ecosystem', 'Analytics', 'Whitepaper', 'Staking'];

export function Planets({ progress }: { progress: number }) {
  const group = useRef<Group>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const planets = useMemo(() => NODES.map((name, i) => ({ name, angle: (Math.PI * 2 * i) / NODES.length })), []);

  useFrame((_, d) => {
    if (group.current) group.current.rotation.y += d * 0.2;
  });

  return (
    <group ref={group} visible={progress > 0.01}>
      {planets.map((planet) => (
        <mesh
          key={planet.name}
          position={[Math.cos(planet.angle) * 3.1, Math.sin(planet.angle * 2) * 0.4, Math.sin(planet.angle) * 3.1]}
          scale={hovered === planet.name ? 1.35 : 1}
          onPointerOver={() => setHovered(planet.name)}
          onPointerOut={() => setHovered(null)}
          onClick={() => console.log(`Navigate to: ${planet.name}`)}>
          <sphereGeometry args={[0.17, 20, 20]} />
          <meshStandardMaterial emissive={hovered === planet.name ? '#8cf0ff' : '#2ec1ff'} emissiveIntensity={hovered === planet.name ? 2 : 0.7} color="#7cdfff" transparent opacity={Math.min(0.9, progress * 1.5)} />
        </mesh>
      ))}
    </group>
  );
}
