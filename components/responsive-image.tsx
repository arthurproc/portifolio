import Image from "next/image";

type ResponsiveImageProps = {
  src: string;
  alt: string;
}

function ResponsiveImage({ src, alt }: ResponsiveImageProps) {
  return (
    <div className="image-container">
      <Image className="image" src={src} alt={alt} fill sizes="100vw" />
    </div>
  );
}

export default ResponsiveImage;