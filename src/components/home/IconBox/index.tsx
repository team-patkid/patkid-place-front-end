import {
  baseStyle,
  bookImageStyle,
  cakeImageStyle,
  coffeeImageStyle,
  heartImageOneStyle,
  heartImageTwoStyle,
  musicImageStyle,
} from "./IconBox.css";

const IconBox = () => {
  return (
    <div className={baseStyle}>
      <img className={coffeeImageStyle} src="/coffee.webp" />
      <img className={heartImageOneStyle} src="/heart_1.webp" />
      <img className={musicImageStyle} src="/music.webp" />
      <img className={cakeImageStyle} src="/cake.webp" />
      <img className={heartImageTwoStyle} src="/heart_2.webp" />
      <img className={bookImageStyle} src="/book.webp" />
    </div>
  );
};

export default IconBox;
