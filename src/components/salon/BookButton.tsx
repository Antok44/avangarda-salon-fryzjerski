import { BOOKSY_URL } from "@/data/salon";
import { cn } from "@/lib/utils";

export function BookButton({
  className,
  children = "Rezerwuj online",
  variant = "solid",
}: {
  className?: string;
  children?: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
}) {
  return (
    <a
      href={BOOKSY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-full px-7 py-3 text-xs uppercase tracking-[0.22em] transition-all duration-300",
        variant === "solid" &&
          "surface-plum text-primary-foreground shadow-soft hover:shadow-lift hover:-translate-y-0.5",
        variant === "outline" &&
          "border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground",
        variant === "ghost" && "text-primary underline-offset-8 hover:underline",
        className,
      )}
    >
      {children}
    </a>
  );
}
