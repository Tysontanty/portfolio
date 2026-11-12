"use client";

import { useEffect, useState } from "react";

export function RotatingWord({
  words,
  intervalMs = 2200,
}: {
  words: string[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [entered, setEntered] = useState(true);

  useEffect(() => {
    if (words.length < 2) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setEntered(false);
      setIndex((current) => (current + 1) % words.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, words.length]);

  useEffect(() => {
    if (entered) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setEntered(true));
    });

    return () => window.cancelAnimationFrame(frame);
  }, [entered, index]);

  return (
    <span className="relative inline-grid overflow-hidden align-baseline" aria-live="polite">
      {words.map((word) => (
        <span
          key={`sizer-${word}`}
          className="invisible col-start-1 row-start-1 whitespace-nowrap"
          aria-hidden="true"
        >
          {word}
        </span>
      ))}
      <span
        className={`col-start-1 row-start-1 justify-self-center whitespace-nowrap will-change-transform ${
          entered ? "translate-y-0" : "translate-y-full"
        } ${entered ? "transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]" : ""}`}
      >
        {words[index]}
      </span>
    </span>
  );
}
