import { useState } from 'react';
import { useRouter } from 'next/router';
import { questions } from '../../data.js';
import Image from 'next/image';
import Link from "next/link";
import Button from '@/components/Button/Button.js';
import styles from '../../styles/questions.module.css';


export default function Questions() {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [mbti, setMbti] = useState('');

  const router = useRouter();

  const question = questions[currentNumber];

  const ProgressBar = () => {
    const [currentNumber, setCurrentNumber] = useState(0);
    const totalQuestions = 12; // 질문의 총 개수
    const totalBlocks = 26; // ◼의 총 개수
  }

  const nextQuestion = (choiceNumber) => {
    if (currentNumber === questions.length - 1) {
      showResultPage();
      return;
    }
    

    const selectedChoice = question.choices[choiceNumber].value;
    setMbti(mbti + selectedChoice);
    setCurrentNumber(currentNumber + 1);
  };

  //결과페이지
  const showResultPage = () => {
    router.push(`/results?mbti=${mbti}`);
  };
  return (
    <div className="questions_layout">
      <Image src="/background_h_2.png" className="questions_layout" width={500} height={1081} />

      <div className='title'>
        <img src="/back.png" width={12} height={25} />
        <p>핫스팟 테스트</p>
      </div>
      <div className='progress_bar'>
      <img src="/progress_bar.png" />
      <img
          src="/progress.png"
          // style={{ width: `${(currentNumber + 1) * 10}%` }}
        />
        <img src="/progress_heart.png" />
      </div>
        <div className='question'>
        <img src="/questions.png"/>
        {question.img.map((img, index) => (
          img.src && img.css && (
            <img
              key={index}
              src={`/${img.src}`}
              className={`${styles[img.css]} ${styles.msAnimation}`}
            />
          )
        ))}
        <p className="number">{question.number}/12</p>
        <p className='question'>{question.question}</p>
      </div>
      <div className="answer">
      <div className="choice1">
          <Button
            onClick={() => nextQuestion(0)}
            buttonImage="/answer.png" 
            clickedButtonImage="/visit_click.png"
          />
          <p className='choice1_answer'>{question.choices[0].text}</p>
        </div>
        <div className="choice2">
          <Button
            onClick={() => nextQuestion(1)}
            buttonImage="/answer.png"
            clickedButtonImage="/visit_click.png"
          />
          <p className='choice2_answer'>{question.choices[1].text}</p>
        </div>
      </div>

      <style jsx>{`
      .questions_layout{
        position: relative;
        position: center;
        margin-left:auto;
        margin-right:auto;
        width: 500px;
        height: 1081px;
      }
      .title img{
        position: absolute;
        width: 12px;
        height: 25px;
        left: 31px;
        top: 70px;
        }
      .title p{
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
      .progress_bar > img:nth-of-type(1){
        position: absolute;
        width: 466px;
        height: 34px;
        left: 17px;
        top: 123px;
      }
      .progress_bar > img:nth-of-type(2){
        position: absolute;
        width: 12px;
        height: 12px;
        left: 19px;
        top: 135px;
      }
      .progress_bar > img:nth-of-type(3){
        position: absolute;
        width: 45px;
        height: 39px;
        left: 12px;
        top: 118px;
      }
      .question img:nth-of-type(1){
        position: absolute;
        width: 466px;
        height: 490px;
        left: calc(50% - 466px/2);
        top: 182px;
      }
      .question > p:nth-of-type(1){
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
      .question > p:nth-of-type(2){
        position: absolute;
        width: 308px;
        height: 26px;
        left: calc(50% - 308px/2);
        top: 587px;

        font-weight: 400;
        font-size: 24px;
        line-height: 26px;
        text-align: center;
        color: #000000;
      }
      
      .choice1{
        width: 466px;
        height: 105px;
        position: absolute;
        left: 17px;
        top: 774px;
      }
      .choice2{
        width: 466px;
        height: 105px;
        position: absolute;
        left: 17px;
        top: 902px;
      }
      .choice1_answer{
        position: absolute;
        width: 350px;
        height: 26px;
        left: calc(50% - 350px/2);
        top: 40px;

        font-weight: 400;
        font-size: 24px;
        line-height: 26px;
        text-align: center;

        color: #000000;
      }
      .choice2_answer{
        position: absolute;
        width: 350px;
        height: 26px;
        left: calc(50% - 350px/2);
        top: 40px;

        font-weight: 400;
        font-size: 24px;
        line-height: 26px;
        text-align: center;

        color: #000000;
      }
        `}</style>
    </div>
  )
}
