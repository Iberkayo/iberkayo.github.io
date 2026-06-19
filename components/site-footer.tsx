import { Github, Linkedin, Mail, MoveUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime">
            Build the decision, not just the model.
          </p>
          <p className="mt-3 max-w-xl text-2xl font-medium tracking-tight text-white">
            AI products for real operational choices.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="social-link" href="https://github.com/Iberkayo" target="_blank" rel="noreferrer">
            <Github size={16} /> GitHub <MoveUpRight size={14} />
          </a>
          <a className="social-link" href="https://www.linkedin.com/search/results/people/?keywords=%C4%B0brahim%20Berkay%20Oz" target="_blank" rel="noreferrer">
            <Linkedin size={16} /> LinkedIn <MoveUpRight size={14} />
          </a>
          <a className="social-link" href="mailto:berkayvesto24@gmail.com">
            <Mail size={16} /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}
