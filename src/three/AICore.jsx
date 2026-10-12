import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function AICore({ isMobile = false }) {
  const outerSphereRef = useRef();
  const innerCoreRef = useRef();
  const ringRef = useRef();
  const secondaryRingRef = useRef();
  const particlesRef = useRef();

  // Particle positions for orbiting neural energy
  const particleCount = isMobile ? 120 : 260;
  const [particlePositions, particleScales] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      // Distribute on sphere surface and outer halo
      const radius = 1.8 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      scales[i] = Math.random() * 0.05 + 0.02;
    }
    return [positions, scales];
  }, [particleCount]);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Smooth rotations with subtle mouse parallax
    if (outerSphereRef.current) {
      outerSphereRef.current.rotation.y += delta * 0.25;
      outerSphereRef.current.rotation.x = Math.sin(time * 0.3) * 0.15;
    }

    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y -= delta * 0.45;
      innerCoreRef.current.rotation.z += delta * 0.2;
      // Pulsing effect
      const scale = 1 + Math.sin(time * 2.5) * 0.06;
      innerCoreRef.current.scale.set(scale, scale, scale);
    }

    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(time * 0.5) * 0.1;
      ringRef.current.rotation.y += delta * 0.35;
    }

    if (secondaryRingRef.current) {
      secondaryRingRef.current.rotation.x = -Math.PI / 4;
      secondaryRingRef.current.rotation.z += delta * 0.2;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.08;
      particlesRef.current.rotation.x += delta * 0.03;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Pulsing Energy Core */}
      <mesh ref={innerCoreRef}>
        <icosahedronGeometry args={[0.9, 3]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00b4d8"
          emissiveIntensity={1.8}
          roughness={0.15}
          metalness={0.8}
          wireframe={true}
        />
      </mesh>

      {/* Solid Inner Glow Sphere */}
      <mesh>
        <sphereGeometry args={[0.65, 32, 32]} />
        <meshStandardMaterial
          color="#0f172a"
          emissive="#8a2be2"
          emissiveIntensity={1.2}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Outer Holographic Geometric Cage */}
      <mesh ref={outerSphereRef}>
        <dodecahedronGeometry args={[1.65, 1]} />
        <meshStandardMaterial
          color="#8a2be2"
          emissive="#6366f1"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.9}
          wireframe={true}
          transparent={true}
          opacity={0.7}
        />
      </mesh>

      {/* Orbiting Quantum Ring 1 */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2.1, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={2.0}
          roughness={0.2}
        />
      </mesh>

      {/* Orbiting Quantum Ring 2 */}
      <mesh ref={secondaryRingRef}>
        <torusGeometry args={[2.35, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#f43f5e"
          emissive="#ec4899"
          emissiveIntensity={1.4}
          roughness={0.2}
        />
      </mesh>

      {/* Orbiting Particles / Neural Nodes */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.065}
          color="#38bdf8"
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}
