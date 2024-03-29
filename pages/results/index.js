import KakaoShareButton from "@/components/KakaoShare";
import LoadingPage from "@/components/LoadingPage";
import Modal from "@/components/Modal";
import MapComponent from "@/components/map";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

export async function getServerSideProps(context) {
  const { mbti, userId } = context.query;
  console.log("mbti:", mbti);
  console.log("userId:", userId);
  try {
    const response = await axios.post(
      "https://place-api.patkid.kr/v1/user/result",
      {
        mbti: mbti,
      }
    );
    const userData = response.data;
    return {
      props: {
        userData: userData,
      },
    };
  } catch (error) {
    console.error("Error fetching user data:", error);

    return {
      props: {
        userData: null,
      },
    };
  }
}

export default function Results({ userData }) {
  const router = useRouter();
  const userId = userData?.data?.result?.userId;
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenIndex, setModalOpenIndex] = useState(null);
  const [shared, setShared] = useState(false);
  const [visited, setVisited] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [resultData, setResultData] = useState(userData);
  const [isFetching, setIsFetching] = useState(false);
  const [diceClicks, setDiceClicks] = useState(0);
  const [showDice, setShowDice] = useState(true);
  const [initialUserId, setInitialUserId] = useState(null);

  //초기 결과데이터
  useEffect(() => {
    if (userData && diceClicks === 0) {
      console.log("초기 결과 데이터:", userData);
      console.log("mbti 값:", router.query.mbti);
      console.log("userId 값:", userId);
      setInitialUserId(userId);
    }
  }, [userData, diceClicks]);

  //랜덤 주사위 클릭
  const handleDiceClick = () => {
    if (!isFetching && diceClicks < 2) {
      const fetchData = async () => {
        setIsFetching(true);
        try {
          let response = await axios.post(
            "https://place-api.patkid.kr/v1/user/result",
            {
              mbti: router.query.mbti,
            }
          );
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

      if (diceClicks === 1) {
        setShowDice(false);
      }
    }
  };

  // URL을 통해 공유페이지 접속 여부 확인
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const sharedParam = queryParams.get("shared");

    if (sharedParam === "true") {
      setVisited(true);
      // setIsLoading(false);
    } else {
      setVisited(false);
    }
  }, []);

  //로딩페이지 지연
  useEffect(() => {
    if (resultData) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1600);
    }
  }, [resultData]);

  const openModal = (openState, index) => () => {
    setModalOpen(openState);
    setModalOpenIndex(index);
  };

  //폰트크기 유동적 조절
  const calculateFontSize = () => {
    const containerWidth = 290;
    const desiredFontSize = 38;

    if (
      !resultData ||
      !resultData.data ||
      !resultData.data.result ||
      !resultData.data.result.name
    ) {
      return desiredFontSize;
    }

    const fontSize = Math.min(
      desiredFontSize,
      (containerWidth / resultData.data.result.name.length) * 1.5
    );
    return fontSize;
  };

  const [fontSize, setFontSize] = useState(calculateFontSize());

  useEffect(() => {
    setFontSize(calculateFontSize());
  }, [resultData]);

  //카카오톡 공유하기
  useEffect(() => {
    if (typeof Kakao !== "undefined" && !Kakao.isInitialized()) {
      Kakao.init("dc448d19d55ef2f3302fceaacee793ea");
    }
  }, []);

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

  if (resultData && resultData.data && resultData.data.result.place) {
    const { name, description, imageUrl, naverUrl } =
      resultData.data.result.place;
    const tags = resultData.data.result.place.tags;
    return (
      <div className={`wrapper ${shared ? "shared" : ""}`}>
        <section className="result_layout">
          <div>
            <img src="/background_h_2.webp" className="result_layout" />
            <img
              src="/background_h_2_2.webp"
              className="result_layout layout2"
            />
            <img
              src="/background_h_2_3.webp"
              className="result_layout layout3"
            />
          </div>
          {resultData && resultData.data && (
            <>
              <div className="result">
                <img src="/i_box.webp" />
                <p style={{ fontSize: `${fontSize}px`, whiteSpace: "nowrap" }}>
                  {resultData?.data?.result?.name}
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
                  <img src={resultData.data.result.place.imageUrl} />
                </div>
                <div className="tag">
                  {tags.map((v, index) => (
                    <p className="isaText" key={`hotspot-modal-${index}`}>
                      #{v.tag}
                    </p>
                  ))}
                </div>
                <img src="/box.webp" />
                <div className="box_text">
                  {resultData.data.result.place.content
                    .split("\n")
                    .map((v, index, array) => (
                      <li key={index}>{v}</li>
                    ))}
                </div>
              </div>
              <div className="location">
                <img src="/location.webp" />
                <p>위치를 알려줄게!</p>
                <img src="/box_stroke.webp" id="cross"></img>
                <div className="map" id="map">
                  <MapComponent isLoading={isLoading} resultData={resultData} />
                </div>
              </div>

              <div className="hot_spot">
                <img src="/hotspot.webp" />

                <p>가장 많은 선택을 받은 핫스팟</p>

                {resultData?.data?.hotPlace.map((item, index) => (
                  <Fragment key={`hotspot-${index}`}>
                    <div
                      className={`hot_spotImg${index + 1}`}
                      onClick={openModal(true, index)}
                    >
                      <img className="hot_spot_image" src={item.imageUrl} />

                      <img src="/box_stroke.webp" />
                    </div>
                    {modalOpen && index === modalOpenIndex && (
                      <Modal handleOpen={openModal} data={item} index={index} />
                    )}
                  </Fragment>
                ))}
              </div>
              <div className="visit">
                <img src="/go.webp" />
                <p>PATKID 팀을 더 알고 싶다면</p>
                <Link
                  href="https://www.notion.so/PATKID-b28bf7de62bb4e95919b5dca4e8c08ec?pvs=4"
                  target="_blank"
                >
                  <img className="visitImg" src="/visit.webp" />
                  <p className="visitP">PATKID 팀 페이지 방문하기</p>
                </Link>
              </div>
            </>
          )}
        </section>
        <footer>
          {visited ? (
            <Link href="/">
              <img className="footer_share" src="/share_button2.webp" />
            </Link>
          ) : (
            <>
              <KakaoShareButton
                description={description}
                imageUrl={imageUrl}
                mobileWebUrl={naverUrl}
                webUrl={naverUrl}
                mbti={router.query.mbti}
              />
              <Link href="/">
                <img className="footer_right" src="/restart_btn.webp" />
              </Link>
            </>
          )}
        </footer>

        <style jsx>
          {`
            .wrapper {
              position: relative;
              position: center;
              margin-left: auto;
              margin-right: auto;
              width: 500px;
              height: 2546px;
            }

            .result_layout {
              position: relative;
              position: center;
              margin-left: auto;
              margin-right: auto;
              width: 500px;
              height: 1081px;
            }
            .layout2 {
              position: absolute;
              top: 1081px;
              left: 0px;
            }
            .layout3 {
              position: absolute;
              width: 500px;
              height: 384px;
              top: 2162px;
              left: 0px;
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

            .location > img:nth-of-type(1) {
              position: absolute;
              width: 22px;
              height: 31px;
              left: 17px;
              top: 949px;
            }
            .location p {
              position: absolute;
              width: 243px;
              height: 38px;
              left: 47px;
              top: 949px;

              font-weight: 400;
              font-size: 32px;
              color: #000000;
            }
            .location > img:nth-of-type(2) {
              position: absolute;
              width: 468px;
              height: 242px;
              left: calc(50% - 468px / 2);
              top: 1002px;
            }
            .map {
              position: absolute;
              width: 452px;
              height: 226px;
              left: calc(50% - 452px / 2);
              top: -75px;
            }
            .hot_spot > img:nth-of-type(1) {
              position: absolute;
              width: 27px;
              height: 31px;
              top: 1315px;
              left: 17px;
            }
            .hot_spot p {
              position: absolute;
              width: 337px;
              height: 18px;
              left: 50px;
              top: 1317px;

              font-weight: 400;
              font-size: 32px;
              color: #000000;
            }
            .hot_spotImg1 > img:nth-of-type(1) {
              position: absolute;
              width: 452px;
              height: 226px;
              left: calc(50% - 452px / 2);
              top: 1376px;
              background-repeat: no-repeat;
              background-position: center;
              background-size: cover;
              object-fit: cover;
            }
            .hot_spotImg2 > img:nth-of-type(1) {
              position: absolute;
              width: 452px;
              height: 226px;
              left: calc(50% - 452px / 2);
              top: 1642px;
              background-repeat: no-repeat;
              background-position: center;
              background-size: cover;
              object-fit: cover;
            }
            .hot_spotImg3 > img:nth-of-type(1) {
              position: absolute;
              width: 452px;
              height: 226px;
              left: calc(50% - 452px / 2);
              top: 1908px;
              background-repeat: no-repeat;
              background-position: center;
              background-size: cover;
              object-fit: cover;
            }
            .hot_spotImg1 > img:nth-of-type(2) {
              position: absolute;
              width: 468px;
              height: 242px;
              left: calc(50% - 468px / 2);
              top: 1368px;
            }
            .hot_spotImg2 > img:nth-of-type(2) {
              position: absolute;
              width: 468px;
              height: 242px;
              left: calc(50% - 468px / 2);
              top: 1634px;
            }
            .hot_spotImg3 > img:nth-of-type(2) {
              position: absolute;
              width: 468px;
              height: 242px;
              left: calc(50% - 468px / 2);
              top: 1900px;
            }
            .visit > img:nth-of-type(1) {
              position: absolute;
              width: 38px;
              height: 38px;
              left: 17px;
              top: 2200px;
            }
            .visit > p:nth-of-type(1) {
              position: absolute;
              width: 309px;
              height: 18px;

              left: 62px;
              top: 2205px;
              font-weight: 400;
              font-size: 28px;

              color: #000000;
            }
            .visitImg {
              position: absolute;
              width: 466px;
              height: 105px;
              left: 17px;
              top: 2266px;
            }
            .visitP {
              position: absolute;
              width: 291px;
              height: 28px;
              left: calc(50% - 270px / 2);
              top: 2304px;
              font-weight: 400;
              font-size: 25px;
              color: #000;
            }
            footer {
              position: fixed;
              bottom: 0px;
              width: 500px;
              margin: 0 auto;
              height: 100px;
              background: ${visited ? "#FF448D" : "#000000"};
              z-index: 999;
            }
            .footer_left {
              position: absolute;
              width: 344px;
              height: 67px;
              left: 17px;
              top: 18px;
            }
            .footer_right {
              position: absolute;
              width: 90px;
              height: 67px;
              left: 393px;
              top: 18px;
            }
            .footer_share {
              position: absolute;
              width: 466px;
              height: 67px;
              left: 17px;
              top: 18px;
            }
          `}
        </style>
      </div>
    );
  }
}
