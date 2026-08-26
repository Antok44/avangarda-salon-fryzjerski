import { useState } from "react";

export function Expandable({
  text,
  extra,
  limit = 150,
}: {
  text: string;
  extra?: string[];
  limit?: number;
}) {
  const [open, setOpen] = useState(false);
  const needsToggle = text.length > limit || (extra && extra.length > 0);
  const preview = text.length > limit ? text.slice(0, limit).trimEnd() + "…" : text;

  return (
    <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
      <p>{open || !needsToggle ? text : preview}</p>
      {open && extra && extra.length > 0 && (
        <ul className="mt-3 space-y-1 text-xs uppercase tracking-[0.16em] text-primary/80">
          {extra.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      )}
      {needsToggle && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-3 text-[0.7rem] uppercase tracking-[0.22em] text-primary transition-opacity hover:opacity-70"
        >
          {open ? "Zwiń" : "Czytaj więcej"}
        </button>
      )}
    </div>
  );
}
