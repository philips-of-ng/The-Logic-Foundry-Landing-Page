import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  // Stagger container variant for clean sequential loading
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

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="bg-[#0A0A0A] text-white py-32 px-6 border-t border-white/5 relative overflow-hidden flex items-center justify-center min-h-[600px]">
      {/* Animated subtle radial glow centering on the CTA content */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#B8FF35] blur-[150px] pointer-events-none z-0" 
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center"
      >
        {/* Section Identifier */}
        <motion.span 
          variants={itemVariants}
          className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B8FF35] font-mono block mb-8"
        >
          04 — YOUR MOVE
        </motion.span>

        {/* Main Heading & Watermark Background Text Block */}
        <div className="relative w-full mb-8 flex justify-center items-center">
          {/* Huge absolute layered watermark behind the text */}
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute text-[100px] sm:text-[140px] md:text-[200px] font-black tracking-widest text-white/[0.015] uppercase select-none pointer-events-none font-sans leading-none z-0 whitespace-nowrap"
          >
            DEV PHILIPS
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-8xl font-black tracking-tight uppercase leading-[0.9] max-w-3xl z-10"
          >
            READY TO WRITE <span className="block">YOUR FIRST LINE</span> <span className="text-[#B8FF35] block md:inline">OF CODE?</span>
          </motion.h2>
        </div>

        {/* Descriptive Subtext */}
        <motion.p 
          variants={itemVariants}
          className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg mb-10"
        >
          Spaces are limited to ensure everyone gets the guidance they need. 
          Secure your spot today and take the first step toward building the digital future.
        </motion.p>

        {/* Pulsing Neon CTA Registration Button */}
        <motion.a 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="https://forms.gle/LGco4gL4YC8pnMJi8" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#B8FF35] text-black font-extrabold text-sm tracking-wider px-8 py-5 rounded-none uppercase flex items-center gap-3 hover:bg-white transition-colors duration-300 shadow-[0_0_30px_rgba(184,255,53,0.2)] group"
        >
          Fill Out the Registration Form
          <ArrowRight className="w-5 h-5 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
        </motion.a>

        {/* Divider Rule */}
        <motion.div 
          variants={itemVariants}
          className="w-full border-t border-white/5 mt-20 max-w-4xl" 
        />

        {/* Features Inline Footer Bar */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:gap-12 mt-8 text-gray-600 text-xs font-mono tracking-widest uppercase"
        >
          <span>// 100% Virtual</span>
          <span className="hidden md:inline text-white/10">|</span>
          <span>// Flexible Schedule</span>
          <span className="hidden md:inline text-white/10">|</span>
          <span>// No Experience Required</span>
        </motion.div>
      </motion.div>
    </section>
  );
}