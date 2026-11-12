import { site } from "@/data/site";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM6.87 20.452H3.788V9H6.87v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

function ArtStationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
      <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.213l-2.791-4.838H0zm24 .025c0-.484-.143-.935-.388-1.313L15.744 2.623A2.424 2.424 0 0 0 13.581 1.3H9.697L21.96 22.558h1.2a2.424 2.424 0 0 0 2.164-1.333 2.414 2.414 0 0 0 .676-1.322v-2.155zM12.387 1.301 2.155 18.995h9.509z" />
    </svg>
  );
}

function SocialIcon({ icon }: { icon: (typeof site.socials)[number]["icon"] }) {
  if (icon === "artstation") {
    return <ArtStationIcon />;
  }

  return <LinkedInIcon />;
}

export function SocialLinks() {
  if (site.socials.length === 0) {
    return null;
  }

  return (
    <ul className="mt-10 flex justify-center gap-5">
      {site.socials.map((social) => (
        <li key={social.href}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-white/80 transition-colors hover:text-[var(--accent)]"
            aria-label={social.label}
          >
            <SocialIcon icon={social.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}
