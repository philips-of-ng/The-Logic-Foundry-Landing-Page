import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  // Stagger container variant for smooth sequential loading
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Standard fade-up variant for text and elements
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

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
      {/* Animated soft neon ambient glow */}
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#B8FF35] blur-[120px] pointer-events-none" 
      />

      {/* Main Hero Content Container */}
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 w-full max-w-7xl mx-auto px-6 flex flex-col justify-center pt-12 pb-20 z-10"
      >
        
        {/* Applications Open Tag */}
        <motion.div 
          variants={itemVariants}
          className="self-start border border-[#B8FF35]/30 bg-[#B8FF35]/5 px-3 py-1.5 flex items-center gap-2 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF35] animate-pulse" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B8FF35] font-mono">
            Applications Now Open
          </span>
        </motion.div>

        {/* Dynamic Headings */}
        <motion.h1 
          variants={itemVariants} 
          className="text-5xl md:text-8xl font-black tracking-tight uppercase leading-[0.9] max-w-5xl"
        >
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
        </motion.h1>

        {/* Large Subtitle */}
        <motion.p 
          variants={itemVariants}
          className="text-3xl md:text-5xl text-gray-500 font-medium tracking-tight mt-8 max-w-4xl"
        >
          Learn on Your Own Terms.
        </motion.p>

        {/* Copy Paragraph */}
        <motion.p 
          variants={itemVariants}
          className="text-gray-400 text-sm md:text-base leading-relaxed mt-6 max-w-xl"
        >
          Stop passively watching tutorials. Learn how to craft responsive, stunning, and 
          highly functional websites from scratch — a flexible, virtual curriculum designed 
          for students, professionals, and creators looking to unlock a high-income tech skill.
        </motion.p>

        {/* CTA Button Group */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center gap-6 mt-10"
        >
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#B8FF35] text-black font-extrabold text-sm tracking-wider px-8 py-4 rounded-none uppercase flex items-center gap-3 hover:bg-white transition-colors duration-300 shadow-[0_0_25px_rgba(184,255,53,0.25)] cursor-pointer group" 
            onClick={() => window.location.href = 'https://forms.gle/LGco4gL4YC8pnMJi8'}
          >
            Claim Your Spot Now
            <ArrowRight className="w-5 h-5 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
          
          <span className="text-gray-600 text-xs font-mono tracking-widest">
            // No prior coding experience required
          </span>
        </motion.div>

        {/* Section divider rule */}
        <motion.div 
          variants={itemVariants}
          className="w-full border-t border-white/5 mt-16 max-w-md" 
        />

        {/* Live Statistics & Badges */}
        <motion.div 
          variants={itemVariants}
          className="flex gap-16 mt-8"
        >
          
          {/* Module Count */}
          <div className="flex flex-col">
            <div className="flex items-start gap-1">
              <span className="text-3xl font-extrabold text-[#B8FF35] font-mono">4</span>
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

        </motion.div>
      </motion.main>
    </div>
  );
}