import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { questions as imgQuestions } from '../../data.js';
import Image from 'next/image';
import Button from '@/components/Button/Button.js';
import styles from '../../styles/questions.module.css';
import axios from 'axios';

const ProgressBar = ({ currentNumber }) => {

  const progressImages = [];
  for (let i = 1; i <= currentNumber; i++) {
      progressImages.push(
        <div
          key={i}
          className={`progress_item progress`}
          style={{
            position: 'relative',
            top: '-33px',
            left: '10px',
            marginLeft: '5.5px',
          }}
        >
          <Image src="/progress.png" width={14} height={12} alt='progress_Img' />
          <div
            className="padding"
            style={{
              width: '5.5px',
              height: '12px',
              display: 'inline-block',
            }}
          />
          <Image src="/progress.png" width={14} height={12} alt='progress_Img'/>
        </div>
        
      );
  }
  return (
    <div className="progress_bar">
      <Image src="/progress_bar.png" width={471} height={39} alt='progress_bar_Img'/>
      <div className="progress_container">
        {progressImages}
        {currentNumber >= 0 && (
          <div
            className="heart"
            style={{
              position: 'relative',
              top: '-32px',
              left: '-5px',
              marginLeft: '2px',
            }}
          >
            <Image src="/progress_heart.png" width={45} height={39} alt='progress_heart_Img'/>
          </div>
        )}
      </div>
      <style jsx>{`
        .progress_container {
          width: 476px;
          height: 18px;
          display: flex;
          align-items: center;
        }
        .progress_item {
          margin-right: 5px;
        }
        .progress {
          width: 12px;
          height: 12px;
          left: 34px;
          top: 0px;
          padding: 1px;
        }
        .heart {
          position: absolute;
          width: 45px;
          height: 39px;
          left: -5px;
          top: -2px;
        }
      `}</style>
    </div>
  );
};

export default function Questions() {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [mbti, setMbti] = useState('');
  const [questionsData, setQuestionsData] = useState([]);  // 질문 데이터를 저장할 상태 변수
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const router = useRouter();

  const question = imgQuestions[currentNumber];


  useEffect(() => {
    axios.get('https://api.patkid.kr/question/list')
      .then((response) => {
        setQuestionsData(response.data);
        setCurrentNumber(0); 
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setError(error);
        setLoading(false);
      });
    },[]);

  useEffect(() => {
    // 질문 번호가 변경될 때마다 화면 맨 위로 스크롤
    window.scrollTo(0, 0);
  }, [currentNumber]);



  const nextQuestion = (choiceNumber) => {
    if (currentNumber === imgQuestions.length - 1) {
      showResultPage();
      return;
    }

    const selectedChoice = question.choices[choiceNumber].value;
    setMbti(mbti + selectedChoice);
    setCurrentNumber(currentNumber + 1);
  };

  const showResultPage = () => {
    router.push(`/results?mbti=${mbti}`);
  };

  if (loading) {
    return <div></div>;
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="questions_layout">
      <Image src="/background_h_2.png" className="questions_layout" width={500} height={1081} quality={80} alt="questions_Image"/>

      <div className="title">
        <img src="/back.png" width={12} height={25} />
        <p>핫스팟 테스트</p>
      </div>
      <div className="progress_bar">
        <ProgressBar currentNumber={currentNumber} />
      </div>
      <div className="question">
        <img src="/questions.png" />
        {question.img.map((img, index) => (
          img.src && img.css && (
            <img
              key={index}
              src={`/${img.src}`}
              className={`${styles[img.css]} ${styles.msAnimation}`}
            />
          )
        ))}
        
        {questionsData.data && questionsData.data.list && questionsData.data.list.length > 0 && (
        <div className="questions">
          <p className="number">{questionsData.data.list[currentNumber]?.questionId}/12</p>
          <p className="question">{questionsData.data.list[currentNumber]?.content}</p>
        </div>
      )}
      </div>
      <div className="answer">
        <div className="choice1">
          <Button
            onClick={() => nextQuestion(0)}
            buttonImage="/answer.png"
            clickedButtonImage="/visit_click.png"
            buttonText={
              <span
                className={`choice1_answer ${
                  questionsData.data.list[currentNumber]?.questionSub[0].content.length > 25 ? 'choice1_answer2' : 'choice1_answer1'
                }`}
              >
                {questionsData.data.list[currentNumber]?.questionSub[0].content}
              </span>
            }
          />
        </div>
        <div className="choice2">
          <Button
            onClick={() => nextQuestion(1)}
            buttonImage="/answer.png"
            clickedButtonImage="/visit_click.png"
            buttonText={
              <span
                className={`choice2_answer ${
                  questionsData.data.list[currentNumber]?.questionSub[1].content.length > 25 ? 'choice2_answer2' : 'choice2_answer1'
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
          top: 70px;
        }
        .title p {
          position: absolute;
          width: 132px;
          height: 28px;
          left: calc(50% - 132px/2);
          top: 43px;
          font-style: normal;
          font-weight: 400;
          font-size: 26px;
          line-height: 28px;
          text-align: center;
          color: #000000;
        }
        .progress_bar {
          position: absolute;
          width: 466px;
          height: 34px;
          left: calc(50% - 466px/2);
          top: 118px;
        }
        .question img:nth-of-type(1) {
          position: absolute;
          width: 466px;
          height: 490px;
          left: calc(50% - 466px/2);
          top: 182px;
        }
        .questions > p:nth-of-type(1) {
          position: absolute;
          width: 57px;
          height: 23px;
          left: calc(50% - 57px/2 + 0.5px);
          top: 199px;
          font-weight: 400;
          font-size: 21px;
          line-height: 23px;
          color: #000000;
        }
        .questions > p:nth-of-type(2) {
          position: absolute;
          width: 341px;
          height: 50px;
          left: calc(50% - 341px/2);
          top: 578px;
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
          top: 774px;
        }
        .choice2 {
          width: 466px;
          height: 105px;
          position: absolute;
          left: 17px;
          top: 902px;
        }
        .choice1_answer1 {
          position: absolute;
          width: 386px;
          height: 52px;
          left: calc(50% - 386px/2);
          top: calc(84px/2);
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
          left: calc(50% - 386px/2);
          top: calc(58px/2);
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
          left: calc(50% - 386px/2);
          top: calc(84px/2);
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
          left: calc(50% - 386px/2);
          top: calc(58px/2);
          font-weight: 400;
          font-size: 24px;
          line-height: 26px;
          text-align: center;
          color: #000000;
        }
      `}</style>
    </div>
  );
}
