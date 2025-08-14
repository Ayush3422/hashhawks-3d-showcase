import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Star, Zap } from 'lucide-react'

const projects = [
  {
    title: "CyberBank Platform",
    category: "FinTech",
    description: "Revolutionary banking platform with real-time fraud detection and 3D data visualization",
    technologies: ["React", "Three.js", "Node.js", "AI/ML"],
    image: "bg-gradient-to-br from-purple-500 to-pink-500",
    featured: true,
    stats: { users: "50K+", uptime: "99.9%", transactions: "1M+" }
  },
  {
    title: "NeuroVR Experience", 
    category: "Healthcare",
    description: "Immersive VR therapy platform for mental health treatment with biometric integration",
    technologies: ["WebXR", "Three.js", "Python", "TensorFlow"],
    image: "bg-gradient-to-br from-cyan-500 to-blue-500",
    featured: true,
    stats: { patients: "10K+", sessions: "100K+", efficacy: "95%" }
  },
  {
    title: "Quantum Dashboard",
    category: "Enterprise",
    description: "Advanced analytics dashboard for quantum computing research with real-time data streams",
    technologies: ["Next.js", "D3.js", "WebGL", "GraphQL"],
    image: "bg-gradient-to-br from-green-500 to-teal-500",
    featured: false,
    stats: { data: "1TB+", queries: "1M+", speed: "10ms" }
  },
  {
    title: "Crypto Trading Bot",
    category: "Blockchain",
    description: "AI-powered cryptocurrency trading platform with predictive market analysis",
    technologies: ["React", "Python", "Blockchain", "AI"],
    image: "bg-gradient-to-br from-orange-500 to-red-500",
    featured: false,
    stats: { trades: "500K+", accuracy: "87%", profit: "340%" }
  },
  {
    title: "MetaSpace Gallery",
    category: "NFT/Web3",
    description: "Virtual art gallery in the metaverse with NFT integration and social features",
    technologies: ["Three.js", "Web3", "Solidity", "IPFS"],
    image: "bg-gradient-to-br from-indigo-500 to-purple-500",
    featured: false,
    stats: { artworks: "5K+", visitors: "25K+", sales: "$2M+" }
  },
  {
    title: "Smart City IoT",
    category: "IoT",
    description: "Comprehensive IoT management system for smart city infrastructure monitoring",
    technologies: ["React", "IoT", "AWS", "Machine Learning"],
    image: "bg-gradient-to-br from-yellow-500 to-orange-500",
    featured: false,
    stats: { sensors: "10K+", cities: "15", efficiency: "+45%" }
  }
]

