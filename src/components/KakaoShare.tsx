import React, { useEffect } from "react";

interface KakaoAPI {
  init: (key: string) => void;
  isInitialized: () => boolean;
  Link: {
    sendDefault: (options: {
      objectType: string;
      content: {
        title: string;
        description: string;
        imageUrl: string;
        link: {
          mobileWebUrl: string;
          webUrl: string;
        };
      };
      buttons: Array<{
        title: string;
        link: {
          mobileWebUrl: string;
          webUrl: string;
        };
      }>;
      installTalk: boolean;
    }) => void;
  };
}

declare global {
  interface Window {
    Kakao: KakaoAPI;
  }
}

type KakaoShareButtonProps = {
  mbti: string;
};

const KakaoShareButton = ({ mbti }: KakaoShareButtonProps) => {
  //카카오톡 공유하기
  useEffect(() => {
    if (typeof window.Kakao !== "undefined" && !window.Kakao.isInitialized()) {
      window.Kakao.init("7244b2a46d1c29acad1b687de23ac61e");
    }
  }, []);

  const share = () => {
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "두근두근 핫스팟 테스트 in seoul",
        description: "나의 성향에 딱 맞는 요즘 핫스팟은 어디일까?",
        imageUrl: "https://image.patkid.xyz/common/kakao_share_thum.png",
        link: {
          mobileWebUrl: `//http://place.patkid.xyz/results?mbti=${mbti}&shared=true`,
          webUrl: `http://place.patkid.xyz/results?mbti=${mbti}&shared=true`,
        },
      },
      buttons: [
        {
          title: "우리 핫플 찾고 데이트 갈래?💖",
          link: {
            mobileWebUrl: `http://place.patkid.xyz/results?mbti=${mbti}&shared=true`,
            webUrl: `http://place.patkid.xyz/results?mbti=${mbti}&shared=true`,
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
