// components/Hero.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Terminal, Download, Send, } from 'lucide-react';

// ==========================================
// 2. Hero Component
// ==========================================
export default function Hero() {
  return (
    <section id="home" className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12 pt-10">
      
      {/* الجزء الخاص بالنصوص */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h2 className="text-emerald-400/80 font-medium tracking-wide text-lg flex items-center justify-center md:justify-start gap-2">
          <Terminal size={24} className="text-emerald-400" /> Welcome to my terminal
        </h2>
        
        <h1 className="text-4xl md:text-6xl md:leading-[1.2] font-bold text-slate-100">
          Hi, I'm <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">
            Amr Abdallah Abosreea
          </span>
        </h1>
        
        <h3 className="text-2xl md:text-3xl font-medium text-slate-300">
          DevOps Engineer <span className="text-emerald-400 px-2">|</span> Cloud <span className="text-emerald-400 px-2">|</span> CI/CD
        </h3>
        
        <p className="text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed text-lg">
          I build scalable infrastructure, automate deployment pipelines, and ensure system reliability. Passionate about Linux, Containers, and Cloud automation.
        </p>
        
        {/* أزرار التحميل والتواصل */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
          {/* تأكد من وضع ملف الـ CV الخاص بعمرو في مجلد public وتعديل مساره هنا */}
          <a 
            href="/Amr_Abdallah_CV.pdf" 
            download 
            className="flex items-center gap-2 bg-emerald-500 text-slate-950 px-8 py-3 rounded-full font-bold hover:bg-emerald-400 transition-all hover:-translate-y-1 w-full sm:w-auto justify-center shadow-lg shadow-emerald-500/20"
          >
            <Download size={20} />
            Download CV
          </a>
          <Link 
            href="#contact" 
            className="flex items-center gap-2 border border-emerald-500/50 text-emerald-400 px-8 py-3 rounded-full font-medium hover:bg-emerald-500/10 transition-all hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            <Send size={20} />
            Contact Me
          </Link>
        </div>

        {/* روابط السوشيال ميديا */}
        <div className="flex items-center justify-center md:justify-start gap-6 pt-6">
          <a href="https://github.com/mostafa-512" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
          </a>
          <a href="https://www.linkedin.com/in/amr-abdallah" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
          </a>
        </div>
      </div>

      {/* قسم الصورة الشخصية مع Next.js Image */}
      <div className="flex-1 flex justify-center md:justify-end relative mt-10 md:mt-0">
        {/* تأثير التوهج الخلفي (Glow) بلون الـ Emerald */}
        <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full scale-75"></div>
        
        {/* إطار الصورة */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-emerald-500/30 to-emerald-500/5 shadow-xl">
          <div className="w-full h-full rounded-full overflow-hidden border border-slate-700 bg-slate-900 relative">
            {/* استخدام Next Image */}
            <Image 
              src="/myImg.jpeg" // تأكد من وجود هذه الصورة في مجلد public
              alt="Amr Abdallah Abosreea" 
              fill
              className="object-cover"
              priority // تعطي أولوية لتحميل هذه الصورة فوراً لأنها في الواجهة
            />
          </div>
        </div>
      </div>

    </section>
  );
};


// // تأكد من استيراد هذه الأيقونات من lucide-react
// import { Terminal, Server, Cloud, Container } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section id="home" className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12 pt-10">
//       <div className="flex-1 text-center md:text-left space-y-6">
//         <h2 className="text-emerald-400/80 font-medium tracking-wide text-lg flex items-center justify-center md:justify-start gap-2">
//           <Terminal size={24} className="text-emerald-400" /> Welcome to my terminal
//         </h2>
//         <h1 className="text-4xl md:text-6xl md:leading-[1.2] font-bold text-slate-100">
//           Hi, I'm <br/>
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">
//             Amr Abdallah Abosreea
//           </span>
//         </h1>
//         <h3 className="text-2xl md:text-3xl font-medium text-slate-300">
//           DevOps Engineer <span className="text-emerald-400 px-2">|</span> Cloud <span className="text-emerald-400 px-2">|</span> CI/CD
//         </h3>
//         <p className="text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed text-lg">
//           I build scalable infrastructure, automate deployment pipelines, and ensure system reliability. Passionate about Linux, Containers, and Cloud automation.
//         </p>
//         {/* أزرار التحميل والتواصل تبقى كما هي، فقط غير الألوان إلى emerald */}
//       </div>
//       {/* قسم الصورة الشخصية */}
//     </section>
//   );
// };