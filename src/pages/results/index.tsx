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
          const response = await postMBTIResult(mbti);
          setResultData(response.data);
          console.log("결과 데이터:", response.data);
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
      (containerWidth / resultData.result.name.length) * 1.5
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

  const { content, imageUrl, naverUrl } = resultData.result.place;
  const tags = resultData.result.place.tags;
  return (
    <div className="wrapper">
      <section className="result_layout">
        <Background />
        <div className="result">
          <img src="/i_box.webp" draggable={false} />
          <p style={{ fontSize: `${fontSize}px`, whiteSpace: "nowrap" }}>
            {resultData.result.name}
          </p>
          <img
            src="/tooltip.webp"
            onClick={handleDiceClick}
            style={{ display: showDice ? "block" : "none" }}
          />
          <img
            src="/dice.webp"
            onClick={handleDiceClick}
            style={{ display: showDice ? "block" : "none" }}
          />
          <div className="spot_img">
            <img src={resultData.result.place.imageUrl} />
          </div>
          <div className="tag">
            {tags.map((v, index) => (
              <p className="isaText" key={`hotspot-modal-${index}`}>
                #{v.tag}
              </p>
            ))}
          </div>
          <img src="/box.webp" draggable={false} />
          <div className="box_text">
            {resultData.result.place.content.split("\n").map((v, index) => (
              <li key={index}>{v}</li>
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
        content={content}
        imageUrl={imageUrl}
        naverUrl={naverUrl}
        mbti={mbti}
        style={{
          backgroundColor: visited ? "#FF448D" : "#000000",
        }}
      />
      <style jsx>
        {`
          .wrapper {
            position: relative;
            margin-left: auto;
            margin-right: auto;
            width: 500px;
            height: 2546px;
          }
          .result > img:nth-of-type(1) {
            position: absolute;
            width: 467px;
            height: 524px;
            left: calc(50% - 467px / 2 + 0.5px);
            top: 78px;
          }
          .result > p:nth-of-type(1) {
            position: absolute;
            width: 290px;
            height: 41px;
            top: 116px;
            left: calc(50% - 310px / 2);
            font-weight: 400;
            line-height: 41px;
            color: #000000;
            font-size: 38px;
            text-align: center;
          }
          .result > p:nth-of-type(2) {
            position: absolute;
            width: 194px;
            height: 20px;
            left: 267px;
            top: 67px;

            font-weight: 500;
            font-size: 17px;
            color: #565656;
          }
          .result > img:nth-of-type(2) {
            position: absolute;
            width: 227px;
            height: 55px;
            left: 250px;
            top: 55px;
          }
          .result > img:nth-of-type(3) {
            position: absolute;
            width: 26px;
            height: 26px;
            top: 123px;
            left: 413px;
            transform: rotate(7.1deg);
            cursor: pointer;
          }
          .tooltip-show {
            display: block;
          }
          .tooltip-hide {
            display: none;
          }
          .spot_img {
            position: absolute;
            width: 419px;
            height: 281px;
            left: calc(50% - 419px / 2 + 0.5px);
            top: 179px;
            overflow: hidden;
          }
          .spot_img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .tag {
            position: absolute;
            width: 326px;
            height: 46px;
            left: calc(50% - 326px / 2);
            top: 534px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .tag-line {
            position: absolute;
            width: 410px;
            height: 0px;
            left: calc(50% - 410px / 2);
            top: 525px;
            border: 1px solid #ff448d;
          }
          .result > img:nth-of-type(4) {
            position: absolute;
            width: 468px;
            height: 242px;
            left: calc(50% - 468px / 2);
            top: 643px;
          }
          .box_text {
            position: absolute;
            width: 397px;
            height: 190px;
            left: 52px;
            top: 670px;
            z-index: 999;
            font-weight: 500;
            font-size: 20px;
            font-family: "Pretendard";
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .box_text li {
            flex: 1;
            margin-bottom: 18px;
          }
        `}
      </style>
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
