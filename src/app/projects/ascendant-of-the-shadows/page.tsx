import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ascendant of the Shadows — Tyson",
  description:
    "A 2D animation visual development pitch: character design, sketches, and splash art for Seroth and Rita.",
};

type Board = {
  src: string;
  alt: string;
  label: string;
};

const splash: Board[] = [
  {
    src: "/projects/ascendant-of-the-shadows/splash-final.jpg",
    alt: "Final splash art of Seroth and Rita fighting, with cyan magic and pink energy ribbons",
    label: "Final splash art",
  },
  {
    src: "/projects/ascendant-of-the-shadows/splash-thumbnails.jpg",
    alt: "Three greyscale composition thumbnails for the battle splash",
    label: "Splash art thumbnails",
  },
];

const poster: Board[] = [
  {
    src: "/projects/ascendant-of-the-shadows/poster.jpg",
    alt: "Finished poster of Seroth and Rita back to back, with a glowing cyan claw",
    label: "Poster art",
  },
  {
    src: "/projects/ascendant-of-the-shadows/poster-thumbnails.jpg",
    alt: "Three poster composition thumbnails exploring scale and pose",
    label: "Poster art thumbnails",
  },
];

const seroth: Board[] = [
  {
    src: "/projects/ascendant-of-the-shadows/seroth-turnaround.jpg",
    alt: "Front, three-quarter, and back turnaround of Seroth in a teal cape",
    label: "Main protagonist — Seroth",
  },
  {
    src: "/projects/ascendant-of-the-shadows/seroth-poses-1.jpg",
    alt: "Seroth leaping with a stone claw and casting cyan magic",
    label: "Action poses",
  },
  {
    src: "/projects/ascendant-of-the-shadows/seroth-poses-2.jpg",
    alt: "Seroth crouching and standing with a large cyan claw",
    label: "Action poses",
  },
  {
    src: "/projects/ascendant-of-the-shadows/seroth-expressions.jpg",
    alt: "Four facial expressions for Seroth",
    label: "Facial expressions",
  },
  {
    src: "/projects/ascendant-of-the-shadows/seroth-sketches.jpg",
    alt: "Costume explorations and head studies for Seroth",
    label: "Sketches",
  },
];

const rita: Board[] = [
  {
    src: "/projects/ascendant-of-the-shadows/rita-turnaround.jpg",
    alt: "Front and back turnaround of Rita in a black and crimson cape",
    label: "Main antagonist — Rita",
  },
  {
    src: "/projects/ascendant-of-the-shadows/rita-poses-1.jpg",
    alt: "Rita standing and lunging in combat stances",
    label: "Action poses",
  },
  {
    src: "/projects/ascendant-of-the-shadows/rita-poses-2.jpg",
    alt: "Rita reaching forward and sweeping low in combat",
    label: "Action poses",
  },
  {
    src: "/projects/ascendant-of-the-shadows/rita-expressions.jpg",
    alt: "Four facial expressions for Rita, including her heterochromia",
    label: "Facial expressions",
  },
  {
    src: "/projects/ascendant-of-the-shadows/rita-sketches-1.jpg",
    alt: "Early line costume explorations for Rita",
    label: "Sketches",
  },
  {
    src: "/projects/ascendant-of-the-shadows/rita-sketches-2.jpg",
    alt: "Shaded costume explorations for Rita",
    label: "Sketches",
  },
];

function BoardList({ boards }: { boards: Board[] }) {
  return (
    <ul className="mt-4 space-y-6">
      {boards.map((board) => (
        <li key={board.src}>
          <figure className="overflow-hidden rounded-[2px] border border-white/10 bg-[#f4f7fb]">
            <Image
              src={board.src}
              alt={board.alt}
              width={1024}
              height={576}
              className="h-auto w-full"
            />
          </figure>
          <p className="mt-2 text-center text-xs text-[var(--muted)]">
            {board.label}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default function AscendantOfTheShadowsPage() {
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
          2022 · Visual development
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.15] font-medium tracking-tight text-[var(--ink)] sm:text-5xl">
          Ascendant of the Shadows
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">
          A 2D animation visual development pitch. It was a fun, hands-on way to
          learn how to concept compelling, visually engaging characters — and to
          understand the creative process through research, sketches, iteration,
          and refinement.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
          The pitch follows Seroth, the protagonist, and Rita, the antagonist,
          from costume studies and expressions through action poses, poster
          concepts, and a finished battle splash.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-medium text-[var(--ink)]">Splash art</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            The final battle scene, with earlier composition thumbnails.
          </p>
          <BoardList boards={splash} />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-medium text-[var(--ink)]">Poster</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            A character poster and the layouts that led to it.
          </p>
          <BoardList boards={poster} />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-medium text-[var(--ink)]">Seroth</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Turnaround, action, expressions, and costume exploration for the
            protagonist.
          </p>
          <BoardList boards={seroth} />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-medium text-[var(--ink)]">Rita</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Turnaround, action, expressions, and costume exploration for the
            antagonist.
          </p>
          <BoardList boards={rita} />
        </section>
      </article>
    </main>
  );
}
