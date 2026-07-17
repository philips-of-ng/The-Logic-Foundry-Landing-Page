import { ArrowRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <div 
      className="min-h-screen bg-[#0A0A0A] text-white flex flex-col relative overflow-hidden font-sans selection:bg-[#B8FF35] selection:text-black"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    >
      {/* Soft neon ambient glow */}
      <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#B8FF35]/5 blur-[120px] pointer-events-none" />

      {/* Main Hero Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 flex flex-col justify-center pt-12 pb-20 z-10">
        
        {/* Applications Open Tag */}
        <div className="self-start border border-[#B8FF35]/30 bg-[#B8FF35]/5 px-3 py-1.5 flex items-center gap-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF35] animate-pulse" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B8FF35] font-mono">
            Applications Now Open
          </span>
        </div>

        {/* Dynamic Headings */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tight uppercase leading-[0.9] max-w-5xl">
          <span className="block text-white">Master</span>
          <span className="block text-white">
            Frontend <span className="text-[#B8FF35]">Dev.</span>
          </span>
          <span className="block">
            Build the{' '}
            <span 
              className="text-transparent"
              style={{
                WebkitTextStroke: '2px #B8FF35',
              }}
            >
              Web.
            </span>
          </span>
        </h1>

        {/* Large Subtitle */}
        <p className="text-3xl md:text-5xl text-gray-500 font-medium tracking-tight mt-8 max-w-4xl">
          Learn on Your Own Terms.
        </p>

        {/* Copy Paragraph */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-6 max-w-xl">
          Stop passively watching tutorials. Learn how to craft responsive, stunning, and 
          highly functional websites from scratch — a flexible, virtual curriculum designed 
          for students, professionals, and creators looking to unlock a high-income tech skill.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-wrap items-center gap-6 mt-10">
          <button className="bg-[#B8FF35] text-black font-extrabold text-sm tracking-wider px-8 py-4 rounded-none uppercase flex items-center gap-3 hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(184,255,53,0.25)] cursor-pointer" onClick={() => window.location.href = 'https://forms.gle/LGco4gL4YC8pnMJi8'}>
            Claim Your Spot Now
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>
          <span className="text-gray-600 text-xs font-mono tracking-widest">
            // No prior coding experience required
          </span>
        </div>

        {/* Section divider rule */}
        <div className="w-full border-t border-white/5 mt-16 max-w-md" />

        {/* Live Statistics & Badges */}
        <div className="flex gap-16 mt-8">
          
          {/* Module Count with customized Scroll arrow indicators */}
          <div className="flex flex-col">
            <div className="flex items-start gap-1">
              <span className="text-3xl font-extrabold text-[#B8FF35] font-mono">3</span>
              <div className="flex flex-col items-center">
                <span className="text-[7px] text-gray-500 font-bold uppercase tracking-widest vertical-text font-mono">SCROLL</span>
                <ArrowDown className="w-3 h-3 text-[#B8FF35] mt-1 animate-bounce" />
              </div>
            </div>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1 font-mono">Modules</span>
          </div>

          {/* Location Delivery Type */}
          <div className="flex flex-col">
            <span className="text-3xl font-extrabold text-[#B8FF35] font-mono">100%</span>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1 font-mono">Virtual</span>
          </div>

          {/* Pacing Speed */}
          <div className="flex flex-col">
            <span className="text-3xl font-extrabold text-[#B8FF35] font-mono">∞</span>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1 font-mono">Flexible</span>
          </div>

        </div>
      </main>
    </div>
  );
}