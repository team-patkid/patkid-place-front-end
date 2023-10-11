import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import styles from "@/styles/main.module.css"

export async function getServerSideProps() {
  const response = await axios.get("https://api.patkid.kr/user/visit");
  const visitorCount = response.data.data.count;

  return {
    props: {
      visitorCount,
    },
  };
}

export default function Home({ visitorCount }) {
  const [isClicked, setIsClicked] = useState(false);


  const handleClick = () => {
    setIsClicked(true);

    setTimeout(() => {
      window.location.href = "/questions";
    }, 300); //0.3s뒤 페이지이동
  };

  const handleMouseEnter = () => {
    if (!isClicked) {
      setIsClicked(true);
    }
  };

  const handleMouseLeave = () => {
    if (isClicked) {
      setIsClicked(false);
    }
  };

  return (
    <div className="main_layout">
      <img src="/background_h_1.webp"
       className="main_layout"
       priority="true"
       />
      <div className="main_layout_icon">
        <img src="/coffee.webp" />
        <img src="/heart_1.webp" />
        <img src="/music.webp" />
        <img src="/cake.webp" />
        <img src="/heart_2.webp" />
        <img src="/book.webp" />
      </div>
      <img src="/title.webp" className="main_title" />
      <p className="isaText">나의 성향에 딱 맞는 요즘 핫스팟은 어디일까?</p>
      <Link href="/questions" legacyBehavior>
              <div onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`isClicked ${isClicked ? "clicked" : ""}`}>
                {isClicked ? (
                  <img src="/start_btn_click.webp" className="main_start_btn btn_click" alt="Clicked Button" />
                ) : (
                  <img src="/start_btn.webp" className="main_start_btn" alt="Button" />
                )}
                <div className="start_btn">
                  <p>시작하기</p>
                  <p className="isaText">참여자 수 {visitorCount}</p>
                </div>
              </div>
            </Link>
      <img src="/logo_patKid.webp" className="main_logo" />

      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        .main_layout {
          position: relative;
          position: center;
          margin-left: auto;
          margin-right: auto;
          width: 500px;
          height: 1081px;
        }
        .main_title {
          position: absolute;
          width: 418px;
          height: 411px;
          left: 41px;
          top: 224px;
          animation: ${styles.titleAnimation} 650ms infinite;
        }
        .main_layout_icon {
          position: absolute;
          width: 500px;
          height: 1081px;
          left: 0px;
          top: 0px;
        }
        .main_layout_icon > img:nth-of-type(1) {
          position: absolute;
          width: 142px;
          height: 140px;
          left: 32px;
          top: 57px;
          animation: ${styles.sixAnimation} 650ms infinite;
        }
        .main_layout_icon > img:nth-of-type(2) {
          position: absolute;
          width: 43px;
          height: 41px;
          left: 286px;
          top: 80px;
        }
        .main_layout_icon > img:nth-of-type(3) {
          position: absolute;
          width: 118px;
          height: 112px;
          left: 350px;
          top: 103px;
          animation: ${styles.tenAnimation} 650ms infinite;
        }
        .main_layout_icon > img:nth-of-type(4) {
          position: absolute;
          width: 86px;
          height: 128px;
          left: 7px;
          top: 523px;
          animation: ${styles.sixAnimation} 650ms infinite;
        }
        .main_layout_icon > img:nth-of-type(5) {
          position: absolute;
          width: 47px;
          height: 45px;
          left: 433px;
          top: 549px;
        }
        .main_layout_icon > img:nth-of-type(6) {
          position: absolute;
          width: 99px;
          height: 90px;
          left: 377px;
          top: 658px;
          animation: ${styles.sixAnimation} 650ms infinite;
        }
        .main_layout p {
          position: absolute;
          width: 318.86px;
          height: 22px;
          top: 658px;
          left: calc(50% - 318.86px / 2);
          font-weight: 300;
          font-size: 17px;
          line-height: 22px;
          color: #363636;
        }
        .main_start_btn {
          position: absolute;
          width: 462px;
          height: 104px;
          left: 19px;
          top: 757px;
          cursor: pointer;
          transition: background-color 0.7s ease;
        }
        .btn_click {
          animation: ${styles.clickAnimation} 0.5s linear;
          animation-delay: 0.1s;
        }
        .main_logo {
          position: absolute;
          width: 103px;
          height: 33px;
          left: calc(50% - 103px / 2 + 0.5px);
          top: 884px;
        }
        .start_btn > p:nth-of-type(1) {
          position: absolute;
          width: 133px;
          height: 44px;
          left: calc(50% - 133px / 2 + 0.5px);
          top: 774px;
          margin: 0px auto;

          font-weight: 400;
          font-size: 41px;
          line-height: 44px;
          color: #ffffff;
        }
        .start_btn > p:nth-of-type(2) {
          position: absolute;
          width: 209px;
          height: 20px;
          left: calc(50% - 100px / 2 + 0.5px);
          top: 825px;
          margin: 0px auto;

          font-weight: 300;
          font-size: 17px;
          line-height: 20px;
          color: #ffffff;
        }
      `}</style>
    </div>
  );
}

