import {  ChevronRight, Cloud, Terminal, Server } from "lucide-react";


// ==========================================
// 4. Skills Component
// ==========================================
export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Technical <span className="text-emerald-400">Arsenal</span></h2>
        <div className="h-px bg-white/10 flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cloud & Containers */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-colors duration-300">
          <div className="bg-emerald-400/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-emerald-400">
            <Cloud size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-5 text-slate-100">Cloud & Containers</h3>
          <ul className="space-y-4">
            {['Amazon Web Services (AWS)', 'Docker', 'Kubernetes (K8s)'].map((skill, sIdx) => (
              <li key={sIdx} className="flex items-center text-slate-300 text-sm md:text-base">
                <ChevronRight size={16} className="text-emerald-400 mr-2 shrink-0" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* CI/CD & Automation */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-colors duration-300">
          <div className="bg-emerald-400/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-emerald-400">
            <Server size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-5 text-slate-100">CI/CD & Version Control</h3>
          <ul className="space-y-4">
            {['Jenkins', 'Git & GitHub', 'Pipeline Automation', 'Postman (API Testing)'].map((skill, sIdx) => (
              <li key={sIdx} className="flex items-center text-slate-300 text-sm md:text-base">
                <ChevronRight size={16} className="text-emerald-400 mr-2 shrink-0" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* OS & Scripting */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-colors duration-300">
          <div className="bg-emerald-400/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-emerald-400">
            <Terminal size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-5 text-slate-100">OS & Scripting</h3>
          <ul className="space-y-4">
            {['Linux Administration', 'Bash Shell Scripting', 'Python', 'JavaScript'].map((skill, sIdx) => (
              <li key={sIdx} className="flex items-center text-slate-300 text-sm md:text-base">
                <ChevronRight size={16} className="text-emerald-400 mr-2 shrink-0" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};


// const Skills = () => {
//   return (
//     <section id="skills" className="py-24">
//       <div className="flex items-center gap-4 mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Technical <span className="text-emerald-400">Arsenal</span></h2>
//         <div className="h-px bg-white/10 flex-1"></div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Cloud & Containers */}
//         <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-colors duration-300">
//           <div className="bg-emerald-400/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-emerald-400">
//             <Cloud size={28} />
//           </div>
//           <h3 className="text-xl font-semibold mb-5 text-slate-100">Cloud & Containers</h3>
//           <ul className="space-y-4">
//             {['Amazon Web Services (AWS)', 'Docker', 'Kubernetes (K8s)'].map((skill, sIdx) => (
//               <li key={sIdx} className="flex items-center text-slate-300 text-sm md:text-base">
//                 <ChevronRight size={16} className="text-emerald-400 mr-2 shrink-0" />
//                 {skill}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* CI/CD & Automation */}
//         <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-colors duration-300">
//           <div className="bg-emerald-400/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-emerald-400">
//             <Server size={28} />
//           </div>
//           <h3 className="text-xl font-semibold mb-5 text-slate-100">CI/CD & Version Control</h3>
//           <ul className="space-y-4">
//             {['Jenkins', 'Git & GitHub', 'Pipeline Automation', 'Postman (API Testing)'].map((skill, sIdx) => (
//               <li key={sIdx} className="flex items-center text-slate-300 text-sm md:text-base">
//                 <ChevronRight size={16} className="text-emerald-400 mr-2 shrink-0" />
//                 {skill}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* OS & Scripting */}
//         <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-colors duration-300">
//           <div className="bg-emerald-400/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-emerald-400">
//             <Terminal size={28} />
//           </div>
//           <h3 className="text-xl font-semibold mb-5 text-slate-100">OS & Scripting</h3>
//           <ul className="space-y-4">
//             {['Linux Administration', 'Bash Shell Scripting', 'Python', 'JavaScript'].map((skill, sIdx) => (
//               <li key={sIdx} className="flex items-center text-slate-300 text-sm md:text-base">
//                 <ChevronRight size={16} className="text-emerald-400 mr-2 shrink-0" />
//                 {skill}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };