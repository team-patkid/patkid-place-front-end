import OptimizedImage from "@components/common/OptimizedImage";
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
      <OptimizedImage className={coffeeImageStyle} src="/coffee.webp" alt="Coffee icon" width={60} height={60} />
      <OptimizedImage className={heartImageOneStyle} src="/heart_1.webp" alt="Heart icon" width={60} height={60} />
      <OptimizedImage className={musicImageStyle} src="/music.webp" alt="Music icon" width={60} height={60} />
      <OptimizedImage className={cakeImageStyle} src="/cake.webp" alt="Cake icon" width={60} height={60} />
      <OptimizedImage className={heartImageTwoStyle} src="/heart_2.webp" alt="Heart icon" width={60} height={60} />
      <OptimizedImage className={bookImageStyle} src="/book.webp" alt="Book icon" width={60} height={60} />
    </div>
  );
};

export default IconBox;
