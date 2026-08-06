import { motion, type Variants } from 'framer-motion';
import { Zap, Globe, GitBranch } from 'lucide-react';

export default function GatewaySection() {
  const cards = [
    {
      icon: <Zap className="w-5 h-5 text-[#B8FF35]" />,
      title: "SEE YOUR PROGRESS INSTANTLY",
      text: "You write code, and you immediately see it come to life on the screen. No guessing games — the feedback loop is seconds, not months."
    },
    {
      icon: <Globe className="w-5 h-5 text-[#B8FF35]" />,
      title: "HIGH DEMAND",
      text: "Every business, startup, and creator needs a web presence. Master this, and you master a skill that is always in demand globally."
    },
    {
      icon: <GitBranch className="w-5 h-5 text-[#B8FF35]" />,
      title: "THE ULTIMATE FOUNDATION",
      text: "The most logical stepping stone to mobile development, UI/UX, or full-stack software engineering."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

  return (
    <section className="bg-[#0A0A0A] text-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16"
        >
          <div className="lg:col-span-7">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B8FF35] font-mono block mb-4">
              01 — THE GATEWAY
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight uppercase leading-[0.95]">
              WHY FRONTEND <span className="block">DEVELOPMENT?</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
              If you want to transition into tech, you want a path that is visual, 
              practical, and highly rewarding from day one. Frontend is the 
              perfect gateway — and here is why.
            </p>
          </div>
        </motion.div>

        {/* Benefits Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 border border-white/10 bg-[#0F0F0F]"
        >
          {cards.map((card, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
              className={`p-10 flex flex-col justify-between min-h-[280px] transition-colors duration-300 group ${
                idx !== cards.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''
              }`}
            >
              <div>
                {/* Icon Container with slight hover scale */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-10 h-10 border border-white/15 flex items-center justify-center mb-8 bg-black/40 group-hover:border-[#B8FF35]/40 transition-colors duration-300"
                >
                  {card.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold tracking-tight uppercase mb-4 group-hover:text-[#B8FF35] transition-colors duration-300">
                  {card.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}