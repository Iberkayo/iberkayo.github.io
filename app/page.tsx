import Link from "next/link";
import { ArrowRight, BrainCircuit, ChartNoAxesCombined, Github, Layers3, Mail, MapPin, MoveUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/data/projects";

const disciplines = [
  [BrainCircuit, "AI engineering", "RAG systems, agents, copilots, memory architectures, and evaluation."],
  [ChartNoAxesCombined, "Data science", "Risk scoring, recommendation, forecasting, and operational analytics."],
  [Layers3, "Product building", "Turning models and data pipelines into tools that fit real workflows."]
] as const;

const journey = [
  ["Foundation", "Learning to explain what the data means", "Analytics, machine learning, and business-facing dashboards formed the base of my work."],
  ["Applied systems", "Moving from models to decisions", "Recommendation systems, risk signals, and operational tools shifted my focus toward what users do next."],
  ["Current direction", "Building AI products end to end", "Today I work across RAG, agents, persistent memory, evaluation, APIs, interfaces, and SaaS products."]
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-24 pt-36 sm:px-8 sm:pb-32 sm:pt-44">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="hero-orb pointer-events-none absolute left-[66%] top-16 h-[30rem] w-[30rem] rounded-full opacity-50" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              <span className="text-lime">Data Scientist & AI Product Builder</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
              <span className="inline-flex items-center gap-1.5"><MapPin size={12} /> Turkey</span>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <Reveal delay={0.06}>
              <p className="mb-5 text-lg text-muted sm:text-xl">Hello, I&apos;m</p>
              <h1 className="text-[clamp(4.8rem,12vw,11rem)] font-medium leading-[0.78] tracking-[-0.085em] text-white">
                Berkay<br /><span className="text-gradient">Öz.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.13} className="border-l border-white/10 pl-6 sm:pl-8">
              <p className="text-xl leading-9 text-white/85">I build AI systems that help people understand information and make better decisions.</p>
              <p className="mt-5 leading-7 text-muted">My work sits between data science, AI engineering, and product development—from machine-learning models to RAG applications and decision-support platforms.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="outline"><a href="https://github.com/Iberkayo" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a></Button>
                <Button asChild variant="ghost"><a href="mailto:berkayvesto24@gmail.com"><Mail size={16} /> Email</a></Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-28 border-y border-white/10 bg-white/[0.018] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.45fr_1fr]">
          <Reveal><p className="section-label">About</p></Reveal>
          <Reveal delay={0.05}>
            <p className="max-w-4xl text-3xl font-medium leading-[1.35] tracking-[-0.035em] text-white sm:text-5xl">I&apos;m interested in the space between a promising model and a product that is actually useful.</p>
            <div className="mt-10 grid gap-6 text-base leading-8 text-muted md:grid-cols-2">
              <p>That means understanding the business problem, structuring the data, designing the intelligence layer, and building the interface around it.</p>
              <p>I care about grounded outputs, measurable quality, human oversight, and systems that improve how a real decision gets made.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="work" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="section-label">Selected projects</p><h2 className="section-title mt-4">A few things I&apos;ve built.</h2></div>
            <Button asChild variant="ghost"><Link href="/projects/">Full project archive <ArrowRight size={16} /></Link></Button>
          </Reveal>
          <div className="mt-14 border-t border-white/10">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={(index % 3) * 0.04}>
                <article className="group grid gap-5 border-b border-white/10 py-9 transition-colors hover:bg-white/[0.015] sm:grid-cols-[4rem_0.8fr_1.25fr_auto] sm:items-start sm:px-3">
                  <span className="font-mono text-xs text-white/30">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-lime">{project.eyebrow}</p>
                    <h3 className="mt-2 text-2xl font-medium tracking-[-0.03em] text-white">{project.title}</h3>
                    {project.status && <p className="mt-2 text-xs text-white/35">{project.status}</p>}
                  </div>
                  <div>
                    <p className="leading-7 text-muted">{project.approach}</p>
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-wide text-white/35">
                      {project.technologies.slice(0, 4).map((technology) => <span key={technology}>{technology}</span>)}
                    </div>
                  </div>
                  {project.href ? <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition-all hover:border-white/30 hover:text-white"><MoveUpRight size={17} /></a> : <span className="hidden h-10 w-10 sm:block" />}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] px-5 py-24 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal><p className="section-label">What I work across</p></Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {disciplines.map(([Icon, title, copy], index) => (
              <Reveal key={title} delay={index * 0.06}>
                <div className="h-full border-t border-white/15 py-7"><Icon size={22} strokeWidth={1.4} className="text-lime" /><h3 className="mt-10 text-2xl font-medium tracking-tight">{title}</h3><p className="mt-3 max-w-sm leading-7 text-muted">{copy}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.5fr_1fr]">
          <Reveal><p className="section-label">Journey</p><h2 className="mt-4 text-4xl font-medium tracking-[-0.045em] sm:text-5xl">How the work evolved.</h2></Reveal>
          <div className="border-t border-white/10">
            {journey.map(([period, title, copy], index) => (
              <Reveal key={period} delay={index * 0.05}>
                <div className="grid gap-4 border-b border-white/10 py-8 sm:grid-cols-[8rem_1fr]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-lime">{period}</span>
                  <div><h3 className="text-xl font-medium text-white">{title}</h3><p className="mt-3 max-w-2xl leading-7 text-muted">{copy}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <div><p className="section-label">Contact</p><p className="mt-3 text-2xl font-medium tracking-tight">Always open to exchanging ideas about AI products and data.</p></div>
            <a href="mailto:berkayvesto24@gmail.com" className="text-lg text-white underline decoration-white/20 underline-offset-8 transition-colors hover:decoration-lime">berkayvesto24@gmail.com</a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
