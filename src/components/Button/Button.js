import { useState, useEffect } from 'react';

const Button = ({ onClick, buttonImage, clickedButtonImage, buttonText }) => {
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
      className={`button ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={isClicked ? clickedButtonImage : isHovered ? '/visit_click.webp' : buttonImage}
        alt="Button"
        className={`button-image ${isHovered && !isClicked ? 'hovered' : ''}`}
      />
      <p className={`button-text ${isClicked ? 'clicked' : ''}`}>{buttonText}</p>

      <style jsx>{`
        .button {
          position: relative;
          width: 466px;
          height: 105px;
          cursor: pointer;
          overflow: hidden;
        }

        .button img {
          width: 100%;
          height: 100%;
          transition: transform 0.3s ease;
        }

        .button-image.hovered {
          transform: scale(0.95);
        }

        .button-text {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: ${isClicked ? '0' : '1'};
          pointer-events: none;
        }

        .clicked .button-image {
          transform: scale(0.95);
        }

        .clicked .button-text {
          opacity: 1;
        }

        @keyframes clickAnimation {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.95);
          }
          75%{
            transform: scale(0.95);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Button;
