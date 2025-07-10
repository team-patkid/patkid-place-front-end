import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useState } from "react";
import { getTotalVistorCount } from "@/apis";
import StartButton from "@components/home/StartButton";
import IconBox from "@components/home/IconBox";
import OptimizedImage from "@components/common/OptimizedImage";
import {
  homeSubTitleStyle,
  homeLayoutStyle,
  homeLogoStyle,
  homeTitleStyle,
} from "@components/home/index.css";

export default function Home({
  visitorCount,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
      <OptimizedImage 
        src="/background_h_1.webp" 
        alt="Home background"
        className="layout"
        width={500}
        height={1081}
        priority={true}
        quality={85}
        fill={true}
      />
      <IconBox />
      <OptimizedImage 
        src="/title.webp" 
        alt="PATKID title"
        className={homeTitleStyle}
        width={300}
        height={150}
        priority={true}
        quality={90}
      />
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
      <a 
        href="https://www.notion.so/PATKID-b28bf7de62bb4e95919b5dca4e8c08ec?pvs=4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <OptimizedImage 
          src="/logo_patKid.webp" 
          alt="PATKID logo"
          className={homeLogoStyle}
          width={150}
          height={50}
          priority={false}
          quality={85}
        />
      </a>
    </div>
  );
}

export const getServerSideProps = (async () => {
  const response = await getTotalVistorCount();
  const visitorCount = response.data.data.count;

  return {
    props: {
      visitorCount,
    },
  };
}) satisfies GetServerSideProps;
