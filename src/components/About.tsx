import Image from "next/image";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/data/site";

export function About() {
  return (
    <section className="mx-auto max-w-xl px-6 pb-24 pt-10 text-center sm:pt-16">
      <h1 className="text-4xl font-medium tracking-tight text-[var(--ink)] sm:text-5xl">
        {site.about.title}
      </h1>
      {site.about.portrait ? (
        <div className="mx-auto mt-10 aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[2px] bg-[#0b0d16]">
          <Image
            src={site.about.portrait}
            alt={site.fullName}
            width={768}
            height={1024}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      ) : null}
      <div className="mt-10 space-y-6 text-left text-base leading-7 text-[var(--muted)] sm:text-[17px] sm:leading-8">
        {site.about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <SocialLinks />
    </section>
  );
}
