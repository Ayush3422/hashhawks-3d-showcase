import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, Phone, MapPin, Send, Github, Twitter, Linkedin } from 'lucide-react'
import { toast } from 'sonner'

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@hashhawks.dev",
    description: "Drop us a line anytime"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-HAWK",
    description: "24/7 support available"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Cyber City, Digital Realm",
    description: "Remote-first team"
  }
]

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" }
]

export const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    toast.success("Message sent! We'll be in touch within 24 hours.")
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-accent blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            INITIATE CONTACT
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to hack the future together? Connect with the HashHawks and let's 
            build something extraordinary that will reshape the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-accent mb-6">CONNECT WITH US</h3>
            
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              >
                <Card className="glass hover:glass-strong transition-all duration-300 p-6 group hover:neon-glow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:from-accent group-hover:to-primary transition-all duration-300">
                      <info.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg group-hover:gradient-text transition-all duration-300">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-1">{info.description}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-6"
            >
              <h4 className="text-lg font-bold mb-4">FOLLOW THE HAWKS</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 rounded-lg glass hover:glass-strong flex items-center justify-center group hover:neon-glow transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5 group-hover:text-primary transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="glass-strong p-8 hover:neon-glow transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 gradient-text">SEND MESSAGE</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="glass border-primary/30 focus:border-primary bg-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="glass border-primary/30 focus:border-primary bg-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground font-medium">
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="glass border-primary/30 focus:border-primary bg-transparent"
                    placeholder="Your company (optional)"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="glass border-primary/30 focus:border-primary bg-transparent resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full glass neon-glow hover:pulse-neon transition-all duration-300 font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  TRANSMIT MESSAGE
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20 p-8 glass rounded-2xl"
        >
          <h3 className="text-3xl font-bold mb-4 gradient-text">EMERGENCY MISSION?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Critical project deadlines? Need immediate cyber reinforcement? 
            Our rapid response team is standing by for urgent missions.
          </p>
          <Button 
            size="lg" 
            variant="outline"
            className="glass border-accent text-accent hover:bg-accent/10 px-8 py-4 font-semibold"
          >
            EMERGENCY CONTACT
          </Button>
        </motion.div>
      </div>
    </section>
  )
}