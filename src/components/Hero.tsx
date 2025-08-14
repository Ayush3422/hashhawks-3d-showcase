import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Scene3D } from './Scene3D'
import { Button } from '@/components/ui/button'
import { useRef } from 'react'

export const Hero = () => {
  const containerRef = useRef(null)
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  // Parallax transforms
  const y = useTransform(scrollY, [0, 1000], [0, -500])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 500], [1, 0.8])
  
  // Smooth spring animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const smoothY = useSpring(y, springConfig)
  const smoothOpacity = useSpring(opacity, springConfig)
  const smoothScale = useSpring(scale, springConfig)

  return (
    <motion.section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity: smoothOpacity, scale: smoothScale }}
    >
      {/* Enhanced 3D Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: smoothY }}
      >
        <Scene3D intensity={1.5} />
        
        {/* Additional floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full"
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary rounded-full"
          animate={{
            y: [0, -80, 0],
            opacity: [0, 1, 0],
            scale: [0, 2, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-3 h-3 bg-accent rounded-full"
          animate={{
            y: [0, -120, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </motion.div>
      
      {/* Content */}
      <motion.div 
        className="relative z-10 text-center max-w-6xl mx-auto px-6"
        style={{ y: smoothY }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="space-y-12"
        >
          {/* Enhanced Logo/Title */}
          <motion.div
            className="relative perspective-1000"
            initial={{ opacity: 0, rotateX: -90, z: -200 }}
            animate={{ opacity: 1, rotateX: 0, z: 0 }}
            transition={{ duration: 2, delay: 0.8, type: "spring", bounce: 0.4 }}
          >
            <motion.h1 
              className="text-9xl md:text-[12rem] font-bold gradient-text tracking-wider relative z-10 transform-3d"
              style={{ 
                textShadow: "0 0 50px rgba(139, 92, 246, 0.5)",
                filter: "drop-shadow(0 0 20px rgba(6, 182, 212, 0.3))"
              }}
            >
              {["H", "A", "S", "H", "H", "A", "W", "K", "S"].map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block transform-3d"
                  initial={{ 
                    opacity: 0, 
                    y: 200, 
                    rotateY: -90,
                    rotateX: 45,
                    z: -100
                  }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    rotateY: 0,
                    rotateX: 0,
                    z: 0
                  }}
                  transition={{ 
                    duration: 1.2, 
                    delay: 1 + index * 0.1,
                    type: "spring",
                    bounce: 0.6
                  }}
                  whileHover={{ 
                    scale: 1.3, 
                    rotateY: 360,
                    z: 50,
                    textShadow: "0 0 30px rgba(139, 92, 246, 0.8)",
                    transition: { duration: 0.8 }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
            
            {/* Holographic underline */}
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-3 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "90%", opacity: 1 }}
              transition={{ duration: 2, delay: 2.5 }}
              style={{
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.4)"
              }}
            />
            
            {/* Floating particles around title */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-accent rounded-full"
                  style={{
                    left: `${10 + (i * 8)}%`,
                    top: `${20 + Math.sin(i) * 30}%`
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Enhanced Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="relative"
          >
            <motion.p 
              className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed relative z-10"
              whileHover={{ 
                scale: 1.05,
                color: "rgba(139, 92, 246, 0.8)"
              }}
              transition={{ duration: 0.3 }}
            >
              Elite development team crafting cutting-edge digital experiences 
              with precision, innovation, and cyberpunk aesthetics
            </motion.p>
            
            {/* Glowing border effect */}
            <motion.div
              className="absolute inset-0 rounded-lg border border-primary/20 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2 }}
          >
            <motion.div
              className="relative perspective-1000"
              whileHover={{ 
                scale: 1.1, 
                rotateX: 10,
                z: 30
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Button 
                size="lg" 
                className="glass neon-glow px-12 py-8 text-xl font-semibold relative overflow-hidden group transform-3d"
                style={{
                  boxShadow: "0 0 30px rgba(139, 92, 246, 0.4), inset 0 0 30px rgba(139, 92, 246, 0.1)"
                }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Holographic effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <span className="relative z-10">View Our Work</span>
              </Button>
            </motion.div>
            
            <motion.div
              className="relative perspective-1000"
              whileHover={{ 
                scale: 1.1, 
                rotateX: -10,
                z: 30
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="glass cyan-glow px-12 py-8 text-xl font-semibold border-accent hover:bg-accent/10 relative overflow-hidden group transform-3d"
                style={{
                  boxShadow: "0 0 30px rgba(6, 182, 212, 0.4), inset 0 0 30px rgba(6, 182, 212, 0.1)"
                }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0"
                  animate={{ x: ["100%", "-100%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />
                
                <span className="relative z-10">Contact Us</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating tech icons */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            {["⚡", "🚀", "💎", "🔮", "⭐", "🛡️"].map((icon, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${20 + Math.sin(i * 2) * 40}%`
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <motion.div
          className="relative"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-14 border-2 border-primary rounded-full flex justify-center relative overflow-hidden">
            <motion.div 
              className="w-2 h-4 bg-primary rounded-full mt-3"
              animate={{ 
                y: [0, 20, 0],
                opacity: [1, 0, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Glowing effect */}
            <motion.div
              className="absolute inset-0 border-2 border-primary rounded-full"
              animate={{
                boxShadow: [
                  "0 0 5px rgba(139, 92, 246, 0.5)",
                  "0 0 20px rgba(139, 92, 246, 0.8)",
                  "0 0 5px rgba(139, 92, 246, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          
          <motion.p
            className="text-sm text-muted-foreground mt-3 text-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}