"use client";

import React from 'react';

interface LanguageToggleProps {
  language: 'es' | 'en';
  toggleLanguage: () => void;
}

export default function LanguageToggle({ language, toggleLanguage }: LanguageToggleProps) {
  return (
    <button onClick={toggleLanguage} className="p-2 rounded-full focus:outline-none">
      {language === 'es' ? '🇪🇸' : '🇺🇸'}
    </button>
  );
}