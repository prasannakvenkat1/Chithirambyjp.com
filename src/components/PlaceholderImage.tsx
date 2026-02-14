interface PlaceholderImageProps {
  text: string;
  className?: string;
  aspect?: "video" | "square" | "portrait" | "hero";
}

export default function PlaceholderImage({
  text,
  className = "",
  aspect = "video",
}: PlaceholderImageProps) {
  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "portrait"
        ? "aspect-[3/4]"
        : aspect === "hero"
          ? "aspect-auto h-full"
          : "aspect-video";

  return (
    <div
      className={`placeholder-img ${aspectClass} w-full rounded-lg ${className}`}
    >
      <span className="relative z-10">{text}</span>
    </div>
  );
}
