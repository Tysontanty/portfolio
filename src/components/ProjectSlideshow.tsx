"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

export function ProjectSlideshow({
  slides,
  className = "relative aspect-[3/4] bg-[#0b0d16] sm:min-h-[28rem] sm:aspect-auto",
  fit = "contain",
  padded = true,
  label = "Project images",
}: {
  slides: Slide[];
  className?: string;
  fit?: "contain" | "cover";
  padded?: boolean;
  label?: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (slides.length < 2 || paused) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label={label}
    >
      {slides.map((slide, slideIndex) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            slideIndex === index ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slideIndex === index ? slide.alt : ""}
            fill
            className={
              fit === "cover"
                ? "object-cover"
                : padded
                  ? "object-contain p-5"
                  : "object-contain"
            }
            sizes="(max-width: 640px) 100vw, 40vw"
            priority={slideIndex === 0}
          />
        </div>
      ))}
    </div>
  );
}
