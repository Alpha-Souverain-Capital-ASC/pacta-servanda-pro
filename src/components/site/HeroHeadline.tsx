import type { ReactNode } from "react";

/**
 * Word-cascade headline for the hero. Splits children strings into words
 * and animates each with a small stagger via CSS custom properties. Any
 * ReactNode children (e.g. <span className="gold-shimmer">Legal</span>)
 * are preserved and animated as a single "word".
 */
export function HeroHeadline({
  className,
  children,
  baseDelay = 120,
  step = 70,
}: {
  className?: string;
  children: ReactNode;
  baseDelay?: number;
  step?: number;
}) {
  let i = 0;
  const nextDelay = () => baseDelay + step * i++;

  const render = (node: ReactNode, key: string): ReactNode => {
    if (typeof node === "string") {
      return node.split(/(\s+)/).map((chunk, idx) => {
        if (/^\s+$/.test(chunk)) return chunk;
        if (!chunk) return null;
        return (
          <span
            key={`${key}-${idx}`}
            className="hero-word"
            style={{ ["--hero-word-delay" as string]: `${nextDelay()}ms` }}
          >
            {chunk}
          </span>
        );
      });
    }
    if (Array.isArray(node)) return node.map((n, idx) => render(n, `${key}-${idx}`));
    // Element: wrap as one animated word
    return (
      <span
        key={key}
        className="hero-word"
        style={{ ["--hero-word-delay" as string]: `${nextDelay()}ms`, display: "inline-block" }}
      >
        {node}
      </span>
    );
  };

  return <span className={className}>{render(children, "w")}</span>;
}
