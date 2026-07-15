function initialsFor(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0]!.charAt(0).toUpperCase();
  return (parts[0]!.charAt(0) + parts[parts.length - 1]!.charAt(0)).toUpperCase();
}

export function TeamAvatar({
  name,
  image,
  size = 128,
}: {
  name: string;
  image?: string | null;
  size?: number;
}) {
  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className="rounded-full object-cover border border-brand-gold/40"
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <div
      className="rounded-full flex items-center justify-center border border-brand-gold/40"
      style={{
        width: size,
        height: size,
        backgroundColor: "#044422",
        color: "#C79D31",
        fontFamily: "var(--font-display)",
        fontSize: size * 0.4,
        fontWeight: 600,
        letterSpacing: "0.02em",
      }}
      aria-label={name}
    >
      {initialsFor(name)}
    </div>
  );
}
