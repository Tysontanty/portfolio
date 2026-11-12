"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TwinMark } from "@/components/TwinMark";
import { site } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const items = site.nav.filter((item) => item.href !== "/");
  const left = items.slice(0, Math.ceil(items.length / 2));
  const right = items.slice(Math.ceil(items.length / 2));

  return (
    <header className="sticky top-0 z-20 bg-[color:color-mix(in_srgb,var(--paper)_72%,transparent)] py-4 backdrop-blur-md">
      <nav className="px-8 sm:px-12">
        <ul className="mx-auto flex max-w-4xl items-center justify-between text-sm tracking-wide">
          {left.map((item) => (
            <NavItem key={item.href} item={item} pathname={pathname} />
          ))}
          <li>
            <Link
              href="/"
              aria-label="Home"
              className={`flex h-8 w-8 items-center justify-center text-[#3cffe8] transition-opacity ${
                pathname === "/" ? "opacity-100" : "opacity-80 hover:opacity-100"
              }`}
            >
              <TwinMark className="h-5 w-5 fill-current" />
            </Link>
          </li>
          {right.map((item) => (
            <NavItem key={item.href} item={item} pathname={pathname} />
          ))}
        </ul>
      </nav>
    </header>
  );
}

function NavItem({
  item,
  pathname,
}: {
  item: (typeof site.nav)[number];
  pathname: string;
}) {
  const isExternal = item.href.endsWith(".pdf") || item.href.startsWith("mailto:");
  const active = !isExternal && pathname.startsWith(item.href);
  const className = `transition-colors ${
    active ? "text-[var(--ink)]" : "text-[var(--muted)] hover:text-[var(--ink)]"
  }`;

  return (
    <li>
      {isExternal ? (
        <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
          {item.label}
        </a>
      ) : (
        <Link href={item.href} className={className}>
          {item.label}
        </Link>
      )}
    </li>
  );
}
