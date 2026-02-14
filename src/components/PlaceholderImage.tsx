interface PlaceholderImageProps {
  text: string;
  className?: string;
  aspect?: "video" | "square" | "portrait";
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
        : "aspect-video";

  return (
    <div
      className={`placeholder-img ${aspectClass} w-full rounded-lg ${className}`}
    >
      {text}
    </div>
  );
}
