import Link from "next/link";
import dynamic from "next/dynamic";
import OptimizedImage from "@components/common/OptimizedImage";

const KakaoShareButton = dynamic(() => import("@/components/KakaoShare"), {
  ssr: false,
  loading: () => <div>카카오 공유 버튼 로딩 중...</div>
});
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
          <KakaoShareButton mbti={mbti} />
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
