import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, Sphere, Ring, Torus } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

export default function AIElements() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // References for animations
  const cpuRef = useRef<THREE.Mesh>(null!);
  const gpuRef = useRef<THREE.Mesh>(null!);
  const neuralNetworkRef = useRef<THREE.Group>(null!);
  const serverRackRef = useRef<THREE.Group>(null!);
  
  // Material properties
  const material = {
    roughness: 0.2,
    metalness: 0.8,
    transmission: 0.9,
    thickness: 0.5,
    ior: 1.5,
    envMapIntensity: 1,
  };
  
  useFrame((state) => {
    const { clock } = state;
    const time = clock.getElapsedTime();
    
    // Animate CPU
    if (cpuRef.current) {
      cpuRef.current.rotation.y = time * 0.15;
      cpuRef.current.position.y = Math.sin(time * 0.2) * 0.3;
    }
    
    // Animate GPU
    if (gpuRef.current) {
      gpuRef.current.rotation.y = time * 0.1;
      gpuRef.current.rotation.x = Math.sin(time * 0.15) * 0.1;
      gpuRef.current.position.y = Math.cos(time * 0.25) * 0.3;
    }
    
    // Animate Neural Network
    if (neuralNetworkRef.current) {
      neuralNetworkRef.current.rotation.y = time * 0.08;
      neuralNetworkRef.current.position.y = Math.sin(time * 0.15) * 0.2;
      
      // Make the nodes pulse
      neuralNetworkRef.current.children.forEach((child, i) => {
        if (child.type === 'Mesh') {
          const scale = 1 + Math.sin(time * 2 + i * 0.5) * 0.1;
          child.scale.set(scale, scale, scale);
        }
      });
    }
    
    // Animate Server Rack
    if (serverRackRef.current) {
      serverRackRef.current.rotation.y = time * 0.05;
      serverRackRef.current.position.y = Math.sin(time * 0.1) * 0.1;
    }
  });
  
  return (
    <>
      {/* CPU Chip */}
      <group position={[-6, 0, -2]} scale={0.7} ref={cpuRef}>
        <Box args={[2, 0.2, 2]}>
          <meshPhysicalMaterial
            {...material}
            color={isDark ? "#60a5fa" : "#3b82f6"} // blue
            emissive={isDark ? "#60a5fa" : "#3b82f6"}
            emissiveIntensity={0.2}
          />
        </Box>
        {/* CPU details */}
        <Box args={[1.8, 0.25, 1.8]} position={[0, 0.2, 0]}>
          <meshPhysicalMaterial
            {...material}
            color={isDark ? "#a855f7" : "#9333ea"} // purple
            emissive={isDark ? "#a855f7" : "#9333ea"}
            emissiveIntensity={0.1}
            roughness={0.5}
          />
        </Box>
        {/* CPU pins */}
        <group position={[0, -0.2, 0]}>
          {Array.from({ length: 8 }).map((_, i) => (
            <group key={i}>
              {Array.from({ length: 8 }).map((_, j) => (
                <Box 
                  key={`${i}-${j}`} 
                  args={[0.1, 0.15, 0.1]} 
                  position={[-0.8 + i * 0.25, -0.1, -0.8 + j * 0.25]}
                >
                  <meshStandardMaterial color="#666" metalness={0.8} roughness={0.2} />
                </Box>
              ))}
            </group>
          ))}
        </group>
      </group>
      
      {/* GPU Card */}
      <group position={[6, 0, -2]} scale={0.7} rotation={[0, Math.PI / 4, 0]} ref={gpuRef}>
        <Box args={[5, 0.2, 2.5]}>
          <meshPhysicalMaterial
            {...material}
            color={isDark ? "#22d3ee" : "#06b6d4"} // cyan
            emissive={isDark ? "#22d3ee" : "#06b6d4"}
            emissiveIntensity={0.2}
          />
        </Box>
        {/* GPU heatsink */}
        <group position={[0, 0.2, 0]}>
          {Array.from({ length: 8 }).map((_, i) => (
            <Box 
              key={i} 
              args={[4.5, 0.4, 0.15]} 
              position={[0, 0.2, -1 + i * 0.3]}
            >
              <meshStandardMaterial color="#999" metalness={0.9} roughness={0.1} />
            </Box>
          ))}
        </group>
        {/* GPU ports */}
        <Box args={[1, 0.5, 0.2]} position={[-1.8, 0, 1.25]}>
          <meshStandardMaterial color="#333" />
        </Box>
        <Box args={[0.8, 0.4, 0.2]} position={[0.5, 0, 1.25]}>
          <meshStandardMaterial color="#333" />
        </Box>
      </group>
      
      {/* Neural Network Representation */}
      <group position={[0, 2, -4]} scale={0.6} ref={neuralNetworkRef}>
        {/* Input layer */}
        {Array.from({ length: 4 }).map((_, i) => (
          <Sphere 
            key={`input-${i}`} 
            args={[0.2, 16, 16]} 
            position={[-2, i * 0.7 - 1.05, 0]}
          >
            <meshPhysicalMaterial
              {...material}
              color={isDark ? "#a855f7" : "#9333ea"} // purple
              emissive={isDark ? "#a855f7" : "#9333ea"}
              emissiveIntensity={0.3}
            />
          </Sphere>
        ))}
        
        {/* Hidden layer 1 */}
        {Array.from({ length: 5 }).map((_, i) => (
          <Sphere 
            key={`hidden1-${i}`} 
            args={[0.2, 16, 16]} 
            position={[0, i * 0.6 - 1.2, 0]}
          >
            <meshPhysicalMaterial
              {...material}
              color={isDark ? "#60a5fa" : "#3b82f6"} // blue
              emissive={isDark ? "#60a5fa" : "#3b82f6"}
              emissiveIntensity={0.3}
            />
          </Sphere>
        ))}
        
        {/* Hidden layer 2 */}
        {Array.from({ length: 5 }).map((_, i) => (
          <Sphere 
            key={`hidden2-${i}`} 
            args={[0.2, 16, 16]} 
            position={[2, i * 0.6 - 1.2, 0]}
          >
            <meshPhysicalMaterial
              {...material}
              color={isDark ? "#22d3ee" : "#06b6d4"} // cyan
              emissive={isDark ? "#22d3ee" : "#06b6d4"}
              emissiveIntensity={0.3}
            />
          </Sphere>
        ))}
        
        {/* Output layer */}
        {Array.from({ length: 3 }).map((_, i) => (
          <Sphere 
            key={`output-${i}`} 
            args={[0.2, 16, 16]} 
            position={[4, i * 0.8 - 0.8, 0]}
          >
            <meshPhysicalMaterial
              {...material}
              color={isDark ? "#ef4444" : "#dc2626"} // red
              emissive={isDark ? "#ef4444" : "#dc2626"}
              emissiveIntensity={0.3}
            />
          </Sphere>
        ))}
        
        {/* Connections (lines between nodes) */}
        {/* These would be implemented with custom line meshes in a real app */}
      </group>
      
      {/* Server Rack */}
      <group position={[0, -2, -3]} scale={0.4} rotation={[0, Math.PI / 6, 0]} ref={serverRackRef}>
        {/* Server rack chassis */}
        <Box args={[4, 6, 2]}>
          <meshStandardMaterial color="#222" metalness={0.7} roughness={0.2} />
        </Box>
        
        {/* Server units */}
        {Array.from({ length: 6 }).map((_, i) => (
          <Box 
            key={`server-${i}`} 
            args={[3.8, 0.8, 1.8]} 
            position={[0, -2.5 + i * 1, 0.15]}
          >
            <meshPhysicalMaterial
              {...material}
              color={i % 2 === 0 ? "#444" : "#333"}
              emissive={isDark ? "#60a5fa" : "#3b82f6"}
              emissiveIntensity={0.05}
            />
          </Box>
        ))}
        
        {/* Indicator lights */}
        {Array.from({ length: 6 }).map((_, i) => (
          <group key={`lights-${i}`} position={[0, -2.5 + i * 1, 0]}>
            <Sphere 
              args={[0.05, 8, 8]} 
              position={[1.7, 0, 1.05]}
            >
              <meshStandardMaterial 
                color={isDark ? "#4ade80" : "#22c55e"} 
                emissive={isDark ? "#4ade80" : "#22c55e"}
                emissiveIntensity={0.8}
              />
            </Sphere>
            <Sphere 
              args={[0.05, 8, 8]} 
              position={[1.5, 0, 1.05]}
            >
              <meshStandardMaterial 
                color={i % 3 === 0 ? "#f59e0b" : "#4ade80"} 
                emissive={i % 3 === 0 ? "#f59e0b" : "#4ade80"}
                emissiveIntensity={0.8}
              />
            </Sphere>
          </group>
        ))}
      </group>
    </>
  );
} 