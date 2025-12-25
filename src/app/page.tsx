// src/app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import AiGenerator from "@/components/AiGenerator"; // 👈 Keeping your existing component
import { 
  Github, 
  FileText, 
  Dna, 
  Database, 
  Cpu, 
  TrendingUp, 
  Activity, 
  Server,
  Lock,
  ArrowRight
} from 'lucide-react';

// --- UI COMPONENTS (Inline for easy copy-paste, ideally move to /components later) ---

const Badge = ({ children, color = "blue" }: { children: React.ReactNode, color?: "blue" | "green" | "zinc" }) => {
  const colors = {
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    green: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
    zinc: "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300",
  };
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium font-mono ${colors[color]}`}>
      {children}
    </span>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
      {title}
    </h2>
    {subtitle && <p className="text-zinc-500 dark:text-zinc-400 mt-2 max-w-2xl">{subtitle}</p>}
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}>
    {children}
  </div>
);

// --- MAIN PAGE COMPONENT ---

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans text-zinc-900 dark:text-zinc-100 selection:bg-blue-100 selection:text-blue-900">
      
      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
            THOMAS<span className="text-blue-600">.TO</span>
          </div>
          <nav className="flex gap-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <a href="https://github.com/thomas-to-bcheme" target="_blank" className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-2">
              <Github size={16} /> <span className="hidden sm:inline">Source</span>
            </a>
            <a href="src/docs/Thomas_To_Resume.pdf" target="_blank" className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-2">
              <FileText size={16} /> Resume
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        
        {/* --- HERO SECTION --- */}
        <section className="pt-24 pb-20">
          <div className="max-w-3xl">
            <div className="flex gap-3 mb-6">
              <Badge color="blue">Founding Engineer</Badge>
              <Badge color="green">Biotech & FinTech</Badge>
            </div>
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-8">
              Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Biological Reality</span> with Cloud Architecture.
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mb-10">
              I am a Senior Fullstack Engineer specializing in <strong>Computational Protein Design</strong> and <strong>Agentic AI Systems</strong>. 
              I replace "tribal knowledge" with scalable ETL pipelines, Snowflake architectures, and autonomous RAG agents.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/thomas-to-bcheme" 
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-all"
              >
                View Architecture on GitHub
              </a>
              <div className="inline-flex items-center justify-center px-6 py-3 border border-zinc-200 dark:border-zinc-700 text-base font-medium rounded-lg text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 md:text-lg transition-all">
                <span className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                   System Online
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* --- TECH STACK MARQUEE (Static Grid for cleanliness) --- */}
        <section className="mb-24 border-y border-zinc-200 dark:border-zinc-800 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {['Python', 'Snowflake', 'Next.js', 'PyRosetta', 'LangChain', 'AWS'].map((tech) => (
                    <div key={tech} className="flex items-center justify-center font-mono font-semibold text-lg">{tech}</div>
                ))}
            </div>
        </section>

        {/* --- FEATURE 1: BIO-COMPUTATION & RAG --- */}
        <section className="mb-24">
          <SectionHeader 
            title="Bio-Computation & Knowledge Retrieval" 
            subtitle="Operationalizing unstructured data from wet-labs into queryable vector stores."
          />
          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Interactive RAG Component */}
            <div className="lg:col-span-2">
              <Card className="h-full border-blue-200 dark:border-blue-900/30 bg-blue-50/30 dark:bg-blue-900/10">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <Cpu className="text-blue-600" size={20} />
                        <h3 className="font-bold text-lg">Agentic Resume RAG</h3>
                    </div>
                    <Badge color="blue">Live Model</Badge>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                  This isn't just text. Interact with an AI agent with context on my entire professional history, architectures, and censored internal tooling.
                </p>
                {/* This is your existing component. 
                    Ensure AiGenerator fits within this container width/height 
                */}
                <div className="bg-white dark:bg-black rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 shadow-inner min-h-[300px]">
                    <AiGenerator /> 
                </div>
              </Card>
            </div>

            {/* Visual Aids / Censored Data */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <Card className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                    <Dna className="text-emerald-500" />
                    <h3 className="font-bold">Protein Design</h3>
                </div>
                <div className="aspect-square bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-4 border border-zinc-200 dark:border-zinc-700 relative overflow-hidden group">
                     {/* Placeholder for PyMOL/Benchling Visuals */}
                     <div className="absolute inset-0 bg-[url('https://placehold.co/400x400/18181b/FFF?text=Visual+Aid')] opacity-50 bg-cover bg-center" />
                     <div className="relative z-10 bg-black/80 px-4 py-2 rounded text-xs font-mono text-white backdrop-blur-sm">
                        Structure censored
                     </div>
                </div>
                <p className="text-xs text-zinc-500">
                    Proprietary molecular modeling workflows (pyRosetta/Benchling) visualized via specialized rendering pipelines.
                </p>
              </Card>

              <Card className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                    <Database className="text-purple-500" />
                    <h3 className="font-bold">Snowflake ETL</h3>
                </div>
                <div className="space-y-2 font-mono text-xs text-zinc-600 dark:text-zinc-400">
                    <div className="flex justify-between"><span>Source:</span> <span className="text-zinc-900 dark:text-zinc-100">Fivetran</span></div>
                    <div className="flex justify-between"><span>Transform:</span> <span className="text-zinc-900 dark:text-zinc-100">dbt (SQL)</span></div>
                    <div className="flex justify-between"><span>Model:</span> <span className="text-zinc-900 dark:text-zinc-100">RAG Agent</span></div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* --- FEATURE 2: FINTECH ML EXPERIMENT --- */}
        <section className="mb-24">
          <SectionHeader 
            title="Algorithmic Trading Experiment" 
            subtitle="A Proof of Concept comparison: Supervised vs. Unsupervised Learning on High-Frequency BTC Data."
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* The Hypothesis / Conclusion */}
            <Card className="border-l-4 border-l-amber-500">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <TrendingUp size={20} className="text-amber-500"/>
                    The "Warren Buffet" Hypothesis
                </h3>
                <div className="prose prose-sm dark:prose-invert text-zinc-600 dark:text-zinc-300">
                    <p>
                        <strong>Hypothesis:</strong> Does a complex unsupervised agentic model outperform a standard index-fund strategy over time?
                    </p>
                    <p>
                        <strong>Findings:</strong> While the machine learning model can identify micro-trends, the <em>latency of API calls</em> (Coinbase/Binance) combined with processing time creates a "slip" that negates gains in high-frequency volatility environments.
                    </p>
                    <p className="mt-4 p-3 bg-zinc-100 dark:bg-zinc-800 rounded text-xs font-mono">
                        "For real-time volatility leveraging of BTC, a person must be present. API calls do not perform fast enough to act on minute-to-minute data changes."
                    </p>
                    <p className="mt-4">
                        <strong>Conclusion:</strong> The "Warren Buffet" approach (low frequency, high quality of life) remains superior for retail algorithmic setups due to infrastructure latency constraints.
                    </p>
                </div>
            </Card>

            {/* The Live Data Visualization (Placeholder for your Chart) */}
            <Card className="relative overflow-hidden">
                <div className="absolute top-4 right-4 flex gap-2">
                    <Badge color="zinc">Supervised</Badge>
                    <Badge color="green">Unsupervised</Badge>
                </div>
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                    <Activity size={20} />
                    Model Performance
                </h3>
                
                {/* MOCK CHART AREA */}
                <div className="w-full h-64 bg-zinc-50 dark:bg-zinc-800 rounded-lg border border-dashed border-zinc-300 dark:border-zinc-700 flex items-center justify-center relative">
                    <div className="absolute inset-0 p-6 flex items-end gap-1">
                        {/* Fake bars for visualization effect */}
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div 
                                key={i} 
                                className={`w-full rounded-t ${i % 2 === 0 ? 'bg-zinc-300 dark:bg-zinc-700' : 'bg-blue-500/50'}`}
                                style={{ height: `${Math.random() * 80 + 20}%` }}
                            />
                        ))}
                    </div>
                    <div className="z-10 bg-white/90 dark:bg-black/80 px-4 py-2 rounded-lg backdrop-blur text-xs font-mono border border-zinc-200 dark:border-zinc-700">
                        Awaiting Vercel API Stream...
                    </div>
                </div>

                <div className="mt-6 flex justify-between text-xs font-mono text-zinc-500">
                    <div>
                        <div className="uppercase tracking-wider mb-1">Data Source</div>
                        <div className="text-zinc-900 dark:text-zinc-100">Coinbase Public API</div>
                    </div>
                    <div className="text-right">
                        <div className="uppercase tracking-wider mb-1">Update Freq</div>
                        <div className="text-zinc-900 dark:text-zinc-100">Real-time (Stream)</div>
                    </div>
                </div>
            </Card>
          </div>
        </section>

        {/* --- FOOTER / OPEN SOURCE CTA --- */}
        <section className="border-t border-zinc-200 dark:border-zinc-800 pt-16 text-center">
            <div className="inline-block p-4 rounded-full bg-zinc-100 dark:bg-zinc-900 mb-6">
                <Server size={32} className="text-zinc-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Not Just a Static Site.</h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-8">
                This frontend is merely the presentation layer. The real value—the data models, the ETL pipelines, and the raw agentic logic—lives in the backend repository.
            </p>
            <a 
                href="https://github.com/thomas-to-bcheme"
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 font-bold text-lg group"
            >
                Review the Source Code <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="mt-16 text-sm text-zinc-400 font-mono">
                <p>© {new Date().getFullYear()} Thomas To. All systems nominal.</p>
                <div className="flex justify-center gap-4 mt-4">
                    <span>Oakland, CA</span>
                    <span>•</span>
                    <span>Biochemical Engineering</span>
                    <span>•</span>
                    <span>Fullstack Architecture</span>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}