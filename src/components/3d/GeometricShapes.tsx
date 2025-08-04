import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, Group } from 'three'
import * as THREE from 'three'

export const GeometricShapes = () => {
  const pyramidRef = useRef<Mesh>(null)
  const prismRef = useRef<Mesh>(null)
  const helixRef = useRef<Group>(null)

  useFrame((state) => {
    const time = state.clock.elapsedTime

    if (pyramidRef.current) {
      pyramidRef.current.rotation.y = time * 0.3
      pyramidRef.current.position.y = Math.sin(time * 0.7) * 0.5
    }

    if (prismRef.current) {
      prismRef.current.rotation.x = time * 0.2
      prismRef.current.rotation.z = time * 0.4
      prismRef.current.position.x = Math.cos(time * 0.5) * 0.3
    }

    if (helixRef.current) {
      helixRef.current.rotation.y = time * 0.5
      helixRef.current.position.z = Math.sin(time * 0.6) * 0.4
    }
  })

  return (
    <group>
      {/* Floating Pyramid */}
      <mesh ref={pyramidRef} position={[3, 2, -2]}>
        <coneGeometry args={[0.6, 1.2, 4]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
          wireframe
        />
      </mesh>

      {/* Rotating Prism */}
      <mesh ref={prismRef} position={[-3, -1, 1]}>
        <cylinderGeometry args={[0.5, 0.5, 1.5, 6]} />
        <meshStandardMaterial
          color="#f97316"
          emissive="#f97316"
          emissiveIntensity={0.3}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Helix Structure */}
      <group ref={helixRef} position={[0, 0, -3]}>
        {Array.from({ length: 8 }, (_, i) => (
          <mesh
            key={i}
            position={[
              Math.cos((i / 8) * Math.PI * 2) * 0.8,
              i * 0.2 - 0.8,
              Math.sin((i / 8) * Math.PI * 2) * 0.8
            ]}
          >
            <sphereGeometry args={[0.1]} />
            <meshStandardMaterial
              color="#ec4899"
              emissive="#ec4899"
              emissiveIntensity={0.4}
            />
          </mesh>
        ))}
      </group>
    </group>
  )
}