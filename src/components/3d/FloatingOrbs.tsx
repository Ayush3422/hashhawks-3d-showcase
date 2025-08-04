import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import * as THREE from 'three'

interface FloatingOrbProps {
  position?: [number, number, number]
  scale?: number
  color?: string
}

export const FloatingOrb = ({ 
  position = [0, 0, 0], 
  scale = 1, 
  color = "#8b5cf6" 
}: FloatingOrbProps) => {
  const meshRef = useRef<Mesh>(null)
  const ringRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      // Floating motion
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.3
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.5) * 0.2
      
      // Gentle rotation
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.008
    }

    if (ringRef.current) {
      // Ring rotation
      ringRef.current.rotation.x += 0.01
      ringRef.current.rotation.z += 0.015
    }
  })

  return (
    <group>
      {/* Main Orb */}
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.9}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
      
      {/* Outer Ring */}
      <mesh ref={ringRef} position={position} scale={scale * 1.5}>
        <torusGeometry args={[1, 0.05, 8, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
          wireframe
        />
      </mesh>
    </group>
  )
}