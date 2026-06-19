import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const accentStyles = {
  lime: "from-lime/20 text-lime",
  cyan: "from-cyan/20 text-cyan",
  violet: "from-violet/20 text-violet",
  amber: "from-amber-400/20 text-amber-300",
  rose: "from-rose-400/20 text-rose-300"
};

export function ProjectCard({
  project,
  index,
  compact = false
}: {
  project: Project;
  index: number;
  compact?: boolean;
}) {
  const content = (
    <article
      className={cn(
        "project-card group relative flex h-full flex-col overflow-hidden border border-white/10 bg-panel/70",
        compact ? "rounded-2xl p-5 sm:p-6" : "rounded-[1.75rem] p-6 sm:p-8"
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b to-transparent opacity-70",
          accentStyles[project.accent].split(" ")[0]
        )}
      />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p
            className={cn(
              "font-mono text-[11px] uppercase tracking-[0.18em]",
              accentStyles[project.accent].split(" ")[1]
            )}
          >
            {project.eyebrow}
          </p>
          <h3
            className={cn(
              "mt-3 font-medium tracking-[-0.035em] text-white",
              compact ? "text-2xl" : "text-3xl sm:text-4xl"
            )}
          >
            {project.title}
          </h3>
        </div>
        <span className="font-mono text-xs text-white/30">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="relative mt-6 text-sm leading-7 text-muted sm:text-base">
        {project.approach}
      </p>

      {!compact && (
        <div className="relative mt-7 border-l border-white/10 pl-4">
          <p className="text-xs uppercase tracking-[0.16em] text-white/40">Business impact</p>
          <p className="mt-2 text-sm leading-6 text-white/80">{project.impact}</p>
        </div>
      )}

      <div className="relative mt-auto flex flex-wrap gap-2 pt-8">
        {project.technologies.slice(0, compact ? 4 : 5).map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-white/55"
          >
            {technology}
          </span>
        ))}
      </div>

      {project.href && (
        <div className="relative mt-6 flex items-center gap-2 text-sm font-medium text-white">
          {project.linkLabel ?? "Explore project"}
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
      )}
    </article>
  );

  if (!project.href) return content;

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
    >
      {content}
    </a>
  );
}
