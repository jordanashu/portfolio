import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { AICore } from '../three/AICore';
import { ParticleField } from '../three/ParticleField';

function SceneRig({ mouse }) {
  useFrame((state) => {
    // Subtle camera parallax according to mouse coordinates
    const targetX = (mouse.current.x * 0.7);
    const targetY = (mouse.current.y * 0.4) + 0.3;
    state.camera.position.x += (targetX - state.camera.position.x) * 0.05;
    state.camera.position.y += (targetY - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0.4, 0);
  });
  return null;
}

export function HeroScene({ isMobile }) {
  const mouse = useRef({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mouse.current = { x, y };
  };

  return (
    <div
      className="w-full h-full relative cursor-grab active:cursor-grabbing"
      onPointerMove={handlePointerMove}
    >
      <Canvas
        camera={{ position: [0, 0.4, isMobile ? 5.6 : 4.6], fov: 46 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, isMobile ? 1.5 : 2]}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1.8} color="#00f0ff" />
        <pointLight position={[-4, -4, -2]} intensity={2.4} color="#8a2be2" />
        <pointLight position={[0, 0.5, 0]} intensity={3.0} color="#00f0ff" />

        <SceneRig mouse={mouse} />

        {/* AI Core positioned as holographic backdrop behind the portrait */}
        <group position={[0, 0.5, -0.6]}>
          <Float speed={1.6} rotationIntensity={0.5} floatIntensity={0.7}>
            <AICore isMobile={isMobile} />
          </Float>
        </group>

        <ParticleField count={isMobile ? 80 : 160} />
      </Canvas>
    </div>
  );
}
