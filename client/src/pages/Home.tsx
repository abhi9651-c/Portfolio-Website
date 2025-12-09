import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="py-6 text-center text-muted-foreground border-t border-border/40 text-sm">
        <p>© 2024 Abhishek Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
}
