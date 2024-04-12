import { bgStyle, bgThreeStyle, bgTwoStyle } from "./Background.css";

const Background = () => {
  return (
    <div>
      <img src="/background_h_2.webp" className={bgStyle} draggable={false} />
      <img
        src="/background_h_2_2.webp"
        className={bgTwoStyle}
        draggable={false}
      />
      <img
        src="/background_h_2_3.webp"
        className={bgThreeStyle}
        draggable={false}
      />
    </div>
  );
};

export default Background;
