import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { projectsData } from '../data/portfolioData';
import { ExternalLink, Sparkles, FolderGit2, ArrowRight, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

gsap.registerPlugin(ScrollTrigger, Flip);

export function Projects() {
  const [filter, setFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const sectionRef = useRef();
  const headerRef = useRef();
  const flexContainerRef = useRef();
  const isInitialMount = useRef(true);

  const categories = ['All', 'Generative AI & LLM', 'Full-Stack Web App', 'AI & Vector Search', 'EdTech & Interactive 3D'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  // Initial scroll entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header reveal
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

      // 2. Initial project cards entrance
      gsap.fromTo(
        '.project-card-wrapper',
        {
          opacity: 0,
          y: 45,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: flexContainerRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // GSAP Flip animation on filter change for fluid flexbox layout repositioning
  const handleFilterChange = (newCat) => {
    if (newCat === filter) return;

    // Capture initial state of all project card wrappers before DOM update
    const state = Flip.getState('.project-card-wrapper');

    setFilter(newCat);

    // After state updates and React re-renders the filtered items in the flex container,
    // execute Flip.from to smoothly morph cards into their new positions
    requestAnimationFrame(() => {
      Flip.from(state, {
        duration: 0.65,
        ease: "power3.inOut",
        stagger: 0.04,
        scale: true,
        absolute: false,
        onEnter: (elements) => {
          return gsap.fromTo(
            elements,
            { opacity: 0, scale: 0.85, y: 20 },
            { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power2.out" }
          );
        },
        onLeave: (elements) => {
          return gsap.to(elements, {
            opacity: 0,
            scale: 0.85,
            y: 20,
            duration: 0.35,
            ease: "power2.in"
          });
        }
      });
    });
  };

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>03 // Work & Artifacts</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="gradient-text">Engineering Projects</span>
            </h2>
            <p className="text-slate-400 text-base max-w-xl mt-3">
              Real-world systems spanning Generative AI applications, production educational portals, and interactive student learning environments.
            </p>
          </div>

          {/* Filter Pills with Flip trigger */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleFilterChange(cat)}
                className={`text-xs font-mono px-4 py-2 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-2 select-none ${
                  filter === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold shadow-lg shadow-cyan-500/25 scale-[1.03] ring-1 ring-cyan-300'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:border-cyan-500/30'
                }`}
              >
                <span>{cat}</span>
                {cat !== 'All' && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    filter === cat ? 'bg-black/25 text-black' : 'bg-white/10 text-slate-400'
                  }`}>
                    {projectsData.filter(p => p.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Flexbox Project Container with GSAP Flip morphing */}
        <div
          ref={flexContainerRef}
          className="flex flex-wrap -m-3 items-stretch justify-start transition-all"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              data-flip-id={project.id}
              className="project-card-wrapper w-full sm:w-1/2 lg:w-1/3 p-3 flex flex-col will-change-transform"
            >
              <div className="project-card glass-panel rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between h-full group hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/15">
                <div>
                  {/* Visual Top Preview Strip */}
                  <div className="h-44 w-full bg-gradient-to-br from-[#0c142c] via-[#090e1f] to-[#05070f] p-6 relative flex flex-col justify-between overflow-hidden border-b border-white/5">
                    <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/15 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                    
                    <div className="flex items-center justify-between z-10">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-cyan-300 backdrop-blur-md">
                        {project.category}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:scale-110 transition-all">
                        <Sparkles className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="z-10">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mt-1">
                        {project.stats}
                      </p>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {project.shortDesc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Footer */}
                <div className="px-6 py-4 bg-black/30 border-t border-white/5 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 group-hover:underline cursor-pointer"
                  >
                    <span>Architecture Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                      title="View Source on GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 hover:text-white transition-colors"
                      title="Open Live Preview"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-panel max-w-2xl w-full rounded-2xl border border-cyan-500/30 p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                {activeModalProject.category}
              </span>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="text-slate-400 hover:text-white font-mono text-sm px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              {activeModalProject.title}
            </h3>
            
            <p className="text-xs font-mono text-cyan-400 mb-4">
              Metric: {activeModalProject.stats}
            </p>

            <div className="space-y-4 mb-6">
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeModalProject.fullDesc}
              </p>
              
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Stack Components & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <a
                href={activeModalProject.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-mono flex items-center gap-2 border border-white/10"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
              <a
                href={activeModalProject.live}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black text-xs font-mono font-bold flex items-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Project Link</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
