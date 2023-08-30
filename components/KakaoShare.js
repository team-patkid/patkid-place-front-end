import React from "react";

const KakaoShareButton = ({}) => {
  const kakaoShare = () => {
    Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "두근두근 핫스팟 테스트 in seoul",
        description: "나의 성향에 딱 맞는 요즘 핫스팟은 어디일까?",
        imageUrl: "https://image.patkid.kr/common/kakao_share_thum.png",
        link: {
          mobileWebUrl: "카카오공유하기 시 클릭 후 이동 경로",
          webUrl: "카카오공유하기 시 클릭 후 이동 경로",
        },
      },
      buttons: [
        {
          title: "테스트 하러 가기",
          link: {
            mobileWebUrl: "카카오공유하기 시 클릭 후 이동 경로",
            webUrl: "카카오공유하기 시 클릭 후 이동 경로",
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
