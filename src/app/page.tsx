import Hero from './components/hero';
import Projects from './components/projects';
import Footer from './components/footer';
import Section from './components/section';

export default function Home() {
  return (
    <div>
      <Hero />
      <Section />
      <Projects />
      <Footer />
    </div>
  );
}