export function TwinMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className ?? "h-full w-full fill-current"}>
      <path d="M10 14h44v8H46v28h-8V22H26v28h-8V22H10V14z" />
    </svg>
  );
}
