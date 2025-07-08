import OptimizedImage from "../common/OptimizedImage";
import { getImageAlt } from "@/utils/imageHelpers";
import {
  imageFiveStyle,
  imageFourStyle,
  imageOneStyle,
  imageSevenStyle,
  imageSixStyle,
  imageThreeStyle,
  imageTwoStyle,
  loadingBgStyle,
  loadingHeartStyle,
  loadingLayoutStyle,
  loadingTextStyle,
  loadingTitleStyle,
} from "./Loading.css";

export default function Loading() {
  return (
    <div className={loadingLayoutStyle}>
      <OptimizedImage 
        className={loadingBgStyle} 
        src="/background_h_3.webp" 
        alt={getImageAlt("/background_h_3.webp")}
        width={500}
        height={1081}
        priority
      />
      <div className={loadingTitleStyle}>
        <OptimizedImage 
          className={loadingHeartStyle} 
          src="/loding.webp" 
          alt={getImageAlt("/loding.webp")}
          width={355}
          height={348}
        />
        <OptimizedImage 
          className={loadingTextStyle} 
          src="/loding_text.webp" 
          alt={getImageAlt("/loding_text.webp")}
          width={251}
          height={100}
        />
      </div>
      <div className="main_layout_icon">
        <OptimizedImage className={imageOneStyle} src="/coffee.webp" alt={getImageAlt("/coffee.webp")} width={142} height={140} />
        <OptimizedImage className={imageTwoStyle} src="/heart_1.webp" alt={getImageAlt("/heart_1.webp")} width={48} height={45} />
        <OptimizedImage className={imageThreeStyle} src="/heart_1.webp" alt={getImageAlt("/heart_1.webp")} width={65} height={62} />
        <OptimizedImage className={imageFourStyle} src="/music.webp" alt={getImageAlt("/music.webp")} width={120} height={114} />
        <OptimizedImage className={imageFiveStyle} src="/cake.webp" alt={getImageAlt("/cake.webp")} width={107} height={167} />
        <OptimizedImage className={imageSixStyle} src="/heart_2.webp" alt={getImageAlt("/heart_2.webp")} width={84} height={79} />
        <OptimizedImage className={imageSevenStyle} src="/book.webp" alt={getImageAlt("/book.webp")} width={134} height={121} />
      </div>
    </div>
  );
}
