import { useState } from "react";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  backgroundImage,
  backgroundVideo,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
}) {
  const [videoReady, setVideoReady] = useState(false);
  const isVideo = Boolean(backgroundVideo);

  return (
    <section
      className={`bg-brand-green px-6 text-center relative overflow-hidden ${
        isVideo
          ? "pt-40 md:pt-48 pb-28 md:pb-36 min-h-[62vh] md:min-h-[70vh] flex items-center justify-center"
          : "pt-32 md:pt-36 pb-20 md:pb-24"
      }`}
      style={
        backgroundImage && !isVideo
          ? {
              backgroundImage: `linear-gradient(rgba(4,68,34,0.72), rgba(4,68,34,0.82)), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }
          : undefined
      }
    >
      {backgroundVideo && (
        <>
          <video
            src={backgroundVideo}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            onCanPlay={() => setVideoReady(true)}
            onLoadedData={() => setVideoReady(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[700ms] ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
          />
          {/* Very light overall tint for legibility */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none bg-brand-green/20"
          />
          {/* Hero-style bottom-weighted scrim */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(4,68,34,0) 0%, rgba(4,68,34,0.25) 45%, rgba(4,68,34,0.6) 100%)",
            }}
          />
        </>
      )}
      <div className="relative z-10 w-full">
        {eyebrow && (
          <p
            className={`text-brand-gold text-xs uppercase tracking-[0.3em] mb-4 ${
              isVideo ? "drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]" : ""
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h1
          className={`font-display text-brand-cream-text font-semibold ${
            isVideo
              ? "text-5xl md:text-7xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
              : "text-5xl md:text-6xl"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`text-brand-gold mt-4 max-w-2xl mx-auto ${
              isVideo ? "drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]" : ""
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
