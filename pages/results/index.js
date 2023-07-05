import { useEffect, useState } from 'react';
import Link from "next/link";
import '../../components/modal.module.css';
import Modal from '../../components/Modal';
import LoadingPage from '../../components/LoadingPage';

export default function Results() {

  const [ModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{

    if (ModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [ModalOpen]);

  //모달창 노출
  const openModal = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    setLoading(true);


    const timeout = setTimeout(() => {
      setLoading(false); 
    }, 2500); // 2.5초 동안 로딩 상태를 유지한 후에 false로 변경

    return () => {
      clearTimeout(timeout); 
    };
  }, []);

  if (loading) {
    return <LoadingPage />; 
  }
 
  return (
    <div className='wrapper'>
    <section className='result_layout'>
    <div>
    <img src='/background_h_2.png' className='result_layout'/>
    <img src='/background_h_2_2.png' className='result_layout layout2'/>
    <img src='/background_h_2_3.png' className='result_layout layout3'/>
    </div>
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
              {/* <div className='underline'></div> */}
            </div>
            <div className='tag2'>
              <p className='isaText hashtag tag2'>#성수</p>
              {/* <div className='underline'></div> */}
            </div>
            <div className='tag3'>
              <p className='isaText hashtag tag3'>#파리느낌</p>
              {/* <div className='underline'></div> */}
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
        <div className='hot_spotImg1' onClick={openModal}>
        {ModalOpen && <Modal setModalOpen={setModalOpen} />}
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
      <Link href="https://www.notion.so/PATKID-b28bf7de62bb4e95919b5dca4e8c08ec?pvs=4" target='_blank'>
      <img className="visitImg" src='/visit.png'/>
      <p className="visitP" >펫키드 팀 페이지 방문하기</p>
      </Link>
      </div>
      </section>
      <footer>
      <img className='footer_left' src='/share_btn.png'/>
      <Link href="/">
      <img className='footer_right' src='/restart_btn.png'/>
      </Link>
      </footer>

  
    <style jsx>{`

      .wrapper{
        position: relative;
        position: center;
        margin-left:auto;
        margin-right:auto;
        width: 500px;
        height: 2546px;
      }

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
        z-index: 999;

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
      .visitImg{
        position: absolute;
        width: 466px;
        height: 105px;
        left: 17px;
        top: 2266px;
      }
      .visitP{
        position: absolute;
        width: 246px;
        height: 28px;
        left: calc(50% - 246px/2);
        top: 2304px;

        font-weight: 400;
        font-size: 26px;

        color: #000000;
      }
      footer{
        position: fixed;
        bottom: 0px;
        width: 500px;
        margin: 0 auto;
        height: 100px;

        background: #000000;
      }
      .footer_left{
        position: absolute;
        width: 344px;
        height: 67px;
        left: 17px;
        top: 18px;
      }
      .footer_right{
        position: absolute;
        width: 90px;
        height: 67px;
        left: 393px;
        top: 18px;
      }
    `}
      </style>
      </div>

    )
  };