export const Portfolio = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const { scrollY } = useScroll()
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 3000], [0, -400])
  const y2 = useTransform(scrollY, [0, 3000], [0, 300])
  const rotate = useTransform(scrollY, [0, 3000], [0, 270])
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const smoothY1 = useSpring(y1, springConfig)
  const smoothY2 = useSpring(y2, springConfig)
  const smoothRotate = useSpring(rotate, springConfig)

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden min-h-screen">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          style={{ y: smoothY1, rotateZ: smoothRotate }}
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary via-accent to-primary blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          style={{ y: smoothY2 }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-accent via-primary to-accent blur-3xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        {/* Floating code symbols */}
        <motion.div
          className="absolute top-1/4 right-1/3 text-6xl text-primary/20 font-mono"
          animate={{ 
            rotateZ: [0, 360],
            y: [0, -50, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        >
          {"</>"}
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/3 text-4xl text-accent/20 font-mono"
          animate={{ 
            rotateZ: [360, 0],
            x: [0, 100, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        >
          {"{}"}
        </motion.div>
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
            initial={{ scale: 0.5, rotateX: -90 }}
            animate={isInView ? { scale: 1, rotateX: 0 } : { scale: 0.5, rotateX: -90 }}
            transition={{ duration: 1.5, delay: 0.3, type: "spring", bounce: 0.4 }}
          >
            DIGITAL WARFARE
          </motion.h2>
          <motion.p 
            className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Witness our battle-tested solutions that have conquered complex challenges 
            and redefined digital landscapes across multiple industries.
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-4xl font-bold mb-12 text-accent flex items-center gap-4"
          >
            <Star className="w-8 h-8" />
            FEATURED MISSIONS
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 perspective-1000">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ 
                  opacity: 0, 
                  y: 100,
                  rotateY: index % 2 === 0 ? -45 : 45,
                  z: -200
                }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0,
                  rotateY: 0,
                  z: 0
                } : {
                  opacity: 0, 
                  y: 100,
                  rotateY: index % 2 === 0 ? -45 : 45,
                  z: -200
                }}
                transition={{ 
                  duration: 1.5, 
                  delay: 1 + index * 0.3,
                  type: "spring",
                  bounce: 0.3
                }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: index % 2 === 0 ? 5 : -5,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                className="transform-3d"
              >
                <Card className="glass-strong hover:glass transition-all duration-700 overflow-hidden group relative h-[500px] transform-3d">
                  {/* Project Image/Background */}
                  <div className={`h-80 ${project.image} relative overflow-hidden`}>
                    {/* Animated overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700"
                      animate={{
                        background: [
                          "rgba(0,0,0,0.4)",
                          "rgba(139, 92, 246, 0.2)",
                          "rgba(6, 182, 212, 0.2)",
                          "rgba(0,0,0,0.4)"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    
                    {/* Category Badge */}
                    <motion.div 
                      className="absolute top-6 left-6 px-4 py-2 glass-strong rounded-full text-sm font-semibold border border-primary/30"
                      whileHover={{ scale: 1.1, borderColor: "rgba(139, 92, 246, 0.8)" }}
                    >
                      {project.category}
                    </motion.div>
                    
                    {/* Action Buttons */}
                    <motion.div 
                      className="absolute bottom-6 right-6 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-500"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <Button size="sm" variant="outline" className="glass neon-glow">
                          <ExternalLink size={16} />
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <Button size="sm" variant="outline" className="glass cyan-glow">
                          <Github size={16} />
                        </Button>
                      </motion.div>
                    </motion.div>

                    {/* Floating stats */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex flex-col gap-2">
                        {Object.entries(project.stats).map(([key, value], i) => (
                          <motion.div
                            key={key}
                            className="glass-strong px-3 py-1 rounded-full text-xs font-semibold"
                            initial={{ x: 50, opacity: 0 }}
                            whileHover={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            {value} {key}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 space-y-4 relative z-10">
                    <motion.h4 
                      className="text-3xl font-bold group-hover:gradient-text transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.title}
                    </motion.h4>
                    <motion.p 
                      className="text-muted-foreground leading-relaxed text-lg"
                      whileHover={{ color: "rgba(139, 92, 246, 0.8)" }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.description}
                    </motion.p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition-all duration-300"
                          whileHover={{ 
                            scale: 1.1,
                            borderColor: "rgba(139, 92, 246, 0.8)",
                            boxShadow: "0 0 10px rgba(139, 92, 246, 0.4)"
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ delay: 1.5 + index * 0.3 + techIndex * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Holographic effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-4xl font-bold mb-12 text-accent flex items-center gap-4"
          >
            <Zap className="w-8 h-8" />
            ADDITIONAL CONQUESTS
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ 
                  opacity: 0, 
                  y: 100,
                  rotateX: -30,
                  scale: 0.8
                }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0,
                  rotateX: 0,
                  scale: 1
                } : {
                  opacity: 0, 
                  y: 100,
                  rotateX: -30,
                  scale: 0.8
                }}
                transition={{ 
                  duration: 1, 
                  delay: 1.8 + index * 0.15,
                  type: "spring",
                  bounce: 0.3
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 30,
                  transition: { duration: 0.3 }
                }}
                className="transform-3d"
              >
                <Card className="glass-strong hover:glass transition-all duration-500 overflow-hidden group relative h-96 transform-3d">
                  <div className={`h-48 ${project.image} relative overflow-hidden`}>
                    <motion.div 
                      className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"
                      animate={{
                        background: [
                          "rgba(0,0,0,0.4)",
                          "rgba(6, 182, 212, 0.2)",
                          "rgba(0,0,0,0.4)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute top-4 left-4 px-3 py-1 glass-strong rounded-full text-xs font-semibold"
                      whileHover={{ scale: 1.1 }}
                    >
                      {project.category}
                    </motion.div>
                  </div>
                  
                  <div className="p-6 space-y-3 relative z-10">
                    <motion.h5 
                      className="text-xl font-bold group-hover:gradient-text transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.title}
                    </motion.h5>
                    <motion.p 
                      className="text-sm text-muted-foreground leading-relaxed"
                      whileHover={{ color: "rgba(6, 182, 212, 0.8)" }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.description}
                    </motion.p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-accent/20 text-accent border border-accent/30 hover:bg-accent/30 transition-all duration-300"
                          whileHover={{ 
                            scale: 1.1,
                            boxShadow: "0 0 8px rgba(6, 182, 212, 0.4)"
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-full bg-muted/20 text-muted-foreground">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-60"
                        style={{
                          left: `${30 + i * 25}%`,
                          top: `${40 + i * 15}%`
                        }}
                        animate={{
                          y: [-5, -20, -5],
                          opacity: [0, 0.6, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5
                        }}
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
          transition={{ duration: 1.2, delay: 2.5 }}
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
            <div className="relative z-10">
              <motion.h3 
                className="text-4xl font-bold mb-6 gradient-text"
                whileHover={{ scale: 1.1 }}
              >
                Ready to Join Our Portfolio?
              </motion.h3>
              <motion.p 
                className="text-muted-foreground mb-8 max-w-3xl text-lg leading-relaxed"
                whileHover={{ color: "rgba(139, 92, 246, 0.8)" }}
              >
                Let's create your next legendary project that will be remembered in digital history 
                and dominate your industry.
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="glass cyan-glow px-16 py-8 text-xl font-semibold hover:pulse-neon transition-all duration-300 relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="relative z-10">Start Your Mission</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}