import type { Metadata } from "next";
import { About } from "@/components/About";

export const metadata: Metadata = {
  title: "About — Tyson",
  description:
    "Tyson Tan Teck Yang is a creative designer and visual arts educator working across 2D/3D visualisation, concept art, and UI/UX.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <About />
    </main>
  );
}
