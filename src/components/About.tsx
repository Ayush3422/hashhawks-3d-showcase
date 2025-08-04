import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const teamMembers = [
  {
    name: "Alex 'Cipher' Chen",
    role: "Lead Developer",
    specialty: "Full-Stack Architecture",
    description: "Master of scalable systems and cybersecurity protocols"
  },
  {
    name: "Maya 'Nexus' Rodriguez", 
    role: "UI/UX Designer",
    specialty: "Digital Experiences",
    description: "Crafting intuitive interfaces with futuristic aesthetics"
  },
  {
    name: "Ryan 'Matrix' Johnson",
    role: "3D Specialist",
    specialty: "WebGL & Three.js",
    description: "Bringing digital worlds to life with immersive 3D experiences"
  },
  {
    name: "Zara 'Phoenix' Kim",
    role: "Backend Engineer", 
    specialty: "Cloud Infrastructure",
    description: "Building robust, secure, and lightning-fast server architectures"
  }
]

export const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { scrollProgress } = useScrollAnimation()

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-accent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            MEET THE HAWKS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a collective of digital architects, code warriors, and design visionaries. 
            United by our passion for cutting-edge technology and cyberpunk aesthetics, 
            we transform complex challenges into elegant digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -200 : 200,
                rotateY: index % 2 === 0 ? -45 : 45,
                scale: 0.8
              }}
              animate={isInView ? { 
                opacity: 1, 
                x: 0,
                rotateY: 0,
                scale: 1
              } : {}}
              transition={{ 
                duration: 1.2, 
                delay: index * 0.3,
                type: "spring",
                bounce: 0.4
              }}
              style={{ perspective: "1000px" }}
            >
              <Card className="glass hover:glass-strong transition-all duration-500 p-8 group hover:neon-glow transform-gpu">
                <motion.div
                  className="space-y-4"
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold"
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1,
                        transition: { duration: 0.6 }
                      }}
                    >
                      {member.name.split(' ')[0][0]}
                    </motion.div>
                    <div>
                      <motion.h3 
                        className="text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-300"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: index * 0.3 + 0.5 }}
                      >
                        {member.name}
                      </motion.h3>
                      <motion.p 
                        className="text-primary font-semibold"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: index * 0.3 + 0.7 }}
                      >
                        {member.role}
                      </motion.p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="text-accent font-medium">{member.specialty}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "99%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
            { number: "5+", label: "Years Experience" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}