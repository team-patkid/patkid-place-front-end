import React from "react";
import WebShareButton from "./WebShare";
import { getDomain } from "@/utils/env";

type KakaoShareButtonProps = {
  mbti: string;
};

const KakaoShareButton = ({ mbti }: KakaoShareButtonProps) => {
  const shareUrl = `${getDomain()}/results?mbti=${mbti}&shared=true`;

  return (
    <WebShareButton
      title="두근두근 핫스팟 테스트 in seoul"
      text="나의 성향에 딱 맞는 요즘 핫스팟은 어디일까?"
      url={shareUrl}
      className="footer"
      style={{
        width: "70%",
        height: "67px",
      }}
      src="/share_btn.webp"
    />
  );
};

export default KakaoShareButton;
