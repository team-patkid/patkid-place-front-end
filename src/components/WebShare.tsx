import React, { useCallback } from "react";
import { useShare } from "@/hooks/useShare";
import OptimizedImage from "./common/OptimizedImage";
import { getImageAlt, getImageDimensions } from "@/utils/imageHelpers";

type WebShareButtonProps = {
  title?: string;
  text?: string;
  url?: string;
  style?: React.CSSProperties;
  className?: string;
  src: string;
};

const WebShareButton = ({ 
  title = "두근두근 핫스팟 테스트 in seoul", 
  text = "나의 성향에 딱 맞는 요즘 핫스팟은 어디일까?", 
  url, 
  style, 
  className,
  src 
}: WebShareButtonProps) => {
  const { share } = useShare();
  const dimensions = getImageDimensions(src);
  
  const handleShare = useCallback(() => {
    share({ title, text, url });
  }, [share, title, text, url]);

  return (
    <OptimizedImage
      src={src}
      alt={getImageAlt(src, "공유하기")}
      className={className}
      style={{
        cursor: "pointer",
        ...style,
      }}
      width={dimensions.width}
      height={dimensions.height}
      onClick={handleShare}
    />
  );
};

export default WebShareButton;