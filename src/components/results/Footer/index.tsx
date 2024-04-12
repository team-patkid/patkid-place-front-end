import Link from "next/link";
import KakaoShareButton from "@/components/KakaoShare";
import { footerRight, footerShare, footerStyle } from "./Footer.css";
import { CSSProperties } from "react";

type FooterProps = {
  visited: boolean;
  content: string;
  imageUrl: string;
  naverUrl: string;
  mbti: string;
  style: CSSProperties;
};

const Footer = ({
  visited,
  content,
  imageUrl,
  naverUrl,
  mbti,
  style,
}: FooterProps) => {
  return (
    <footer className={footerStyle} style={style}>
      {visited ? (
        <Link href="/">
          <img
            className={footerShare}
            src="/share_button2.webp"
            draggable={false}
          />
        </Link>
      ) : (
        <>
          <KakaoShareButton
            description={content}
            imageUrl={imageUrl}
            mobileWebUrl={naverUrl}
            webUrl={naverUrl}
            mbti={mbti}
          />
          <Link href="/">
            <img
              className={footerRight}
              src="/restart_btn.webp"
              draggable={false}
            />
          </Link>
        </>
      )}
    </footer>
  );
};

export default Footer;
