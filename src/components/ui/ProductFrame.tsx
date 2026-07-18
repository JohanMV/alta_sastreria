import type { ProductImage } from "@/types";

interface ProductFrameProps {
  image: ProductImage;
  className?: string;
  imageClassName?: string;
  decorative?: boolean;
}

export function ProductFrame({
  image,
  className = "",
  imageClassName = "",
  decorative = false,
}: ProductFrameProps) {
  return (
    <div
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : image.alt}
      aria-hidden={decorative || undefined}
      className={`overflow-hidden bg-ivory ${className}`}
    >
      <div
        className={`absolute inset-[4%] bg-contain bg-no-repeat ${imageClassName}`}
        style={{
          backgroundImage: `url(${image.src})`,
          backgroundPosition: `${image.focalX ?? "50%"} ${image.focalY ?? "50%"}`,
        }}
      />
    </div>
  );
}