import Head from "next/head";
import "../styles/globals.css";
import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>두근두근 핫스팟 테스트 🥰</title>
        <meta property="og:url" content="https://place.patkid.kr"></meta>
        <meta property="og:title" content="두근두근 핫스팟 테스트"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:image"
          content="https://image.patkid.kr/common/kakao_share_thum.png"
        ></meta>
        <meta
          property="og:description"
          content="두근두근 핫스팟 테스트~ 나의 성향에 딱 맞는 요즘 핫스팟은 어디일까?"
        ></meta>
        <link rel="icon" href="/favicon.webp"></link>
        <meta
          name="google-site-verification"
          content="sjjZOY_v9rpwOKcwC9ulDLGS-yIS2jgOv3QyBPgvH2I"
        />
      </Head>
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}
