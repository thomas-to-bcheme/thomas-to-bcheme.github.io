// src/app/page.tsx
import AiGenerator from "@/components/AiGenerator"; // 👈 Your client component

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* --- HEADER --- */}
      <header className="max-w-4xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tighter text-black dark:text-white">
          THOMAS<span className="text-blue-600">.TO</span>
        </div>
        <nav className="flex gap-4 text-sm font-medium text-zinc-500">
          <a href="https://github.com/thomas-to-bcheme" target="_blank" className="hover:text-black dark:hover:text-white transition-colors">GitHub</a>
          <a href="src/docs/Thomas_To_Resume.pdf" className="hover:text-black dark:hover:text-white transition-colors">Resume</a>
        </nav>
      </header>

      <main className="max-w-2xl mx-auto px-6 pb-20">
        
        {/* --- HERO SECTION --- */}
        <section className="pt-20 pb-16 space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            Full Stack. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Serverless.
            </span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Welcome to my live portfolio. This page is rendered dynamically by 
            <strong className="text-black dark:text-white font-semibold"> Next.js </strong> 
            and showcases interacive AI components.
          </p>
        </section>

        {/* --- AI GENERATOR SECTION --- */}
        <section className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden mb-8">
            {/* The interactive client logic lives inside this component */}
            <AiGenerator /> 
        </section>

      </main>
    </div>
  );
}