import { useEffect, useMemo, useState } from "react";
import { STOCK_MEDIA } from "@/lib/brand-media";
import coastalVideo from "@/assets/videos/hero-coastal.mp4";
import architectureVideo from "@/assets/videos/hero-architecture.mp4";

const IMAGES = [
  STOCK_MEDIA.hero,
  STOCK_MEDIA.legalDesk,
  STOCK_MEDIA.heroGavel,
  STOCK_MEDIA.heroJustice,
  STOCK_MEDIA.heroPortrait,
];
const SLIDE_MS = 7000;
const VIDEO_SOURCES = [coastalVideo, architectureVideo];

/**
 * Full-bleed hero media matching the reference homepage: muted looping videos
 * cross-faded without a colour wash, with bundled images as a reliable fallback
 * if local media cannot be played.
 */
export function HeroVideo() {
  const [active, setActive] = useState(0);
  const [activeVideo, setActiveVideo] = useState(0);
  const [readyVideos, setReadyVideos] = useState<number[]>([]);
  const [failedVideos, setFailedVideos] = useState<number[]>([]);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((value) => (value + 1) % IMAGES.length),
      SLIDE_MS,
    );
    return () => window.clearInterval(timer);
  }, []);

  const playableVideos = useMemo(
    () => readyVideos.filter((index) => !failedVideos.includes(index)),
    [failedVideos, readyVideos],
  );

  useEffect(() => {
    if (playableVideos.length === 0) return;
    const timer = window.setInterval(
      () =>
        setActiveVideo((value) => {
          const currentPosition = playableVideos.indexOf(value);
          return playableVideos[(currentPosition + 1) % playableVideos.length] ?? playableVideos[0];
        }),
      9000,
    );
    return () => window.clearInterval(timer);
  }, [playableVideos]);

  useEffect(() => {
    if (playableVideos.length === 0 || playableVideos.includes(activeVideo)) return;
    setActiveVideo(playableVideos[0]);
  }, [activeVideo, playableVideos]);

  const videoReady = playableVideos.length > 0;

  const markVideoReady = (index: number, video: HTMLVideoElement) => {
    video.play().catch(() => undefined);
    setReadyVideos((current) => (current.includes(index) ? current : [...current, index]));
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {IMAGES.map((image, index) => (
        <img
          key={image}
          src={image}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${index === active ? "opacity-100" : "opacity-0"}`}
          style={{ opacity: videoReady ? 0 : undefined }}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      ))}

      {VIDEO_SOURCES.map((source, index) => (
        <video
          key={source}
          src={source}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            playableVideos.includes(index) && index === activeVideo ? "opacity-100" : "opacity-0"
          }`}
          onLoadedData={(event) => markVideoReady(index, event.currentTarget)}
          onCanPlay={(event) => markVideoReady(index, event.currentTarget)}
          onError={() =>
            setFailedVideos((current) => (current.includes(index) ? current : [...current, index]))
          }
        />
      ))}
    </div>
  );
}
