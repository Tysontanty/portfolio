import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advanced Healthcare Materials Cover Illustration — Tyson",
  description:
    "Cover illustration for Advanced Healthcare Materials, December 2022, depicting a billion cell-scale bioprinting pipeline.",
};

const articleHref =
  "https://onlinelibrary.wiley.com/doi/10.1002/adhm.202270149";

const covers = [
  {
    src: "/projects/advanced-healthcare-materials/final.jpg",
    alt: "Published Advanced Healthcare Materials cover: a bioreactor, bioprinter, and two technicians in a teal lab",
    width: 779,
    height: 1024,
    label: "Final cover",
  },
  {
    src: "/projects/advanced-healthcare-materials/draft.jpg",
    alt: "Draft of the Advanced Healthcare Materials cover before masthead, lighting, and journal type",
    width: 724,
    height: 1024,
    label: "Draft",
  },
];

export default function AdvancedHealthcareMaterialsPage() {
  const [finalCover, draft] = covers;

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
          2022 · Cover illustration
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.15] font-medium tracking-tight text-[var(--ink)] sm:text-5xl">
          Advanced Healthcare Materials Cover Illustration
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">
          I was given the opportunity to illustrate a cover design for a journal
          article published in Advanced Healthcare Materials in December 2022. I
          was commissioned to depict a billion cell-scale bioprinting pipeline.
          Human induced pluripotent stem cells are cultured and passaged in
          automated bioreactors and compacted into wholly cellular bioinks for
          bioprinting and differentiation.
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
            The published cover for December 2022.
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
            An earlier scene study before masthead, lighting, and journal type.
          </p>
          <figure className="mt-4 overflow-hidden rounded-[2px] border border-white/10 bg-[#071018]">
            <Image
              src={draft.src}
              alt={draft.alt}
              width={draft.width}
              height={draft.height}
              className="mx-auto h-auto w-full max-w-xl"
            />
          </figure>
          <p className="mt-2 text-center text-xs text-[var(--muted)]">
            {draft.label}
          </p>
        </section>
      </article>
    </main>
  );
}
