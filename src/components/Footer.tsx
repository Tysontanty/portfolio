import { TwinMark } from "@/components/TwinMark";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="pb-10 pt-4">
      <div className="flex flex-col items-center gap-3">
        <TwinMark className="h-5 w-5 text-[#3cffe8]" />
        <p className="text-center text-[11px] text-[var(--muted)]">
          © 2026 {site.fullName}
        </p>
      </div>
    </footer>
  );
}
