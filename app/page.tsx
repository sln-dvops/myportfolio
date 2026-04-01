import Link from "next/link";
import {
  ArrowRight,
  Code2,
  ExternalLink,
  Globe,
  Mail,
  Sparkles,
  Layers3,
  Briefcase,
  GraduationCap,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import SkillsSection from "./skills";

const projects = [
  {
    title: "SpeedyXpress Booking System",
    subtitle: "Full-stack logistics booking platform",
    description:
      "A logistics web application for creating parcel orders, calculating delivery pricing, handling payments, and managing parcel records through a dashboard.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "REST APIs"],
    highlights: [
      "Built a weight-based pricing flow for parcel bookings",
      "Integrated payment and tracking workflows with external APIs",
      "Created dashboard views for orders and parcel management",
    ],
    image: "/speedyxpress.png",
    live: "https://booking.speedyxpress.co",
  },
  {
    title: "Gurusoft Website",
    subtitle: "Business website and digital presence",
    description:
      "A professional company website designed to present services clearly, improve usability, and provide a polished online presence for clients.",
    stack: ["HTML", "CSS", "Javascript"],
    highlights: [
      "Designed a clean and responsive multi-section website",
      "Structured content to communicate business services effectively",
      "Focused on clarity, layout consistency, and mobile responsiveness",
    ],
    live: "https://gurusoftpte.netlify.app/",
    image: "/gurusoft.png",
  },
  {
    title: "Tracking Page in Wix",
    subtitle: "Embedded tracking experience for customers",
    description:
      "A tracking page embedded inside Wix that allows users to check parcel status through integrated delivery tracking workflows.",
    stack: ["Wix", "JavaScript", "API Integration"],
    highlights: [
      "Integrated tracking functionality into an embedded Wix flow",
      "Worked around iframe and redirect handling constraints",
      "Improved customer tracking accessibility within the business site",
    ],
    live: "https://www.speedyxpress.co/tracking",
    image: "/tracking.png",
  },
];

const skills = {
  Languages: ["JavaScript", "TypeScript", "C++", "HTML", "CSS"],
  Frameworks: ["React", "Next.js", "Tailwind CSS"],
  "Backend & Tools": ["Supabase", "Git", "Vercel", "REST APIs"],
  Focus: ["Full-Stack Development", "API Integration", "System Design Basics"],
};

const quickStats = [
  { label: "Real World Projects", value: "3+" },
  { label: "Main Focus", value: "Full-Stack" },
  { label: "Fresh Graduate", value: "IIT @ TP" },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-5%] h-[28rem] w-[28rem] rounded-full bg-blue-300/25 blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-[24rem] w-[24rem] rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[30%] h-[22rem] w-[22rem] rounded-full bg-indigo-300/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-blue-100 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <Link
            href="#home"
            className="group inline-flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-blue-700 dark:text-blue-300 uppercase"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20">
              N
            </span>
            <span className="hidden sm:block">Shun Lei Naing</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
            <Link href="#about" className="transition hover:text-blue-600">
              About
            </Link>
            <Link href="/app/skills.tsx" className="transition hover:text-blue-600">
              Projects
            </Link>
            <Link href="#skills" className="transition hover:text-blue-600">
              Skills
            </Link>
            <Link href="#contact" className="transition hover:text-blue-600">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 dark:bg-blue-500/10 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              Let’s Connect
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-white/80 dark:bg-slate-900/60 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Hi, my name is Shun Lei Naing!
            </div>

            <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              I build
              <span className="bg-gradient-to-r from-blue-700 via-cyan-600 to-indigo-600  bg-clip-text text-transparent">
                {" "}
                practical full-stack systems{" "}
              </span>
              with clean design and real-world workflows.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              I enjoy creating digital products that feel polished, useful, and
              intuitive — from logistics platforms and tracking experiences to
              business websites and API-driven systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="https://github.com/sln-dvops"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 dark:bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 dark:text-blue-300"
              >
                <Globe className="h-4 w-4" />
                GitHub
              </Link>

              <Link
                href="https://www.linkedin.com/in/shun-lei-naing-355288282/"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 dark:bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 dark:text-blue-300"
              >
                <Globe className="h-4 w-4" />
                LinkedIn
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {quickStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/70 dark:border-white/10 bg-white/70 dark:bg-slate-900/80 p-5 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-2xl font-semibold text-slate-900 dark:text-white">
                    <span className="text-blue-600 dark:text-blue-400">
                      {stat.value}
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[2rem] border border-white/70 bg-white/70 dark:bg-slate-900/70 p-5 shadow-xl shadow-blue-100/60 backdrop-blur-xl">
              <div className="rounded-[1.75rem] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-blue-200">
                      Selected Work
                    </p>
                    <h2 className="mt-2 text-xl font-semibold">
                      Building systems that feel real
                    </h2>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-3">
                    <Layers3 className="h-5 w-5 text-blue-200" />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {projects.map((project, index) => (
                    <div
                      key={project.title}
                      className="group rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:border-blue-300/30 hover:bg-white/10"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs text-blue-200">0{index + 1}</p>
                          <h3 className="mt-1 font-semibold">
                            {project.title}
                          </h3>
                          <p className="mt-1 text-sm text-white/65">
                            {project.subtitle}
                          </p>
                        </div>

                        <div className="translate-x-0 opacity-70 transition group-hover:translate-x-1 group-hover:opacity-100">
                          <ChevronRight className="h-5 w-5 text-blue-200" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-3xl border border-blue-300/20 bg-blue-400/10 p-4">
                  <p className="text-sm text-blue-100">
                    Focused on shipping useful products with structured systems,
                    clean interfaces, and strong user flow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
  id="about"
  className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10"
>
  <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] items-center">
    
    {/* LEFT: PROFILE */}
    <div className="flex flex-col items-center lg:items-start">
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
        
        {/* glow */}
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-indigo-500/30 blur-2xl" />

        {/* image */}
        <img
          src="/profile.jpg"
          alt="Shun Lei Naing"
          className="relative rounded-3xl object-cover w-full h-full border border-white/10 shadow-xl"
        />
      </div>

      <p className="mt-5 text-sm text-blue-600 dark:text-blue-400 font-medium text-center lg:text-left">
        Software Engineer
      </p>
    </div>

    {/* RIGHT: TEXT */}
    <div>
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 dark:bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300">
        <GraduationCap className="h-4 w-4" />
        About
      </div>

      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        A bit about me
      </h2>

      <div className="mt-6 rounded-[1rem] border border-white/80 dark:border-white/10 bg-white/80 dark:bg-slate-900/70 p-8 shadow-lg shadow-blue-100/40 dark:shadow-blue-500/10 backdrop-blur-xl">
        
        <p className="leading-8 text-slate-600 dark:text-slate-300">
          Hi, I’m Shun Lei Naing, a fresh graduate from Temasek Polytechnic with experience in real world projects. I love building systems that solve practical problems. I enjoy creating full-stack applications with clear user flows, reliable integrations, and scalable foundations.
        </p>

        <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
          My recent work has focused on logistics workflows, customer-facing tracking experiences, and business websites. I’m also exploring broader software engineering problem-solving through projects and hands-on development.
        </p>

        <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
          I also had the opportunity to represent my team at an IMDA event, where we showcased our project at a public booth.
        </p>


      </div>
      <div className="mt-8 flex flex-wrap gap-4">
  
  {/* VIEW RESUME */}
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30"
  >
    View Resume
  </a>

  {/* DOWNLOAD RESUME */}
  <a
    href="/resume.pdf"
    download
    className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 transition hover:border-blue-200 hover:text-blue-700 dark:hover:bg-slate-700"
  >
    Download
  </a>

</div>
    </div>
  </div>

  {/* IMDA GALLERY */}
  <div className="mt-16">
    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-5">
      IMDA Event Showcase
    </h3>

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      
      {["/imda1.jpg", "/imda2.jpg", "/imda3.jpg"].map((src) => (
        <div
          key={src}
          className="relative h-56 rounded-2xl overflow-hidden group border border-white/10"
        >
          <img
            src={src}
            className="w-full h-full object-cover transition duration-300 group-hover:scale-105 brightness-95 dark:brightness-75"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
        </div>
      ))}
      
    </div>
  </div>
</section>

      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10"
      >
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 dark:bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300">
            <Briefcase className="h-4 w-4" />
            Projects
          </div>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            A few projects that reflect my interest in building useful systems
            with strong functionality, polished interfaces, and real-world
            practicality.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-[2rem] border border-white/80 dark:border-white/10 bg-white/75 dark:bg-slate-900/70 p-7 shadow-lg shadow-blue-100/40 dark:shadow-blue-500/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-300/40 dark:hover:border-blue-400/30"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                {/* LEFT: TEXT */}
                <div className="max-w-3xl">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                    {project.subtitle}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-blue-200 bg-blue-50 dark:bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300 transition hover:bg-blue-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5"
                    >
                      Live Demo
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* RIGHT: IMAGE */}
                <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-blue-500/40 via-cyan-400/30 to-indigo-500/40">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block w-full lg:w-[320px] h-[200px] sm:h-[240px] lg:h-[200px] rounded-2xl overflow-hidden bg-slate-900"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="object-cover transition duration-300"
                    />
                    {/* label */}
                    <div className="absolute bottom-3 left-3 rounded-full bg-white/80 dark:bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-200 backdrop-blur">
                      Live Preview
                    </div>
                  </a>
                </div>
              </div>

              {/* HIGHLIGHTS */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {project.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-3xl border border-slate-300 dark:border-white/10 bg-slate-50/80 dark:bg-slate-800/50 p-5 text-sm leading-7 text-slate-600 dark:text-slate-300 transition group-hover:border-blue-100 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <SkillsSection></SkillsSection>

      <section id="contact" className="pb-20 pt-6">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-blue-200 bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-600 p-8 text-white shadow-2xl shadow-blue-200/50 sm:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-12 left-10 h-40 w-40 rounded-full bg-cyan-200/20 blur-2xl" />

            <div className="relative">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-100">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Let’s build something meaningful
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-white/85">
                I’m open to internship opportunities, collaborations, and
                conversations about web development, systems, and product
                building.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="mailto:shunleinaing0@gmail.com"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                >
                  <Mail className="h-4 w-4" />
                  shunleinaing0@gmail.com
                </Link>

                <Link
                  href="https://github.com/sln-dvops"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                >
                  <Globe className="h-4 w-4" />
                  GitHub
                </Link>

                <Link
                  href="https://www.linkedin.com/in/shun-lei-naing-355288282/"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                >
                  <Globe className="h-4 w-4" />
                  LinkedIn
                </Link>

                <Link
                  href="#home"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                >
                  Back to Top
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
