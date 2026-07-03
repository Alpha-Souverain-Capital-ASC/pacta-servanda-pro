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

      <div className="absolute bottom-12 left-0 right-0 px-6 z-10">
        <div className="max-w-xl mx-auto grid grid-cols-2 gap-6">
          {VIDEOS.map((v, i) => {
            const fill = i < active ? 1 : i === active ? progress : 0;
            return (
              <button
                key={v.label}
                onClick={() => setActive(i)}
                className="text-center group"
              >
                <div className="h-0.5 bg-brand-gold-light/30 overflow-hidden">
                  <div
                    className="h-full bg-brand-gold"
                    style={{
                      width: `${fill * 100}%`,
                      transition: i === active ? "none" : "width 200ms linear",
                    }}
                  />
                </div>
                <p
                  className={`mt-3 text-[10px] tracking-[0.3em] uppercase ${
                    i === active ? "text-white" : "text-white/60"
                  }`}
                >
                  {v.label}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
