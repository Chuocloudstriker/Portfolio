import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { CreativeWork } from './sections/CreativeWork';
import { Education } from './sections/Education';
import { Experience } from './sections/Experience';
import { Hero } from './sections/Hero';
import { Process } from './sections/Process';
import { Projects } from './sections/Projects';
import { TechStack } from './sections/TechStack';
import { TechnologyMarquee } from './sections/TechnologyMarquee';
import { SiteLayout } from './layouts/SiteLayout';

export default function App() {
  return (
    <SiteLayout>
      <Hero />
      <About />
      <TechnologyMarquee />
      <TechStack />
      <Education />
      <Projects />
      <Experience />
      <CreativeWork />
      <Process />
      <Contact />
    </SiteLayout>
  );
}
