import Hero from './components/hero';
import Projects from './components/projects';
import Footer from './components/footer';
import Section from './components/section';
import Tools from './components/tools';
import Cards from './components/cards';

export default function Home() {
  return (
    <div>
      <Hero />
      <Section />
      <Tools />
      <Cards/>
      <Projects />
      <Footer />
    </div>
  );
}