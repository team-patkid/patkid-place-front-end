import Link from "next/link";
import KakaoShareButton from "@/components/KakaoShare";
import { footerRight, footerShare, footerStyle } from "./Footer.css";
import { CSSProperties } from "react";

type FooterProps = {
  visited: boolean;
  mbti: string;
  style: CSSProperties;
};

const Footer = ({
  visited,
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
          <KakaoShareButton mbti={mbti} />
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
