'use client';

interface HeaderProps {
  lang: 'es' | 'en';
  setLang: (lang: 'es' | 'en') => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const toggleLang = () => setLang(lang === 'es' ? 'en' : 'es');

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 flex justify-end pointer-events-none">
      <button
        onClick={toggleLang}
        className="pointer-events-auto bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-colors duration-300 border border-white shadow-lg"
      >
        {lang === 'es' ? 'EN' : 'ES'}
      </button>
    </header>
  );
}