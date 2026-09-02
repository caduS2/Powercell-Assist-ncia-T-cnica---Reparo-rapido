import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { RepairShowcase } from './components/RepairShowcase';
import { About } from './components/About';
import { GoogleReviews } from './components/GoogleReviews';
import { InstagramSection } from './components/InstagramSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');

  useEffect(() => {
    const sections = ['inicio', 'servicos', 'sobre', 'avaliacoes', 'instagram', 'contato'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#070c18] text-foreground font-sans selection:bg-amber-400/30 selection:text-amber-300 overflow-x-hidden">
      {/* Skip to Content accessible link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#FFB800] focus:text-black font-bold focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Pular para o conteúdo principal
      </a>

      {/* Fixed Navigation Header */}
      <Header activeSection={activeSection} />

      {/* Main Page Flow */}
      <main id="main-content">
        <Hero />
        <Services />
        <RepairShowcase />
        <About />
        <GoogleReviews />
        <InstagramSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
