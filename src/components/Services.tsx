import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Code, Palette, Box, Shield, Smartphone, Globe } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "End-to-end web applications with modern frameworks and cutting-edge architecture",
    features: ["React/Next.js", "Node.js/Python", "Database Design", "API Development"],
    color: "from-purple-500 to-pink-500",
    delay: 0
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Stunning user interfaces that blend aesthetics with seamless user experience",
    features: ["Figma Design", "Prototyping", "User Research", "Design Systems"],
    color: "from-cyan-500 to-blue-500",
    delay: 0.1
  },
  {
    icon: Box,
    title: "3D Web Experiences",
    description: "Immersive 3D websites and applications using Three.js and WebGL",
    features: ["Three.js", "WebGL", "3D Modeling", "Interactive Scenes"],
    color: "from-green-500 to-teal-500",
    delay: 0.2
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Robust security implementations and penetration testing services",
    features: ["Security Audits", "Encryption", "Secure APIs", "Compliance"],
    color: "from-orange-500 to-red-500",
    delay: 0.3
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile applications with native performance",
    features: ["React Native", "Flutter", "iOS/Android", "Progressive Web Apps"],
    color: "from-indigo-500 to-purple-500",
    delay: 0.4
  },
  {
    icon: Globe,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps implementation",
    features: ["AWS/Azure", "Docker", "CI/CD", "Monitoring"],
    color: "from-yellow-500 to-orange-500",
    delay: 0.5
  }
]

export const Services = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const { scrollY } = useScroll()
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 2000], [0, -300])
  const y2 = useTransform(scrollY, [0, 2000], [0, 200])
  const rotate = useTransform(scrollY, [0, 2000], [0, 180])
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const smoothY1 = useSpring(y1, springConfig)
  const smoothY2 = useSpring(y2, springConfig)
  const smoothRotate = useSpring(rotate, springConfig)

  return (
    <section id="services" className="py-32 relative overflow-hidden min-h-screen">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 opacity-15">
        <motion.div 
          style={{ y: smoothY1, rotateZ: smoothRotate }}
          className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-primary via-accent to-primary blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          style={{ y: smoothY2 }}
          className="absolute bottom-1/4 right-10 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-accent via-primary to-accent blur-3xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        {/* Floating geometric elements */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-40 h-40 border border-primary/20"
          animate={{ 
            rotateZ: [0, 360],
            rotateY: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-32 h-32 border border-accent/20 rounded-full"
          animate={{ 
            rotateX: [0, 360],
            x: [0, 100, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-7xl md:text-8xl font-bold gradient-text mb-8 tracking-wider"
            initial={{ scale: 0.5, rotateY: -180 }}
            animate={isInView ? { scale: 1, rotateY: 0 } : { scale: 0.5, rotateY: -180 }}
            transition={{ duration: 1.5, delay: 0.3, type: "spring", bounce: 0.4 }}
          >
            OUR ARSENAL
          </motion.h2>
          <motion.p 
            className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            We wield the latest technologies and methodologies to deliver 
            cutting-edge digital solutions that push the boundaries of what's possible.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-8xl mx-auto perspective-1000">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ 
                opacity: 0, 
                y: 100,
                rotateX: -45,
                z: -200,
                scale: 0.8
              }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
                rotateX: 0,
                z: 0,
                scale: 1
              } : {
                opacity: 0, 
                y: 100,
                rotateX: -45,
                z: -200,
                scale: 0.8
              }}
              transition={{ 
                duration: 1.2, 
                delay: service.delay,
                type: "spring",
                bounce: 0.3
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                rotateX: -5,
                z: 50,
                transition: { duration: 0.3 }
              }}
              className="transform-3d"
            >
              <Card className="glass-strong hover:glass transition-all duration-700 p-8 h-full group relative overflow-hidden transform-3d">
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                  animate={{
                    background: [
                      `linear-gradient(45deg, ${service.color.split(' ')[1]}, ${service.color.split(' ')[3]})`,
                      `linear-gradient(135deg, ${service.color.split(' ')[3]}, ${service.color.split(' ')[1]})`,
                      `linear-gradient(225deg, ${service.color.split(' ')[1]}, ${service.color.split(' ')[3]})`
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                {/* Holographic border */}
                <motion.div 
                  className="absolute inset-0 rounded-lg border border-transparent bg-gradient-to-r from-primary via-accent to-primary bg-clip-border opacity-0 group-hover:opacity-50 transition-opacity duration-700"
                  animate={{
                    background: [
                      "linear-gradient(0deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3))",
                      "linear-gradient(90deg, rgba(6, 182, 212, 0.3), rgba(139, 92, 246, 0.3))",
                      "linear-gradient(180deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3))",
                      "linear-gradient(270deg, rgba(6, 182, 212, 0.3), rgba(139, 92, 246, 0.3))"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <motion.div
                  className="relative z-10 space-y-6 h-full flex flex-col"
                  whileHover={{ z: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <motion.div 
                    className={`flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-br ${service.color} group-hover:from-accent group-hover:to-primary transition-all duration-500 relative overflow-hidden`}
                    whileHover={{ 
                      scale: 1.2,
                      rotateY: 360,
                      boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)"
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Rotating ring */}
                    <motion.div
                      className="absolute inset-0 rounded-xl border-2 border-white/30"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    />
                    <service.icon className="w-10 h-10 text-white relative z-10" />
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    className="text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    {service.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p 
                    className="text-muted-foreground leading-relaxed flex-1"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, color: "rgba(139, 92, 246, 0.8)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={feature} 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: service.delay + 0.1 + featureIndex * 0.1 }}
                        whileHover={{ x: 10, scale: 1.05 }}
                      >
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-accent"
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: featureIndex * 0.3
                          }}
                        />
                        <span className="text-sm text-muted-foreground group-hover:text-accent transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="outline" 
                      className="w-full glass border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 group-hover:neon-glow"
                    >
                      Learn More
                    </Button>
                  </motion.div>

                  {/* Floating particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-60"
                        style={{
                          left: `${20 + i * 20}%`,
                          top: `${30 + i * 15}%`
                        }}
                        animate={{
                          y: [-10, -30, -10],
                          opacity: [0, 0.6, 0],
                          scale: [0, 1.5, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.4
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="text-center mt-24"
        >
          <motion.div
            className="inline-block glass-strong p-12 rounded-3xl border border-primary/30 relative overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 60px rgba(139, 92, 246, 0.4)",
              borderColor: "rgba(139, 92, 246, 0.8)"
            }}
            transition={{ duration: 0.4 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(139, 92, 246, 0.05), rgba(6, 182, 212, 0.05))",
                  "linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(139, 92, 246, 0.05))",
                  "linear-gradient(225deg, rgba(139, 92, 246, 0.05), rgba(6, 182, 212, 0.05))"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="relative z-10">
              <motion.h3 
                className="text-4xl font-bold mb-6 gradient-text"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Ready to Build Something Amazing?
              </motion.h3>
              <motion.p 
                className="text-muted-foreground mb-8 max-w-3xl text-lg leading-relaxed"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                Let's discuss your project and transform your vision into a cutting-edge digital reality 
                that will dominate the digital landscape.
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="glass neon-glow px-16 py-8 text-xl font-semibold hover:pulse-neon transition-all duration-300 relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="relative z-10">Start Your Project</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}