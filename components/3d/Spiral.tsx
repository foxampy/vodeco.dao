'use client';
import { Line } from '@react-three/drei';
import { useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group, Vector3 } from 'three';
import { useRef } from 'react';

export function Spiral({ progress }: { progress: number }) {
  const group = useRef<Group>(null);
  const points = useMemo(() => {
    const data: Vector3[] = [];
    for (let i = 0; i < 220; i++) {
      const a = i * 0.18;
      const r = 1.75 + i * 0.003;
      data.push(new Vector3(Math.cos(a) * r, (i - 110) * 0.02, Math.sin(a) * r));
    }
    return data;
  }, []);

  useFrame((_, d) => {
    if (!group.current) return;
    group.current.rotation.y += d * (0.22 + progress * 0.5);
  });

  return (
    <group ref={group} visible={progress > 0.01}>
      <Line points={points} color="#66d7ff" lineWidth={1.2} transparent opacity={Math.min(0.65, progress * 2)} />
    </group>
  );
}
