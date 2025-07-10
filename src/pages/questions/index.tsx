import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
import { questions as imgQuestions } from "@constants";
import { Mbti } from "@/models/mbti";
import { useMBTI } from "@/hooks/useMBTI";
import LoadingPage from "@components/Loading";
import Answer from "@components/questions/Answer";
import OptimizedImage from "@components/common/OptimizedImage";
import {
  answerBoxStyle,
  backgroundStyle,
  layoutStyle,
  progressBarBoxStyle,
  questionBoxStyle,
  questionNumberStyle,
  questionTextStyle,
  questionSectionStyle,
  questionContainerStyle,
  questionBackgroundStyle,
  questionContentStyle,
  questionImagesStyle,
} from "@components/questions/index.css";
import Step from "@/components/questions/Step";
import Title from "@/components/questions/Title";
import styles from "@styles/questions.module.css";

const ProgressBar = dynamic(() => import("@components/ProgressBar"));

export default function Questions({
  questionsData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [mbtiList, setMbtiList] = useState<Mbti>({
    EI: [],
    NS: [],
    FT: [],
    PJ: [],
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { calculateMBTI, addMBTIChoice } = useMBTI();
  const question = imgQuestions[currentNumber];

  useEffect(() => {
    setLoading(questionsData.total === 0);
  }, [questionsData]);


  const redirectToResultPage = useCallback(() => {
    setLoading(true);
    const mbtiQueryString = calculateMBTI(mbtiList);

    // 로딩 시간 추가 (2초)
    setTimeout(() => {
      router.push(`/results?mbti=${mbtiQueryString}`);
    }, 2000);
  }, [mbtiList, calculateMBTI, router]);

  const nextQuestion = useCallback((choiceNumber: number) => {
    const isLastQuestion = currentNumber === questionsData.total - 1;
    const currentQuestion = questionsData.list[currentNumber];
    
    if (
      !currentQuestion ||
      !currentQuestion.questionSub ||
      !currentQuestion.questionSub[choiceNumber]
    ) {
      return;
    }
    
    const choiceType = currentQuestion.questionSub[choiceNumber].type;
    const mbtiType = questionsData.list[currentNumber].type as keyof Mbti;

    setMbtiList((prev) => addMBTIChoice(prev, mbtiType, choiceType));

    if (isLastQuestion) {
      redirectToResultPage();
      return;
    }

    setCurrentNumber(currentNumber + 1);
  }, [currentNumber, questionsData, addMBTIChoice, redirectToResultPage]);

  const renderQuestionImage = () => {
    if (!question || !question.img) return null;

    return question.img.map((img, index) => {
      if (img.src && img.css) {
        return (
          <OptimizedImage
            key={index}
            src={`/${img.src}`}
            alt={`Question ${currentNumber + 1} image ${index + 1}`}
            className={`${styles[img.css]} ${styles.msAnimation}`}
            width={200}
            height={200}
            priority={false}
            quality={80}
            draggable={false}
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
      <div className={questionSectionStyle}>
        <div className={questionBoxStyle}>
          <div className={questionContainerStyle}>
            <OptimizedImage
              className={questionBackgroundStyle}
              src="/questions.webp"
              alt="Question background"
              width={400}
              height={300}
              priority={true}
              quality={85}
              draggable={false}
            />
            <div className={questionImagesStyle}>{renderQuestionImage()}</div>
            {questionsData.list.length > 0 && (
              <div className={questionContentStyle}>
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
        </div>
      </div>
      <div className={answerBoxStyle}>
        {questionsData.list[currentNumber]?.questionSub?.[0] && (
          <Answer
            text={questionsData.list[currentNumber].questionSub[0].content}
            onClick={() => nextQuestion(0)}
          />
        )}
        {questionsData.list[currentNumber]?.questionSub?.[1] && (
          <Answer
            text={questionsData.list[currentNumber].questionSub[1].content}
            onClick={() => nextQuestion(1)}
          />
        )}
      </div>
    </div>
  );
}
import { getQuestionList } from "@/apis";

export const getServerSideProps = (async () => {
  try {
    const response = await getQuestionList();
    const questionsData = response.data;

    return {
      props: {
        questionsData: questionsData.data,
      },
    };
  } catch (error) {
    const err = error as Error;
    console.error("Questions fetch error:", err.message);

    return {
      props: {
        questionsData: { total: 0, list: [] },
        error: err.message,
      },
    };
  }
}) satisfies GetServerSideProps;
