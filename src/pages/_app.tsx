import Head from "next/head";
import { AppProps } from "next/app";
import "@styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>두근두근 핫스팟 테스트 🥰</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
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
          content="VpQsOKUG_f0qr7ARg-4zo8o92pg6MN59HB0e-EWQPlM"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
