import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-paper px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-[1340px] flex-col gap-4 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Ibrahim Berkay Öz. Built with clarity and purpose.</p>
        <div className="flex gap-4">
          <a href="https://github.com/Iberkayo" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent"><Github size={15} /></a>
          <a href="https://linkedin.com/in/ibrahim-berkay-oz" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent"><Linkedin size={15} /></a>
          <a href="mailto:ibrahimberkayoz@gmail.com" aria-label="Email" className="hover:text-accent"><Mail size={15} /></a>
        </div>
      </div>
    </footer>
  );
}
