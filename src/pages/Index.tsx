import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Metrics } from '@/components/Metrics';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { IncidentSimulator } from '@/components/IncidentSimulator';
import { Runbooks } from '@/components/Runbooks';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <About />
        <Skills />
        <Projects />
        <IncidentSimulator />
        <Runbooks />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
