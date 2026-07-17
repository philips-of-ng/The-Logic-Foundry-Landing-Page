import { ArrowRight } from 'lucide-react';
// import { useNavigate } from 'react-router-dom'

export default function Navbar() {

  // const navigate = useNavigate()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/[0.03] bg-[#0A0A0A]/40 backdrop-blur-md transition-all duration-300">
      <div className="w-full max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="font-extrabold text-xl tracking-wider font-mono text-white">
          THE LOGIC FOUNDRY <span className="text-[#B8FF35]">2.0</span>
        </div>
        
        {/* Call to Action Button */}
        <button onClick={() => window.location.href = 'https://forms.gle/LGco4gL4YC8pnMJi8'} className="bg-[#B8FF35] text-black font-extrabold text-xs tracking-wider px-5 py-3 rounded-none uppercase flex items-center gap-2 hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(184,255,53,0.15)] cursor-pointer">
          Claim Your Spot
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </nav>
  );
}