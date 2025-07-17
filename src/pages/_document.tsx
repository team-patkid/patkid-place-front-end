import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PATKID",
    "description": "MBTI 성향 테스트로 나에게 딱 맞는 요즘 핫스팟을 찾아보세요! 개인 맞춤형 장소 추천 서비스",
    "url": "https://place.patkid.xyz",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://place.patkid.xyz/results?mbti={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PATKID",
      "url": "https://place.patkid.xyz"
    },
    "mainEntity": {
      "@type": "Quiz",
      "name": "MBTI 성향 기반 핫스팟 테스트",
      "description": "12개의 질문으로 알아보는 나의 성향과 맞춤 핫스팟 추천",
      "about": {
        "@type": "Thing",
        "name": "MBTI 성향 테스트"
      }
    }
  };

  return (
    <Html lang="ko">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}