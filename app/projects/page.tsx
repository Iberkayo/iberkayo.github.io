import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { projectGroups, projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Decision-support platforms, machine-learning systems, RAG applications, copilots, and applied data products built by Berkay Öz."
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <Button asChild variant="ghost" className="-ml-3">
              <Link href="/">
                <ArrowLeft size={16} /> Back home
              </Link>
            </Button>
            <p className="section-label mt-14">Project index / {projects.length.toString().padStart(2, "0")}</p>
            <h1 className="mt-5 max-w-6xl text-[clamp(3.8rem,9vw,8.5rem)] font-medium leading-[0.9] tracking-[-0.065em]">
              Systems built to
              <br />
              <span className="text-gradient">change what happens next.</span>
            </h1>
            <p className="mt-9 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              A complete view of my work across decision intelligence, machine learning,
              retrieval systems, analytics, and AI-enabled products.
            </p>
          </Reveal>
        </div>
      </section>

      {projectGroups.map((group) => {
        const groupProjects = projects.filter((project) => project.tier === group.key);
        return (
          <section
            key={group.key}
            className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-28"
          >
            <div className="mx-auto max-w-7xl">
              <Reveal className="grid gap-5 lg:grid-cols-[0.2fr_0.8fr_1fr] lg:items-start">
                <span className="font-mono text-xs text-lime">{group.index}</span>
                <h2 className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                  {group.title}
                </h2>
                <p className="max-w-xl leading-7 text-muted">{group.description}</p>
              </Reveal>

              <div className="mt-12 grid gap-5 md:grid-cols-2">
                {groupProjects.map((project, index) => (
                  <Reveal key={project.slug} delay={(index % 2) * 0.06}>
                    <ProjectCard project={project} index={index} compact />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
