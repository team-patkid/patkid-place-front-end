import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ProgressBar from "@/components/progress.js";
import { questions as imgQuestions } from "@/data/data.js";
import styles from "@/styles/questions.module.css";
import dynamic from "next/dynamic";

export default function Questions({ questionsData }) {
  const DynamicButton = dynamic(() => import("@/components/Button/Button.js"));
  const DynamicProgressBar = dynamic(() => import("@/components/progress.js"));
  const [currentNumber, setCurrentNumber] = useState(0);
  const [mbtiList, setMbtiList] = useState({ EI: [], NS: [], FT: [], PJ: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  const question = imgQuestions[currentNumber];

  useEffect(() => {
    if (questionsData.data.list[currentNumber]) {
      setLoading(false);
    }
  }, [questionsData, currentNumber]);

  const redirectToResultPage = () => {
    const mbtiCount = {
      EI: { E: 0, I: 0 },
      NS: { N: 0, S: 0 },
      FT: { F: 0, T: 0 },
      PJ: { P: 0, J: 0 },
    };

    for (const key of Object.keys(mbtiList)) {
      for (const value of mbtiList[key]) {
        mbtiCount[key][value] += 1;
      }
    }

    const mbtiQueryString = Object.values(mbtiCount)
      .map((type) =>
        Object.keys(type).reduce((a, b) => (type[a] > type[b] ? a : b))
      )
      .join("");

    router.push(`/results?mbti=${mbtiQueryString}`);
  };

  const nextQuestion = (choiceNumber) => {
    const isLastQuestion = currentNumber === questionsData.data.total - 1;
    const choiceType =
      questionsData.data.list[currentNumber]?.questionSub[choiceNumber].type;

    setMbtiList((prevState) => ({
      ...prevState,
      [questionsData.data.list[currentNumber].type]: [
        ...prevState[questionsData.data.list[currentNumber].type],
        choiceType,
      ],
    }));

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
    return <div></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
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
        <img 
        src="/back.webp" 
        width={12} 
        height={25}
        quality={50}
        priority
        />
        <p>핫스팟 테스트</p>
      </div>
      <div className="progress_bar">
      <DynamicProgressBar currentNumber={currentNumber} />
      </div>
      <div className="question">
        <img src="/questions.webp" />
        {renderQuestionImage()}
        {questionsData.data && questionsData.data.list && questionsData.data.list.length > 0 && (
          <div className="questions">
            <p className="number">
              {questionsData.data.list[currentNumber]?.questionId}/12
            </p>
            <p className="question">
              {questionsData.data.list[currentNumber]?.content}
            </p>
          </div>
        )}
      </div>
      <div className="answer">
        <div className="choice1">
          <DynamicButton
            onClick={() => nextQuestion(0)}
            buttonImage="/answer.webp"
            clickedButtonImage="/visit_click.webp"
            buttonText={
              <span
                className={`choice1_answer ${
                  questionsData.data.list[currentNumber]?.questionSub[0].content
                    .length > 25
                    ? "choice1_answer2"
                    : "choice1_answer1"
                }`}
              >
                {questionsData.data.list[currentNumber]?.questionSub[0].content}
              </span>
            }
          />
        </div>
        <div className="choice2">
          <DynamicButton
            onClick={() => nextQuestion(1)}
            buttonImage="/answer.webp"
            clickedButtonImage="/visit_click.webp"
            buttonText={
              <span
                className={`choice1_answer ${
                  questionsData.data.list[currentNumber]?.questionSub[1].content
                    .length > 25
                    ? "choice1_answer2"
                    : "choice1_answer1"
                }`}
              >
                {questionsData.data.list[currentNumber]?.questionSub[1].content}
              </span>
            }
          />
        </div>
      </div>
      <style jsx>{`
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

export async function getServerSideProps() {
  try {
    const questionsResponse = await fetch("https://api.patkid.kr/question/list");
    const questionsData = await questionsResponse.json();

    return {
      props: {
        questionsData,
      },
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      props: {
        questionsData: null,
      },
    };
  }
}
