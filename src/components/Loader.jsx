import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function Loader({ onComplete }) {
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const progressBarRef = useRef(null);
  const textTrackRef = useRef(null);
  const logoRef = useRef(null);
  const statusRef = useRef(null);
  const curtainTopRef = useRef(null);
  const curtainBottomRef = useRef(null);
  const [percent, setPercent] = useState(0);

  const words = [
    "INITIALIZING NEURAL CORE",
    "LOADING 3D VIEWPORTS",
    "COMPILING SHADERS & MESHES",
    "SYNCHRONIZING AI MODELS",
    "WELCOME TO ASHU.DEV"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });

      // Status phrases rotation timeline
      const statusTl = gsap.timeline({ repeat: -1 });
      words.forEach((word) => {
        statusTl
          .to(statusRef.current, {
            opacity: 0,
            y: -10,
            duration: 0.25,
            ease: "power2.in",
            onComplete: () => {
              if (statusRef.current) statusRef.current.innerText = word;
            }
          })
          .to(statusRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out"
          })
          .to({}, { duration: 0.3 }); // hold
      });

      // Main percentage & progress timeline
      const counterObj = { val: 0 };

      tl.to(counterObj, {
        val: 100,
        duration: 2.2,
        ease: "power3.inOut",
        onUpdate: () => {
          const current = Math.floor(counterObj.val);
          setPercent(current);
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${current}%`;
          }
        }
      })
      // Stop word rotation and flash ready
      .call(() => {
        statusTl.kill();
        if (statusRef.current) statusRef.current.innerText = "SYSTEMS ONLINE";
      })
      .to([counterRef.current, statusRef.current, progressBarRef.current?.parentElement], {
        opacity: 0,
        y: -20,
        duration: 0.4,
        stagger: 0.05,
        ease: "power3.in"
      }, "+=0.1")
      .to(logoRef.current, {
        scale: 1.15,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      })
      .to(logoRef.current, {
        scale: 0.85,
        opacity: 0,
        duration: 0.35,
        ease: "power3.in"
      }, "+=0.15")
      // GSAP-style cinematic curtain split reveal (top and bottom curtain panels slide away)
      .to(curtainTopRef.current, {
        yPercent: -100,
        duration: 0.85,
        ease: "power4.inOut"
      }, "curtain")
      .to(curtainBottomRef.current, {
        yPercent: 100,
        duration: 0.85,
        ease: "power4.inOut"
      }, "curtain")
      // Container fade out
      .to(containerRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.2
      });

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-auto select-none overflow-hidden"
    >
      {/* Top Curtain Panel */}
      <div
        ref={curtainTopRef}
        className="absolute top-0 left-0 w-full h-1/2 bg-[#04060d] border-b border-white/5 z-0"
      />
      {/* Bottom Curtain Panel */}
      <div
        ref={curtainBottomRef}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#04060d] border-t border-white/5 z-0"
      />

      {/* Ambient background glow behind preloader content */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/20 via-purple-600/25 to-blue-500/10 rounded-full blur-[140px] pointer-events-none z-10" />

      {/* Grid Pattern in Preloader */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-10"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Preloader Center Stage */}
      <div className="relative z-20 flex flex-col items-center justify-center max-w-md w-full px-6">
        
        {/* Animated Brand / Logo Monogram */}
        <div ref={logoRef} className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 p-[1.5px] shadow-[0_0_30px_rgba(0,240,255,0.4)]">
            <div className="w-full h-full bg-[#070a14] rounded-[14px] flex items-center justify-center">
              <span className="font-mono text-cyan-400 font-extrabold text-base tracking-tighter">
                A<span className="text-purple-400">K</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-mono font-extrabold text-white text-lg tracking-wider">
              ASHU<span className="text-cyan-400">.DEV</span>
            </span>
            <span className="text-[10px] text-cyan-300/80 font-mono tracking-widest uppercase">
              AI EDUCATOR & DEVELOPER
            </span>
          </div>
        </div>

        {/* Large GSAP-Style Editorial Percentage Number */}
        <div className="flex items-baseline justify-center mb-6">
          <span
            ref={counterRef}
            className="font-mono text-7xl sm:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-cyan-400 drop-shadow-[0_0_35px_rgba(0,240,255,0.35)] tabular-nums"
          >
            {percent}
          </span>
          <span className="font-mono text-2xl sm:text-3xl text-cyan-400 font-semibold ml-1">
            %
          </span>
        </div>

        {/* Progress Track & Bar */}
        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/10 p-[1px] mb-5 backdrop-blur-md shadow-inner">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.8)] transition-[width] duration-75 ease-out"
            style={{ width: "0%" }}
          />
        </div>

        {/* Rotating Tech Status Log */}
        <div className="flex items-center gap-2.5 text-xs font-mono text-slate-400 tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span ref={statusRef} className="uppercase text-cyan-300 font-medium">
            
          </span>
        </div>

      </div>

      {/* Decorative Bottom HUD Bar */}
      <div className="absolute bottom-6 left-8 right-8 z-20 hidden sm:flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-white/5 pt-3">
        <span></span>
        <span className="text-cyan-400/80">INITIALIZING</span>
        <span></span>
      </div>
    </div>
  );
}
