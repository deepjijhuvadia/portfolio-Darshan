import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

interface ParticlesProps {
  count?: number;
}

export default function Particles({ count = 2000 }: ParticlesProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const points = useRef<THREE.Points>(null!);
  
  const particleColors = useMemo(() => {
    const colors = [
      new THREE.Color('#60a5fa'), // blue-400
      new THREE.Color('#3b82f6'), // blue-500
      new THREE.Color('#22d3ee'), // cyan-400
      new THREE.Color('#a855f7'), // purple-500
    ];
    
    return colors;
  }, []);
  
  // Generate random positions for particles
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Create a sphere of particles
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = Math.random() * 10 + 5;
      
      positions[i3] = Math.sin(phi) * Math.cos(theta) * radius;
      positions[i3 + 1] = Math.sin(phi) * Math.sin(theta) * radius;
      positions[i3 + 2] = Math.cos(phi) * radius;
      
      scales[i] = Math.random() * 1.5 + 0.5;
    }
    
    return { positions, scales };
  }, [count]);
  
  useFrame((state) => {
    const { clock } = state;
    const time = clock.getElapsedTime() * 0.2;
    
    // Rotate points
    points.current.rotation.x = Math.sin(time * 0.2) * 0.1;
    points.current.rotation.y = Math.sin(time * 0.1) * 0.1;
    
    // Apply gentle wave motion to particles
    const positions = points.current.geometry.attributes.position.array as Float32Array;
    const initialPositions = particlesPosition.positions;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Add slight oscillation based on particle's position and time
      positions[i3] = initialPositions[i3] + Math.sin(time + i * 0.01) * 0.2;
      positions[i3 + 1] = initialPositions[i3 + 1] + Math.cos(time + i * 0.01) * 0.2;
      positions[i3 + 2] = initialPositions[i3 + 2] + Math.sin(time + i * 0.01) * 0.2;
    }
    
    points.current.geometry.attributes.position.needsUpdate = true;
  });
  
  return (
    <Points ref={points} positions={particlesPosition.positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.15}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        color={isDark ? '#60a5fa' : '#3b82f6'}
      />
    </Points>
  );
} 