import { useEffect, useRef, useState } from "react";
import mombasa from "@/assets/videos/mombasa.mp4.asset.json";
import nairobi from "@/assets/videos/nairobi.mp4.asset.json";

const VIDEOS = [
  { label: "Mombasa", url: mombasa.url },
  { label: "Nairobi", url: nairobi.url },
];

const SLIDE_MS = 6000;

// 1x1 transparent poster fallback
const POSTER =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export function HeroVideo() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [errored, setErrored] = useState<boolean[]>(() => VIDEOS.map(() => false));
  const [parallax, setParallax] = useState(0);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);
  const startRef = useRef<number>(0);

  useEffect(() => {
    startRef.current = performance.now();
  }, []);

  useEffect(() => {
    const v = refs.current[active];
    if (v) {
      try {
        v.currentTime = 0;
        const p = v.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      } catch {}
    }
    startRef.current = performance.now();
    setProgress(0);

    const timeout = setTimeout(() => {
      setActive((i) => (i + 1) % VIDEOS.length);
    }, SLIDE_MS);

    let rafId = 0;
    const tick = () => {
      const elapsed = performance.now() - startRef.current;
      setProgress(Math.min(1, elapsed / SLIDE_MS));
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafId);
    };
  }, [active]);

  useEffect(() => {
    const onScroll = () => setParallax(window.scrollY * 0.2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-brand-green">
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${parallax}px)` }}
      >
        {VIDEOS.map((v, i) => (
          <video
            key={v.url}
            ref={(el) => {
              refs.current[i] = el;
            }}
            src={v.url}
            poster={POSTER}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            onError={() =>
              setErrored((prev) => {
                if (prev[i]) return prev;
                const next = [...prev];
                next[i] = true;
                return next;
              })
            }
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[600ms] ${
              i === active && !errored[i] ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
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
        aria-hidden="true"
        className="absolute inset-x-0 bottom-6 sm:bottom-8 flex justify-center pointer-events-none z-10 scroll-cue"
        style={{ opacity: Math.max(0, 1 - parallax / 80) }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--brand-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}

