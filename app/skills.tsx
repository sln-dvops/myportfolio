"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { JSX } from "react";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaFigma,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiVercel,
  SiJupyter,
  SiPostman,
  SiSupabase,
  SiApachespark,
  SiNetlify,
} from "react-icons/si";

const skills = {
//   Languages: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"],
//   Frontend: ["React", "Next.js", "Tailwind"],
//   Backend: ["Node.js", "Supabase", "RestAPI"],
//   Database: ["MySQL", "MongoDB"],
  Tools: [
    "Python", "JavaScript", "TypeScript", "HTML", "CSS", "React", "Next.js", "Tailwind"
,"Node.js", "Supabase", "RestAPI","MySQL", "MongoDB",
    "Docker",
    "Git",
    "GitHub",
    "AWS",
    "Vercel",
    "Netlify",
    "Jupyter",
    "Figma",
    "Postman",
    "Photoshop",
    "Adobe XD",
    
  ],
};

export default function SkillsSection() {
  return (
    <section
  id="skills"
  className="border-y border-blue-200/60 dark:border-blue-400/10 bg-blue-50/30 dark:bg-slate-950/40 backdrop-blur-sm"
>
  <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
    
    {/* HEADER */}
    <div className="mb-14">
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/40 bg-blue-100/60 dark:border-blue-400/20 dark:bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300">
        <Code2 className="h-4 w-4" />
        Skills
      </div>

      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        Tools and technologies
      </h2>
    </div>

    {/* GRID */}
    <div className="space-y-10">
      {Object.entries(skills).map(([category, items], categoryIndex) => (
        <div key={category}>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {items.map((skill, index) => {
              const { icon, hoverClass } = getIcon(skill);

              return (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: categoryIndex * 0.05 + index * 0.03,
                    duration: 0.35,
                  }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl border border-blue-200/50 dark:border-blue-400/10 bg-white/70 dark:bg-slate-900/70 p-4 shadow-md shadow-blue-100/40 dark:shadow-blue-500/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-400/20 dark:hover:shadow-blue-500/20 cursor-default"
                >
                  {/* BLUE GLOW BACKGROUND */}
                  <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-gradient-to-br from-blue-500/15 via-cyan-400/10 to-indigo-500/15" />

                  {/* CONTENT */}
                  <div className="relative flex flex-col items-center justify-center text-center">
                    
                    <div
                      className={`text-3xl text-slate-400 dark:text-slate-400 transition duration-300 ${hoverClass} group-hover:scale-110`}
                    >
                      {icon}
                    </div>

                    <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                      {skill}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}

function getIcon(skill: string): {
  icon: JSX.Element;
  hoverClass: string;
} {
  const icons: Record<string, { icon: JSX.Element; hoverClass: string }> = {
    Python: {
      icon: <FaPython />,
      hoverClass: "group-hover:text-yellow-400",
    },
    JavaScript: {
      icon: <SiJavascript />,
      hoverClass: "group-hover:text-yellow-300",
    },
    TypeScript: {
      icon: <SiTypescript />,
      hoverClass: "group-hover:text-blue-400",
    },
    HTML: {
      icon: <FaHtml5 />,
      hoverClass: "group-hover:text-orange-500",
    },
    CSS: {
      icon: <FaCss3Alt />,
      hoverClass: "group-hover:text-blue-500",
    },
    React: {
      icon: <FaReact />,
      hoverClass: "group-hover:text-cyan-400",
    },
    "Next.js": {
      icon: <SiNextdotjs />,
      hoverClass: "group-hover:text-black dark:group-hover:text-white",
    },
    Tailwind: {
      icon: <SiTailwindcss />,
      hoverClass: "group-hover:text-cyan-400",
    },
    "Node.js": {
      icon: <FaNodeJs />,
      hoverClass: "group-hover:text-green-500",
    },
    Supabase: {
      icon: <SiSupabase />,
      hoverClass: "group-hover:text-emerald-400",
    },
    RestAPI: {
      icon: <SiApachespark />,
      hoverClass: "group-hover:text-orange-400",
    },
    MySQL: {
      icon: <SiMysql />,
      hoverClass: "group-hover:text-sky-500",
    },
    MongoDB: {
      icon: <SiMongodb />,
      hoverClass: "group-hover:text-green-500",
    },
    Docker: {
      icon: <FaDocker />,
      hoverClass: "group-hover:text-sky-400",
    },
    
    Git: {
      icon: <FaGitAlt />,
      hoverClass: "group-hover:text-orange-500",
    },
    GitHub: {
      icon: <FaGithub />,
      hoverClass: "group-hover:text-slate-900 dark:group-hover:text-white",
    },
    AWS: {
      icon: <FaAws />,
      hoverClass: "group-hover:text-orange-400",
    },
    
    Vercel: {
      icon: <SiVercel />,
      hoverClass: "group-hover:text-black dark:group-hover:text-white",
    },
    Jupyter: {
      icon: <SiJupyter />,
      hoverClass: "group-hover:text-orange-400",
    },
    Figma: {
      icon: <FaFigma />,
      hoverClass: "group-hover:text-pink-400",
    },
    Postman: {
      icon: <SiPostman />,
      hoverClass: "group-hover:text-orange-500",
    },    
    Netlify: {
      icon: <SiNetlify />,
      hoverClass: "group-hover:text-green-500",
    },  
  };

  return (
    icons[skill] || {
      icon: <Code2 />,
      hoverClass: "group-hover:text-blue-400",
    }
  );
}