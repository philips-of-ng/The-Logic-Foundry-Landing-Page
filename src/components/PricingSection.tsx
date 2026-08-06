import { motion,type Variants } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export default function PricingSection() {
  const features = [
    "Complete 4-Module Frontend Curriculum",
    "TailwindCSS, React & Firebase Mastery",
    "Practical AI-Assisted Coding Workflows",
    "Live Portfolio & Web App Projects",
    "Git & GitHub Version Control Workflows",
    "Flexible Virtual Pacing & Mentorship",
  ];

  // Animation variants
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
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
    <section className="bg-[#0A0A0A] text-white py-24 px-6 border-t border-white/5 relative overflow-hidden">
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
              04 — INVESTMENT
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight uppercase leading-[0.95]">
              SIMPLE, TRANSPARENT{" "}
              <span className="text-[#B8FF35] block">PRICING</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
              An investment in a high-demand, high-income skill designed to pay
              for itself with your very first project or client.
            </p>
          </div>
        </motion.div>

        {/* Pricing Card Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="max-w-4xl mx-auto border border-white/10 bg-[#0F0F0F] relative overflow-hidden group"
        >
          {/* Top Neon Accent Line */}
          <div className="h-1 w-full bg-[#B8FF35]" />

          <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Price Column */}
            <div className="lg:col-span-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-10">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#B8FF35] uppercase block mb-3">
                  // FULL ACCESS COHORT
                </span>
                <h3 className="text-3xl font-extrabold uppercase tracking-tight mb-6">
                  FRONTEND DEV BOOTCAMP
                </h3>
              </div>

              {/* Amount Display */}
              <div className="my-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl font-black font-mono text-[#B8FF35] tracking-tight">
                    ₦100,000
                  </span>
                </div>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-2 block">
                  One-time payment // Flexible Installments Available
                </span>
              </div>

              {/* Quick Action Button */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://forms.gle/LGco4gL4YC8pnMJi8"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 bg-[#B8FF35] text-black font-extrabold text-xs tracking-wider px-6 py-4 uppercase flex items-center justify-center gap-3 hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(184,255,53,0.15)] w-full group/btn"
              >
                Enroll Now
                <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover/btn:translate-x-1" />
              </motion.a>
            </div>

            {/* Included Features List */}
            <div className="lg:col-span-6 flex flex-col justify-start">
              <span className="text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase block mb-6">
                WHAT'S INCLUDED:
              </span>

              <motion.ul
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <div className="w-5 h-5 rounded-none bg-[#B8FF35]/10 border border-[#B8FF35]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#B8FF35] stroke-[3]" />
                    </div>
                    <span className="leading-tight">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="bg-black/40 border-t border-white/5 py-3 px-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-2">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
              // Limited Cohort Slots to Ensure Quality Mentorship
            </span>
            <span className="text-[10px] font-mono text-[#B8FF35] uppercase tracking-widest">
              100% Virtual Access
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
