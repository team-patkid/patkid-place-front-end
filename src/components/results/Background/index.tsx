import OptimizedImage from "@components/common/OptimizedImage";
import {
  bgContainerStyle,
  bgStyle,
  bgThreeStyle,
  bgTwoStyle,
} from "./Background.css";

const Background = () => {
  return (
    <div className={bgContainerStyle}>
      <OptimizedImage 
        src="/background_h_2.webp" 
        alt="Results background"
        className={bgStyle} 
        width={500}
        height={1081}
        priority={true}
        quality={85}
        draggable={false}
      />
      <OptimizedImage
        src="/background_h_2_2.webp"
        alt="Results background layer 2"
        className={bgTwoStyle}
        width={500}
        height={1081}
        priority={false}
        quality={75}
        draggable={false}
      />
      <OptimizedImage
        src="/background_h_2_3.webp"
        alt="Results background layer 3"
        className={bgThreeStyle}
        width={500}
        height={1081}
        priority={false}
        quality={75}
        draggable={false}
      />
    </div>
  );
};

export default Background;
