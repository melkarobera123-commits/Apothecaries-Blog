import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

// 1. Equation Component (Wrapper for KaTeX)
export const Equation = ({ formula, block = false }: { formula: string, block?: boolean }) => {
  return (
    <div className="my-8 overflow-x-auto p-4 bg-white/50 rounded-lg border border-ink/5 text-center">
      {block ? <BlockMath math={formula} /> : <InlineMath math={formula} />}
    </div>
  );
};

// 2. Definition Box
export const Definition = ({ term, children }: { term: string, children: React.ReactNode }) => {
  return (
    <div className="my-8 ml-0 md:-ml-8 border-l-4 border-accent-gold bg-paper-dark p-6 rounded-r-xl shadow-sm relative">
      <span className="absolute -top-3 left-4 bg-accent-gold text-ink text-xs font-bold uppercase tracking-widest px-2 py-1 rounded">
        Definition
      </span>
      <h4 className="font-serif text-lg font-bold text-accent mb-2 mt-1">{term}</h4>
      <div className="text-ink/80 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
};

// 3. Scientific Diagram Placeholder
export const Diagram = ({ src, caption, alt }: { src: string, caption: string, alt: string }) => {
  return (
    <figure className="my-10 w-full">
      <div className="rounded-xl overflow-hidden border border-ink/10 shadow-lg bg-white p-2">
        <img src={src} alt={alt} className="w-full h-auto rounded-lg" />
      </div>
      <figcaption className="mt-4 flex gap-4 text-sm text-ink/60 border-l-2 border-accent-teal pl-4">
        <span className="font-bold text-accent-teal uppercase tracking-widest text-xs pt-1">Fig 1.</span>
        {caption}
      </figcaption>
    </figure>
  );
};

// 4. Key Takeaways
export const KeyTakeaways = ({ points }: { points: string[] }) => {
  return (
    <div className="my-10 p-8 rounded-2xl bg-gradient-to-br from-accent-teal/5 to-accent-teal/10 border border-accent-teal/20">
      <h3 className="flex items-center gap-2 font-serif text-xl font-bold text-accent-teal mb-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        Key Findings
      </h3>
      <ul className="grid gap-3">
        {points.map((point, idx) => (
          <li key={idx} className="flex gap-3 text-ink/90">
            <span className="text-accent-gold font-bold">•</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};