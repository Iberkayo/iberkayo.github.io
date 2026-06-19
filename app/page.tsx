import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  ChartNoAxesCombined,
  DatabaseZap,
  Layers3,
  MoveUpRight
} from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/data/projects";

const pillars = [
  {
    icon: BrainCircuit,
    number: "01",
    title: "AI systems",
    copy: "RAG, agents, copilots, memory systems, and grounded LLM applications."
  },
  {
    icon: ChartNoAxesCombined,
    number: "02",
    title: "Machine learning",
    copy: "Classification, recommendation, risk scoring, forecasting, and evaluation."
  },
  {
    icon: Layers3,
    number: "03",
    title: "Products",
    copy: "Decision support, analytics platforms, internal tools, and SaaS."
  }
];

const approach = [
  ["Understand the problem", "Start with the costly decision, not the fashionable model."],
  ["Model the decision", "Identify signals, uncertainty, users, and intervention points."],
  ["Build the system", "Connect data, intelligence, interface, and operational workflow."],
  ["Measure outcomes", "Evaluate usefulness, reliability, and what changes in practice."]
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden px-5 pb-16 pt-36 sm:px-8 sm:pt-44">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="hero-orb pointer-events-none absolute left-[65%] top-16 h-[34rem] w-[34rem] rounded-full" />

        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-between">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-lime/20 bg-lime/[0.06] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-lime">
                <span className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_12px_#b8f25c]" />
                AI Product Builder · Turkey
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-8 max-w-6xl text-[clamp(3.7rem,9.2vw,9rem)] font-medium leading-[0.87] tracking-[-0.07em] text-white">
                Turning complex
                <br />
                information into
                <br />
                <span className="text-gradient">better decisions.</span>
              </h1>
            </Reveal>
          </div>

          <Reveal
            delay={0.16}
            className="mt-14 grid gap-8 border-t border-white/10 pt-7 md:grid-cols-[1fr_1fr]"
          >
            <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              I design and build decision-support systems, machine-learning products,
              RAG applications, and AI copilots—from raw information to a product people
              can use.
            </p>
            <div className="flex flex-wrap items-start gap-3 md:justify-end">
              <Button asChild>
                <a href="#featured">
                  View selected work <ArrowDown size={16} />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="mailto:berkayvesto24@gmail.com">
                  Start a conversation <MoveUpRight size={16} />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="featured" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label">Selected work / 05</p>
              <h2 className="section-title mt-4">Products built around decisions.</h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/projects/">
                See all projects <ArrowRight size={16} />
              </Link>
            </Button>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <Reveal
                key={project.slug}
                delay={(index % 2) * 0.06}
                className={index === featuredProjects.length - 1 ? "lg:col-span-2" : ""}
              >
                <ProjectCard project={project} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="section-label">What I build</p>
            <h2 className="section-title mt-4 max-w-4xl">
              Intelligence is only useful when it reaches the workflow.
            </h2>
          </Reveal>

          <div className="mt-14 grid divide-y divide-white/10 border-y border-white/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={index * 0.08}>
                  <div className="min-h-72 p-7 sm:p-9">
                    <div className="flex items-center justify-between">
                      <Icon className="text-lime" size={24} strokeWidth={1.5} />
                      <span className="font-mono text-xs text-white/30">{pillar.number}</span>
                    </div>
                    <h3 className="mt-16 text-3xl font-medium tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 max-w-sm leading-7 text-muted">{pillar.copy}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="approach" className="scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="section-label">Operating model</p>
            <h2 className="section-title mt-4">From ambiguity to an operating product.</h2>
            <p className="mt-6 max-w-md leading-7 text-muted">
              My work sits between product thinking, data science, and AI engineering.
              The goal is a reliable decision loop—not a model isolated from its users.
            </p>
            <DatabaseZap className="mt-12 text-lime" size={42} strokeWidth={1.2} />
          </Reveal>

          <div className="border-t border-white/10">
            {approach.map(([title, copy], index) => (
              <Reveal key={title} delay={index * 0.05}>
                <div className="group grid gap-4 border-b border-white/10 py-7 sm:grid-cols-[4rem_1fr_1.2fr] sm:items-center">
                  <span className="font-mono text-xs text-lime">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-medium tracking-tight text-white">{title}</h3>
                  <p className="leading-7 text-muted transition-colors group-hover:text-white/75">
                    {copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32">
        <Reveal>
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-panel px-7 py-12 shadow-glow sm:px-12 sm:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="section-label">Next decision</p>
                <h2 className="mt-5 max-w-4xl text-4xl font-medium tracking-[-0.045em] sm:text-6xl">
                  Have a hard problem hiding inside your data or documents?
                </h2>
              </div>
              <div className="lg:text-right">
                <Button asChild>
                  <a href="mailto:berkayvesto24@gmail.com">
                    Let&apos;s examine it <MoveUpRight size={16} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
