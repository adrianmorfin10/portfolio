"use client";

import { useState } from 'react';
import ThemeToggle from './themeToggle';
import LanguageToggle from './languageToggle';

export default function Header() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <header className={`p-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Adrian Morfin</h1>
        <div className="flex space-x-4">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
        </div>
      </div>
    </header>
  );
}