import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
import { questions as imgQuestions } from "@constants";
import { Mbti } from "@/models/mbti";
import { useMBTI } from "@/hooks/useMBTI";
import LoadingPage from "@components/Loading";
import OptimizedImage from "@components/common/OptimizedImage";

const Answer = dynamic(() => import("@components/questions/Answer"), {
  loading: () => <div>답변 로딩 중...</div>
});
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
const Step = dynamic(() => import("@/components/questions/Step"), {
  loading: () => <span>단계 로딩 중...</span>
});

const Title = dynamic(() => import("@/components/questions/Title"), {
  loading: () => <div>제목 로딩 중...</div>
});
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
    <>
      <Head>
        <title>MBTI 성향 테스트 - PATKID | 나만의 핫스팟 찾기</title>
        <meta name="description" content="12개의 질문으로 알아보는 나의 MBTI 성향! 성향에 맞는 맞춤형 핫스팟을 추천받아보세요." />
        <meta name="keywords" content="MBTI 테스트, 성향 테스트, 심리 테스트, 핫스팟 추천, 장소 추천" />
        <meta property="og:title" content="MBTI 성향 테스트 - PATKID" />
        <meta property="og:description" content="12개의 질문으로 알아보는 나의 MBTI 성향! 성향에 맞는 맞춤형 핫스팟을 추천받아보세요." />
        <meta property="og:url" content="https://place.patkid.xyz/questions" />
        <link rel="canonical" href="https://place.patkid.xyz/questions" />
      </Head>
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
    </>
  );
}
import { getQuestionList } from "@/apis";

export const getServerSideProps = (async () => {
  try {
    const response = await getQuestionList();
    
    const responseAny = response as any;
    const questionsData = responseAny?.data?.data || 
                         responseAny?.data || 
                         { total: 0, list: [] };

    return {
      props: {
        questionsData,
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
}) satisfies GetServerSideProps;
