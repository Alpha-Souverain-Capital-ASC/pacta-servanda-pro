import { useEffect, useRef, useState } from "react";
import mombasa from "@/assets/videos/mombasa.mp4.asset.json";
import nairobi from "@/assets/videos/nairobi.mp4.asset.json";
import embu from "@/assets/videos/embu.mp4.asset.json";
import kisumu from "@/assets/videos/kisumu.mp4.asset.json";

const VIDEOS = [
  { label: "Mombasa", url: mombasa.url },
  { label: "Nairobi", url: nairobi.url },
  { label: "Embu", url: embu.url },
  { label: "Kisumu", url: kisumu.url },
];

export function HeroVideo() {
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState(false);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const v = refs.current[active];
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  }, [active]);

  const advance = () => setActive((i) => (i + 1) % VIDEOS.length);

  return (
    <div className="absolute inset-0 overflow-hidden bg-brand-green">
      {!failed &&
        VIDEOS.map((v, i) => (
          <video
            key={v.url}
            ref={(el) => {
              refs.current[i] = el;
            }}
            src={v.url}
            muted
            playsInline
            autoPlay={i === 0}
            preload={i === 0 ? "auto" : "metadata"}
            onEnded={() => i === active && advance()}
            onError={() => setFailed(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[600ms] ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      <div className="absolute inset-0 bg-brand-green/60" />
      <div className="absolute inset-0 diagonal-gold-lines pointer-events-none" />

      <div className="absolute bottom-12 left-0 right-0 px-6 z-10">
        <div className="max-w-3xl mx-auto grid grid-cols-4 gap-6">
          {VIDEOS.map((v, i) => (
            <button
              key={v.label}
              onClick={() => setActive(i)}
              className="text-center group"
            >
              <div
                className={`h-0.5 transition-colors ${
                  i === active ? "bg-brand-gold" : "bg-brand-gold-light/30"
                }`}
              />
              <p
                className={`mt-3 text-[10px] tracking-[0.3em] uppercase ${
                  i === active ? "text-white" : "text-white/60"
                }`}
              >
                {v.label}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
