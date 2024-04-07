import { useState } from "react";
import { getTotalVistorCount } from "@/apis";
import StartButton from "@components/home/StartButton";
import IconBox from "@components/home/IconBox";
import {
  homeSubTitleStyle,
  homeLayoutStyle,
  homeLogoStyle,
  homeTitleStyle,
} from "@components/home/index.css";

export default function Home({ visitorCount }: { visitorCount: number }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);

    setTimeout(() => {
      window.location.href = "/questions";
    }, 300);
  };

  const handleMouseEnter = () => {
    setIsClicked(true);
  };

  const handleMouseLeave = () => {
    setIsClicked(false);
  };

  return (
    <div className={`${homeLayoutStyle} layout`}>
      <img src="/background_h_1.webp" className="layout" />
      <IconBox />
      <img src="/title.webp" className={homeTitleStyle} />
      <p className={`isaText ${homeSubTitleStyle}`}>
        나의 성향에 딱 맞는 요즘 핫스팟은 어디일까?
      </p>
      <StartButton
        isMouseOn={isClicked}
        count={visitorCount}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <img src="/logo_patKid.webp" className={homeLogoStyle} />
    </div>
  );
}

export async function getServerSideProps() {
  const response = await getTotalVistorCount();
  const visitorCount = response.data.data.count;

  return {
    props: {
      visitorCount,
    },
  };
}
