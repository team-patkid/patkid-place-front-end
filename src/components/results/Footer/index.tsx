import Link from "next/link";
import OptimizedImage from "@components/common/OptimizedImage";
import WebShareButton from "@/components/WebShare";
import { getDomain } from "@/utils/env";

import { footerRight, footerShare, footerStyle } from "./Footer.css";
import { CSSProperties } from "react";

type FooterProps = {
  visited: boolean;
  mbti: string;
  style: CSSProperties;
};

const Footer = ({ visited, mbti, style }: FooterProps) => {
  return (
    <footer className={footerStyle} style={style}>
      {visited ? (
        <Link href="/">
          <OptimizedImage
            className={footerShare}
            src="/share_button2.webp"
            alt="Share button"
            width={200}
            height={60}
            draggable={false}
          />
        </Link>
      ) : (
        <>
          <WebShareButton
            title="두근두근 핫스팟 테스트 in seoul"
            text="나의 성향에 딱 맞는 요즘 핫스팟은 어디일까?"
            url={`${getDomain()}/results?mbti=${mbti}&shared=true`}
            className={footerShare}
            style={{
              width: "70%",
              height: "67px",
            }}
            src="/share_btn.webp"
          />
          <Link href="/">
            <OptimizedImage
              className={footerRight}
              src="/restart_btn.webp"
              alt="Restart button"
              width={200}
              height={60}
              draggable={false}
            />
          </Link>
        </>
      )}
    </footer>
  );
};

export default Footer;
