// components/Projects.tsx
import { Server, ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Featured <span className="text-emerald-400">Projects</span></h2>
        <div className="h-px bg-slate-800 flex-1"></div>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl p-6 md:p-8 hover:border-emerald-500/50 transition-colors duration-300 group">
         <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 aspect-video bg-slate-950 rounded-xl overflow-hidden border border-slate-800 relative flex items-center justify-center">
               <Server size={48} className="text-emerald-400/50" />
            </div>
            <div className="w-full md:w-2/3 space-y-4">
               <div className="flex justify-between items-start">
                 <h3 className="text-2xl font-semibold text-slate-100">Automated CI/CD & Cloud Infrastructure</h3>
                 <a href="https://github.com/mostafa-512" target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors bg-emerald-400/10 p-2 rounded-full hover:bg-emerald-400/20">
                    <ExternalLink size={20} />
                 </a>
               </div>
               <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                 Designed and deployed a highly available infrastructure on AWS. Implemented a fully automated CI/CD pipeline using Jenkins and Docker to streamline application deployment, reducing release time by 40% and ensuring zero-downtime updates.
               </p>
               <div className="flex flex-wrap gap-2 pt-3">
                 {['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Linux', 'Bash'].map((tech, i) => (
                   <span key={i} className="text-xs font-medium px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 shadow-sm">
                     {tech}
                   </span>
                 ))}
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}