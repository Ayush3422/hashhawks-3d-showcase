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
        camera={{ position: [0, 0, 12], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          {/* Enhanced lighting setup */}
          <ambientLight intensity={0.4 * intensity} color="#8b5cf6" />
          <pointLight 
            position={[15, 15, 15]} 
            intensity={1.5 * intensity} 
            color="#8b5cf6"
            castShadow
          />
          <pointLight 
            position={[-15, -15, -15]} 
            intensity={1.2 * intensity} 
            color="#06b6d4"
            castShadow
          />
          <pointLight 
            position={[0, 20, 8]} 
            intensity={0.8 * intensity} 
            color="#f97316"
          />
          <spotLight
            position={[0, 30, 0]}
            angle={0.3}
            penumbra={1}
            intensity={0.5 * intensity}
            color="#ec4899"
            castShadow
          />
          
          {/* Enhanced floating orbs with more dynamic positioning */}
          <FloatingOrb position={[-3, 2, -1]} color="#8b5cf6" scale={1.2} />
          <FloatingOrb position={[3, -2, -3]} scale={0.9} color="#06b6d4" />
          <FloatingOrb position={[0, 3, -2]} scale={1.4} color="#ec4899" />
          <FloatingOrb position={[-2, -3, 2]} scale={0.7} color="#f97316" />
          <FloatingOrb position={[4, 1, 1]} scale={1.1} color="#10b981" />
          <FloatingOrb position={[-4, 0, -4]} scale={0.8} color="#f59e0b" />
          
          {/* Multiple geometric shape groups */}
          <GeometricShapes />
          
          {/* Enhanced particle system */}
          <ParticleSystem />
          
          {/* Additional floating elements */}
          <group position={[0, 0, -8]}>
            <FloatingOrb position={[6, 4, 0]} scale={0.6} color="#8b5cf6" />
            <FloatingOrb position={[-6, -4, 0]} scale={0.5} color="#06b6d4" />
          </group>
        </Suspense>
      </Canvas>
    </div>
  )
}