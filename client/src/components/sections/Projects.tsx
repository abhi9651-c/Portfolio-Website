import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing skills, projects, and education. Features responsive design and deployed on GitHub Pages.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    year: "2024",
    links: {
      github: 'https://github.com/abhi9651-c/Portfolio-Website',
      demo: "#"
    }
  },
  {
    title: "QR Code Generator",
    description: "Web app to generate customizable QR codes from user input. Features include download options (PNG/SVG) and a responsive UI for all devices.",
    tech: ["HTML", "CSS", "JavaScript"],
    year: "2023",
    links: {
      github: "https://github.com/abhi9651-c",
      demo: "#"
    }
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Featured Projects</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent development work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50 transition-colors duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl font-bold font-heading">{project.title}</CardTitle>
                    <Badge variant="outline">{project.year}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="bg-secondary/50">{t}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github size={16} /> Code
                    </a>
                  </Button>
                  {/* <Button size="sm" asChild>
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </Button> */}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
