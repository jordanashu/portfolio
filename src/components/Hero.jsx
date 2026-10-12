import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { HeroScene } from './HeroScene';
import { personalData } from '../data/portfolioData';
import { ArrowDown, Sparkles, Terminal, Mail, Phone, ExternalLink, ShieldCheck, Cpu } from 'lucide-react';

export function Hero({ isMobile }) {
  const heroRef = useRef();
  const headlineRef = useRef();
  const subtextRef = useRef();
  const ctaRef = useRef();
  const badgesRef = useRef();
  const statsContainerRef = useRef();
  const canvasContainerRef = useRef();
  const profileImageRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Page-load Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Badges entrance
      tl.from(badgesRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2
      })
      // 2. High-Impact Text Masking Reveal: lines/words slide up from behind overflow-hidden clip masks
      .from('.hero-mask-line', {
        yPercent: 120,
        rotateX: -25,
        opacity: 0,
        stagger: 0.14,
        duration: 1.15,
        ease: 'power4.out',
      }, '-=0.5')
      // Supporting subtext masking reveal
      .from('.hero-subtext-mask', {
        yPercent: 100,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      }, '-=0.6')
      // Stats counters stagger
      .from('.stat-box', {
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.7
      }, '-=0.5')
      // CTA action buttons
      .from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
      }, '-=0.4')
      // 3D Canvas container
      .from(canvasContainerRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
      }, '-=0.8')
      // Foreground photograph
      .from(profileImageRef.current, {
        opacity: 0,
        y: 35,
        scale: 0.95,
        duration: 1.0,
        ease: 'power3.out'
      }, '-=0.9');

    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Parallax tilt on profile image on mouse move
  const handleMouseMove = (e) => {
    if (isMobile || !profileImageRef.current) return;
    const rect = canvasContainerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(profileImageRef.current, {
      x: x * 15,
      y: y * 15,
      rotateY: x * 8,
      rotateX: -y * 8,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (!profileImageRef.current) return;
    gsap.to(profileImageRef.current, {
      x: 0,
      y: 0,
      rotateY: 0,
      rotateX: 0,
      duration: 0.7,
      ease: 'power2.out',
    });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-purple-600/15 to-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial & Impact Typography with Text Masking */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Status & Credential Pills */}
            <div ref={badgesRef} className="flex flex-wrap items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span>{personalData.status}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>Google Certified Educator</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/60 border border-white/10 text-slate-300 text-xs font-mono">
                <span>SMPS School, Chandausi</span>
              </div>
            </div>

            {/* Main Headline with Editorial Overflow-Hidden Text Masking */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 select-none"
            >
              {/* Masked Line 1 */}
              <span className="block overflow-hidden py-1">
                <span className="hero-mask-line inline-block will-change-transform">
                  Building the Future
                </span>
              </span>

              {/* Masked Line 2 */}
              <span className="block overflow-hidden py-1">
                <span className="hero-mask-line inline-block will-change-transform">
                  with{' '}
                  <span className="gradient-text font-black drop-shadow-[0_0_25px_rgba(0,240,255,0.4)]">
                    AI & Code.
                  </span>
                </span>
              </span>
            </h1>

            {/* Supporting Text with Masking Reveal */}
            <div className="overflow-hidden mb-8 max-w-2xl">
              <p
                ref={subtextRef}
                className="hero-subtext-mask text-base sm:text-lg text-slate-300 leading-relaxed font-normal will-change-transform"
              >
                {personalData.subheadline}
              </p>
            </div>

            {/* Interactive Stats Grid */}
            <div ref={statsContainerRef} className="grid grid-cols-2 sm:grid-cols-4 gap-3 ">
              {personalData.stats.slice(0, 4).map((stat, idx) => (
                <div
                  key={idx}
                  className="stat-box glass-panel p-3.5 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400 group-hover:scale-105 transition-transform duration-200">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-200 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Featured Projects</span>
                <Sparkles className="w-4 h-4 text-black group-hover:rotate-12 transition-transform duration-300" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-[#0e1628]/80 hover:bg-[#14203b] border border-white/10 hover:border-purple-500/40 text-slate-200 hover:text-white text-sm font-medium transition-all duration-300 flex items-center gap-2 group cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                <span>Let's Connect</span>
              </a>

              <a
                href={`mailto:${personalData.email}`}
                className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all duration-200"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: 3D Holographic Scene Viewport with Foreground Profile Image */}
          <div
            ref={canvasContainerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-5 h-[480px] sm:h-[560px] lg:h-[640px] w-full relative flex items-center justify-center"
          >
            {/* 3D Scene Canvas in Background */}
            <div className="w-full h-full absolute inset-0 z-10 rounded-3xl overflow-hidden pointer-events-auto">
              <HeroScene isMobile={isMobile} />
            </div>

            {/* Ambient Cyan/Purple Halo behind foreground character */}
            <div className="absolute inset-0 z-15 flex items-center justify-center pointer-events-none">
              <div className="w-72 sm:w-88 h-72 sm:h-88 bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-purple-600/25 rounded-full blur-3xl" />
            </div>

            {/* Foreground Real Photograph of Ashutosh */}
            <div
              ref={profileImageRef}
              className="relative z-20 w-[290px] sm:w-[340px] lg:w-[900px] h-[78%] flex items-end justify-center pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]"
            >
              <img
                src="/profile.png"
                alt="Ashutosh Kumar Singh"
                className="w-full h-full object-contain object-bottom select-none filter contrast-105 brightness-105 drop-shadow-[0_10px_35px_rgba(0,240,255,0.25)]"
              />

              {/* Bottom gradient fade for seamless integration */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#05070f] via-[#05070f]/70 to-transparent pointer-events-none" />
            </div>

            {/* Futuristic HUD floating overlay tags */}
            <div className="absolute top-2 right-4 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#070d1d]/85 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 backdrop-blur-md shadow-lg pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>CORE_ENGINE :: ONLINE</span>
            </div>

            <div className="absolute bottom-2 left-4 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#070d1d]/85 border border-purple-500/30 text-[11px] font-mono text-purple-300 backdrop-blur-md shadow-lg pointer-events-none">
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              <span>ASHUTOSH :: AI_EDUCATOR</span>
            </div>
          </div>

        </div>
      </div>

      {/* Animated scroll down indicator */}
      <a
        href="#experience"
        onClick={(e) => {
          e.preventDefault();
          const target = document.getElementById('experience');
          if (target) {
            if (window.lenis) {
              window.lenis.scrollTo(target, { offset: -60, duration: 1.2 });
            } else {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors z-20 cursor-pointer"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-9 rounded-full border border-slate-700 flex items-start justify-center p-1">
          <div className="w-1.5 h-2 bg-cyan-400 rounded-full animate-bounce mt-1" />
        </div>
      </a>
    </section>
  );
}
