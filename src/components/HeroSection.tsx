"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  FileText, 
  Cpu, 
  ShieldCheck, 
  TrendingUp, 
  Building2,
  TrendingDown,
  Activity,
  Dna,
} from 'lucide-react';

// Ensure these exist or replace with placeholders
import Badge from '@/components/Badge'; 
import SystemStatusTicker from '@/components/SystemStatusTicker';
import AiGenerator from '@/components/AiGenerator'; 

const HeroSection = () => {
  return (
    <section className="mb-8 pt-4">
      {/* SYSTEM TICKER */}
      <SystemStatusTicker />

      <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
        
        {/* --- LEFT COL: Value Proposition & Trust Signals --- */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Badge 
              color="green" 
              pulse 
              href="mailto:thomas.to.bcheme@gmail.com" // <--- Added this prop
            >
              AVAILABLE FOR HIRE
            </Badge>
            <Badge color="zinc">California, United States</Badge>
          </div>               
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-2 text-zinc-900 dark:text-white leading-[1.1]">
            Fullstack<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              Agentic Engineer
            </span>
          </h1>
          
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl mb-4">
            Integrating AI to digitally transform static algorithms into innovative dynamic engines.
          </p>
          
          {/* TRUST SIGNALS */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-200 bg-emerald-50/50 dark:border-emerald-900/30 dark:bg-emerald-900/10">
              <TrendingUp size={14} className="text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-200">
                Profit
              </span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-200 bg-emerald-50/50 dark:border-emerald-900/30 dark:bg-emerald-900/10">
              <TrendingDown size={14} className="text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-200">
                Risk
              </span>
            </div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-200 bg-purple-50/50 dark:border-purple-900/30 dark:bg-purple-900/10">
  <Dna size={14} className="text-purple-600 dark:text-purple-400" />
  <span className="text-xs font-medium text-purple-600 dark:text-purple-200">
    R&D
  </span>
</div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50/50 dark:border-blue-900/30 dark:bg-blue-900/10">
              <ShieldCheck size={14} className="text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-medium text-blue-800 dark:text-blue-200">
                ICH
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50/50 dark:border-blue-900/30 dark:bg-blue-900/10">
              <ShieldCheck size={14} className="text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-medium text-blue-600 dark:text-blue-200">
                GxP
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50/50 dark:border-blue-900/30 dark:bg-blue-900/10">
              <ShieldCheck size={14} className="text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-medium text-blue-600 dark:text-blue-200">
                HIPAA
              </span>
            </div>       
          </div>


          
          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/thomas-to-bcheme/thomas-to-bcheme.github.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
            >
               <Github size={20} /> View Source
            </a>
            <a 
              href="https://github.com/thomas-to-bcheme/thomas-to-bcheme.github.io/blob/main/src/docs/Thomas_To_Resume.pdf?raw=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white rounded-lg font-medium transition-all border border-zinc-200 dark:border-zinc-700"
            >
               <FileText size={20} /> Download Resume
            </a>
          </div>
        </motion.div>

{/* --- RIGHT COL: Live Agent Card --- */}
        <motion.div 
          id="agent"
          /* ADDED: scroll-mt-32 (This adds ~128px buffer above the section) */
          className="relative hidden lg:block h-full min-h-[400px] scroll-mt-32"
          
          initial={{ opacity: 0, scale: 0.98 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
        >
           <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl blur opacity-20 animate-pulse"></div>
           
           <div className="relative bg-white dark:bg-zinc-900/90 rounded-xl border border-zinc-200 dark:border-zinc-800 h-full p-4 shadow-2xl flex flex-col">
              <div className="flex justify-between items-start mb-4 border-b border-zinc-100 dark:border-zinc-800 pb-3">
                <div className="flex gap-3">
                  <div className="mt-2 shrink-0">
                     <Cpu size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                      Resume RAG Agent
                    </span>
                    <div className="text-[11px] leading-tight text-zinc-500 dark:text-zinc-400 mt-1">
                      <span>Limited to free license plans. </span>
                      <a 
                        href="https://github.com/thomas-to-bcheme" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline decoration-blue-600/30 transition-all font-medium inline-flex items-center gap-1"
                      >
                        See source docs
                      </a>
                    </div>
                  </div>
                </div>
                <Badge color="green">Online</Badge>
              </div>

              <div className="flex-1 overflow-hidden relative rounded-lg bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800">
                  <div className="absolute inset-0 overflow-auto custom-scrollbar">
                     <AiGenerator /> 
                  </div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;