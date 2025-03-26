"use client";

import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from 'next-themes';
import Particles from './Particles';
import AIElements from './GeometricShapes';

function CameraController() {
  const { camera, mouse } = useThree();
  const cameraRef = useRef(camera);
  
  useEffect(() => {
    const handleMouseMove = () => {
      // Subtle camera movement based on mouse position
      camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [camera, mouse]);
  
  return null;
}

export default function WebGLBackground() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null;
  }
  
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        gl={{ antialias: true, alpha: true, logarithmicDepthBuffer: true }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], fov: 45 }}
        style={{ 
          background: isDark 
            ? 'radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 100%)' 
            : 'radial-gradient(circle at 50% 50%, #dbeafe 0%, #e0f2fe 100%)' 
        }}
      >
        <fog 
          attach="fog" 
          args={[
            isDark ? '#0f172a' : '#e0f2fe',
            15, 
            30
          ]} 
        />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.2} color={isDark ? '#60a5fa' : '#3b82f6'} />
        <pointLight position={[0, 5, 5]} intensity={0.5} color={isDark ? '#a855f7' : '#c084fc'} />
        
        <Suspense fallback={null}>
          <Particles count={1500} />
          <AIElements />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          enableDamping
          dampingFactor={0.05}
        />
        
        <CameraController />
      </Canvas>
    </div>
  );
} 