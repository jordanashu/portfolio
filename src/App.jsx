import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useMediaQuery } from './hooks/useMediaQuery';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const cursorRef = useRef();
  const heroPanelRef = useRef();
  const contentBodyRef = useRef();
  const contactPanelRef = useRef();
  const certsPanelRef = useRef();

  // Initialize Lenis smooth scroll and connect to GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    // Expose lenis instance to window for global access
    window.lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  // Pinned panels with overscroll effect specifically on Hero and Contact
  useEffect(() => {
    if (isMobile) return;

    const ctx = gsap.context(() => {
      // 1. Hero Pinned Panel with Overscroll Effect
      // Hero pins at the top while the incoming Experience/Projects flow over it
      if (heroPanelRef.current && contentBodyRef.current) {
        ScrollTrigger.create({
          trigger: heroPanelRef.current,
          start: 'top top',
          endTrigger: contentBodyRef.current,
          end: 'top top',
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        });

        // Overscroll scale down and subtle depth blur as Experience slides over Hero
        gsap.to(heroPanelRef.current, {
          scale: 0.92,
          opacity: 0.35,
          filter: 'blur(4px)',
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: contentBodyRef.current,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          }
        });
      }

      // 2. Contact Pinned Panel with Overscroll Reveal
      // As Certifications ends, the Contact panel reveals with overscroll depth
      if (contactPanelRef.current && certsPanelRef.current) {
        gsap.fromTo(
          contactPanelRef.current,
          {
            scale: 0.94,
            opacity: 0.8,
          },
          {
            scale: 1,
            opacity: 1,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: contactPanelRef.current,
              start: 'top 90%',
              end: 'top 30%',
              scrub: true,
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, [isMobile, isLoading]);

  // Custom glow cursor tracker on desktop
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Section observer for active navbar indicator
  useEffect(() => {
    const sections = ['hero', 'experience', 'projects', 'skills', 'certifications', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#05070f] text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* GSAP-Style Interactive Preloader */}
      {isLoading && (
        <Loader onComplete={() => setIsLoading(false)} />
      )}

      {/* Custom Desktop Glowing Cursor Tracker */}
      {!isMobile && (
        <div
          ref={cursorRef}
          className="custom-cursor fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 -ml-4 -mt-4 transition-transform duration-75 ease-out"
        >
          <div className="w-full h-full rounded-full border border-cyan-400/50 bg-cyan-400/10 shadow-[0_0_15px_rgba(0,240,255,0.4)]" />
        </div>
      )}

      {/* Floating Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main className="relative w-full">
        
        {/* SECTION 1: HERO (Pinned panel with overscroll effect) */}
        <div
          ref={heroPanelRef}
          className="relative z-10 w-full min-h-screen bg-[#05070f] will-change-transform shadow-[0_30px_60px_rgba(0,0,0,0.9)]"
        >
          <Hero isMobile={isMobile} />
        </div>

        {/* MIDDLE CONTENT BODY (Experience, Projects, Skills, Certifications) */}
        {/* Slides gracefully over the pinned Hero section with high z-index and elevation shadow */}
        <div
          ref={contentBodyRef}
          className="relative z-20 w-full bg-[#05070f] shadow-[0_-25px_60px_rgba(0,0,0,0.95)] border-t border-white/10"
        >
          {/* Section 2: Experience & Education */}
          <Experience />

          {/* Section 3: Projects Showcase */}
          <Projects />

          {/* Section 4: Skills Matrix */}
          <Skills />

          {/* Section 5: Certifications & Accreditations */}
          <div ref={certsPanelRef}>
            <Certifications />
          </div>
        </div>

        {/* SECTION 6: CONTACT & FOOTER (Pinned panel with overscroll effect) */}
        <div
          ref={contactPanelRef}
          className="relative z-30 w-full bg-[#05070f] will-change-transform border-t border-white/10 shadow-[0_-30px_60px_rgba(0,0,0,0.9)]"
        >
          <Contact />
          <Footer />
        </div>

      </main>
    </div>
  );
}
