'use client';
import { useMemo } from 'react';

export function Particles() {
  const points = useMemo(() => {
    const out = new Float32Array(900);
    for (let i = 0; i < 300; i++) {
      out[i * 3] = (Math.random() - 0.5) * 12;
      out[i * 3 + 1] = (Math.random() - 0.5) * 8;
      out[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return out;
  }, []);
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={300} array={points} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#94eaff" transparent opacity={0.55} />
    </points>
  );
}
