import Image from "next/image";
import { CSSProperties, useState } from "react";

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
  lazy?: boolean;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
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
  lazy = true,
  placeholder = "empty",
  blurDataURL,
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // 동적 이미지 크기 처리
  const imageProps = fill
    ? { fill: true }
    : { width: width || 500, height: height || 500 };

  const imageStyles = {
    ...style,
    transition: "opacity 0.3s ease-in-out",
    opacity: isLoaded ? 1 : 0.8,
  };

  if (hasError) {
    return (
      <div
        className={className}
        style={{
          ...imageStyles,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f0f0f0",
          color: "#666",
          fontSize: "12px",
        }}
      >
        이미지를 불러올 수 없습니다
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      style={imageStyles}
      priority={priority}
      quality={quality}
      onClick={onClick}
      draggable={draggable}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      onLoad={handleLoad}
      onError={handleError}
      {...imageProps}
      {...props}
    />
  );
};

export default OptimizedImage;