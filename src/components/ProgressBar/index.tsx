import Image from "next/image";
import {
  ProgressContainerStyle,
  ProgressHeartStyle,
  ProgressItemStyle,
  ProgressWrapperStyle,
} from "./ProgressBar.css";

const ProgressBarItem = () => (
  <div className={ProgressItemStyle}>
    <Image
      src="/progress.webp"
      width={14}
      height={12}
      quality={50}
      alt="progress_Img"
    />
    <div
      style={{
        width: "5px",
      }}
    />
    <Image
      src="/progress.webp"
      width={14}
      height={12}
      quality={50}
      alt="progress_Img"
    />
  </div>
);

type ProgressBarProps = {
  currentNumber: number;
};

const ProgressBar = ({ currentNumber }: ProgressBarProps) => {
  const progressItems = [];

  for (let i = 1; i <= currentNumber; i++) {
    progressItems.push(<ProgressBarItem key={i} />);
  }

  return (
    <div className={ProgressWrapperStyle}>
      <Image
        src="/progress_bar.webp"
        width={471}
        height={39}
        quality={50}
        alt="progress_bar_Img"
      />
      <div className={ProgressContainerStyle}>
        {progressItems}
        {currentNumber >= 0 && (
          <div className={ProgressHeartStyle}>
            <Image
              src="/progress_heart.webp"
              width={45}
              height={39}
              quality={50}
              alt="progress_heart_Img"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
