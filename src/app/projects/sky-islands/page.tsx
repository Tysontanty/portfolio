import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Sky Islands — Tyson",
  description:
    "A stylised Viking environment showcase in Unreal Engine 5: three floating islands, linked by portals, created as a final university group project.",
};

const stills = [
  {
    src: "/projects/sky-islands/still-1.jpg",
    alt: "Night view of the Sky Islands two-storey house with dragon details and a glowing portal",
    width: 1024,
    height: 586,
  },
  {
    src: "/projects/sky-islands/still-2.jpg",
    alt: "The Sky Islands house under a crescent moon, with torches and a campfire on the floating island",
    width: 1024,
    height: 604,
  },
];

export default function SkyIslandsPage() {
  return (
    <main className="flex-1">
      <article className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <Link
          href="/work"
          className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
        >
          ← Work
        </Link>
        <p className="mt-8 text-sm tracking-[0.18em] text-zinc-400 uppercase">
          2023 · Unreal Engine 5
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.15] font-medium tracking-tight text-[var(--ink)] sm:text-5xl">
          The Sky Islands
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">
          The Sky Islands is my final university group project: a stylised Viking
          environment showcase built in Unreal Engine 5. I was a 3D modeler,
          texture artist, and concept artist for the two-storey house.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
          The sanctuary sits across three floating islands — a house, a windmill,
          and a blacksmith’s workshop — linked by portals so an adventurer can
          travel between them. We took our cue from Ian Worrel’s Mystery Shack
          diorama from Gravity Falls, and set out to build a whimsical world with
          the same sense of place.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-medium text-[var(--ink)]">Trailer</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            The finished environment showcase.
          </p>
          <div className="mt-4 overflow-hidden rounded-[2px] border border-white/10 bg-black">
            <video
              className="aspect-video h-auto w-full"
              src="/projects/sky-islands/trailer.mp4"
              poster="/projects/sky-islands/still-2.jpg"
              controls
              playsInline
              preload="metadata"
            >
              The Sky Islands environment showcase trailer
            </video>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-medium text-[var(--ink)]">Walkthrough</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            A process walkthrough of how the environment came together.
          </p>
          <div className="mt-4 overflow-hidden rounded-[2px] border border-white/10 bg-black">
            <video
              className="aspect-video h-auto w-full"
              src="/projects/sky-islands/walkthrough.mp4"
              poster="/projects/sky-islands/still-1.jpg"
              controls
              playsInline
              preload="metadata"
            >
              The Sky Islands walkthrough
            </video>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-medium text-[var(--ink)]">Stills</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {stills.map((still) => (
              <li key={still.src} className="overflow-hidden rounded-[2px] border border-white/10">
                <Image
                  src={still.src}
                  alt={still.alt}
                  width={still.width}
                  height={still.height}
                  className="h-auto w-full"
                />
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
