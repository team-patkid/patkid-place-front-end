import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import Modal from '../../components/Modal';
import LoadingPage from '../../components/LoadingPage';
import KakaoShareButton from '@/components/KakaoShare';


export default function Results() {

  const [ModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showImage, setShowImage] = useState(true);
  const [shared, setShared] = useState(false);
  const [visited, setVisited] = useState(false);
  const [isShare, setIsShare] = useState(false);
  const [resultData, setResultData] = useState(null);
  const router = useRouter();

  // const handleShareButtonClick = () => {
  //   setIsShare(prevIsShare => !prevIsShare);
  // };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      const imageTimer = setTimeout(() => {
        setShowImage(false);
      }, 4000);

      return () => clearTimeout(imageTimer);
    }
  }, [loading]);

  const openModal = () => {
    setModalOpen(true);
  };

  const handleShare = () => {
    setShared(true);
  };


  useEffect(() => {
    // URL을 통해 방문 여부 확인
    if (window.location.href.includes('/results?shared=true')) {
      setVisited(true);
    }
  }, []);

  useEffect(() => {
    const { mbti } = router.query;

    if (mbti) {
      axios.post('https://api.patkid.kr/user/result', {
        mbti: mbti
      })
        .then((response) => {
          setResultData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching result data:', error);
        });
    }
    console.log(mbti)
  }, [router.query.mbti]);


  //지도 api
  useEffect(() => {
    axios.get('https://api.patkid.kr/user/result')
      .then(response => {
        setResultData(response.data.data.result);
      })
      .catch(error => {
        console.error('Error fetching result data:', error);
      });
  }, []);

  useEffect(() => {
    if (resultData) {
      const script = document.createElement('script');
      script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ljyaizmmy4';
      script.async = true;
      script.onload = () => {
        const mapOptions = {
          center: new window.naver.maps.LatLng(resultData.data.result.place.y, resultData.data.result.place.x),
          zoom: 15
        };

        const map = new window.naver.maps.Map('map', mapOptions);

        const markerOptions = {
          position: new window.naver.maps.LatLng(resultData.data.result.place.y, resultData.data.result.place.x),
          map: map
        };

        const marker = new window.naver.maps.Marker(markerOptions);
      };
      document.head.appendChild(script);
    }
  }, [resultData]);
  // 지도 URL 가져오기
  const handleMapClick = () => {
    if (resultData && resultData.data && resultData.data.result.place.naverUrl) {
      window.location.href = resultData.data.result.place.naverUrl;
    }
  };

  //카카오톡 공유하기
  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init('dc448d19d55ef2f3302fceaacee793ea');
    }
  }, []);

  if (!resultData) {
    return <LoadingPage />;
  }

  if (resultData && resultData.data && resultData.data.result.place) {
    const { name, description, imageUrl, naverUrl } = resultData.data.result.place;

    return (
      <div className={`wrapper ${shared ? 'shared' : ''}`}>
        <section className='result_layout'>
          <div>
            <img src='/background_h_2.png' className='result_layout' />
            <img src='/background_h_2_2.png' className='result_layout layout2' />
            <img src='/background_h_2_3.png' className='result_layout layout3' />
          </div>
          {resultData && resultData.data && (
            <>
              <div className="result">
                <img src='/i_box.png' />
                <p>{resultData.data.result.name}</p>
                <img src='/tooltip.png' className={showImage ? 'tooltip-show' : 'tooltip-hide'} />
                <img src='/dice.png' />
                <div className='spot_img'>
                  <img src={resultData.data.result.place.imageUrl} />
                </div>
                <div className='tag'>
                  <div className='tag1'>
                    <p className='isaText hashtag'>#{resultData.data.result.place.tags[0].tag}</p>
                  </div>
                  <div className='tag2'>
                    <p className='isaText hashtag tag2'>#{resultData.data.result.place.tags[1].tag}</p>
                  </div>
                  <div className='tag3'>
                    <p className='isaText hashtag tag3'>#{resultData.data.result.place.tags[2].tag}</p>
                  </div>
                </div>
                <img src='/box.png' />
                <div className='box_text'>
                  {resultData.data.result.place.content.split('\n').map((v, index, array) => (
                    <li key={index} style={{ marginBottom: index !== array.length - 1 ? '30px' : '0' }}>
                      {v}
                    </li>
                  ))}
                </div>
              </div>
              <div className="location">
                <img src='/location.png' />
                <p>위치를 알려줄게!</p>
                <img src='/box_stroke.png' id="cross"></img>
                <div className='map' id='map' onClick={handleMapClick}></div>
              </div>
              <div className="hot_spot">
                <img src='/hotspot.png' />
                <p>가장 많은 선택을 받은 핫스팟</p>
                <div className='hot_spotImg1' onClick={openModal}>
                  <img class='hot_spot_image' src={resultData.data.hotPlace[0].imageUrl} />
                  {ModalOpen && <Modal setModalOpen={setModalOpen} />}
                  <img src='/box_stroke.png' />
                </div>
                <div className='hot_spotImg2' onClick={openModal}>
                  <img class='hot_spot_image' src={resultData.data.hotPlace[1].imageUrl} />
                  {ModalOpen && <Modal setModalOpen={setModalOpen} />}
                  <img src='/box_stroke.png' />
                </div>
                <div className='hot_spotImg3' onClick={openModal}>
                  <img class='hot_spot_image' src={resultData.data.hotPlace[2].imageUrl} />
                  {ModalOpen && <Modal setModalOpen={setModalOpen} />}
                  <img src='/box_stroke.png' />
                </div>
              </div>
              <div className="visit">
                <img src='/go.png' />
                <p>펫키드 팀을 더 알고 싶다면</p>
                <Link href="https://www.notion.so/PATKID-b28bf7de62bb4e95919b5dca4e8c08ec?pvs=4" target='_blank'>
                  <img className="visitImg" src='/visit.png' />
                  <p className="visitP" >펫키드 팀 페이지 방문하기</p>
                </Link>
              </div>
            </>
          )}
        </section>
        <footer>
          {visited ? (
            <Link href="/">
              <img className='footer_share' src='/share_button2.png' />
            </Link>
          ) : (
            <>
              <KakaoShareButton
                description={description}
                imageUrl={imageUrl}
                mobileWebUrl={naverUrl}
                webUrl={naverUrl}
              />
              <Link href="/">
                <img className='footer_right' src='/restart_btn.png' />
              </Link>
            </>
          )}
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
        line-height: 41px;
        color: #000000;
        font-size: 38px;
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
      .tooltip-show {
          display: block;
        }

        .tooltip-hide {
          display: none;
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
        width: 114px;
        height: 17px;
        left: 182px;
        top: 537px;
      }
      .tag3 p{
        position: absolute;
        width: 114px;
        height: 17px;
        left: 295px;
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
      .map{
        position: absolute;
        width: 452px;
        height: 226px;
        left: calc(50% - 452px/2);
        top: -75px;
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
      .hot_spotImg1 > img:nth-of-type(1){
        position: absolute;
        width: 452px;
        height: 226px;
        left: calc(50% - 452px/2);
        top: 1376px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        object-fit: cover;
      }
      .hot_spotImg2 > img:nth-of-type(1){
        position: absolute;
        width: 452px;
        height: 226px;
        left: calc(50% - 452px/2);
        top: 1642px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        object-fit: cover;
      }
      .hot_spotImg3 > img:nth-of-type(1){
        position: absolute;
        width: 452px;
        height: 226px;
        left: calc(50% - 452px/2);
        top: 1908px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        object-fit: cover;
      }
      .hot_spotImg1 > img:nth-of-type(2){
        position: absolute;
        width: 468px;
        height: 242px;
        left: calc(50% - 468px/2);
        top: 1368px;
      }
      .hot_spotImg2 > img:nth-of-type(2){
        position: absolute;
        width: 468px;
        height: 242px;
        left: calc(50% - 468px/2);
        top: 1634px;
      }
      .hot_spotImg3 > img:nth-of-type(2){
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
      footer {
          position: fixed;
          bottom: 0px;
          width: 500px;
          margin: 0 auto;
          height: 100px;
          background: ${shared ? '#FF448D' : '#000000'};
          z-index: 99;
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
      .footer_share{
        position: absolute;
        width: 466px;
        height: 67px;
        left: 17px;
        top: 2427px;
      }
    `}


        </style>
      </div>

    )
  };
};
