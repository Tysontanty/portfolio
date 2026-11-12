export function VideoLoopThumb({
  src,
  poster,
  fit = "cover",
}: {
  src: string;
  poster?: string;
  fit?: "cover" | "contain";
}) {
  return (
    <video
      className={`absolute inset-0 h-full w-full bg-[#0b0d16] ${
        fit === "contain" ? "object-contain" : "object-cover"
      }`}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
}
