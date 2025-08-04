import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { FloatingCube } from './3d/FloatingCube'
import { ParticleSystem } from './3d/ParticleSystem'

interface Scene3DProps {
  className?: string
}

export const Scene3D = ({ className = "" }: Scene3DProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
          
          <FloatingCube position={[-2, 1, 0]} />
          <FloatingCube position={[2, -1, -2]} scale={0.8} />
          <FloatingCube position={[0, 2, -1]} scale={1.2} />
          
          <ParticleSystem />
        </Suspense>
      </Canvas>
    </div>
  )
}