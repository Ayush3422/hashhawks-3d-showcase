import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { FloatingOrb } from './3d/FloatingOrbs'
import { GeometricShapes } from './3d/GeometricShapes'
import { ParticleSystem } from './3d/ParticleSystem'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface Scene3DProps {
  className?: string
  intensity?: number
}

export const Scene3D = ({ className = "", intensity = 1 }: Scene3DProps) => {
  const { scrollProgress } = useScrollAnimation()

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3 * intensity} />
          <pointLight 
            position={[10, 10, 10]} 
            intensity={1.2 * intensity} 
            color="#8b5cf6" 
          />
          <pointLight 
            position={[-10, -10, -10]} 
            intensity={0.8 * intensity} 
            color="#06b6d4" 
          />
          <pointLight 
            position={[0, 15, 5]} 
            intensity={0.6 * intensity} 
            color="#f97316" 
          />
          
          <FloatingOrb position={[-2, 1, 0]} color="#8b5cf6" />
          <FloatingOrb position={[2, -1, -2]} scale={0.8} color="#06b6d4" />
          <FloatingOrb position={[0, 2, -1]} scale={1.2} color="#ec4899" />
          <FloatingOrb position={[-1, -2, 1]} scale={0.6} color="#f97316" />
          
          <GeometricShapes />
          <ParticleSystem />
        </Suspense>
      </Canvas>
    </div>
  )
}