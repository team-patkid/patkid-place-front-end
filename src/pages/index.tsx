import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { useState } from "react";
import dynamic from "next/dynamic";
import { getTotalVistorCount } from "@/apis";
import OptimizedImage from "@components/common/OptimizedImage";
import { trackMBTIStart } from "@/utils/gtag";

const StartButton = dynamic(() => import("@components/home/StartButton"), {
  loading: () => <div>시작 버튼 로딩 중...</div>
});

const IconBox = dynamic(() => import("@components/home/IconBox"), {
  loading: () => <div>아이콘 로딩 중...</div>
});
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
    
    // Google Analytics 이벤트 추적
    trackMBTIStart();

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
    <>
      <Head>
        <title>PATKID - 성향 기반 핫스팟 추천 서비스 | 두근두근 핫스팟 테스트</title>
        <meta name="description" content={`MBTI 성향 테스트로 나에게 딱 맞는 요즘 핫스팟을 찾아보세요! 개인 맞춤형 장소 추천 서비스 PATKID. 지금까지 ${visitorCount.toLocaleString()}명이 참여했습니다.`} />
        <meta property="og:title" content="PATKID - 성향 기반 핫스팟 추천 서비스" />
        <meta property="og:description" content="MBTI 성향 테스트로 나에게 딱 맞는 요즘 핫스팟을 찾아보세요! 개인 맞춤형 장소 추천 서비스" />
        <meta property="og:url" content="https://place.patkid.xyz" />
        <link rel="canonical" href="https://place.patkid.xyz" />
      </Head>
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
        src="/title.svg" 
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
    </>
  );
}

export const getServerSideProps = (async () => {
  try {
    const response = await getTotalVistorCount();
    
    // 안전하게 접근
    const responseAny = response as any;
    const visitorCount = responseAny?.data?.data?.count || 
                        responseAny?.data?.count || 
                        responseAny?.count || 
                        0;

    return {
      props: {
        visitorCount,
      },
    };
  } catch (error) {
    return {
      props: {
        visitorCount: 0, // 기본값
      },
    };
  }
}) satisfies GetServerSideProps;
