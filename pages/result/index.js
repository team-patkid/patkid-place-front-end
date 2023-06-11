import { useState } from 'react';
import Link from "next/link";

export default function Results() {
  return (
    <div className="result_layout">
    <img src='/background_h_2.png' className='result_layout'/>
    <img src='/background_h_2_2.png' className='result_layout layout2'/>
    <img src='/background_h_2_3.png' className='result_layout layout3'/>
      <div className="result">
        <img src='/i_box.png'/>
        <p>시가를 피우는 너구리</p>
        <img src='/tooltip.png'/>
        <p className='preText'>더욱 색다른 장소를 원한다면!</p>
        <img src='/dice.png'/>
        <div className='spot_img'>
          <img src='/spotImg.png'/>
        </div>
        <div className='tag'>
            <div className='tag1'>
              <p className='isaText hashtag'>#Sunday_Bar</p>
              <div className='underline'></div>
            </div>
            <div className='tag2'>
              <p className='isaText hashtag tag2'>#성수</p>
              <div className='underline'></div>
            </div>
            <div className='tag3'>
              <p className='isaText hashtag tag3'>#파리느낌</p>
              <div className='underline'></div>
            </div>
        </div>
        <img src='/box.png'/>
        <div className='box_text'></div>
      </div>
      <div className="location">
        <img src='/location.png'/>
        <p>위치를 알려줄게!</p>
        <img src='/box_stroke.png'/>
      </div>
      <div className="hot_spot">
        <img src='/hotspot.png'/>
        <p>가장 많은 선택을 받은 핫스팟</p>
        <div className='hot_spotImg1'>
          <img src='/box_stroke.png'/>
        </div>
        <div className='hot_spotImg2'>
          <img src='/box_stroke.png'/>
        </div>
        <div className='hot_spotImg3'>
          <img src='/box_stroke.png'/>
        </div>
      </div>
      <div className="visit">
      <img src='/go.png'/>
      <p>펫키드 팀을 더 알고 싶다면</p>
      <img src='/visit.png'/>
      <p>펫키드 팀 페이지 방문하기</p>
      </div>
      <div className='share'>
        <img src='/share_btn.png'/>
        <img src='/restart_btn.png'/>
      </div>
  
    <style jsx>{`

      .result_layout{
        position: relative;
        position: center;
        margin-left:auto;
        margin-right:auto;
        width: 500px;
        height: 1081px;
      }
      .layout2{
        position: absolute;
        top:1081px;
        left: 0px;
      }
      .layout3{
        position: absolute;
        width: 500px;
        height: 384px;
        top:2162px;
        left: 0px;
      }
      .result > img:nth-of-type(1){
        position: absolute;
        width: 467px;
        height: 524px;
        left: calc(50% - 467px/2 + 0.5px);
        top: 78px;
      }
      .result > p:nth-of-type(1){
        position: absolute;
        width: 290px;
        height: 41px;
        top: 112px;
        left: calc(50% - 290px/2);

        font-weight: 400;
        font-size: 38px;
        line-height: 41px;
        color: #000000;
      }
      .result > p:nth-of-type(2){
        position: absolute;
        width: 194px;
        height: 20px;
        left: 267px;
        top: 67px;

        font-weight: 500;
        font-size: 17px;
        color: #565656;
    }
      .result > img:nth-of-type(2){
        position: absolute;
        width: 227px;
        height: 55px;
        left: 250px;
        top: 55px;
      }
      .result > img:nth-of-type(3){
        position: absolute;
        width: 26px;
        height: 26px;
        top: 123px;
        left: 413px;

        transform: rotate(7.10deg);
      }
      .spot_img{
        position: absolute;
        width: 419px;
        height: 281px;
        left: calc(50% - 419px/2 + 0.5px);
        top: 179px;
        overflow:hidden;
      }
      .spot_img img{
        width:100%;
        height:100%;
        object-fit:cover;
      }
      .tag1 p{
        position: absolute;
        width: 114px;
        height: 17px;
        left: 68px;
        top: 537px;
      }
      .tag2 p{
        position: absolute;
        width: 55px;
        height: 17px;
        left: 192px;
        top: 537px;
      }
      .tag3 p{
        position: absolute;
        width: 84px;
        height: 17px;
        left: 255px;
        top: 537px;
      }
      .tag1 .underline{
        position: absolute;
        top: 543px;
        width: 114px;
        height: 11px;
        background: #FFBDD7;
      }
      .hashtag p{
        position: absolute;
        width: 100%;
        height: 100%;

        font-weight: 600;
        font-size: 16px;

        color: #000000;
      }
      .result > img:nth-of-type(4){
        position: absolute;
        width: 468px;
        height: 242px;
        left: calc(50% - 468px/2);
        top: 643px;
      }
      .box_text{
        position: absolute;
        width: 397px;
        height: 180px;
        left: 52px;
        top: 674px;

        font-weight: 500;
        font-size: 20px;
      }

      .location > img:nth-of-type(1){
        position: absolute;
        width: 22px;
        height: 31px;
        left: 17px;
        top: 949px;
      }
      .location p{
        position: absolute;
        width: 243px;
        height: 38px;
        left: 47px;
        top: 949px;

        font-weight: 400;
        font-size: 32px;
        color: #000000;
      }
      .location > img:nth-of-type(2){
        position: absolute;
        width: 468px;
        height: 242px;
        left: calc(50% - 468px/2);
        top: 1002px;
      }
      .hot_spot > img:nth-of-type(1){
        position: absolute;
        width: 27px;
        height: 31px;
        top: 1307px;
        left:17px;
      }
      .hot_spot p{
        position: absolute;
        width: 337px;
        height: 18px;
        left: 62px;
        top: 1317px;

        font-weight: 400;
        font-size: 32px;
        color: #000000;
      }
      .hot_spotImg1 img{
        position: absolute;
        width: 468px;
        height: 242px;
        left: calc(50% - 468px/2);
        top: 1368px;
      }
      .hot_spotImg2 img{
        position: absolute;
        width: 468px;
        height: 242px;
        left: calc(50% - 468px/2);
        top: 1634px;
      }
      .hot_spotImg3 img{
        position: absolute;
        width: 468px;
        height: 242px;
        left: calc(50% - 468px/2);
        top: 1900px;
      }
      .visit > img:nth-of-type(1){
        position: absolute;
        width: 38px;
        height: 38px;
        left: 17px;
        top: 2200px;
      }
      .visit > p:nth-of-type(1){
        position: absolute;
        width: 309px;
        height: 18px;

        left: 62px;
        top: 2205px;
        font-weight: 400;
        font-size: 32px;

        color: #000000;
      }
      .visit > img:nth-of-type(2){
        position: absolute;
        width: 466px;
        height: 105px;
        left: 17px;
        top: 2266px;
      }
      .visit > p:nth-of-type(2){
        position: absolute;
        width: 246px;
        height: 28px;
        left: calc(50% - 246px/2);
        top: 2304px;

        font-weight: 400;
        font-size: 26px;

        color: #000000;
      }
      .share{
        position: absolute;
        width: 500px;
        height: 137px;
        left: 0px;
        top: 2409px;

        background: #000000;
      }
      .share > img:nth-of-type(1){
        position: absolute;
        width: 344px;
        height: 67px;
        left: 17px;
        top: 38px;
      }
      .share > img:nth-of-type(2){
        position: absolute;
        width: 90px;
        height: 67px;
        left: 393px;
        top: 38px;
      }
    `}
      </style>
      </div>
    )
  }
