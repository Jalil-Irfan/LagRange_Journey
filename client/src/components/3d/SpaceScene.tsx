import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';

// Simplified space scene with just stars and lighting
function SpaceBackground() {
  return (
    <>
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
    </>
  );
}

interface SpaceSceneProps {
  onSatelliteClick?: () => void;
}

export default function SpaceScene({ onSatelliteClick }: SpaceSceneProps) {
  return (
    <div className="absolute inset-0 -z-10 h-screen">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <Suspense fallback={null}>
          <SpaceBackground />
          <mesh position={[0, 0, 0]} onClick={onSatelliteClick}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#6E2CF4" />
          </mesh>
          <OrbitControls 
            enablePan={false} 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}