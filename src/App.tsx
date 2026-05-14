import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { CreativeWork } from './sections/CreativeWork';
import { Experience } from './sections/Experience';
import { Hero } from './sections/Hero';
import { Process } from './sections/Process';
import { Projects } from './sections/Projects';
import { TechStack } from './sections/TechStack';
import { SiteLayout } from './layouts/SiteLayout';

export default function App() {
  return (
    <SiteLayout>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <CreativeWork />
      <Process />
      <Contact />
    </SiteLayout>
  );
}
