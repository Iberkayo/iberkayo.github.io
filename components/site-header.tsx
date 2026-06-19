"use client";

import Link from "next/link";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Projects" },
  { href: "/#contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="font-medium text-white">İbrahim Berkay Öz</Link>
        <nav className="flex items-center gap-5 text-sm text-muted" aria-label="Primary navigation">
          {links.map((link) => <Link key={link.href} href={link.href} className="transition-colors hover:text-white">{link.label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
