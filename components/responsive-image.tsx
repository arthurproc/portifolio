import Image from "next/image";

type ResponsiveImageProps = {
  src: string;
  alt: string;
  additionalClasses?: string;
}

function ResponsiveImage({ src, alt, additionalClasses }: ResponsiveImageProps) {
  return (
    <div className="image-responsive-container">
      <Image className={`image ${additionalClasses ?? ''}`} src={src} alt={alt} fill sizes="100vw" />
    </div>
  );
}

export default ResponsiveImage;