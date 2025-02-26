"use client";

import React from 'react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button onClick={toggleTheme} className="p-2 rounded-full focus:outline-none">
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
}