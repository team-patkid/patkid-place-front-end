import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { postMBTIResult } from "@/apis";
import { ResultResponse } from "@/models/result";
import LoadingPage from "@components/Loading";
import Footer from "@components/results/Footer";
import HotSpot from "@components/results/HotSpot";
import Background from "@components/results/Background";
import Visit from "@components/results/Visit";
import Location from "@components/results/Location";
import OptimizedImage from "@components/common/OptimizedImage";
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
      }, 1600);
    }
  }, [resultData]);

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
  return (
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
  );
}

export const getServerSideProps = (async (context) => {
  const { mbti } = context.query;

  if (!mbti || typeof mbti !== "string") {
    throw new Error("");
  }

  try {
    const response = await postMBTIResult(mbti);
    const userData: ResultResponse = response.data.data;

    return {
      props: {
        userData,
      },
    };
  } catch (error) {
    console.error("Error fetching user data:", error);
    redirect("/");
  }
}) satisfies GetServerSideProps;
