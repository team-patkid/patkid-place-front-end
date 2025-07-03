import { useState, useEffect } from "react";
import * as styles from "./button.css";

type ButtonProps = {
  buttonImage: string;
  clickedButtonImage: string;
  text: React.ReactNode;
  onClick: () => void;
};

const Button = ({
  onClick,
  buttonImage,
  clickedButtonImage,
  text,
}: ButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      onClick();
    }, 100);
  };

  const handleMouseEnter = () => {
    if (!isClicked) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isClicked) {
      setIsHovered(false);
    }
  };

  useEffect(() => {
    setIsHovered(false);
  }, [isClicked]);

  return (
    <div
      className={styles.baseStyle}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={
          isClicked
            ? clickedButtonImage
            : isHovered
              ? "/visit_click.webp"
              : buttonImage
        }
        alt="Button"
        className={styles.buttonImageStyle}
        draggable={false}
      />
      <p className={styles.buttonTextStyle}>{text}</p>
    </div>
  );
};

export default Button;
