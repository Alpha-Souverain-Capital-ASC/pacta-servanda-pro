import { useEffect, useRef } from "react";

/** Attach to any element — adds `.in-view` when it scrolls into view (once). */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in-view");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/** Auto-reveal all direct <section> children of a container. */
export function useRevealSections<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const sections = Array.from(root.querySelectorAll<HTMLElement>(":scope > section"));
    sections.forEach((s) => s.classList.add("reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in-view");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.1 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
  return ref;
}

/**
 * Global observer: any element carrying [data-reveal] anywhere in the DOM
 * fades in when it scrolls into view. Set data-reveal-delay="150" (ms) for
 * stagger. Add data-reveal-once (default) — observed once, then released.
 */
export function useGlobalReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const delay = el.dataset.revealDelay;
            if (delay) el.style.transitionDelay = `${delay}ms`;
            el.classList.add("in-view");
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const scan = () => {
      const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.in-view)");
      nodes.forEach((n) => {
        n.classList.add("reveal");
        io.observe(n);
      });
    };

    scan();
    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
