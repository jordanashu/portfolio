import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillsCategories } from '../data/portfolioData';
import { 
  Sparkles, Terminal, Database, Bot, Cpu, Eye, Wand2, 
  Code2, FileCode, Palette, Layout, Layers, Component, 
  GitBranch, FileCode2, Binary, Network, Server, Brush, 
  Laptop, Gamepad2, Box, ArrowRight, CheckCircle2 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  Sparkles, Terminal, Database, Bot, Cpu, Eye, Wand2,
  Code2, FileCode, Palette, Layout, Layers, Component,
  GitBranch, FileCode2, Binary, Network, Server, Brush,
  Laptop, Gamepad2, Box
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0); // 0 is AI & Generative AI
  const [selectedSkill, setSelectedSkill] = useState(() => skillsCategories[0]?.skills[0]);
  
  const sectionRef = useRef();
  const headerRef = useRef();
  const filterPillsRef = useRef();
  const bannerRef = useRef();
  const progressBarRef = useRef();
  const gridCardsRef = useRef();

  // Scroll entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header reveal
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          }
        }
      );

      // 2. Filter tabs entrance
      gsap.fromTo(
        filterPillsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );

      // 3. Highlight banner entrance
      gsap.fromTo(
        bannerRef.current,
        { opacity: 0, y: 25, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top 85%',
          }
        }
      );

      // 4. Staggered skill cards
      gsap.fromTo(
        '.skill-card-item',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridCardsRef.current,
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Update selected skill when category tab changes
  useEffect(() => {
    const currentCategory = skillsCategories[activeCategory] || skillsCategories[0];
    if (currentCategory && currentCategory.skills && currentCategory.skills.length > 0) {
      setSelectedSkill(currentCategory.skills[0]);
    }
  }, [activeCategory]);

  // Smooth progress bar update when skill changes
  useEffect(() => {
    if (progressBarRef.current && selectedSkill) {
      gsap.fromTo(
        progressBarRef.current,
        { width: '0%' },
        { width: `${selectedSkill.level}%`, duration: 0.55, ease: 'power2.out' }
      );
    }
  }, [selectedSkill]);

  const activeCategoryData = skillsCategories[activeCategory] || skillsCategories[0];
  const CurrentIcon = (selectedSkill && iconMap[selectedSkill.icon]) ? iconMap[selectedSkill.icon] : Sparkles;

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/15 via-blue-500/10 to-cyan-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>04 // Technical Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Technology & <span className="gradient-text">Skill Matrix</span>
            </h2>
            <p className="text-slate-400 text-base max-w-xl mt-3">
              Comprehensive expertise in Generative AI architectures, modern React full-stack ecosystems, foundation algorithms, and educational technology.
            </p>
          </div>

          <div className="text-xs font-mono text-cyan-400/80 bg-cyan-950/50 border border-cyan-500/30 px-3.5 py-1.5 rounded-xl self-start md:self-auto flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Interactive Technology Explorer</span>
          </div>
        </div>

        {/* Category Navigation Pills — AI & Generative AI is Tab 0 (Always First & Active by Default) */}
        <div ref={filterPillsRef} className="flex flex-wrap gap-2.5 mb-10">
          {skillsCategories.map((cat, idx) => {
            const isTabActive = activeCategory === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveCategory(idx)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-all duration-300 cursor-pointer flex items-center gap-2 select-none ${
                  isTabActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold shadow-lg shadow-cyan-500/25 scale-[1.02] ring-2 ring-cyan-400/60'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:border-cyan-500/30'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                  isTabActive ? 'bg-black/25 text-black font-bold' : 'bg-white/10 text-slate-400'
                }`}>
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Meta & Selected Skill Hero Banner */}
        <div
          ref={bannerRef}
          className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/40 mb-10 shadow-2xl relative overflow-hidden"
        >
          {/* Ambient inner glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-500/15 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            
            {/* Left Info: Current Selected Skill details */}
            <div className="flex items-start sm:items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 p-[1.5px] shrink-0 shadow-lg shadow-cyan-500/25">
                <div className="w-full h-full bg-[#080d1e] rounded-[14px] flex items-center justify-center text-cyan-400">
                  <CurrentIcon className="w-8 h-8" />
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold text-white font-mono tracking-tight">
                    {selectedSkill?.name || 'Selected Technology'}
                  </h3>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 font-semibold shadow-sm">
                    {selectedSkill?.level}% Proficiency
                  </span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-300">
                    {activeCategoryData.badge}
                  </span>
                </div>

                <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                  {selectedSkill?.desc || activeCategoryData.description}
                </p>
              </div>
            </div>

            {/* Right: Proficiency Gauge */}
            <div className="w-full lg:w-72 bg-black/40 border border-white/10 p-4 rounded-xl flex flex-col gap-2 shrink-0">
              <div className="flex justify-between items-center text-xs font-mono text-slate-300">
                <span className="text-slate-400">Mastery Index</span>
                <span className="text-cyan-400 font-bold text-sm">{selectedSkill?.level}%</span>
              </div>
              <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden border border-white/5">
                <div
                  ref={progressBarRef}
                  className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-[0_0_12px_rgba(0,240,255,0.7)]"
                  style={{ width: `${selectedSkill?.level || 95}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-0.5">
                <span>Foundational</span>
                <span>Production Ready</span>
                <span>Expert</span>
              </div>
            </div>

          </div>
        </div>

        {/* Skills Grid for Active Category — Guaranteed 100% visible & rendered */}
        <div ref={gridCardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {activeCategoryData.skills.map((skill, sIdx) => {
            const IconComp = iconMap[skill.icon] || Sparkles;
            const isSelected = selectedSkill?.name === skill.name;

            return (
              <div
                key={`${activeCategory}-${sIdx}`}
                onClick={() => setSelectedSkill(skill)}
                className={`skill-card-item glass-panel p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'border-cyan-400 bg-gradient-to-br from-cyan-950/70 via-[#0a1226] to-purple-950/50 shadow-xl shadow-cyan-500/15 -translate-y-1'
                    : 'border-white/10 hover:border-cyan-500/40 hover:bg-white/5 hover:-translate-y-1 hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isSelected 
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40' 
                        : 'bg-white/5 text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                      isSelected ? 'text-cyan-400 bg-cyan-950/60' : 'text-slate-400 group-hover:text-slate-200'
                    }`}>
                      {skill.level}%
                    </span>
                  </div>

                  <h4 className={`text-base font-bold font-mono transition-colors ${
                    isSelected ? 'text-white' : 'text-slate-200 group-hover:text-cyan-300'
                  }`}>
                    {skill.name}
                  </h4>

                  <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                  <span className={`transition-colors ${isSelected ? 'text-cyan-400 font-semibold' : 'text-slate-500 group-hover:text-slate-400'}`}>
                    {isSelected ? 'Active Selection' : 'Click to inspect'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    isSelected ? 'text-cyan-400 translate-x-0.5' : 'text-slate-600 group-hover:translate-x-1 group-hover:text-cyan-400'
                  }`} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
