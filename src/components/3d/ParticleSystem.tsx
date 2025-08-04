import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointsMaterial } from 'three'
import * as THREE from 'three'

export const ParticleSystem = () => {
  const pointsRef = useRef<Points>(null)
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(5000 * 3)
    
    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    
    return positions
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0005
      pointsRef.current.rotation.y += 0.0005
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={5000}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#06b6d4"
        size={0.02}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}