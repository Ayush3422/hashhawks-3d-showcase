import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const teamMembers = [
  {
    name: "Alex 'Cipher' Chen",
    role: "Lead Developer",
    specialty: "Full-Stack Architecture",
    description: "Master of scalable systems and cybersecurity protocols",
    avatar: "AC",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Maya 'Nexus' Rodriguez", 
    role: "UI/UX Designer",
    specialty: "Digital Experiences",
    description: "Crafting intuitive interfaces with futuristic aesthetics",
    avatar: "MR",
    color: "from-cyan-500 to-blue-500"
  },
  {
    name: "Ryan 'Matrix' Johnson",
    role: "3D Specialist",
    specialty: "WebGL & Three.js",
    description: "Bringing digital worlds to life with immersive 3D experiences",
    avatar: "RJ",
    color: "from-green-500 to-teal-500"
  },
  {
    name: "Zara 'Phoenix' Kim",
    role: "Backend Engineer", 
    specialty: "Cloud Infrastructure",
    description: "Building robust, secure, and lightning-fast server architectures",
    avatar: "ZK",
    color: "from-orange-500 to-red-500"
  }
]

export const About = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  const { scrollY } = useScroll()
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 1000], [0, -200])
  const y2 = useTransform(scrollY, [0, 1000], [0, 100])
  const rotate = useTransform(scrollY, [0, 1000], [0, 360])
  
  // Smooth spring animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const smoothY1 = useSpring(y1, springConfig)
  const smoothY2 = useSpring(y2, springConfig)
  const smoothRotate = useSpring(rotate, springConfig)

  return (
    <section id="about" className="py-32 relative overflow-hidden min-h-screen">
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          style={{ y: smoothY1, rotateZ: smoothRotate }}
          className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-r from-primary via-accent to-primary blur-3xl animate-pulse"
        />
        <motion.div 
          style={{ y: smoothY2 }}
          className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-accent via-primary to-accent blur-3xl animate-pulse"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-32 h-32 border border-primary/30 rotate-45"
          animate={{ 
            rotateZ: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-accent/30 rounded-full"
          animate={{ 
            rotateY: [0, 360],
            x: [0, 50, 0]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-7xl md:text-8xl font-bold gradient-text mb-8 tracking-wider"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring", bounce: 0.4 }}
          >
            MEET THE HAWKS
          </motion.h2>
          <motion.p 
            className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We are a collective of digital architects, code warriors, and design visionaries. 
            United by our passion for cutting-edge technology and cyberpunk aesthetics, 
            we transform complex challenges into elegant digital solutions.
          </motion.p>
        </motion.div>

        {/* 3D Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto perspective-1000">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ 
                opacity: 0, 
                rotateY: index % 2 === 0 ? -90 : 90,
                z: -200,
                scale: 0.5
              }}
              animate={isInView ? { 
                opacity: 1, 
                rotateY: 0,
                z: 0,
                scale: 1
              } : {
                opacity: 0, 
                rotateY: index % 2 === 0 ? -90 : 90,
                z: -200,
                scale: 0.5
              }}
              transition={{ 
                duration: 1.5, 
                delay: index * 0.2,
                type: "spring",
                bounce: 0.3
              }}
              whileHover={{ 
                rotateY: index % 2 === 0 ? 15 : -15,
                rotateX: -10,
                z: 50,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="transform-3d"
            >
              <Card className="glass-strong hover:glass transition-all duration-700 p-8 group relative overflow-hidden h-80 transform-3d">
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                  animate={{
                    background: [
                      `linear-gradient(45deg, ${member.color.split(' ')[1]}, ${member.color.split(' ')[3]})`,
                      `linear-gradient(135deg, ${member.color.split(' ')[3]}, ${member.color.split(' ')[1]})`,
                      `linear-gradient(225deg, ${member.color.split(' ')[1]}, ${member.color.split(' ')[3]})`
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Holographic border effect */}
                <div className="absolute inset-0 rounded-lg border border-transparent bg-gradient-to-r from-primary via-accent to-primary bg-clip-border opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
                
                <motion.div
                  className="relative z-10 h-full flex flex-col justify-between"
                  whileHover={{ z: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Avatar and Header */}
                  <div className="flex items-center space-x-6 mb-6">
                    <motion.div 
                      className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-2xl font-bold shadow-2xl relative overflow-hidden`}
                      whileHover={{ 
                        scale: 1.2,
                        rotateY: 360,
                        boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)"
                      }}
                      transition={{ duration: 0.8 }}
                    >
                      {/* Animated ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white/30"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      />
                      <span className="relative z-10">{member.avatar}</span>
                    </motion.div>
                    
                    <div className="flex-1">
                      <motion.h3 
                        className="text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-500"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                      >
                        {member.name}
                      </motion.h3>
                      <motion.p 
                        className="text-primary font-semibold text-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.2 + 0.7 }}
                      >
                        {member.role}
                      </motion.p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4 flex-1">
                    <motion.div 
                      className="flex items-center space-x-3"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div 
                        className="w-3 h-3 rounded-full bg-accent"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-accent font-medium text-lg">{member.specialty}</span>
                    </motion.div>
                    
                    <motion.p 
                      className="text-muted-foreground leading-relaxed text-base"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.2 + 0.9 }}
                    >
                      {member.description}
                    </motion.p>
                  </div>

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-60"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + i * 10}%`
                        }}
                        animate={{
                          y: [-20, -40, -20],
                          opacity: [0, 0.6, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "50+", label: "Projects Delivered", icon: "🚀" },
            { number: "99%", label: "Client Satisfaction", icon: "⭐" },
            { number: "24/7", label: "Support Available", icon: "🛡️" },
            { number: "5+", label: "Years Experience", icon: "💎" }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-6xl md:text-7xl font-bold gradient-text mb-3 relative"
                initial={{ scale: 0, rotateY: -180 }}
                animate={isInView ? { scale: 1, rotateY: 0 } : { scale: 0, rotateY: -180 }}
                transition={{ duration: 1, delay: 1.4 + index * 0.1, type: "spring", bounce: 0.6 }}
                whileHover={{ 
                  textShadow: "0 0 20px rgba(139, 92, 246, 0.8)",
                  scale: 1.1
                }}
              >
                {stat.number}
                <motion.span
                  className="absolute -top-4 -right-4 text-2xl"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.icon}
                </motion.span>
              </motion.div>
              <motion.p 
                className="text-muted-foreground text-lg group-hover:text-accent transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.6 + index * 0.1 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-center mt-20"
        >
          <motion.div
            className="inline-block glass-strong p-8 rounded-2xl border border-primary/30"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 50px rgba(139, 92, 246, 0.3)",
              borderColor: "rgba(139, 92, 246, 0.8)"
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-3xl font-bold mb-4 gradient-text">Ready to Join Our Mission?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Experience the future of digital innovation with the HashHawks team.
            </p>
            <motion.button
              className="glass neon-glow px-8 py-4 rounded-lg font-semibold text-lg hover:pulse-neon transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect With Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}