import OptimizedImage from "@components/common/OptimizedImage";
import { titleImageStyle, titleStyle, titleTextStyle } from "./Title.css";

const Title = () => {
  return (
    <div className={titleStyle}>
      <OptimizedImage
        className={titleImageStyle}
        src="/back.webp"
        alt="Back arrow"
        width={12}
        height={25}
        draggable={false}
      />
      <p className={titleTextStyle}>핫스팟 테스트</p>
    </div>
  );
};

export default Title;
