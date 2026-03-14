 "use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Globe,
  ExternalLink,
} from "lucide-react";
import { GlowButton } from "../components/GlowButton";

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const sections = [
  { id: "about", label: "About" },
  { id: "stack", label: "Tech" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

const techStack = {
  primary: ["TypeScript", "Nuxt", "Vue.js", "Node.js"],
  secondary: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Prisma",
    "REST APIs",
    "Docker",
    "Git, GitHub & GitLab",
  ],
};

const projects = [
  {
    title: "Fullstack Task Tracker",
    description:
      "A minimal productivity app with authentication, real-time updates, and responsive UI.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    github: "https://github.com/your-username/task-tracker", // TODO: replace with real link
    demo: "https://your-task-tracker-demo.com", // TODO: replace with real link
  },
  {
    title: "Developer Portfolio",
    description:
      "This portfolio, built as a modern single-page app with smooth animations.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/nilvaes/portfolio",
    demo: "https://nilvaes.github.io/portfolio/",
  },
  {
    title: "API-Driven Dashboard",
    description:
      "Dashboard that consumes public APIs, visualises data, and handles loading/error states cleanly.",
    tech: ["React", "TypeScript", "Chart.js", "REST APIs"],
    github: "https://github.com/your-username/api-dashboard", // TODO: replace with real link
    demo: "",
  },
];

const experience = [
  {
    period: "08/2022 – 01/2026",
    title: "IT Specialist for Application Development (Apprentice)",
    org: "IQ-ME GmbH · Cologne",
    description:
      "Developing internal full-stack web applications mainly with Vue.js and Nuxt, Node.js and TypeScript. Implementing REST APIs and database structures using PostgreSQL and Prisma, building modern UIs with Tailwind CSS, and collaborating on new features, bug fixing and code reviews with Git and GitLab.",
  },
  {
    period: "2022 – 2025",
    title: "Apprenticeship – IT Specialist for Application Development",
    org: "Georg Simon Ohm Vocational College",
    description:
      "Formal training in software development fundamentals, focusing on web technologies, databases and application design while working in parallel at IQ-ME GmbH.",
  },
  {
    period: "Next steps",
    title: "Growing as a Developer",
    org: "Future team & collaborators",
    description:
      "Looking to join a team where I can keep learning from experienced developers, contribute to real products and work on both frontend UX and backend APIs.",
  },
];

export default function Home() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("omer.savas@gmx.de");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      // no-op on failure; we intentionally avoid throwing in UI
    }
  };

  return (
    <main className="relative min-h-screen w-full text-zinc-50">
      {/* background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_top,_rgba(244,244,245,0.08),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(244,244,245,0.04),_transparent_55%)]" />

      {/* layout container */}
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pt-10">
        {/* header / nav */}
        <header className="sticky top-4 z-20 mb-10 flex items-center justify-between rounded-2xl border border-white/5 bg-zinc-900/70 px-4 py-2.5 shadow-lg shadow-black/40 backdrop-blur-md sm:px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-zinc-100 to-zinc-400 text-sm font-semibold text-zinc-900 shadow-md shadow-black/50">
              Ö
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-medium text-zinc-100">
                Ömer
              </span>
              <span className="text-xs text-zinc-400">
                Junior Fullstack Web Developer
              </span>
            </div>
          </div>
          <nav className="hidden items-center gap-4 text-xs font-medium text-zinc-400 sm:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-full px-3 py-1 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="flex-1 space-y-16 lg:space-y-20">
          {/* left column - hero, about, tech */}
          <section className="space-y-10">
            {/* hero */}
            <motion.section
              id="hero"
              variants={sectionVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950 px-5 py-9 shadow-2xl shadow-black/70 backdrop-blur-2xl sm:px-8 sm:py-12"
            >
              {/* hero glows */}
              <div className="pointer-events-none absolute inset-x-10 -top-40 h-64 bg-gradient-to-b from-cyan-400/50 via-cyan-500/5 to-transparent blur-3xl" />
              <div className="pointer-events-none absolute inset-x-40 -top-10 h-40 bg-gradient-to-b from-sky-300/40 via-sky-500/0 to-transparent blur-2xl" />

              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Open to junior roles & internships
              </div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="mt-6 space-y-6"
              >
                <motion.div variants={staggerItem} className="space-y-3">
                  <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
                    Full Stack Developer focused on reliable web solutions.
                  </h1>
                  <p className="max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                    I&apos;m Ömer, a full stack web developer who enjoys turning ideas into simple, fast and{" "}
                    <span className="font-semibold text-zinc-50">
                      reliable web applications
                    </span>
                    . In my apprenticeship I build internal tools mainly with
                    Vue.js and Nuxt on the frontend and Node.js with TypeScript
                    on the backend, and I also explore React and Next.js in my
                    personal projects.
                  </p>
                </motion.div>

                <motion.div
                  variants={staggerItem}
                  className="flex flex-wrap items-center gap-3"
                >
                  

                  <GlowButton
                    onClick={() =>
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    View my projects
                    <ArrowRight className="h-4 w-4" />
                  </GlowButton>
                 
                  <button
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-600/80 bg-zinc-900/80 px-4 py-2 text-sm font-medium text-zinc-200 shadow-md shadow-black/40 transition hover:border-zinc-300 hover:bg-zinc-800/80"
                  >
                    Contact me
                    <Mail className="h-4 w-4" />
                  </button>
                </motion.div>

                <motion.div
                  variants={staggerItem}
                  className="flex flex-wrap items-center gap-3 text-xs text-zinc-400"
                >
                  <span className="text-zinc-500">Focused on</span>
                  <span className="rounded-full bg-zinc-800/80 px-3 py-1">
                    Frontend UI
                  </span>
                  <span className="rounded-full bg-zinc-800/80 px-3 py-1">
                    API design
                  </span>
                  <span className="rounded-full bg-zinc-800/80 px-3 py-1">
                    Clean code
                  </span>
                </motion.div>
              </motion.div>
            </motion.section>

            {/* about */}
            <motion.section
              id="about"
              variants={sectionVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/85 px-5 py-7 shadow-xl shadow-black/60 backdrop-blur-xl sm:px-7 sm:py-9"
            >
              {/* flowing glow from hero into about */}
              <div className="pointer-events-none absolute inset-x-10 -top-10 h-24 bg-gradient-to-b from-cyan-400/35 via-cyan-400/0 to-transparent blur-2xl" />
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                About
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-[0.95rem]">
                Since 2022 I&apos;ve been training as an IT specialist for application development, working day to day on
                real internal projects. I enjoy understanding how everything fits together, from a Nuxt or Vue UI down to
                the APIs, database and deployment.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-[0.95rem]">
                My main experience is with TypeScript, Vue.js and Nuxt, Node.js, REST APIs and relational databases like
                PostgreSQL with Prisma. I also use React, Next.js and React Native in personal projects, and I care a lot
                about clean structure, readable code and the small details like loading states, error handling and
                performance.
              </p>
            </motion.section>

            {/* tech stack */}
            <motion.section
              id="stack"
              variants={sectionVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/85 px-5 py-7 shadow-xl shadow-black/60 backdrop-blur-xl sm:px-7 sm:py-9"
            >
              <div className="pointer-events-none absolute inset-x-8 -top-8 h-20 bg-gradient-to-b from-sky-400/25 via-sky-400/0 to-transparent blur-2xl" />
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Tech stack
                </h2>
                <span className="rounded-full bg-zinc-800/80 px-3 py-1 text-xs text-zinc-300">
                  Always learning
                </span>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                    Core
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {techStack.primary.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-zinc-100 text-xs font-medium text-zinc-900 px-3 py-1"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                    Comfortable with
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {techStack.secondary.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-zinc-700 text-xs font-medium text-zinc-200 px-3 py-1"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          </section>

          {/* right column - projects, experience, contact */}
          <section className="space-y-10">
            {/* projects */}
            <motion.section
              id="projects"
              variants={sectionVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/85 px-5 py-6 shadow-xl shadow-black/60 backdrop-blur-xl sm:px-6 sm:py-7"
            >
              <div className="pointer-events-none absolute inset-x-10 -top-10 h-20 bg-gradient-to-b from-cyan-400/30 via-cyan-400/0 to-transparent blur-2xl" />
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Projects
                </h2>
                <span className="text-xs text-zinc-400">
                  Curated, hands-on work
                </span>
              </div>
              <motion.div
                className="mt-4 space-y-4"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {projects.map((project) => (
                  <motion.article
                    key={project.title}
                    variants={staggerItem}
                    className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 shadow-lg shadow-black/50 transition hover:border-cyan-400/60 hover:bg-zinc-950"
                  >
                    <div className="pointer-events-none absolute inset-x-6 -top-6 h-16 bg-gradient-to-b from-cyan-400/35 via-cyan-400/0 to-transparent blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-semibold text-zinc-50">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                          {project.description}
                        </p>
                      </div>
                      <Globe className="mt-0.5 h-4 w-4 text-zinc-500 group-hover:text-zinc-300" />
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-zinc-800/80 px-2.5 py-1 text-[0.7rem] text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-zinc-300 transition hover:text-white"
                        >
                          <Github className="h-3.5 w-3.5" />
                          <span>Code</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-zinc-300 transition hover:text-white"
                        >
                          <Globe className="h-3.5 w-3.5" />
                          <span>Live demo</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </motion.section>

            {/* experience */}
            <motion.section
              id="experience"
              variants={sectionVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/85 px-5 py-6 shadow-xl shadow-black/60 backdrop-blur-xl sm:px-6 sm:py-7"
            >
              <div className="pointer-events-none absolute inset-x-6 -top-10 h-20 bg-gradient-to-b from-sky-400/25 via-sky-400/0 to-transparent blur-2xl" />
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Experience & journey
              </h2>
              <ol className="mt-4 space-y-4">
                {experience.map((item) => (
                  <li
                    key={item.title}
                    className="flex gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4"
                  >
                    <div className="mt-1 h-8 w-0.5 rounded-full bg-gradient-to-b from-zinc-100 to-zinc-500" />
                    <div className="space-y-1.5">
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                        {item.period}
                      </p>
                      <p className="text-sm font-semibold text-zinc-50">
                        {item.title}
                      </p>
                      <p className="text-xs font-medium text-zinc-400">
                        {item.org}
                      </p>
                      <p className="text-xs leading-relaxed text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.section>

            {/* contact */}
            <motion.section
              id="contact"
              variants={sectionVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/15 via-zinc-900/80 to-zinc-900/90 px-5 py-6 shadow-xl shadow-emerald-900/50 backdrop-blur-md sm:px-6 sm:py-7"
            >
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
                Contact
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-emerald-50/90">
                If you&apos;d like to work together, have feedback on my projects, or just want to connect, feel free to
                reach out. I&apos;m open to junior roles, internships and collaboration on interesting ideas.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-950 shadow-sm shadow-emerald-950/40 transition hover:bg-white"
              >
                  <Mail className="h-4 w-4" />
                <span>{emailCopied ? "Email copied!" : "Email me"}</span>
              </button>
                <a
                  href="https://github.com/nilvaes"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 px-3 py-1.5 text-xs font-medium text-emerald-100 transition hover:border-emerald-300 hover:bg-emerald-500/10"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/%C3%B6mer-savas-b31643399/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 px-3 py-1.5 text-xs font-medium text-emerald-100 transition hover:border-emerald-300 hover:bg-emerald-500/10"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.section>
          </section>
        </div>

        <footer className="mt-8 flex items-center justify-between text-[0.7rem] text-zinc-500">
          <span>© {new Date().getFullYear()} Ömer. Built with Next.js.</span>
        </footer>
      </div>
    </main>
  );
}
