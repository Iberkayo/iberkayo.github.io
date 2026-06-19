import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projectGroups, projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects by İbrahim Berkay Öz across machine learning, RAG, decision support, analytics, and AI products."
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <Link href="/" className="simple-link text-sm"><ArrowLeft size={15} /> Home</Link>
      <header className="mt-12 border-b border-white/10 pb-10">
        <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Projects</h1>
        <p className="mt-4 max-w-2xl leading-7 text-muted">A collection of decision-support platforms, machine-learning systems, RAG applications, and data product experiments.</p>
      </header>

      {projectGroups.map((group) => {
        const items = projects.filter((project) => project.tier === group.key);
        return (
          <section key={group.key} className="content-section">
            <h2 className="simple-heading">{group.title}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/45">{group.description}</p>
            <div className="mt-4 divide-y divide-white/10">
              {items.map((project) => (
                <article key={project.slug} className="py-7">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-xl font-medium text-white">{project.title}</h3>
                      <p className="mt-1 text-sm text-lime/80">{project.eyebrow}</p>
                    </div>
                    {project.href && <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} className="text-white/35 hover:text-white"><ArrowUpRight size={18} /></a>}
                  </div>
                  <p className="mt-4 leading-7 text-muted">{project.approach}</p>
                  <p className="mt-3 text-sm text-white/40">{project.technologies.join(" · ")}</p>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
