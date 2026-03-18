"use client";

import { useState } from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Projects from './components/projects';
import Footer from './components/footer';
import Section from './components/section';
import Tools from './components/tools';
import Websites from './components/websites';
import LoadingAnimation from './components/LoadingAnimation';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState<'es' | 'en'>('es');

  return (
    <div>
      <LoadingAnimation onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <>
          <Header lang={lang} setLang={setLang} />
          <Hero lang={lang} />
          <Section lang={lang} />
          <Tools lang={lang} />
          <Projects lang={lang} />
          <Websites lang={lang} />
          <Footer lang={lang} />
        </>
      )}
    </div>
  );
}