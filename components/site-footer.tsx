import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 İbrahim Berkay Öz</p>
        <div className="flex gap-4">
          <a href="https://github.com/Iberkayo" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white"><Github size={16} /></a>
          <a href="https://linkedin.com/in/ibrahim-berkay-oz" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={16} /></a>
          <a href="mailto:ibrahimberkayoz@gmail.com" aria-label="Email" className="hover:text-white"><Mail size={16} /></a>
        </div>
      </div>
    </footer>
  );
}
