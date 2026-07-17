import { useState } from 'react';
import { Code, Terminal, GitPullRequest } from 'lucide-react';

export default function CurriculumSection() {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      id: "MODULE 01",
      title: "THE BLUEPRINT",
      tech: "HTML & CSS",
      icon: <Code className="w-5 h-5 text-[#B8FF35]" />,
      description: "Learn how to structure web pages and style them beautifully. You'll build responsive layouts that look flawless on both mobile and desktop screens.",
      endGoal: "Build a fully responsive personal portfolio site from scratch.",
      skills: [
        "Semantic HTML5",
        "CSS Flexbox & Grid",
        "Responsive Design",
        "Media Queries",
        "CSS Variables",
        "Web Typography"
      ]
    },
    {
      id: "MODULE 02",
      title: "THE ENGINE",
      tech: "JAVASCRIPT",
      icon: <Terminal className="w-5 h-5 text-[#B8FF35]" />,
      description: "Step into programming logic. Learn how to manipulate the Document Object Model (DOM), work with APIs, and handle interactive user events dynamically.",
      endGoal: "Build an interactive dynamic Dashboard connected to a weather API.",
      skills: [
        "DOM Manipulation",
        "Asynchronous JS & Fetch API",
        "Variables, Loops & Conditionals",
        "Event Observers",
        "JSON Data Parsing",
        "ES6+ Features"
      ]
    },
    {
      id: "MODULE 03",
      title: "MODERN WORKFLOWS",
      tech: "GIT & TOOLING",
      icon: <GitPullRequest className="w-5 h-5 text-[#B8FF35]" />,
      description: "Learn how engineers write code professionally. Master local development setups, version control with Git & GitHub, and deploying your apps instantly.",
      endGoal: "Deploy your code live to production with automated CI/CD flows.",
      skills: [
        "Git Branching & Commits",
        "GitHub Collaboration",
        "Package Management (NPM)",
        "Vite & Modern Bundlers",
        "Deployment via Netlify/Vercel",
        "Debugging Workflows"
      ]
    }
  ];

  return (
    <section className="bg-[#0A0A0A] text-white py-24 px-6 relative flex">
      {/* Left side stylized rotated label */}
      <div className="hidden xl:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col items-center select-none opacity-20">
        <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-gray-500 whitespace-nowrap rotate-270 origin-center">
          CURRICULUM — LOGIC FOUNDRY 2.0
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B8FF35] font-mono block mb-4">
            03 — CURRICULUM
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight uppercase leading-[0.95]">
            FROM BLANK SCREEN <span className="text-[#B8FF35] block">TO PRODUCTION</span>
          </h2>
        </div>

        {/* Tabbed Interactive Box */}
        <div className="border border-white/10 bg-[#0F0F0F]">
          
          {/* Module Tabs Header */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10">
            {modules.map((mod, idx) => (
              <button
                key={idx}
                onClick={() => setActiveModule(idx)}
                className={`p-6 text-left transition-all duration-300 flex flex-col justify-center gap-1 group ${
                  activeModule === idx 
                    ? 'bg-[#B8FF35] text-black' 
                    : 'bg-transparent text-gray-400 hover:text-white border-b md:border-b-0 md:border-r border-white/10'
                }`}
              >
                <span className={`text-[10px] font-mono font-extrabold tracking-widest ${
                  activeModule === idx ? 'text-black/60' : 'text-gray-500 group-hover:text-gray-300'
                }`}>
                  {mod.id}
                </span>
                <span className="text-base font-black tracking-tight uppercase">
                  {mod.title}
                </span>
              </button>
            ))}
          </div>

          {/* Module Tab Content Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px]">
            {/* Left Column: Descriptions & End Goal */}
            <div className="lg:col-span-7 p-10 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
              <div>
                {/* Badge Indicator */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center">
                    {modules[activeModule].icon}
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-[#B8FF35] uppercase">
                    {modules[activeModule].tech}
                  </span>
                </div>

                <h3 className="text-3xl font-black uppercase tracking-tight mb-4">
                  {modules[activeModule].title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                  {modules[activeModule].description}
                </p>
              </div>

              {/* End Goal Green Box */}
              <div className="mt-8 border border-[#B8FF35]/20 bg-[#B8FF35]/5 p-5 max-w-xl">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#B8FF35] block mb-2">
                  // END GOAL
                </span>
                <p className="text-sm font-semibold text-white">
                  {modules[activeModule].endGoal}
                </p>
              </div>
            </div>

            {/* Right Column: Skills List */}
            <div className="lg:col-span-5 p-10 bg-black/20 flex flex-col justify-start">
              <span className="text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase block mb-8">
                SKILLS YOU'LL BUILD
              </span>

              <ul className="space-y-4">
                {modules[activeModule].skills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-gray-300 group">
                    <span className="text-[#B8FF35] font-mono font-bold select-none group-hover:translate-x-1 transition-transform duration-200">
                      &gt;
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}