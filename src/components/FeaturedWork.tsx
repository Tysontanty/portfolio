import Image from "next/image";
import Link from "next/link";
import { ProjectSlideshow } from "@/components/ProjectSlideshow";
import { VideoLoopThumb } from "@/components/VideoLoopThumb";
import { site, type Project } from "@/data/site";

const coverThumbs = new Set([
  "Nano Micro Small cover illustration",
  "Advanced Healthcare Materials cover illustration",
]);

const tileStyles: Record<string, string> = {
  "The Sky Islands":
    "bg-[linear-gradient(160deg,#2a1b4a_0%,#6b4a2a_42%,#c47a3a_78%,#1a1028_100%)]",
  "Nano Micro Small cover illustration":
    "bg-[linear-gradient(160deg,#0b2a22_0%,#1f6b4a_45%,#c6e36a_100%)]",
  "The Golden Drop Saloon":
    "bg-[linear-gradient(160deg,#1a120c_0%,#6b3a1a_50%,#d4a15a_100%)]",
  "Advanced Healthcare Materials cover illustration":
    "bg-[linear-gradient(160deg,#12202a_0%,#3d6b8a_50%,#9fd4c8_100%)]",
  "Ascendant of the Shadows":
    "bg-[linear-gradient(160deg,#140c1c_0%,#4a2a5c_45%,#8a6a9a_100%)]",
};

function frameClass(title: string) {
  const shared = "relative overflow-hidden rounded-[2px] bg-[#0b0d16]";
  if (title === "The Sky Islands") {
    return `${shared} aspect-[16/10]`;
  }
  if (title === "SmartBudget Mobile App") {
    return `${shared} aspect-[4/5]`;
  }
  if (coverThumbs.has(title)) {
    return `${shared} aspect-[779/1024]`;
  }
  if (title === "The Golden Drop Saloon" || title === "Ascendant of the Shadows") {
    return `${shared} aspect-video`;
  }
  return `${shared} aspect-[16/11]`;
}

function projectByTitle(title: string) {
  return site.projects.find((project) => project.title === title);
}

function FeaturedTile({
  project,
  matchNeighbor,
}: {
  project: Project;
  matchNeighbor?: boolean;
}) {
  const href = project.href ?? "/work";
  const external = href.startsWith("http");
  const label = project.title.replace(" cover illustration", "");
  const cover = coverThumbs.has(project.title) ? project.slides?.[0] : undefined;

  const media = (
    <>
      {project.videoThumb ? (
        <VideoLoopThumb
          src={project.videoThumb.src}
          poster={project.videoThumb.poster}
          fit={project.title === "The Golden Drop Saloon" ? "contain" : "cover"}
        />
      ) : cover ? (
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      ) : project.slides ? (
        <ProjectSlideshow
          slides={project.slides}
          className="absolute inset-0 h-full w-full bg-[#0b0d16]"
          fit="contain"
          padded={false}
          label={`${project.title} images`}
        />
      ) : (
        <div
          className={`h-full w-full ${tileStyles[project.title] ?? "bg-[#0b0d16]"}`}
          aria-hidden="true"
        />
      )}
    </>
  );

  const inner = (
    <>
      <div
        className={
          matchNeighbor
            ? "relative min-h-0 flex-1 overflow-hidden rounded-[2px] bg-[#0b0d16] max-sm:aspect-[4/5] max-sm:flex-none"
            : frameClass(project.title)
        }
      >
        {media}
      </div>
      <div className="mt-2.5 min-h-[2.75rem]">
        <p className="text-sm text-[var(--ink)]">{label}</p>
        {project.year ? (
          <p className="text-xs text-[var(--muted)]">{project.year}</p>
        ) : null}
      </div>
    </>
  );

  const className = matchNeighbor ? "group flex h-full flex-col" : "group block";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}

export function FeaturedWork() {
  const skyIslands = projectByTitle("The Sky Islands");
  const smartBudget = projectByTitle("SmartBudget Mobile App");
  const leftColumn = [
    projectByTitle("Nano Micro Small cover illustration"),
    projectByTitle("Ascendant of the Shadows"),
  ].filter((project) => project !== undefined);
  const rightColumn = [
    projectByTitle("The Golden Drop Saloon"),
    projectByTitle("Advanced Healthcare Materials cover illustration"),
  ].filter((project) => project !== undefined);

  return (
    <section id="work" className="mx-auto max-w-[88rem] px-6 pb-16">
      <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-6">
        <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:col-span-6 sm:grid-cols-6 sm:items-stretch">
          {skyIslands ? (
            <div className="sm:col-span-4">
              <FeaturedTile project={skyIslands} />
            </div>
          ) : null}
          {smartBudget ? (
            <div className="sm:col-span-2">
              <FeaturedTile project={smartBudget} matchNeighbor />
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-8 sm:col-span-3">
          {leftColumn.map((project) => (
            <FeaturedTile key={project.title} project={project} />
          ))}
        </div>
        <div className="flex flex-col gap-8 sm:col-span-3">
          {rightColumn.map((project) => (
            <FeaturedTile key={project.title} project={project} />
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Link
          href="/work"
          className="text-sm text-[var(--muted)] underline decoration-[var(--line)] underline-offset-4 transition-colors hover:text-[var(--ink)]"
        >
          See all projects
        </Link>
      </div>
    </section>
  );
}
