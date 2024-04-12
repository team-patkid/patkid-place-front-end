import { GetStaticProps, InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { questions as imgQuestions } from "@constants";
import LoadingPage from "@components/Loading";
import { Mbti, MbtiCount } from "@/models/mbti";
import { QuestionResponse } from "@/models/question";
import styles from "@styles/questions.module.css";

const Button = dynamic(() => import("@components/Button"));
const ProgressBar = dynamic(() => import("@/components/ProgressBar"));

export default function Questions({
  questionsData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [mbtiList, setMbtiList] = useState<Mbti>({
    EI: [],
    NS: [],
    FT: [],
    PJ: [],
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const question = imgQuestions[currentNumber];

  useEffect(() => {
    setLoading(questionsData.total === 0);
  }, [questionsData]);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setLoading(url === "/results");
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  const redirectToResultPage = () => {
    const mbtiCount: MbtiCount = {
      EI: { E: 0, I: 0 },
      NS: { N: 0, S: 0 },
      FT: { F: 0, T: 0 },
      PJ: { P: 0, J: 0 },
    };

    for (const key of Object.keys(mbtiList)) {
      const type = key as keyof Mbti;

      for (const value of mbtiList[type]) {
        mbtiCount[type][value] += 1;
      }
    }

    const mbtiQueryString = Object.values(mbtiCount)
      .map((type) =>
        Object.keys(type).reduce((a, b) => (type[a] > type[b] ? a : b))
      )
      .join("");

    router.push(`/results?mbti=${mbtiQueryString}`);
  };

  const nextQuestion = (choiceNumber: number) => {
    const isLastQuestion = currentNumber === questionsData.total - 1;
    const choiceType =
      questionsData.list[currentNumber]?.questionSub[choiceNumber].type;

    // setMbtiList((prevState) => ({
    //   ...prevState,
    //   [questionsData.data.list[currentNumber].type]: [
    //     ...prevState[questionsData.data.list[currentNumber].type],
    //     choiceType,
    //   ],
    // }));
    // 상태 업데이트 성능 향상
    const newMbtiList = { ...mbtiList };
    newMbtiList[questionsData.list[currentNumber].type as keyof Mbti].push(
      choiceType
    );
    setMbtiList(newMbtiList);

    if (isLastQuestion) {
      redirectToResultPage();
    } else {
      setCurrentNumber(currentNumber + 1);
    }
  };

  const renderQuestionImage = () => {
    if (!question || !question.img) return null;

    return question.img.map((img, index) => {
      if (img.src && img.css) {
        return (
          <img
            key={index}
            src={`/${img.src}`}
            className={`${styles[img.css]} ${styles.msAnimation}`}
          />
        );
      }
      return null;
    });
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="questions_layout">
      <Image
        src="/background_h_2.webp"
        className="questions_layout"
        width={500}
        height={1081}
        quality={50}
        alt="questions_Image"
        priority
      />

      <div className="title">
        <img src="/back.webp" width={12} height={25} draggable={false} />
        <p>핫스팟 테스트</p>
      </div>
      <div className="progress_bar">
        <ProgressBar currentNumber={currentNumber} />
      </div>
      <div className="question">
        <img src="/questions.webp" draggable={false} />
        {renderQuestionImage()}
        {questionsData.list.length > 0 && (
          <div className="questions">
            <p className="number">
              {questionsData.list[currentNumber].sort}/12
            </p>
            <p className="question">
              {questionsData.list[currentNumber].content}
            </p>
          </div>
        )}
      </div>
      <div className="answer">
        <div className="choice1">
          <Button
            onClick={() => nextQuestion(0)}
            buttonImage="/answer.webp"
            clickedButtonImage="/visit_click.webp"
            text={
              <span
                className={`choice1_answer ${
                  questionsData.list[currentNumber].questionSub[0].content
                    .length > 25
                    ? "choice1_answer2"
                    : "choice1_answer1"
                }`}
              >
                {questionsData.list[currentNumber].questionSub[0].content}
              </span>
            }
          />
        </div>
        <div className="choice2">
          <Button
            onClick={() => nextQuestion(1)}
            buttonImage="/answer.webp"
            clickedButtonImage="/visit_click.webp"
            text={
              <span
                className={`choice1_answer ${
                  questionsData.list[currentNumber].questionSub[1].content
                    .length > 25
                    ? "choice1_answer2"
                    : "choice1_answer1"
                }`}
              >
                {questionsData.list[currentNumber].questionSub[1].content}
              </span>
            }
          />
        </div>
      </div>
      <style jsx>
        {`
          .questions_layout {
            position: relative;
            position: center;
            margin-left: auto;
            margin-right: auto;
            width: 500px;
            height: 1081px;
          }
          .title img {
            position: absolute;
            width: 12px;
            height: 25px;
            left: 31px;
            top: 43px;
          }
          .title p {
            position: absolute;
            width: 200px;
            height: 28px;
            left: calc(50% - 185px / 2);
            top: 43px;
            font-style: normal;
            font-weight: 400;
            font-size: 32px;
            line-height: 28px;
            text-align: center;
            color: #000000;
          }
          .progress_bar {
            position: absolute;
            width: 466px;
            height: 34px;
            left: calc(50% - 466px / 2);
            top: 88px;
          }
          .question img:nth-of-type(1) {
            position: absolute;
            width: 466px;
            height: 490px;
            left: calc(50% - 466px / 2);
            top: 152px;
          }
          .questions > p:nth-of-type(1) {
            position: absolute;
            width: 57px;
            height: 23px;
            left: calc(50% - 57px / 2 + 0.5px);
            top: 169px;
            font-weight: 400;
            font-size: 21px;
            line-height: 23px;
            color: #000000;
          }
          .questions > p:nth-of-type(2) {
            position: absolute;
            width: 341px;
            height: 50px;
            left: calc(50% - 341px / 2);
            top: 548px;
            font-weight: 400;
            font-size: 24px;
            line-height: 26px;
            text-align: center;
            color: #000000;
          }
          .choice1 {
            width: 466px;
            height: 105px;
            position: absolute;
            left: 17px;
            top: 684px;
          }
          .choice2 {
            width: 466px;
            height: 105px;
            position: absolute;
            left: 17px;
            top: 802px;
          }
          .choice1_answer1 {
            position: absolute;
            width: 386px;
            height: 52px;
            left: calc(50% - 386px / 2);
            top: calc(84px / 2);
            font-weight: 400;
            font-size: 24px;
            line-height: 26px;
            text-align: center;
            color: #000000;
          }
          .choice1_answer2 {
            position: absolute;
            width: 386px;
            height: 52px;
            left: calc(50% - 386px / 2);
            top: calc(58px / 2);
            font-weight: 400;
            font-size: 24px;
            line-height: 26px;
            text-align: center;
            color: #000000;
          }
          .choice2_answer1 {
            position: absolute;
            width: 386px;
            height: 52px;
            left: calc(50% - 386px / 2);
            top: calc(84px / 2);
            font-weight: 400;
            font-size: 24px;
            line-height: 26px;
            text-align: center;
            color: #000000;
          }
          .choice2_answer2 {
            position: absolute;
            width: 386px;
            height: 52px;
            left: calc(50% - 386px / 2);
            top: calc(58px / 2);
            font-weight: 400;
            font-size: 24px;
            line-height: 26px;
            text-align: center;
            color: #000000;
          }
        `}
      </style>
    </div>
  );
}
export const getStaticProps = (async () => {
  try {
    const questionsResponse = await fetch(
      "https://place-api.patkid.kr/v1/question/list"
    );

    if (!questionsResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const questionsData: QuestionResponse = await questionsResponse.json();

    return {
      props: {
        questionsData: questionsData.data,
      },
    };
  } catch (error) {
    const err = error as Error;

    return {
      props: {
        questionsData: { total: 0, list: [] },
        error: err.message,
      },
    };
  }
}) satisfies GetStaticProps;
