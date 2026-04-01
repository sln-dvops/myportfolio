import Link from "next/link";
import { Globe, Mail, ExternalLink, ArrowRight } from "lucide-react";

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
    live: "#",
    github: "#",
  },
  {
    title: "Gurusoft Website",
    subtitle: "Business website and digital presence",
    description:
      "A professional company website designed to present services clearly, improve usability, and provide a polished online presence for clients.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    highlights: [
      "Designed a clean and responsive multi-section website",
      "Structured content to communicate business services effectively",
      "Focused on clarity, layout consistency, and mobile responsiveness",
    ],
    live: "#",
    github: "#",
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
    live: "#",
    github: "#",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(168,85,247,0.15),transparent_40%)] animate-pulse" />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight bg-gradient-to-r from-yellow-400 via-white to-blue-400 text-transparent bg-clip-text animate-gradient">
          Thant Zaw
        </h1>

        <p className="mt-6 text-lg text-white/70 max-w-2xl">
          Building real-world full-stack systems, APIs, and product-driven web applications.
        </p>

        <div className="mt-10 flex gap-4">
          <Link href="#projects" className="px-6 py-3 bg-yellow-400 text-black rounded-xl font-semibold hover:scale-105 transition">
            View Projects
          </Link>

          <Link href="#contact" className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition">
            Contact
          </Link>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10">Selected Work</h2>

        <div className="grid gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-500 hover:scale-[1.01] transition">
              <div className="rounded-2xl bg-black p-7">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-sm text-yellow-400 mt-1">{project.subtitle}</p>
                <p className="mt-4 text-white/70">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="text-xs px-3 py-1 rounded-full bg-white/10">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <Link href={project.live} className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black rounded-lg text-sm font-medium hover:scale-105 transition">
                    Live <ExternalLink size={14} />
                  </Link>

                  <Link href={project.github} className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg text-sm hover:bg-white/10 transition">
                    Code <Globe size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-semibold">Let’s Connect</h2>
        <p className="mt-4 text-white/70 max-w-xl">
          Open to internships, collaborations, and building impactful systems.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap">
          <Link href="mailto:youremail@example.com" className="flex items-center gap-2 px-5 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition">
            <Mail size={16} /> Email
          </Link>

          <Link href="#" className="flex items-center gap-2 px-5 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition">
            <Globe size={16} /> Portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}
