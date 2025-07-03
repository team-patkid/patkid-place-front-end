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
      <img className={loadingBgStyle} src="/background_h_3.webp" />
      <div className={loadingTitleStyle}>
        <img className={loadingHeartStyle} src="loding.webp" />
        <img className={loadingTextStyle} src="loding_text.webp" />
      </div>
      <div className="main_layout_icon">
        <img className={imageOneStyle} src="/coffee.webp" />
        <img className={imageTwoStyle} src="/heart_1.webp" />
        <img className={imageThreeStyle} src="/heart_1.webp" />
        <img className={imageFourStyle} src="/music.webp" />
        <img className={imageFiveStyle} src="/cake.webp" />
        <img className={imageSixStyle} src="/heart_2.webp" />
        <img className={imageSevenStyle} src="/book.webp" />
      </div>
    </div>
  );
}
