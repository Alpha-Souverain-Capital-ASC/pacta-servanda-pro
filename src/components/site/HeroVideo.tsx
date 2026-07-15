import { useEffect, useRef, useState } from "react";
import mombasa from "@/assets/videos/mombasa.mp4.asset.json";
import nairobi from "@/assets/videos/nairobi.mp4.asset.json";

const VIDEOS = [
  { label: "Mombasa", url: mombasa.url },
  { label: "Nairobi", url: nairobi.url },
];

const SLIDE_MS = 6000;
const PRELOAD_LEAD_MS = 1500; // hydrate the next video shortly before switch

export function HeroVideo() {
  const [active, setActive] = useState(0);
  // Which videos have been mounted at all (starts with just the first).
  const [mounted, setMounted] = useState<boolean[]>(() =>
    VIDEOS.map((_, i) => i === 0),
  );
  const [ready, setReady] = useState<boolean[]>(() => VIDEOS.map(() => false));
  const [errored, setErrored] = useState<boolean[]>(() => VIDEOS.map(() => false));

  const refs = useRef<(HTMLVideoElement | null)[]>([]);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const scrollCueRef = useRef<HTMLDivElement | null>(null);
  const reducedMotionRef = useRef(false);

  // Start the active video, schedule the next slide, and pre-mount the next one.
  useEffect(() => {
    const v = refs.current[active];
    if (v) {
      try {
        v.currentTime = 0;
        const p = v.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      } catch {}
    }

    const nextIdx = (active + 1) % VIDEOS.length;
    const preloadTimer = setTimeout(() => {
      setMounted((prev) => {
        if (prev[nextIdx]) return prev;
        const next = [...prev];
        next[nextIdx] = true;
        return next;
      });
    }, Math.max(0, SLIDE_MS - PRELOAD_LEAD_MS));

    const slideTimer = setTimeout(() => {
      setActive(nextIdx);
    }, SLIDE_MS);

    return () => {
      clearTimeout(preloadTimer);
      clearTimeout(slideTimer);
    };
  }, [active]);

  // Parallax + scroll-cue fade via refs + rAF, no React state.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mq.matches;
    const onMq = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
    };
    mq.addEventListener?.("change", onMq);

    let ticking = false;
    const apply = () => {
      ticking = false;
      const y = window.scrollY || 0;
      const wrap = wrapperRef.current;
      const cue = scrollCueRef.current;
      if (wrap) {
        wrap.style.transform = reducedMotionRef.current
          ? "translateY(0px)"
          : `translate3d(0, ${y * 0.2}px, 0)`;
      }
      if (cue) {
        cue.style.opacity = String(Math.max(0, 1 - y / 80));
      }
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(apply);
    };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener?.("change", onMq);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-brand-green">
      <div
        ref={wrapperRef}
        className="absolute inset-0"
        style={{ willChange: "transform" }}
      >
        {VIDEOS.map((v, i) => {
          if (!mounted[i]) return null;
          const isActive = i === active;
          const show = isActive && ready[i] && !errored[i];
          return (
            <video
              key={v.url}
              ref={(el) => {
                refs.current[i] = el;
              }}
              src={v.url}
              muted
              loop
              playsInline
              autoPlay
              preload={isActive ? "auto" : "metadata"}
              onCanPlay={() =>
                setReady((prev) => {
                  if (prev[i]) return prev;
                  const next = [...prev];
                  next[i] = true;
                  return next;
                })
              }
              onLoadedData={() =>
                setReady((prev) => {
                  if (prev[i]) return prev;
                  const next = [...prev];
                  next[i] = true;
                  return next;
                })
              }
              onError={() =>
                setErrored((prev) => {
                  if (prev[i]) return prev;
                  const next = [...prev];
                  next[i] = true;
                  return next;
                })
              }
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[700ms] ${
                show ? "opacity-100" : "opacity-0"
              }`}
            />
          );
        })}
      </div>

      {/* Bottom scrim only, behind headline + CTAs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(20,50,40,0.55) 0%, rgba(20,50,40,0) 55%)",
        }}
      />

      {/* Soft animated scroll cue — fades out as user scrolls */}
      <div
        ref={scrollCueRef}
        aria-hidden="true"
        className="absolute inset-x-0 bottom-6 sm:bottom-8 flex justify-center pointer-events-none z-10 scroll-cue"
        style={{ opacity: 1, willChange: "opacity" }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--brand-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}
