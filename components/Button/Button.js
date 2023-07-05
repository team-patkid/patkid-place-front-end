import { useState } from 'react';

const Button = ({ onClick, buttonImage, clickedButtonImage}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      onClick();
    }, 500);
  };

  const handleMouseEnter = () => {
    if (!isClicked) {
      setIsClicked(true);
    }
  };

  const handleMouseLeave = () => {
    if (isClicked) {
      setIsClicked(false);
    }
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`isClicked ${isClicked ? 'clicked' : ''}`}
    >
      {isClicked ? (
        <img src={clickedButtonImage} className="" alt="Clicked Button" style={{ width: '466px', height: '105px' }} />
      ) : (
        <img src={buttonImage} className=" " alt="Button" style={{ width: '466px', height: '105px' }} />
      )}

      <style jsx>{`
        @keyframes clickAnimation {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.95);
          }
          100% {
            transform: scale(1);
          }
        }
        .isClicked {
        cursor: pointer;
        transition: background-color 0.7s ease;
        }
        .clicked {
          animation: clickAnimation 0.5s linear;
          animation-delay: 0.1s;
        }
      `}</style>
    </div>
  );
};

export default Button;