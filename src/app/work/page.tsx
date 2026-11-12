import type { Metadata } from "next";
import { Projects } from "@/components/Projects";

export const metadata: Metadata = {
  title: "Work — Tyson",
  description: "Selected work by Tyson Tan Teck Yang.",
};

export default function WorkPage() {
  return (
    <main className="flex-1">
      <Projects />
    </main>
  );
}
