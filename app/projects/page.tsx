import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projectGroups, projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies and projects by Ibrahim Berkay Öz across machine learning, RAG, decision support, analytics, and AI products."
};

export default function ProjectsPage() {
  return (
    <div className="section-shell pb-24 pt-28 sm:pt-36">
      <Link href="/" className="text-link"><ArrowLeft size={15} /> Back home</Link>
      <header className="mt-12 max-w-3xl border-b border-rule pb-12">
        <p className="eyebrow">Project archive</p>
        <h1 className="mt-4 font-serif text-5xl font-semibold tracking-[-0.045em] text-ink sm:text-6xl">Selected systems and experiments</h1>
        <p className="mt-6 text-lg leading-8 text-muted">Projects are grouped by their role in my work: flagship decision products, supporting AI systems, and focused data experiments.</p>
      </header>

      {projectGroups.map((group) => {
        const items = projects.filter((project) => project.tier === group.key);
        return (
          <section key={group.key} className="archive-section">
            <div className="grid gap-4 md:grid-cols-[0.35fr_1fr]">
              <div><p className="eyebrow">{group.index}</p><h2 className="mt-3 font-serif text-3xl font-semibold text-ink">{group.title}</h2></div>
              <p className="max-w-2xl leading-7 text-muted">{group.description}</p>
            </div>
            <div className="mt-8">
              {items.map((project) => (
                <article id={project.slug} key={project.slug} className="archive-card scroll-mt-24">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div><h3 className="font-serif text-2xl font-semibold text-ink">{project.title}</h3><p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-accent">{project.eyebrow}</p></div>
                      {project.href && <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} className="text-faint hover:text-accent"><ArrowUpRight size={18} /></a>}
                    </div>
                    {project.status && <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">{project.status}</p>}
                    <p className="mt-5 text-xs text-faint">{project.technologies.join(" · ")}</p>
                  </div>
                  <dl className="grid gap-5 text-sm leading-6 sm:grid-cols-3">
                    <div><dt className="case-label">Problem</dt><dd className="mt-2 text-muted">{project.problem}</dd></div>
                    <div><dt className="case-label">Approach</dt><dd className="mt-2 text-muted">{project.approach}</dd></div>
                    <div><dt className="case-label">Outcome</dt><dd className="mt-2 text-muted">{project.impact}</dd></div>
                  </dl>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
