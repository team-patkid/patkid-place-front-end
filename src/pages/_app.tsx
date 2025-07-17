import Head from "next/head";
import { AppProps } from "next/app";
import "@styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PATKID - 성향 기반 핫스팟 추천 서비스 | 두근두근 핫스팟 테스트</title>
        <meta name="description" content="MBTI 성향 테스트로 나에게 딱 맞는 요즘 핫스팟을 찾아보세요! 개인 맞춤형 장소 추천 서비스 PATKID" />
        <meta name="keywords" content="MBTI 테스트, 핫스팟 추천, 성향 테스트, 장소 추천, 맛집 추천, 카페 추천, 데이트 코스, PATKID" />
        <meta name="author" content="PATKID" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="ko" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        
        <meta property="og:site_name" content="PATKID" />
        <meta property="og:url" content="https://place.patkid.xyz" />
        <meta property="og:title" content="PATKID - 성향 기반 핫스팟 추천 서비스" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://image.patkid.xyz/common/kakao_share_thum.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="PATKID 성향 기반 핫스팟 추천 서비스" />
        <meta
          property="og:description"
          content="MBTI 성향 테스트로 나에게 딱 맞는 요즘 핫스팟을 찾아보세요! 개인 맞춤형 장소 추천 서비스"
        />
        <meta property="og:locale" content="ko_KR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PATKID - 성향 기반 핫스팟 추천 서비스" />
        <meta name="twitter:description" content="MBTI 성향 테스트로 나에게 딱 맞는 요즘 핫스팟을 찾아보세요!" />
        <meta name="twitter:image" content="https://image.patkid.xyz/common/kakao_share_thum.png" />
        
        <link rel="canonical" href="https://place.patkid.xyz" />
        <link rel="icon" href="/favicon.webp" />
        <link rel="apple-touch-icon" href="/favicon.webp" />
        
        <meta
          name="google-site-verification"
          content="VpQsOKUG_f0qr7ARg-4zo8o92pg6MN59HB0e-EWQPlM"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
