import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experienceData, educationData, courseworkData } from '../data/portfolioData';
import { 
  Briefcase, GraduationCap, CheckCircle2, Calendar, MapPin, 
  Sparkles, BookOpen, Award, Building2, Compass, Layers, 
  Star, Code2, Database, Binary, Cpu, Network, Server 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const courseworkIcons = {
  Code2, Database, Binary, Cpu, Network, Server
};

export function Experience() {
  const sectionRef = useRef();
  const headerRef = useRef();
  const timelineProgressRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header entrance
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out'
      });

      // 2. Timeline items reveal (using fromTo to guarantee elements NEVER stay opacity 0)
      gsap.fromTo(
        '.timeline-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top 85%',
          }
        }
      );

      // 3. Glowing Timeline progress scrub
      if (timelineProgressRef.current) {
        gsap.fromTo(
          timelineProgressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '.timeline-container',
              start: 'top 75%',
              end: 'bottom 85%',
              scrub: 0.8,
            }
          }
        );
      }

      // 4. Academic Degrees & Education reveal with fromTo to guarantee 100% visibility
      gsap.fromTo(
        '.edu-card-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.education-container',
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>02 // Career & Academics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="gradient-text">Academic Qualifications</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-3">
            Comprehensive track record of AI teaching, enterprise ERP management, and modern front-end development, backed by postgraduate & undergraduate computing degrees.
          </p>
        </div>

        <div className="flex flex-col gap-20">

          {/* ======================================================== */}
          {/* PART 1: WORK EXPERIENCE (TIMELINE)                       */}
          {/* ======================================================== */}
          <div className="flex flex-col gap-8">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-mono tracking-tight">
                    Professional Experience & Industry Leadership
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Teaching, ERP Administration, and Front-End Engineering
                  </p>
                </div>
              </div>

              <span className="hidden sm:inline-flex text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                {experienceData.length} Roles
              </span>
            </div>

            <div className="timeline-container relative pl-6 sm:pl-8 border-l border-white/10 flex flex-col gap-10">
              {/* Glowing progress line */}
              <div
                ref={timelineProgressRef}
                className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 origin-top shadow-[0_0_12px_rgba(0,240,255,0.7)]"
              />

              {experienceData.map((item, idx) => (
                <div key={idx} className="timeline-item relative group">
                  {/* Glowing Node on Timeline */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#05070f] border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  </div>

                  {/* Card Container */}
                  <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 group-hover:border-cyan-500/40 transition-all duration-300 shadow-xl">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <div>
                        <span className="text-xs font-mono text-cyan-400 px-2.5 py-0.5 rounded-md bg-cyan-950/60 border border-cyan-500/30 mr-2">
                          {item.badge}
                        </span>
                        <h4 className="text-lg sm:text-xl font-bold text-white inline-block mt-1 sm:mt-0">
                          {item.role}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <div className="text-sm font-medium text-purple-300 mb-4 flex items-center gap-1.5">
                      <span className="font-semibold">{item.organization}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400 text-xs">{item.type}</span>
                    </div>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2.5 mb-6">
                      {item.highlights.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-300 hover:text-white hover:bg-cyan-500/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ======================================================== */}
          {/* PART 2: ACADEMIC QUALIFICATIONS (IN SAME SECTION)       */}
          {/* ======================================================== */}
          <div className="education-container flex flex-col gap-8 pt-4">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-mono tracking-tight">
                    Academic Degrees & Educational Foundation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Postgraduate MCA & Undergraduate BCA Computing Pedigree
                  </p>
                </div>
              </div>

              <span className="hidden sm:inline-flex text-xs font-mono px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300">
                {educationData.length} Degrees Conferred
              </span>
            </div>

            {/* Degrees Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="edu-card-item glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 shadow-2xl hover:-translate-y-1 group relative overflow-hidden flex flex-col justify-between"
                >
                  {/* Top ambient glow */}
                  <div className="absolute top-0 right-0 w-44 h-44 bg-purple-500/10 group-hover:bg-purple-500/20 rounded-full blur-3xl transition-all duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    {/* Level Tag & Period */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-300 font-medium">
                        {edu.level}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        <span>{edu.date}</span>
                      </div>
                    </div>

                    {/* Degree Title */}
                    <h4 className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-snug group-hover:text-purple-300 transition-colors">
                      {edu.degree}
                    </h4>

                    {/* Institution & Location */}
                    <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-200 mb-4">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Building2 className="w-4 h-4 shrink-0" />
                        <span>{edu.institution}</span>
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="flex items-center gap-1 text-slate-400 text-xs font-mono">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{edu.location}</span>
                      </span>
                    </div>

                    {/* Official Score Badge */}
                    <div className="mb-6">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-cyan-950/70 border border-cyan-400/40 text-cyan-300 shadow-sm">
                        <Star className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{edu.scoreBadge}</span>
                      </span>
                    </div>

                    {/* Highlights List */}
                    <div className="border-t border-white/10 pt-4 mt-2">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Curriculum Highlights & Major Focus</span>
                      </div>
                      <ul className="space-y-2">
                        {edu.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400 relative z-10">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>Accredited Indian University</span>
                    </span>
                    <span className="text-purple-400 group-hover:underline">Verified</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Undergraduate Coursework Full-Width Showcase */}
            <div className="edu-card-item glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-2">
                <div className="flex items-center gap-2.5">
                  <BookOpen className="w-5 h-5 text-cyan-400" />
                  <h4 className="text-base sm:text-lg font-bold font-mono text-white">
                    Undergraduate Coursework (BCA Curriculum)
                  </h4>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  {courseworkData.length} Foundation Subjects
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {courseworkData.map((course, idx) => {
                  const IconComp = courseworkIcons[course.icon] || Layers;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-400/40 hover:bg-cyan-950/20 transition-all text-center flex flex-col justify-center items-center group cursor-default"
                    >
                      <IconComp className="w-4 h-4 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-mono text-slate-200 group-hover:text-cyan-300 leading-snug">
                        {course.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
