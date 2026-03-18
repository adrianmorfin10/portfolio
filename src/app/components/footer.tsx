'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

interface FooterProps {
  lang: 'es' | 'en';
}

export default function Footer({ lang }: FooterProps) {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (footerRef.current && !isMobile) {
        const footerRect = footerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - footerRect.left,
          y: e.clientY - footerRect.top
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile && footerRef.current) {
      const footerRect = footerRef.current.getBoundingClientRect();
      setMousePos({ x: footerRect.width / 2, y: footerRect.height / 2 });
    }
  }, [isMobile]);

  const openWhatsApp = () => {
    const phoneNumber = '525532059514';
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="relative bg-[#000000] flex justify-center items-center min-h-[600px]">
      <footer
        ref={footerRef}
        className="bg-black rounded-2xl p-12 text-center mt-10 relative overflow-hidden w-full max-w-5xl flex flex-col justify-between min-h-[500px]"
      >
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Image src="/layer.png" alt="Letters" className="w-full h-full object-cover" width={1200} height={800} />
        </div>
        <div className="absolute w-[5000px] h-[5000px] top-0 left-0 pointer-events-none z-0">
          <Image
            src="/luna.png"
            alt="Light"
            className="absolute w-[500px] h-[500px] opacity-50 blur-2xl"
            width={500}
            height={500}
            style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px`, transform: 'translate(-50%, -50%)', zIndex: 5 }}
          />
        </div>
        <div className="relative z-20 flex flex-col md:flex-row items-center justify-between mt-auto space-y-6 md:space-y-0 pb-0">
          <button
            onClick={openWhatsApp}
            className="bg-black text-[white] px-6 py-3 rounded-full text-lg font-semibold transition duration-300 hover:bg-white hover:text-black"
          >
            {lang === 'es' ? 'Diseña tu futuro' : 'Design your future'}
          </button>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=100086632694397" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-black rounded-full hover:bg-blue-500 transition duration-300">
              <FaFacebook className="text-white text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/ignacio-adrian-morfin-sanchez-718280207/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-black rounded-full hover:bg-blue-500 transition duration-300">
              <FaLinkedin className="text-white text-2xl" />
            </a>
            <a href="https://www.instagram.com/uxui.adrian" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-black rounded-full hover:bg-blue-500 transition duration-300">
              <FaInstagram className="text-white text-2xl" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 Adrian Morfin. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  );
}