import { useState } from 'react';
// import '../styles/globals.css';
import Link from "next/link";

export default function Home() {
  return (
    <div className="main_layout">
      <img src='/background_h_1.png' className='main_layout'/>
      <div className="main_layout_icon">
        <img src="/coffee.png"/>
        <img src="/heart_1.png"/>
        <img src="/music.png"/>
        <img src="/cake.png"/>
        <img src="/heart_2.png"/>
        <img src="/book.png"/>
      </div>
      <img src="/title.png" className='main_title'/>
      <p className='isaText'>나의 성향에 딱 맞는 요즘 핫스팟은 어디일까?</p>
      <Link href="/questions">
      <img src='/start_btn.png' className='main_start_btn'/>
      </Link>
        <div className='start_btn'>
        <p>시작하기</p>
        <p className='isaText'>참여자 수 표시 멘트 멘트 멘트</p>
      </div>
      <img src='/logo_patKid.png' className='main_logo'/>

      <style jsx>{`
        *{
          box-sizing: border-box;
        }
        .main_layout{
          position: relative;
          position: center;
          margin-left:auto;
          margin-right:auto;
          width: 500px;
          height: 1081px;
        }
        .main_title{
          position: absolute;
          width: 418px;
          height: 411px;
          left: 41px;
          top: 224px;
        }
        .main_layout_icon{
          position: absolute;
          width: 500px;
          height: 1081px;
          left: 0px;
          top: 0px;
        }
        .main_layout_icon > img:nth-of-type(1){
          position: absolute;
          width: 142px;
          height: 140px;
          left: 32px;
          top: 57px;
        }
        .main_layout_icon > img:nth-of-type(2){
          position: absolute;
          width: 43px;
          height: 41px;
          left: 286px;
          top: 80px;
        }
        .main_layout_icon > img:nth-of-type(3){
        position: absolute;
        width: 118px;
        height: 112px;
        left: 350px;
        top: 103px;
        }
        .main_layout_icon > img:nth-of-type(4){
          position: absolute;
          width: 86px;
          height: 128px;
          left: 7px;
          top: 523px;
        }
        .main_layout_icon > img:nth-of-type(5){
          position: absolute;
          width: 47px;
          height: 45px;
          left: 433px;
          top: 549px;
        }
        .main_layout_icon > img:nth-of-type(6){
          position: absolute;
          width: 99px;
          height: 90px;
          left: 377px;
          top: 658px;
        }
        .main_layout p{
          position: absolute;
          width: 318.86px;
          height: 22px;
          top: 658px;;
          left: calc(50% - 318.86px/2);
          font-weight: 300;
          font-size: 17px;
          line-height: 22px;
          color: #363636;
        }
        .main_start_btn{
        position: absolute;
        width: 462px;
        height: 104px;
        left: 19px;
        top: 797px;
        }
        .main_logo{
          position: absolute;
          width: 103px;
          height: 33px;
          left: calc(50% - 103px/2 + 0.5px);
          top: 924px;
        }
        .start_btn > p:nth-of-type(1){
          position: absolute;
          width: 133px;
          height: 44px;
          left: calc(50% - 133px/2 + 0.5px);
          top: 814px;
          margin: 0px auto;

          font-weight: 400;
          font-size: 41px;
          line-height: 44px;
          color: #FFFFFF;
        }
        .start_btn > p:nth-of-type(2){
          position: absolute;
          width: 209px;
          height: 20px;
          left: calc(50% - 209px/2 + 0.5px);
          top: 865px;
          margin: 0px auto;

          font-weight: 300;
          font-size: 17px;
          line-height: 20px;
          color: #FFFFFF;
        }
        `}</style>
    </div>
  )
}

