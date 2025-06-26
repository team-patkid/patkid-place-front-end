import Head from "next/head";
import Script from "next/script";
import { AppProps } from "next/app";
import "@styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>두근두근 핫스팟 테스트 🥰</title>
        <meta property="og:url" content="https://place.patkid.kr"></meta>
        <meta property="og:title" content="두근두근 핫스팟 테스트"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:image"
          content="https://image.patkid.xyz/common/kakao_share_thum.png"
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
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
        integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}
