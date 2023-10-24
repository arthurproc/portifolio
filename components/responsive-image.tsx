import Image from "next/legacy/image";

type ResponsiveImageProps = {
  src: string;
  alt: string;
}

function ResponsiveImage({ src, alt }: ResponsiveImageProps) {
  return (
    <div className="image-container">
      <Image
        className="image"
        src={src}
        layout="fill"
        alt={alt}
      />
    </div>
  );
}

export default ResponsiveImage;