import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School } from "lucide-react";

const education = [
  {
    school: "Deendayal Upadhyay Gorakhpur University",
    degree: "Undergraduate Studies",
    location: "Gorakhpur, Uttar Pradesh",
    period: "2023 – Present",
    icon: GraduationCap
  },
  {
    school: "Sterling School",
    degree: "12th Grade",
    location: "Babatpur, Uttar Pradesh",
    period: "2021 – 2023",
    icon: BookOpen
  },
  {
    school: "New Cambridge Sr. Sec. School",
    degree: "10th Grade",
    location: "Azamgarh, Uttar Pradesh",
    period: "2019 – 2021",
    icon: School
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Education Journey</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            My academic background and qualifications.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:flex items-center justify-between group">
                {/* Timeline Line (Desktop) */}
                <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2"></div>
                
                {/* Content Left */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-last'}`}>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{edu.school}</h3>
                  <p className="text-primary font-medium mt-1">{edu.degree}</p>
                  <p className="text-muted-foreground text-sm mt-1">{edu.location}</p>
                </div>

                {/* Icon Center */}
                <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center transform md:-translate-x-1/2 z-10 group-hover:scale-110 transition-transform">
                  <edu.icon size={14} className="text-primary" />
                </div>

                {/* Date Right/Left */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                    {edu.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
