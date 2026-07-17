export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0A0A0A] border-t border-white/5 z-10 relative">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Brand/Logo */}
        <div className="font-extrabold text-sm tracking-wider font-mono text-white">
          THE LOGIC FOUNDRY <span className="text-[#B8FF35]">2.0</span>
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