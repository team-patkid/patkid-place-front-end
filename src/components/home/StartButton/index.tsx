import {
  imageStyle,
  imageHoverStyle,
  firstTextStyle,
  secondTextStyle,
  newBoxStyle,
  shareButtonTextStyle,
} from "./StartButton.css";
import { useShare } from "@/hooks/useShare";
import { getDomain } from "@/utils/env";

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
  const { share } = useShare();

  const handleShare = () => {
    const shareUrl = `${getDomain()}/`;
    share({
      title: "두근두근 핫스팟 테스트",
      text: "나의 성향에 딱 맞는 요즘 핫스팟은 어디일까?",
      url: shareUrl,
    });
  };

  return (
    <>
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
      <button className={newBoxStyle} onClick={handleShare}>
        <p className={shareButtonTextStyle}>공유하기</p>
      </button>
    </>
  );
};

export default StartButton;
