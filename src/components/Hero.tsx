import { RotatingWord } from "@/components/RotatingWord";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-10 pt-12 text-center sm:pb-12 sm:pt-16">
      <h1 className="text-5xl leading-[1.1] font-medium tracking-tight text-[var(--ink)] sm:text-6xl lg:text-7xl">
        Hi, I&apos;m <span className="text-[#3cffe8]">Tyson Tan</span> —
        <span className="mt-1 block">
          <RotatingWord words={site.hero.rotatingWords} />
        </span>
        Designer.
      </h1>
      <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
        {site.hero.introBefore}
        <span className="text-[var(--ink)]">{site.hero.introEmphasis}</span>
        {site.hero.introMiddle}
        <span className="text-[var(--ink)]">{site.hero.introEmphasisTwo}</span>
        {site.hero.introAfter}
        <span className="text-[var(--ink)]">{site.hero.introEmphasisThree}</span>
        {site.hero.introEnd}
      </p>
    </section>
  );
}
