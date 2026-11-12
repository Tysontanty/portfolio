"use client";

import { FormEvent, useState } from "react";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/data/site";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const subject = String(formData.get("subject") ?? "");
    const email = String(formData.get("email") ?? "");
    formData.set("_subject", subject);
    formData.set("_replyto", email);

    try {
      const response = await fetch(site.contact.formspree, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Formspree rejected the submission");
      }

      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="mx-auto max-w-xl px-6 pb-24 pt-16 text-center sm:pt-24">
      <p className="text-base leading-7 text-[var(--muted)] sm:text-lg">
        {site.contact.intro}{" "}
        <a
          href={`mailto:${site.email}`}
          className="text-[var(--ink)] underline decoration-[var(--ink)] underline-offset-4"
        >
          {site.email}
        </a>
      </p>

      {sent ? (
        <p className="mt-12 text-base leading-7 text-[var(--muted)]">
          Thanks — I&apos;ll get back to you.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-12 text-left">
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
          <label className="block text-sm text-[var(--muted)]">
            Email Address <span className="italic">(required)</span>
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              className="mt-2 mb-6 w-full border border-white/30 bg-transparent px-3 py-2.5 text-[var(--ink)] outline-none focus:border-white"
            />
          </label>
          <label className="block text-sm text-[var(--muted)]">
            Subject <span className="italic">(required)</span>
            <input
              required
              name="subject"
              className="mt-2 mb-6 w-full border border-white/30 bg-transparent px-3 py-2.5 text-[var(--ink)] outline-none focus:border-white"
            />
          </label>
          <label className="block text-sm text-[var(--muted)]">
            Message <span className="italic">(required)</span>
            <textarea
              required
              name="message"
              rows={6}
              className="mt-2 w-full resize-y border border-white/30 bg-transparent px-3 py-2.5 text-[var(--ink)] outline-none focus:border-white"
            />
          </label>
          {error ? (
            <p className="mt-6 text-sm text-[var(--muted)]">
              Something went wrong. Email me at{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-[var(--ink)] underline decoration-[var(--ink)] underline-offset-4"
              >
                {site.email}
              </a>{" "}
              instead.
            </p>
          ) : null}
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              disabled={sending}
              className="rounded-full border-2 border-white px-10 py-3 text-sm tracking-[0.18em] text-white uppercase transition-colors hover:bg-white hover:text-black disabled:cursor-wait disabled:opacity-60"
            >
              {sending ? "Sending" : "Submit"}
            </button>
          </div>
        </form>
      )}
      <SocialLinks />
    </section>
  );
}
