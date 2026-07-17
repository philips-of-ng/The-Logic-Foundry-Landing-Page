export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0A0A0A] border-t border-white/5 z-10 relative">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand/Logo & Contact Details */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-extrabold text-sm tracking-wider font-mono text-white">
            THE LOGIC FOUNDRY <span className="text-[#B8FF35]">2.0</span>
          </div>
          <div className="text-[11px] text-gray-500 font-mono tracking-wider flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1">
            <a href="mailto:philipsedun@gmail.com" className="hover:text-[#B8FF35] transition-colors duration-200">
              // philipsedun@gmail.com
            </a>
            <span className="hidden md:inline text-white/10">|</span>
            <span className="text-gray-600">Ibadan, Nigeria</span>
          </div>
        </div>

        {/* Copyright & Meta Info */}
        <div className="text-[10px] text-gray-600 font-mono tracking-widest uppercase flex items-center gap-1">
          <span>&copy; {currentYear}</span>
          <span>&mdash;</span>
          <span>Frontend Web Development Bootcamp</span>
        </div>
        
      </div>
    </footer>
  );
}