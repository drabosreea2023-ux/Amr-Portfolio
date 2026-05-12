import { GraduationCap } from "lucide-react";

// ==========================================
// 3. About Component
// ==========================================
export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">About <span className="text-emerald-400">Me</span></h2>
        <div className="h-px bg-white/10 flex-1"></div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl p-8 md:p-10">
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            I am a dedicated DevOps Engineer with a strong background in automating, building, deploying, and managing modern cloud-based infrastructure. I bridge the gap between development and operations, ensuring fast, reliable, and secure software delivery.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            My goal is to continuously optimize CI/CD pipelines and infrastructure architecture. I have strong experience in containerization, cloud computing, and system administration, focusing on scalable, highly available, and monitored environments.
          </p>
<div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-800">
            <div className="bg-sky-500/10 p-3 rounded-full text-sky-400">
              <GraduationCap size={28} />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-slate-100">Education</h4>
              <p className="text-slate-300">Bachelor's Degree in Management Information Systems</p>
              <p className="text-sm text-sky-400">Raya Higher Institute, Damietta (Exp. 2027)</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
           <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center hover:border-emerald-500/50 transition-colors duration-300">
              <h4 className="text-4xl font-bold text-slate-100 mb-2">B2</h4>
              <p className="text-slate-400 text-sm">English Level</p>
           </div>
           <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center hover:border-emerald-500/50 transition-colors duration-300">
              <h4 className="text-4xl font-bold text-slate-100 mb-2">Native</h4>
              <p className="text-slate-400 text-sm">Arabic Language</p>
           </div>
           <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center hover:border-emerald-500/50 transition-colors duration-300 flex-1 flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-emerald-400 mb-2">Top Skills</h4>
              <p className="text-sm text-slate-300 leading-relaxed">Cloud Infrastructure (AWS)<br/>Containerization (K8s & Docker)<br/>CI/CD Pipelines</p>
           </div>
        </div>
      </div>
    </section>
  );
}


