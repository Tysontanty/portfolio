import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Tyson",
  description: "Get in touch with Tyson Tan Teck Yang.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <Contact />
    </main>
  );
}
