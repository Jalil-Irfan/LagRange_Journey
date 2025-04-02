import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Basic satellite model using Three.js primitives
export default function Satellite(props: any) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  // Rotate the satellite
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      // Add a slight wobble
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05;
    }
  });

  // Change color on hover
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  return (
    <group 
      ref={groupRef} 
      {...props}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Main body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 0.4, 0.4]} />
        <meshStandardMaterial 
          color={hovered ? "#9c59f5" : "#6E2CF4"} 
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Solar panels */}
      <group position={[0, 0, 0]}>
        {/* Left panel */}
        <mesh castShadow receiveShadow position={[-1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.05, 1.5, 0.8]} />
          <meshStandardMaterial 
            color="#00F0FF" 
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>
        {/* Right panel */}
        <mesh castShadow receiveShadow position={[1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.05, 1.5, 0.8]} />
          <meshStandardMaterial 
            color="#00F0FF" 
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>
      </group>

      {/* Antenna */}
      <mesh castShadow position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
        <meshStandardMaterial color="#CCCCCC" />
      </mesh>
      <mesh castShadow position={[0, 0.7, 0]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.5} />
      </mesh>

      {/* Add a point light to make the satellite glow */}
      <pointLight 
        position={[0, 0, 0]} 
        intensity={3} 
        distance={5} 
        color={hovered ? "#9c59f5" : "#6E2CF4"} 
      />
    </group>
  );
}