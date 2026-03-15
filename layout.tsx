import type { Metadata } from "next";
import { Fraunces, Sora } from "next/font/google";
import Link from "next/link";
import { Search, Moon, Menu } from "lucide-react";
import "./globals.css";

// Font configuration
const fraunces = Fraunces({ 
  subsets: ["latin"], 
  variable: "--font-fraunces",
  display: "swap" 
});
const sora = Sora({ 
  subsets: ["latin"], 
  variable: "--font-sora",
  display: "swap" 
});

export const metadata: Metadata = {
  title: "Apothecaries | Science, Mind & Reality",
  description: "A world-class scientific institute for the digital age.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sora.variable}`}>
      <body className="flex flex-col min-h-screen">
        
        {/* === Global Navigation === */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-ink/5">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-ink">
              APOTHECARIES<span className="text-accent-teal">.</span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider text-ink/80">
              <Link href="/research" className="hover:text-accent-teal transition-colors">Research</Link>
              <Link href="/topic/chemistry" className="hover:text-accent-teal transition-colors">Chemistry</Link>
              <Link href="/topic/neuroscience" className="hover:text-accent-teal transition-colors">Neuroscience</Link>
              <Link href="/topic/ai" className="hover:text-accent-teal transition-colors">AI & Tech</Link>
              <Link href="/about" className="hover:text-accent-teal transition-colors">About</Link>
            </nav>

            {/* Utilities */}
            <div className="flex items-center gap-4">
              <div className="relative hidden lg:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40" />
                <input 
                  type="text" 
                  placeholder="Search journals..." 
                  className="pl-9 pr-4 py-2 rounded-full bg-ink/5 border-none text-sm focus:ring-2 focus:ring-accent-teal outline-none w-64"
                />
              </div>
              <button className="p-2 rounded-full hover:bg-ink/5 transition-colors">
                <Moon className="w-5 h-5 text-ink/80" />
              </button>
              <button className="md:hidden p-2">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </header>

        {/* === Main Content === */}
        <main className="flex-grow">
          {children}
        </main>

        {/* === Footer === */}
        <footer className="bg-ink text-paper-dark py-16 px-6 mt-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <h3 className="font-serif text-2xl mb-4">APOTHECARIES</h3>
              <p className="opacity-80 max-w-md font-light">
                Bridging the gap between rigorous scientific inquiry and philosophical exploration. 
                A digital institute for the curious mind.
              </p>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-accent-gold">Connect</h4>
              <div className="flex flex-col gap-3 text-sm opacity-80">
                <a href="#" className="hover:text-white transition-colors">Newsletter</a>
                <a href="#" className="hover:text-white transition-colors">Twitter / X</a>
                <a href="#" className="hover:text-white transition-colors">ResearchGate</a>
                <a href="#" className="hover:text-white transition-colors">RSS Feed</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-accent-gold">Legal</h4>
              <div className="flex flex-col gap-3 text-sm opacity-80">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
                <Link href="/masthead" className="hover:text-white transition-colors">Masthead</Link>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-xs opacity-50 uppercase tracking-widest">
            © {new Date().getFullYear()} Apothecaries Institute. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}