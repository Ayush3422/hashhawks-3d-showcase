import { motion } from 'framer-motion'
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
    features: ["React/Next.js", "Node.js/Python", "Database Design", "API Development"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Stunning user interfaces that blend aesthetics with seamless user experience",
    features: ["Figma Design", "Prototyping", "User Research", "Design Systems"]
  },
  {
    icon: Box,
    title: "3D Web Experiences",
    description: "Immersive 3D websites and applications using Three.js and WebGL",
    features: ["Three.js", "WebGL", "3D Modeling", "Interactive Scenes"]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Robust security implementations and penetration testing services",
    features: ["Security Audits", "Encryption", "Secure APIs", "Compliance"]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile applications with native performance",
    features: ["React Native", "Flutter", "iOS/Android", "Progressive Web Apps"]
  },
  {
    icon: Globe,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps implementation",
    features: ["AWS/Azure", "Docker", "CI/CD", "Monitoring"]
  }
]

export const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-primary blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-accent blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            OUR ARSENAL
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We wield the latest technologies and methodologies to deliver 
            cutting-edge digital solutions that push the boundaries of what's possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="glass hover:glass-strong transition-all duration-300 p-8 h-full group hover:neon-glow">
                <motion.div
                  className="space-y-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent group-hover:from-accent group-hover:to-primary transition-all duration-300">
                    <service.icon className="w-8 h-8 text-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="outline" 
                    className="w-full glass border-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold mb-6">Ready to Build Something Amazing?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and transform your vision into a cutting-edge digital reality.
          </p>
          <Button 
            size="lg" 
            className="glass neon-glow px-12 py-6 text-lg font-semibold hover:pulse-neon transition-all duration-300"
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  )
}