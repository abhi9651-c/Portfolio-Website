import { motion } from "framer-motion";
import { Code2, Database, Layout, Terminal, GitBranch, Cpu } from "lucide-react";

const skills = [
  { name: "HTML5", icon: Layout, color: "#E34F26" },
  { name: "CSS3", icon: Layout, color: "#1572B6" },
  { name: "JavaScript", icon: Code2, color: "#F7DF1E" },
  { name: "React", icon: Code2, color: "#61DAFB" },
  { name: "Node.js", icon: Terminal, color: "#339933" },
  { name: "Bootstrap", icon: Layout, color: "#7952B3" },
  { name: "C / C++", icon: Cpu, color: "#00599C" },
  { name: "SQL", icon: Database, color: "#4479A1" },
  { name: "Git & GitHub", icon: GitBranch, color: "#F05032" },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Technical Skills</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-card border border-border/50 p-6 rounded-xl flex flex-col items-center justify-center hover:border-primary/50 transition-colors shadow-lg hover:shadow-primary/20 group"
            >
              <div className="p-4 rounded-full bg-background/50 mb-4 group-hover:bg-primary/10 transition-colors">
                <skill.icon size={32} style={{ color: skill.color }} />
              </div>
              <h3 className="font-medium text-lg">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
