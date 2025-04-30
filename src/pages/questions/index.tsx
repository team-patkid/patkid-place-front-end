import { GetStaticProps, InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { questions as imgQuestions } from "@constants";
import { Mbti, MbtiCount } from "@/models/mbti";
import { QuestionResponse } from "@/models/question";
import LoadingPage from "@components/Loading";
import Answer from "@components/questions/Answer";
import {
  answerBoxStyle,
  backgroundStyle,
  layoutStyle,
  progressBarBoxStyle,
  questionBoxStyle,
  questionNumberStyle,
  questionTextStyle,
} from "@components/questions/index.css";
import Step from "@/components/questions/Step";
import Title from "@/components/questions/Title";
import styles from "@styles/questions.module.css";

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

    setMbtiList((prev) => {
      const mbti = questionsData.list[currentNumber].type as keyof Mbti;
      return {
        ...prev,
        [mbti]: [...prev[mbti], choiceType],
      };
    });

    if (isLastQuestion) {
      redirectToResultPage();
      return;
    }

    setCurrentNumber(currentNumber + 1);
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
        className={backgroundStyle}
        width={500}
        height={1081}
        quality={50}
        alt="questions_Image"
        priority
      />
      <Title />
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
            <Step
              className={questionNumberStyle}
              total={12}
              step={questionsData.list[currentNumber].sort}
            />
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
      "https://api.patkid.xyz/v1/question/list"
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
