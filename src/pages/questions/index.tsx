import { GetStaticProps, InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { questions as imgQuestions } from "@constants";
import { Mbti, MbtiCount } from "@/models/mbti";
import { QuestionResponse } from "@/models/question";
import styles from "@styles/questions.module.css";
import LoadingPage from "@components/Loading";
import Answer from "@components/questions/Answer";
import {
  answerBoxStyle,
  layoutStyle,
  progressBarBoxStyle,
  questionBoxStyle,
  questionNumberStyle,
  questionTextStyle,
  titleImageStyle,
  titleStyle,
} from "@components/questions/index.css";

const ProgressBar = dynamic(() => import("@components/ProgressBar"));

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
      questionsData.list[currentNumber].questionSub[choiceNumber].type;

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
    <div className={layoutStyle}>
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
          className={titleImageStyle}
          src="/back.webp"
          width={12}
          height={25}
          draggable={false}
        />
        <p className={titleStyle}>핫스팟 테스트</p>
      </div>
      <div className={progressBarBoxStyle}>
        <ProgressBar currentNumber={currentNumber} />
      </div>
      <div className="question">
        <img
          className={questionBoxStyle}
          src="/questions.webp"
          draggable={false}
        />
        {renderQuestionImage()}
        {questionsData.list.length > 0 && (
          <div className="questions">
            <p className={questionNumberStyle}>
              {questionsData.list[currentNumber].sort}/12
            </p>
            <p className={questionTextStyle}>
              {questionsData.list[currentNumber].content}
            </p>
          </div>
        )}
      </div>
      <div className={answerBoxStyle}>
        <Answer
          text={questionsData.list[currentNumber].questionSub[0].content}
          onClick={() => nextQuestion(0)}
        />
        <Answer
          text={questionsData.list[currentNumber].questionSub[1].content}
          onClick={() => nextQuestion(1)}
        />
      </div>
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
