import Image from "next/image";
import Link from "next/link";
import { ProjectSlideshow } from "@/components/ProjectSlideshow";
import { VideoLoopThumb } from "@/components/VideoLoopThumb";
import { site } from "@/data/site";

export function Projects() {
  return (
    <section id="projects">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <h1 className="text-3xl font-medium tracking-tight text-[var(--ink)] sm:text-4xl">
          Work
        </h1>
        <ul className="mt-12 flex flex-col gap-8">
          {site.projects.map((project, index) => (
            <li
              key={project.title}
              className="overflow-hidden rounded-[2px] border border-[var(--line)] bg-[#0b0d16] sm:grid sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)]"
            >
              {"videoThumb" in project && project.videoThumb ? (
                <div className="relative min-h-52 bg-[#0b0d16] sm:min-h-full">
                  <VideoLoopThumb
                    src={project.videoThumb.src}
                    poster={project.videoThumb.poster}
                  />
                </div>
              ) : "slides" in project && project.slides ? (
                <ProjectSlideshow slides={project.slides} />
              ) : "cover" in project && project.cover ? (
                <div className="relative aspect-[2.35/1] bg-[#0b0d16]">
                  <Image
                    src={project.cover}
                    alt={project.coverAlt ?? project.title}
                    fill
                    className="object-contain p-4 sm:p-6"
                    sizes="(max-width: 1024px) 100vw, 64rem"
                  />
                </div>
              ) : (
                <div
                  className={`min-h-52 bg-[#0b0d16] sm:min-h-full ${
                    [
                      "bg-[linear-gradient(160deg,#d7e4ef,#6f93b3)]",
                      "bg-[linear-gradient(160deg,#c9d7e6,#7a9a6a)]",
                      "bg-[linear-gradient(160deg,#e8d5b5,#8a5a2b)]",
                      "bg-[linear-gradient(160deg,#d9ece3,#3f7a68)]",
                      "bg-[linear-gradient(160deg,#e4d4e8,#5c4a72)]",
                    ][index % 5]
                  }`}
                  aria-hidden="true"
                />
              )}
              <div className="p-6 sm:p-8">
                {"year" in project && project.year ? (
                  <p className="text-xs tracking-wide text-[var(--muted)]">{project.year}</p>
                ) : null}
                <h3 className="mt-2 text-2xl font-medium tracking-tight text-[var(--ink)] sm:text-3xl">
                  {project.title}
                </h3>
                <div className="mt-4 space-y-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  {project.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <p className="mt-6 text-xs tracking-wide text-[var(--muted)] uppercase">
                  Roles
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.roles.map((role) => (
                    <span
                      key={role}
                      className="rounded-[2px] border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]"
                    >
                      {role}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-[var(--muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.href ? (
                  project.href.startsWith("http") ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-block text-sm text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4"
                    >
                      {project.linkLabel ?? "Read more"}
                    </a>
                  ) : (
                    <Link
                      href={project.href}
                      className="mt-6 inline-block text-sm text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4"
                    >
                      {project.linkLabel ?? "Read more"}
                    </Link>
                  )
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
