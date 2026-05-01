'use client';
import { useLayoutEffect, useMemo, useRef } from 'react';
import { InstancedMesh, Matrix4, Object3D } from 'three';

export function BlockchainGrid({ progress }: { progress: number }) {
  const ref = useRef<InstancedMesh>(null);
  const items = useMemo(() => {
    const arr: Array<[number, number, number]> = [];
    for (let y = -3; y <= 3; y++) {
      for (let x = -5; x <= 5; x++) {
        const offset = (y % 2) * 0.26;
        arr.push([x * 0.52 + offset, y * 0.45, -2.4]);
        arr.push([x * 0.52 + offset, y * 0.45, 2.4]);
      }
    }
    return arr;
  }, []);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const dummy = new Object3D();
    const m = new Matrix4();
    items.forEach((pos, i) => {
      dummy.position.set(pos[0], pos[1], pos[2]);
      dummy.updateMatrix();
      m.copy(dummy.matrix);
      ref.current?.setMatrixAt(i, m);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  }, [items]);

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, items.length]}>
      <ringGeometry args={[0.07, 0.1, 6]} />
      <meshBasicMaterial color="#79e8ff" transparent opacity={Math.min(progress * 0.35, 0.28)} />
    </instancedMesh>
  );
}
