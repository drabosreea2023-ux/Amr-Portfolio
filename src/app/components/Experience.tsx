// ==========================================
// 5. Experience Component
// ==========================================

// ==========================================
// 5. Experience Component
// ==========================================

interface Job {
  role: string;
  company: string;
  period: string;
  desc: string;
}

export default function Experience() {
  const jobs: Job[] = [
    { 
      role: 'Freelance DevOps Engineer', 
      company: 'Self-Employed / Freelance', 
      period: 'Jan 2025 - Present (1 year, 4 months)', 
      desc: "Designed and implemented scalable CI/CD pipelines, managed cloud infrastructure (AWS), and containerized applications using Docker and Kubernetes for various clients. Focused on infrastructure as code, monitoring, and automating operational workflows to ensure high availability and security." 
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Work <span className="text-emerald-400">Experience</span></h2>
        <div className="h-px bg-slate-800 flex-1"></div>
      </div>

      <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-slate-800">
        {jobs.map((job: Job, idx: number) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* نقطة الخط الزمني (Timeline Dot) */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-[3px] border-slate-950 bg-emerald-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-[0_0_10px_rgba(52,211,153,0.3)]"></div>
            
            {/* كارت الخبرة */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 md:p-8 rounded-2xl hover:border-emerald-500/50 transition-colors duration-300">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-2 gap-2">
                <h3 className="text-xl font-semibold text-slate-100">{job.role}</h3>
                <span className="text-emerald-400 text-sm xl:text-right whitespace-nowrap">{job.period}</span>
              </div>
              <h4 className="text-base text-slate-400 mb-4">{job.company}</h4>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {job.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}