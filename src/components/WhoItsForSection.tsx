export default function WhoItsForSection() {
  const cards = [
    {
      emoji: "🎓",
      tag: "PORTFOLIO → INTERNSHIPS",
      title: "THE STUDENT",
      text: "Build a killer portfolio and gain real-world skills that your school curriculum won't teach you. Position yourself for global internships before you even graduate."
    },
    {
      emoji: "💼",
      tag: "PIVOT WITHOUT QUITTING",
      title: "THE CAREER SWITCHER",
      text: "Smoothly pivot into tech without quitting your day job. Learn at a pace that respects your professional commitments."
    },
    {
      emoji: "💸",
      tag: "FREELANCE GLOBALLY",
      title: "THE SIDE HUSTLER",
      text: "Monetize your skills quickly. Learn how to build websites for clients, freelance globally, and create a solid secondary stream of income."
    },
    {
      emoji: "🧠",
      tag: "GROW AT YOUR PACE",
      title: "THE CURIOUS LEARNER",
      text: "No pressure, just growth. Train your mind, learn how the internet actually works, and add a superpower to your personal toolkit."
    }
  ];

  return (
    <section className="bg-[#0A0A0A] text-white py-24 px-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B8FF35] font-mono block mb-4">
              02 — WHO IT'S FOR
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight uppercase leading-[0.95] max-w-2xl">
              WE DESIGNED THIS AROUND YOUR <span className="text-[#B8FF35] block">ROUTINE</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
              Whether you're juggling exams, a 9-to-5, or a business — this academy bends to fit your life.
            </p>
          </div>
        </div>

        {/* 2x2 Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="relative border border-white/10 bg-[#0F0F0F] p-10 hover:border-white/20 transition-all duration-300 group overflow-hidden"
            >
              {/* Corner Folding Accent Element */}
              <div 
                className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-[#B8FF35] to-[#B8FF35]/10 transform translate-x-4 -translate-y-4 rotate-45 transition-transform duration-500 group-hover:translate-x-3 group-hover:-translate-y-3"
                style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}
              />

              {/* Card Contents */}
              <div className="text-4xl mb-6">{card.emoji}</div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#B8FF35] block mb-2 uppercase">
                {card.tag}
              </span>
              <h3 className="text-2xl font-extrabold uppercase mb-4 tracking-tight">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
                <strong className="text-gray-400 font-semibold">The Goal:</strong> {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}