"use client";

import { useState } from 'react';
import Hero from './components/hero';
import Projects from './components/projects';
import Footer from './components/footer';
import Section from './components/section';
import Tools from './components/tools';
import Cards from './components/cards';
import Websites from './components/websites';
import Brandings from './components/brandings';
import LoadingAnimation from './components/LoadingAnimation';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <LoadingAnimation onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <>
          <Hero />
          <Section />
          <Tools />
          <Cards />
          <Projects />
          <Websites />
          <Brandings />
          <Footer />
        </>
      )}
    </div>
  );
}