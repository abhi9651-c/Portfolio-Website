import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Abstract Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Welcome to my portfolio</span>
          <h1 className="mt-4 text-5xl md:text-7xl font-heading font-bold tracking-tight">
            Hi, I'm <span className="text-gradient">Abhishek Kumar</span>
          </h1>
          <h2 className="mt-4 text-2xl md:text-3xl text-muted-foreground font-light">
            Web Developer & Tech Enthusiast
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Passionate about building functional and aesthetic web applications. 
            Specializing in React, Node.js, and Modern UI design.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </Button>
          </div>

          <div className="mt-12 flex justify-center space-x-6">
            <a href="https://github.com/abhi9651-c" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-kumar-4745a7289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:abhishekkumar@example.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="text-muted-foreground" size={24} />
        </motion.div>
      </div>
    </section>
  );
}
