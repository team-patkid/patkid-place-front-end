import React from "react";

const KakaoShareButton = ({description,imageUrl,mobileWebUrl,webUrl,mbti}) => {
  const kakaoShare = () => {
    Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "두근두근 핫스팟 테스트 in seoul",
        description: "나의 성향에 딱 맞는 요즘 핫스팟은 어디일까?",
        imageUrl: "https://image.patkid.kr/common/kakao_share_thum.png",
        link: {
          mobileWebUrl: `http://localhost:3000/results?mbti=${mbti}&shared=true`,
          webUrl: `http://localhost:3000/results?mbti=${mbti}&shared=true`,
        },
      },
      buttons: [
        {
          title: "우리 핫플 찾고 데이트 갈래?💖",
          link: {
            mobileWebUrl: `http://localhost:3000/results?mbti=${mbti}&shared=true`,
            webUrl: `http://localhost:3000/results?mbti=${mbti}&shared=true`,
          },
        },
      ],
      installTalk: true,
    });
  };

  return (
    <img
      className="footer_left"
      style={{
        position: "absolute",
        width: "344px",
        height: "67px",
        left: "17px",
        top: "18px",
      }}
      src="/share_btn.png"
      onClick={kakaoShare}
    />
  );
};

export default KakaoShareButton;