import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { certificationsData } from '../data/portfolioData';
import { 
  Award, ShieldCheck, Users, Wand2, Brain, Palette, 
  GraduationCap, FileSpreadsheet, CheckCircle2, TrendingUp, 
  Layers, Lock, Sparkles, Check, ArrowRight 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const certIcons = {
  ShieldCheck, Award, Users, Wand2, Brain, Palette,
  GraduationCap, FileSpreadsheet, CheckCircle2, TrendingUp,
  Layers, Lock
};

export function Certifications() {
  const [activeTab, setActiveTab] = useState('educator');
  const sectionRef = useRef();
  const headerRef = useRef();
  const gridRef = useRef();
  const cardRefs = useRef([]);

  // Scroll entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Smooth cards transition when tab switches
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cert-card',
        {
          opacity: 0,
          y: 35,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power3.out',
          overwrite: 'auto'
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [activeTab]);

  // MacOS Dock Proximity Magnification Effect
  const handleMouseMove = (e) => {
    if (!gridRef.current) return;
    const cards = cardRefs.current.filter(Boolean);
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      // Euclidean distance from pointer to card center
      const distance = Math.hypot(mouseX - cardCenterX, mouseY - cardCenterY);

      // MacOS Dock magnification threshold (e.g. 260px radius)
      const maxDistance = 260;

      if (distance < maxDistance) {
        // Cosine / Gaussian smooth decay curve
        const intensity = Math.cos((distance / maxDistance) * (Math.PI / 2));
        const scale = 1 + intensity * 0.08; // scale up to 1.08x
        const translateY = -intensity * 12; // lift up to -12px

        gsap.to(card, {
          scale: scale,
          y: translateY,
          borderColor: `rgba(0, 240, 255, ${0.15 + intensity * 0.45})`,
          boxShadow: `0 20px 35px -10px rgba(0, 240, 255, ${intensity * 0.25})`,
          duration: 0.2,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      } else {
        gsap.to(card, {
          scale: 1,
          y: 0,
          borderColor: 'rgba(255, 255, 255, 0.1)',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }
    });
  };

  const handleMouseLeave = () => {
    const cards = cardRefs.current.filter(Boolean);
    cards.forEach((card) => {
      gsap.to(card, {
        scale: 1,
        y: 0,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
        duration: 0.35,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    });
  };

  const currentList = activeTab === 'educator' 
    ? certificationsData.educator 
    : certificationsData.technical;

  return (
    <section id="certifications" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/3 left-1/3 w-[520px] h-[520px] bg-gradient-to-br from-cyan-500/10 via-purple-600/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>05 // Credentials & Verification</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Certifications & <span className="gradient-text">Accreditations</span>
            </h2>
            <p className="text-slate-400 text-base max-w-xl mt-3">
              Accredited credentials from Google, CBSE, IIT/NPTEL, and NIELIT demonstrating pedagogical authority and technical rigor.
            </p>
          </div>

          {/* Tab Switcher with smooth indicator transition */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white/5 border border-white/10 self-start md:self-auto backdrop-blur-md">
            <button
              onClick={() => setActiveTab('educator')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono transition-all duration-300 cursor-pointer ${
                activeTab === 'educator'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold shadow-lg shadow-cyan-500/25 scale-[1.02]'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Educator Credentials ({certificationsData.educator.length})
            </button>
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono transition-all duration-300 cursor-pointer ${
                activeTab === 'technical'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold shadow-lg shadow-cyan-500/25 scale-[1.02]'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Technical & Professional ({certificationsData.technical.length})
            </button>
          </div>
        </div>

        {/* Certifications Grid with MacOS Dock Proximity Magnification */}
        <div
          ref={gridRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentList.map((cert, idx) => {
            const IconComp = certIcons[cert.icon] || Award;
            return (
              <div
                key={idx}
                ref={(el) => (cardRefs.current[idx] = el)}
                className="cert-card glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between group relative overflow-hidden will-change-transform cursor-pointer"
              >
                {/* Subtle top ambient glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 group-hover:bg-cyan-500/20 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-115 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 font-medium shadow-sm">
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-mono text-purple-300 mb-3 flex items-center gap-1.5">
                    <span className="text-slate-400">Issuer:</span>
                    <span className="font-semibold text-purple-300">{cert.issuer}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400 relative z-10">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Verified Credential</span>
                  </span>
                  <span className="text-slate-500 font-mono flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                    <span>CV // Ref</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
