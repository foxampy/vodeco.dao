'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe } from '@/components/3d/Globe';
import { WaterDrop } from '@/components/3d/WaterDrop';
import { Spiral } from '@/components/3d/Spiral';
import { BlockchainGrid } from '@/components/3d/BlockchainGrid';
import { Planets } from '@/components/3d/Planets';
import { Particles } from '@/components/3d/Particles';
import { Header } from '@/components/ui/Header';
import { LeftFeed } from '@/components/ui/LeftFeed';
import { RightPanel } from '@/components/ui/RightPanel';

gsap.registerPlugin(ScrollTrigger);

export function SpatialHome() {
  const shellRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: shellRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.2,
      onUpdate: (self) => setProgress(self.progress)
    });
    return () => trigger.kill();
  }, []);

  return (
    <main ref={shellRef} className="spatial-shell">
      <section className="canvas-wrap">
        <Canvas camera={{ position: [0, 0.4, 6], fov: 46 }}>
          <color attach="background" args={['#0b3b61']} />
          <fog attach="fog" args={['#0b3b61', 4, 14]} />
          <ambientLight intensity={0.4} color="#8ddfff" />
          <directionalLight intensity={1.6} position={[3, 5, 2]} color="#9ce6ff" />
          <spotLight intensity={2} position={[-5, 6, 3]} angle={0.5} penumbra={1} color="#57cfff" />
          <Suspense fallback={null}>
            <group position={[0, (progress - 0.9) * 4, 0]}>
              <Globe progress={Math.max(0, (progress - 0.1) * 2)} />
              <WaterDrop progress={Math.max(0, (progress - 0.3) * 2.4)} />
              <Spiral progress={Math.max(0, (progress - 0.4) * 2.3)} />
              <BlockchainGrid progress={Math.max(0, (progress - 0.5) * 2.3)} />
              <Planets progress={Math.max(0, (progress - 0.6) * 2.5)} />
              <Particles />
            </group>
          </Suspense>
          <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI * 0.62} minPolarAngle={Math.PI * 0.38} rotateSpeed={0.35} />
        </Canvas>

        <div className="overlay-layer">
          <Header visible={progress > 0.22} />
          <LeftFeed visible={progress > 0.72} />
          <RightPanel visible={progress > 0.82} />
          <div className="hint">Scroll to explore</div>
        </div>
      </section>

      <section className="landing-content">
        <h2>VODECO Ecosystem Stream</h2>
        <p>As the spatial core lifts, this section becomes the data-anchored continuation for governance, projects, and analytics modules.</p>
      </section>
    </main>
  );
}
