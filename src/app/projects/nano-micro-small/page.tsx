import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nano Micro Small Cover Illustration — Tyson",
  description:
    "Cover illustration for Nano Micro Small, selected as a frontispiece for Volume 20, Issue 17, depicting cell aggregates squeezing through channels.",
};

const articleHref = "https://onlinelibrary.wiley.com/doi/10.1002/smll.202470135";

const covers = [
  {
    src: "/projects/nano-micro-small/final.jpg",
    alt: "Published Nano Micro Small cover: a microfluidic device, glowing flow lines, and a caption on rheological measurements",
    width: 779,
    height: 1024,
    label: "Final cover",
  },
  {
    src: "/projects/nano-micro-small/draft-1.jpg",
    alt: "First draft of the Nano Micro Small cover with a sketchy isometric device and handwritten formula",
    width: 723,
    height: 1024,
    label: "Draft 1",
  },
  {
    src: "/projects/nano-micro-small/draft-2.jpg",
    alt: "Second draft of the Nano Micro Small cover with tighter type, graphs, and a beam of light",
    width: 724,
    height: 1024,
    label: "Draft 2",
  },
];

export default function NanoMicroSmallPage() {
  const [finalCover, ...drafts] = covers;

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
          2024 · Cover illustration
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.15] font-medium tracking-tight text-[var(--ink)] sm:text-5xl">
          Nano Micro Small Cover Illustration
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">
          I was given the opportunity to illustrate a cover design for a science
          journal article in Nano Micro Small. It was selected as a frontispiece
          for Volume 20, Issue 17, published on 25 April 2024. I was commissioned
          to depict cell aggregates squeezing through channels to visualize and
          measure how they deform and flow.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
          You can read more about it{" "}
          <a
            href={articleHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4"
          >
            here
          </a>
          .
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-medium text-[var(--ink)]">Final cover</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            The published frontispiece for Volume 20, Issue 17.
          </p>
          <figure className="mt-4 overflow-hidden rounded-[2px] border border-white/10 bg-[#071018]">
            <Image
              src={finalCover.src}
              alt={finalCover.alt}
              width={finalCover.width}
              height={finalCover.height}
              className="mx-auto h-auto w-full max-w-xl"
              priority
            />
          </figure>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-medium text-[var(--ink)]">Process</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Early sketches and a tighter draft before the final layout, type, and
            journal caption.
          </p>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {drafts.map((cover) => (
              <li key={cover.src}>
                <figure className="overflow-hidden rounded-[2px] border border-white/10 bg-[#071018]">
                  <Image
                    src={cover.src}
                    alt={cover.alt}
                    width={cover.width}
                    height={cover.height}
                    className="h-auto w-full"
                  />
                </figure>
                <p className="mt-2 text-center text-xs text-[var(--muted)]">
                  {cover.label}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
