import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: "CyberBank Platform",
    category: "FinTech",
    description: "Revolutionary banking platform with real-time fraud detection and 3D data visualization",
    technologies: ["React", "Three.js", "Node.js", "AI/ML"],
    image: "bg-gradient-to-br from-purple-500 to-pink-500",
    featured: true
  },
  {
    title: "NeuroVR Experience", 
    category: "Healthcare",
    description: "Immersive VR therapy platform for mental health treatment with biometric integration",
    technologies: ["WebXR", "Three.js", "Python", "TensorFlow"],
    image: "bg-gradient-to-br from-cyan-500 to-blue-500",
    featured: true
  },
  {
    title: "Quantum Dashboard",
    category: "Enterprise",
    description: "Advanced analytics dashboard for quantum computing research with real-time data streams",
    technologies: ["Next.js", "D3.js", "WebGL", "GraphQL"],
    image: "bg-gradient-to-br from-green-500 to-teal-500",
    featured: false
  },
  {
    title: "Crypto Trading Bot",
    category: "Blockchain",
    description: "AI-powered cryptocurrency trading platform with predictive market analysis",
    technologies: ["React", "Python", "Blockchain", "AI"],
    image: "bg-gradient-to-br from-orange-500 to-red-500",
    featured: false
  },
  {
    title: "MetaSpace Gallery",
    category: "NFT/Web3",
    description: "Virtual art gallery in the metaverse with NFT integration and social features",
    technologies: ["Three.js", "Web3", "Solidity", "IPFS"],
    image: "bg-gradient-to-br from-indigo-500 to-purple-500",
    featured: false
  },
  {
    title: "Smart City IoT",
    category: "IoT",
    description: "Comprehensive IoT management system for smart city infrastructure monitoring",
    technologies: ["React", "IoT", "AWS", "Machine Learning"],
    image: "bg-gradient-to-br from-yellow-500 to-orange-500",
    featured: false
  }
]

export const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-accent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            DIGITAL WARFARE
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Witness our battle-tested solutions that have conquered complex challenges 
            and redefined digital landscapes across multiple industries.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold mb-8 text-accent"
          >
            FEATURED MISSIONS
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              >
                <Card className="glass hover:glass-strong transition-all duration-300 overflow-hidden group hover:neon-glow">
                  <div className={`h-64 ${project.image} relative`}>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                    <div className="absolute top-4 left-4 px-3 py-1 glass-strong rounded-full text-sm font-semibold">
                      {project.category}
                    </div>
                    <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button size="sm" variant="outline" className="glass">
                        <ExternalLink size={16} />
                      </Button>
                      <Button size="sm" variant="outline" className="glass">
                        <Github size={16} />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h4 className="text-2xl font-bold group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl font-bold mb-8 text-accent"
          >
            ADDITIONAL CONQUESTS
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
              >
                <Card className="glass hover:glass-strong transition-all duration-300 overflow-hidden group hover:cyan-glow">
                  <div className={`h-40 ${project.image} relative`}>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                    <div className="absolute top-3 left-3 px-2 py-1 glass-strong rounded-full text-xs font-semibold">
                      {project.category}
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-3">
                    <h5 className="text-lg font-bold group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-accent/20 text-accent border border-accent/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-full bg-muted/20 text-muted-foreground">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold mb-6">Ready to Join Our Portfolio?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create your next legendary project that will be remembered in digital history.
          </p>
          <Button 
            size="lg" 
            className="glass cyan-glow px-12 py-6 text-lg font-semibold hover:pulse-neon transition-all duration-300"
          >
            Start Your Mission
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
