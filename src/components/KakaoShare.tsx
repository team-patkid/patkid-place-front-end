import React, { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

type KakaoShareButtonProps = {
  description: string;
  imageUrl: String;
  mobileWebUrl: String;
  webUrl: String;
  mbti: String;
};

const KakaoShareButton = ({ mbti }: KakaoShareButtonProps) => {
  //카카오톡 공유하기
  useEffect(() => {
    if (typeof window.Kakao !== "undefined" && !window.Kakao.isInitialized()) {
      window.Kakao.init("dc448d19d55ef2f3302fceaacee793ea");
    }
  }, []);

  const share = () => {
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "두근두근 핫스팟 테스트 in seoul",
        description: "나의 성향에 딱 맞는 요즘 핫스팟은 어디일까?",
        imageUrl: "https://image.patkid.kr/common/kakao_share_thum.png",
        link: {
          mobileWebUrl: `//http://place.patkid.kr/results?mbti=${mbti}&shared=true`,
          webUrl: `http://place.patkid.kr/results?mbti=${mbti}&shared=true`,
        },
      },
      buttons: [
        {
          title: "우리 핫플 찾고 데이트 갈래?💖",
          link: {
            mobileWebUrl: `http://place.patkid.kr/results?mbti=${mbti}&shared=true`,
            webUrl: `http://place.patkid.kr/results?mbti=${mbti}&shared=true`,
          },
        },
      ],
      installTalk: true,
    });
  };

  return (
    <img
      className="footer"
      style={{
        position: "absolute",
        width: "344px",
        height: "67px",
        left: "17px",
        top: "18px",
      }}
      src="/share_btn.webp"
      onClick={share}
    />
  );
};

export default KakaoShareButton;
