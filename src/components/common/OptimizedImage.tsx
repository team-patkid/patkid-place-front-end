import Image from "next/image";
import { CSSProperties } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  onClick?: () => void;
  draggable?: boolean;
  fill?: boolean;
}

const OptimizedImage = ({
  src,
  alt,
  className,
  style,
  width,
  height,
  priority = false,
  quality = 75,
  onClick,
  draggable = true,
  fill = false,
  ...props
}: OptimizedImageProps) => {
  // 동적 이미지 크기 처리
  const imageProps = fill
    ? { fill: true }
    : { width: width || 500, height: height || 500 };

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      style={style}
      priority={priority}
      quality={quality}
      onClick={onClick}
      draggable={draggable}
      {...imageProps}
      {...props}
    />
  );
};

export default OptimizedImage;