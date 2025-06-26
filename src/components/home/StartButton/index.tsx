import {
  imageStyle,
  imageHoverStyle,
  firstTextStyle,
  secondTextStyle,
} from "./StartButton.css";

type StartButtonProps = {
  isMouseOn: boolean;
  count: number;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const StartButton = ({
  count,
  isMouseOn,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: StartButtonProps) => {
  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        src={`/start_btn${isMouseOn ? "_click" : ""}.webp`}
        className={`${imageStyle} ${isMouseOn ? imageHoverStyle : ""}`}
        alt=""
      />
      <div>
        <p className={firstTextStyle}>시작하기</p>
        <p className={`isaText ${secondTextStyle}`}>참여자 수 {count}</p>
      </div>
    </div>
  );
};

export default StartButton;
