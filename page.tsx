import Link from "next/link";
import { ArrowRight, Beaker, Brain, Atom, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      
      {/* === HERO SECTION === */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/10 via-transparent to-accent-gold/10 z-0" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full border border-accent-teal/30 text-accent-teal text-xs font-bold tracking-widest uppercase mb-6 bg-white/50 backdrop-blur-sm">
            Scientific Journal & Blog
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-medium leading-[1.1] mb-8 text-ink">
            Exploring Science, <br/> 
            <span className="italic text-accent-teal">Mind</span>, and Reality
          </h1>
          <p className="text-xl md:text-2xl font-light text-ink/70 mb-10 max-w-2xl mx-auto">
            Deep dives into organic chemistry, neuroscience, and the philosophy of consciousness.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/research" className="bg-ink text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-teal transition-all flex items-center gap-2 group">
              Read Latest Research
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/about" className="bg-white border border-ink/10 text-ink px-8 py-4 rounded-full font-semibold hover:bg-paper-dark transition-all">
              About the Institute
            </Link>
          </div>
        </div>
      </section>

      {/* === FEATURED RESEARCH GRID === */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="flex items-end justify-between mb-12 border-b border-ink/10 pb-4">
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Featured Analysis</h2>
          <Link href="/research" className="text-accent-teal font-semibold text-sm hover:underline">View Archive</Link>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Main Feature */}
          <article className="md:col-span-7 group cursor-pointer">
            <div className="aspect-[16/9] bg-gray-200 rounded-2xl overflow-hidden mb-6 relative">
              {/* Placeholder for image */}
              <div className="absolute inset-0 bg-accent-teal/20 group-hover:bg-transparent transition-colors duration-500" />
              <img 
                src="https://placehold.co/1200x800/2f5f5d/white?text=Neuroscience+Cover" 
                alt="Cover" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex gap-3 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-gold">Neuroscience</span>
              <span className="text-xs text-ink/50">March 15, 2026</span>
            </div>
            <h3 className="font-serif text-3xl font-medium mb-3 group-hover:text-accent-teal transition-colors">
              The Quantum Basis of Consciousness: A New Proposal
            </h3>
            <p className="text-ink/70 leading-relaxed mb-4">
              Examining the microtubules hypothesis through the lens of recent quantum coherence discoveries in warm, wet biological systems.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                <img src="https://placehold.co/100x100" alt="Author" />
              </div>
              <span className="text-sm font-medium">Dr. S. Al-Fayed</span>
            </div>
          </article>

          {/* Sidebar Features */}
          <div className="md:col-span-5 flex flex-col gap-10">
            {[1, 2, 3].map((i) => (
              <article key={i} className="flex gap-6 group cursor-pointer border-b border-ink/5 pb-8 last:border-0">
                <div className="w-1/3 aspect-square rounded-xl overflow-hidden bg-gray-100">
                  <img 
                    src={`https://placehold.co/400x400/8a4b2b/white?text=Topic+${i}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="w-2/3">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent-teal block mb-2">Chemistry</span>
                  <h4 className="font-serif text-xl font-medium leading-tight mb-2 group-hover:text-accent-teal transition-colors">
                    Synthetic Pathways for Novel Alkaloids
                  </h4>
                  <p className="text-sm text-ink/60 line-clamp-2">
                    A review of sustainable catalysis methods introduced in 2025.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === TOPIC EXPLORER === */}
      <section className="bg-white py-20 px-6 border-y border-ink/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl mb-4">Explore by Discipline</h2>
            <p className="text-ink/60">Navigate our library through specific fields of inquiry.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <TopicCard icon={<Beaker />} title="Chemistry" count={42} />
            <TopicCard icon={<Brain />} title="Neuroscience" count={28} />
            <TopicCard icon={<Atom />} title="Physics" count={35} />
            <TopicCard icon={<Sparkles />} title="Philosophy" count={19} />
          </div>
        </div>
      </section>

      {/* === NEWSLETTER === */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-ink z-0">
           {/* Abstract pattern via CSS or SVG */}
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center text-paper">
          <h2 className="font-serif text-4xl mb-6">Join the Institute</h2>
          <p className="text-lg opacity-80 mb-10 font-light">
            Receive our weekly digest of scientific breakdowns, diagrams, and philosophical musings directly to your inbox.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-gold"
            />
            <button className="bg-accent-gold text-ink font-bold px-8 py-4 rounded-full hover:bg-white transition-colors">
              Subscribe
            </button>
          </form>
          <p className="text-xs opacity-40 mt-6">No spam. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  );
}

function TopicCard({ icon, title, count }: { icon: any, title: string, count: number }) {
  return (
    <Link href={`/topic/${title.toLowerCase()}`} className="group p-8 rounded-2xl bg-paper border border-ink/5 hover:border-accent-teal/30 hover:shadow-xl hover:shadow-accent-teal/5 transition-all flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-accent-teal mb-4 shadow-sm group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-serif text-lg font-bold text-ink mb-1">{title}</h3>
      <span className="text-xs text-ink/50 uppercase tracking-widest">{count} Articles</span>
    </Link>
  )
}