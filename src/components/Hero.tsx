import { motion } from 'framer-motion'
import { Scene3D } from './Scene3D'
import { Button } from '@/components/ui/button'

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Logo/Title with Advanced Animation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.5, delay: 0.3, type: "spring", bounce: 0.4 }}
          >
            <motion.h1 
              className="text-8xl md:text-9xl font-bold gradient-text tracking-wider relative z-10"
              style={{ perspective: "1000px" }}
            >
              {["H", "A", "S", "H", "H", "A", "W", "K", "S"].map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ opacity: 0, y: 100, rotateY: -90 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.5 + index * 0.1,
                    type: "spring",
                    bounce: 0.6
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotateY: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
            
            {/* Animated underline */}
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-2 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "80%" }}
              transition={{ duration: 1.5, delay: 1.5 }}
            />
          </motion.div>
          
          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Elite development team crafting cutting-edge digital experiences 
            with precision, innovation, and cyberpunk aesthetics
          </motion.p>
          
          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
              style={{ perspective: "1000px" }}
            >
              <Button 
                size="lg" 
                className="glass neon-glow px-8 py-6 text-lg font-semibold hover:pulse-neon transition-all duration-300 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative z-10">View Our Work</span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, rotateX: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{ perspective: "1000px" }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="glass cyan-glow px-8 py-6 text-lg font-semibold border-accent hover:bg-accent/10 transition-all duration-300 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0"
                  animate={{ x: ["100%", "-100%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative z-10">Contact Us</span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  )
}