"use client";

import Link from "next/link";

const links = [
  { href: "/#about", label: "About", className: "hidden sm:block" },
  { href: "/#projects", label: "Projects", className: "" },
  { href: "/#approach", label: "Approach", className: "" },
  { href: "/projects/", label: "Archive", className: "hidden lg:block" },
  { href: "/#contact", label: "Contact", className: "hidden sm:block" }
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="font-serif text-xl font-bold tracking-tight text-ink" aria-label="Ibrahim Berkay Öz home">BÖ</Link>
        <nav className="flex items-center gap-4 text-xs font-medium text-muted sm:gap-7" aria-label="Primary navigation">
          {links.map((link) => <Link key={link.href} href={link.href} className={`${link.className} transition-colors hover:text-accent`}>{link.label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
