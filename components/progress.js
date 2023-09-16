import Image from "next/image";

const ProgressBarItem = ({ index }) => (
  <div
    className={`progress_item progress`}
    style={{
      position: "relative",
      top: "-33px",
      left: "10px",
      marginLeft: "5.5px",
    }}
  >
    <Image src="/progress.webp" width={14} height={12} quality={80} alt="progress_Img" />
    <div
      className="padding"
      style={{
        width: "5.5px",
        height: "12px",
        display: "inline-block",
      }}
    />
    <Image src="/progress.webp" width={14} height={12} quality={80} alt="progress_Img" />
  </div>
);

const ProgressBar = ({ currentNumber }) => {
  const progressItems = [];

  for (let i = 1; i <= currentNumber; i++) {
    progressItems.push(<ProgressBarItem key={i} index={i} />);
  }

  return (
    <div className="progress_bar">
      <Image
        src="/progress_bar.webp"
        width={471}
        height={39}
        quality={80}
        alt="progress_bar_Img"
      />
      <div className="progress_container">
        {progressItems}
        {currentNumber >= 0 && (
          <div
            className="heart"
            style={{
              position: "relative",
              top: "-32px",
              left: "-5px",
              marginLeft: "2px",
            }}
          >
            <Image
              src="/progress_heart.webp"
              width={45}
              height={39}
              quality={80}
              alt="progress_heart_Img"
            />
          </div>
        )}
      </div>
      <style jsx>{`
        .progress_container {
          width: 476px;
          height: 18px;
          display: flex;
          align-items: center;
        }
        .progress_item {
          margin-right: 5px;
        }
        .progress {
          width: 12px;
          height: 12px;
          left: 34px;
          top: 0px;
          padding: 1px;
        }
        .heart {
          position: absolute;
          width: 45px;
          height: 39px;
          left: -5px;
          top: -2px;
        }
      `}</style>
    </div>
  );
};

export default ProgressBar;
