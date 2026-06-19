"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects/", label: "Projects" },
  { href: "/#approach", label: "Approach" }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 flex max-w-7xl items-center justify-between border border-white/10 bg-ink/75 px-4 py-3 backdrop-blur-xl sm:mt-5 sm:rounded-full sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Berkay Öz home">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-lime font-mono text-xs font-bold text-ink">
            BÖ
          </span>
          <span className="hidden text-sm font-medium text-white sm:block">Berkay Öz</span>
        </Link>

        <nav className="flex items-center gap-1" aria-label="Primary navigation">
          {links.map((link) => {
            const active =
              link.href === "/projects/"
                ? pathname.startsWith("/projects")
                : link.href === "/" && pathname === "/";
            return (
              <Button key={link.href} asChild variant="ghost">
                <Link
                  href={link.href}
                  className={cn(active && "bg-white/[0.06] text-white")}
                >
                  {link.label}
                </Link>
              </Button>
            );
          })}
        </nav>

        <Button asChild variant="outline" className="hidden sm:inline-flex">
          <a href="mailto:berkayvesto24@gmail.com">Let&apos;s talk</a>
        </Button>
      </div>
    </header>
  );
}
