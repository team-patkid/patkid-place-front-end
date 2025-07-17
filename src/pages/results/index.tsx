import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { postMBTIResult } from "@/apis";
import { ResultResponse } from "@/models/result";
import dynamic from "next/dynamic";
import LoadingPage from "@components/Loading";
import OptimizedImage from "@components/common/OptimizedImage";
import { trackMBTIResult, trackPlaceRecommendation } from "@/utils/gtag";

const Footer = dynamic(() => import("@components/results/Footer"), {
  ssr: false,
  loading: () => <div>푸터 로딩 중...</div>
});

const HotSpot = dynamic(() => import("@components/results/HotSpot"), {
  ssr: false,
  loading: () => <div>핫스팟 로딩 중...</div>
});

const Background = dynamic(() => import("@components/results/Background"), {
  loading: () => <div>배경 로딩 중...</div>
});

const Visit = dynamic(() => import("@components/results/Visit"), {
  ssr: false,
  loading: () => <div>방문 정보 로딩 중...</div>
});

const Location = dynamic(() => import("@components/results/Location"), {
  ssr: false,
  loading: () => <div>위치 정보 로딩 중...</div>
});
import {
  resultBoxImageStyle,
  resultDescriptionBox,
  resultDescriptionStyle,
  resultDescriptionTextStyle,
  resultSpotImageStyle,
  resultSpotStyle,
  resultStyle,
  resultTitleStyle,
  tagStyle,
  wrapperStyle,
  resultHeaderStyle,
  resultDescriptionContainerStyle,
} from "@components/results/index.css";

export default function Results({
  userData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const [visited, setVisited] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [resultData] = useState(userData);
  const mbti = typeof router.query.mbti === "string" ? router.query.mbti : "";

  // URL을 통해 공유페이지 접속 여부 확인
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const sharedParam = queryParams.get("shared");

    setVisited(sharedParam === "true");
  }, []);


  //폰트크기 유동적 조절
  const calculateFontSize = () => {
    const containerWidth = 290;
    const desiredFontSize = 38;

    if (!resultData || !resultData.result || !resultData.result.name) {
      return desiredFontSize;
    }

    const fontSize = Math.min(
      desiredFontSize,
      (containerWidth / resultData.result.name.length) * 1.5,
    );
    return fontSize;
  };

  const [fontSize, setFontSize] = useState(calculateFontSize());

  //로딩페이지 지연
  useEffect(() => {
    if (resultData) {
      setTimeout(() => {
        setIsLoading(false);
        
        // Google Analytics 이벤트 추적
        trackMBTIResult(mbti);
        if (resultData.result?.place?.name) {
          trackPlaceRecommendation(resultData.result.place.name, mbti);
        }
      }, 1600);
    }
  }, [resultData, mbti]);

  useEffect(() => {
    setFontSize(calculateFontSize());
  }, [resultData, calculateFontSize]);

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    router.events.on("routeChangeStart", handleStart);

    return () => {
      router.events.off("routeChangeStart", handleStart);
    };
  }, [router]);

  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!resultData?.result?.place) {
    return <LoadingPage />;
  }
  const resultTitle = resultData?.result?.name ? `${resultData.result.name} - MBTI ${mbti} 결과` : "MBTI 테스트 결과";
  const resultDescription = resultData?.result?.place?.content 
    ? `${resultData.result.place.name}: ${resultData.result.place.content.slice(0, 100)}...`
    : "나의 MBTI 성향에 맞는 핫스팟을 확인해보세요!";

  return (
    <>
      <Head>
        <title>{resultTitle} - PATKID</title>
        <meta name="description" content={resultDescription} />
        <meta name="keywords" content={`MBTI ${mbti}, ${resultData?.result?.place?.name || '핫스팟'}, 맞춤 추천, 장소 추천`} />
        <meta property="og:title" content={resultTitle} />
        <meta property="og:description" content={resultDescription} />
        <meta property="og:url" content={`https://place.patkid.xyz/results?mbti=${mbti}`} />
        {resultData?.result?.place?.imageUrl && (
          <meta property="og:image" content={resultData.result.place.imageUrl} />
        )}
        <link rel="canonical" href={`https://place.patkid.xyz/results?mbti=${mbti}`} />
      </Head>
      <div className={wrapperStyle}>
        <section className="result_layout">
        <Background />
        <div className={resultStyle}>
          <div className={resultHeaderStyle}>
            <OptimizedImage
              className={resultBoxImageStyle}
              src="/i_box.webp"
              alt="Result box"
              width={400}
              height={300}
              priority={true}
              quality={85}
              draggable={false}
            />
            <p
              className={resultTitleStyle}
              style={{ fontSize: `${fontSize}px`, whiteSpace: "nowrap" }}
            >
              {resultData.result.name}
            </p>            
            <div className={resultSpotStyle}>
              <img
                className={resultSpotImageStyle}
                src={resultData.result.place.imageUrl}
                alt={resultData.result.place.name}
              />
            </div>
            
            <div className={tagStyle}>
              {resultData.result.place.tags?.map((v, index) => (
                <p className="isaText" key={`hotspot-modal-${index}`}>
                  #{v.tag}
                </p>
              ))}
            </div>
          </div>
          
          <div className={resultDescriptionContainerStyle}>
            <OptimizedImage
              className={resultDescriptionBox}
              src="/box.webp"
              alt="Description box"
              width={400}
              height={200}
              priority={false}
              quality={80}
              draggable={false}
            />
            <div className={resultDescriptionStyle}>
              {resultData.result.place.content.split("\n").map((v, index) => (
                <li className={resultDescriptionTextStyle} key={index}>
                  {v}
                </li>
              ))}
            </div>
          </div>
        </div>
        <Location isLoading={isLoading} result={resultData.result} />
        <HotSpot
          hotPlaces={resultData.hotPlace}
        />
        <Visit />
      </section>
      <Footer
        visited={visited}
        mbti={mbti}
        style={{
          backgroundColor: visited ? "#FF448D" : "#000000",
        }}
      />
      </div>
    </>
  );
}

export const getServerSideProps = (async (context) => {
  const { mbti } = context.query;

  if (!mbti || typeof mbti !== "string") {
    throw new Error("");
  }

  try {
    const response = await postMBTIResult(mbti);
    const userData: ResultResponse = response.data;

    return {
      props: {
        userData,
      },
    };
  } catch (error) {
    redirect("/");
  }
}) satisfies GetServerSideProps;
