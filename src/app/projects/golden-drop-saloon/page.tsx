import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Golden Drop Saloon — Tyson",
  description:
    "A cinematic Unreal Engine 5 environment walkthrough of an old western saloon, lit and directed as a detective’s view of the aftermath of a bar fight.",
};

const stills = [
  {
    src: "/projects/golden-drop-saloon/tyson-teck-yang-tan-keyshot-1.jpg",
    alt: "Golden Drop Saloon key shot of the interior",
    width: 1919,
    height: 997,
  },
  {
    src: "/projects/golden-drop-saloon/tyson-teck-yang-tan-keyshot-2.jpg",
    alt: "Golden Drop Saloon key shot of the bar",
    width: 1919,
    height: 993,
  },
  {
    src: "/projects/golden-drop-saloon/tyson-teck-yang-tan-keyshot-3.jpg",
    alt: "Golden Drop Saloon key shot of the crime scene",
    width: 1919,
    height: 1000,
  },
  {
    src: "/projects/golden-drop-saloon/tyson-teck-yang-tan-envshot-3.jpg",
    alt: "Golden Drop Saloon environment shot",
    width: 1920,
    height: 995,
  },
  {
    src: "/projects/golden-drop-saloon/tyson-teck-yang-tan-ls-camerashot-01-0082.jpg",
    alt: "Golden Drop Saloon cinematic camera shot",
    width: 1920,
    height: 1080,
  },
  {
    src: "/projects/golden-drop-saloon/tyson-teck-yang-tan-ls-camerashot-01a-0037.jpg",
    alt: "Golden Drop Saloon cinematic camera shot of the saloon floor",
    width: 1920,
    height: 1080,
  },
  {
    src: "/projects/golden-drop-saloon/tyson-teck-yang-tan-ls-camerashot-02-0273.jpg",
    alt: "Golden Drop Saloon cinematic camera shot of the aftermath",
    width: 1920,
    height: 1080,
  },
  {
    src: "/projects/golden-drop-saloon/tyson-teck-yang-tan-ls-camerashot-05-0117.jpg",
    alt: "Golden Drop Saloon cinematic camera shot of the reveal",
    width: 1920,
    height: 1080,
  },
];

export default function GoldenDropSaloonPage() {
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
          2022 · Unreal Engine 5
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.15] font-medium tracking-tight text-[var(--ink)] sm:text-5xl">
          The Golden Drop Saloon
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">
          The Golden Drop Saloon is a cinematic environment showcase made in
          Unreal Engine 5, where I was the main Lighting and Cinematic Artist. I
          also helped to integrate the 3D models, textures and VFX into Unreal
          Engine. The aim of this project is to create an environment walkthrough
          of an old western saloon in the perspective of a detective, showing the
          aftermath of a bar fight which will end with the reveal of a dead
          sheriff and the perpetrator.
        </p>
        <div className="mt-12 overflow-hidden rounded-[2px] border border-white/10 bg-black">
          <video
            className="aspect-video h-auto w-full"
            src="/projects/golden-drop-saloon/trailer.mp4"
            poster="/projects/golden-drop-saloon/tyson-teck-yang-tan-keyshot-1.jpg"
            controls
            playsInline
            preload="metadata"
          >
            The Golden Drop Saloon cinematic trailer
          </video>
        </div>

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
