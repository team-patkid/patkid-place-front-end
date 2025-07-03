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
import {
  resultBoxImageStyle,
  resultDescriptionBox,
  resultDescriptionStyle,
  resultDescriptionTextStyle,
  resultDiceStyle,
  resultSpotImageStyle,
  resultSpotStyle,
  resultStyle,
  resultTitleStyle,
  resultTooltipStyle,
  tagStyle,
  wrapperStyle,
} from "@components/results/index.css";

export default function Results({
  userData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [visited, setVisited] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [resultData, setResultData] = useState(userData);
  const [isFetching, setIsFetching] = useState(false);
  const [diceClicks, setDiceClicks] = useState(0);
  const [showDice, setShowDice] = useState(true);
  const mbti = typeof router.query.mbti === "string" ? router.query.mbti : "";

  //랜덤 주사위 클릭
  const handleDiceClick = () => {
    if (!isFetching && diceClicks < 2) {
      const fetchData = async () => {
        setIsFetching(true);
        try {
          const { data } = await postMBTIResult(mbti);
          setResultData(data.data);
          console.log("결과 데이터:", data.data);
        } catch (error) {
          console.error(error);
        } finally {
          setIsFetching(false);
        }
      };

      fetchData();
      setDiceClicks((prevDice) => prevDice + 1);
      setShowDice(diceClicks !== 1);
    }
  };

  // URL을 통해 공유페이지 접속 여부 확인
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const sharedParam = queryParams.get("shared");

    setVisited(sharedParam === "true");
  }, []);

  const openModal = (openState: boolean) => () => {
    setModalOpen(openState);
  };

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
  }, [resultData]);

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
          <img
            className={resultBoxImageStyle}
            src="/i_box.webp"
            draggable={false}
          />
          <p
            className={resultTitleStyle}
            style={{ fontSize: `${fontSize}px`, whiteSpace: "nowrap" }}
          >
            {resultData.result.name}
          </p>
          <img
            className={resultTooltipStyle}
            src="/tooltip.webp"
            onClick={handleDiceClick}
            style={{ display: showDice ? "block" : "none" }}
          />
          <img
            className={resultDiceStyle}
            src="/dice.webp"
            onClick={handleDiceClick}
            style={{ display: showDice ? "block" : "none" }}
          />
          <div className={resultSpotStyle}>
            <img
              className={resultSpotImageStyle}
              src={resultData.result.place.imageUrl}
            />
          </div>
          <div className={tagStyle}>
            {resultData.result.place.tags?.map((v, index) => (
              <p className="isaText" key={`hotspot-modal-${index}`}>
                #{v.tag}
              </p>
            ))}
          </div>
          <img
            className={resultDescriptionBox}
            src="/box.webp"
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
        <Location isLoading={isLoading} result={resultData.result} />
        <HotSpot
          isOpen={modalOpen}
          hotPlaces={resultData.hotPlace}
          openModal={openModal}
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
