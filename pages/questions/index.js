import { useState } from 'react';
// import "../../styles/globals.css"
import Image from 'next/image';
import Link from "next/link";


export default function Questions() {
  return (
    <div className="questions_layout">
      <img src='/background_h_2.png' className="questions_layout"/>
      <div className='title'>
        <img src='/back.png'/>
        <p>핫스팟 테스트</p>
      </div>
      <div className='progress_bar'>
        <img src='progress_bar.png'/>
        <img src=''/>
        <img src='/progress_heart.png'/>
      </div>
        <div className='question'>
        <img src='/questions.png'/>
        <p>00/00</p>
        <p>질문질문질문질문질문질문질문질문</p>
      </div>
        <div className='answer'>
        <img src='/answer.png'/>
        <p>답변답변답변답변답변답변답변답변답변</p>
        <img src='/answer.png'/>
        <p>답변답변답변답변답변답변답변답변답변</p>
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

      }
      .progress_bar > img:nth-of-type(3){
        position: absolute;
        width: 45px;
        height: 39px;
        left: 12px;
        top: 118px;
      }
      .question img{
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
      .answer > img:nth-of-type(1){
        position: absolute;
        width: 466px;
        height: 105px;
        left: 17px;
        top: 774px;
      }
      .answer > img:nth-of-type(2){
        position: absolute;
        width: 466px;
        height: 105px;
        left: 17px;
        top: 902px;
      }
      .answer > p:nth-of-type(1){
        position: absolute;
        width: 350px;
        height: 26px;
        left: calc(50% - 350px/2);
        top: 813px;

        font-weight: 400;
        font-size: 24px;
        line-height: 26px;
        text-align: center;

        color: #000000;
      }
      .answer > p:nth-of-type(2){
        position: absolute;
        width: 350px;
        height: 26px;
        left: calc(50% - 350px/2);
        top: 941px;

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
