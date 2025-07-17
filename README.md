# PATKID - 성향 기반 핫스팟 추천 서비스

![PATKID Logo](https://image.patkid.xyz/common/kakao_share_thum.png)

**MBTI 성향 테스트로 나에게 딱 맞는 요즘 핫스팟을 찾아보세요!**

🌐 **Live Site**: [place.patkid.xyz](https://place.patkid.xyz)

## 📖 프로젝트 소개

PATKID는 사용자의 MBTI 성향을 분석하여 개인에게 맞는 핫스팟을 추천하는 웹 서비스입니다. 12개의 간단한 질문을 통해 성향을 파악하고, 맞춤형 장소를 추천받을 수 있습니다.

### 🎯 주요 기능
- **MBTI 성향 테스트**: 12개 질문으로 간편한 성향 분석
- **맞춤형 장소 추천**: 성향에 따른 개인화된 핫스팟 추천
- **상세 정보 제공**: 장소별 태그, 설명, 지도 연동
- **공유 기능**: 결과를 친구들과 쉽게 공유

## 🛠 기술 스택

- **Frontend**: Next.js 13.4.19, React 18.2.0, TypeScript 5.4.2
- **Styling**: Vanilla Extract CSS
- **HTTP Client**: Axios
- **Animation**: React Transition Group
- **Deployment**: Docker & Docker Compose

## 🚀 시작하기

### 필수 조건
- Node.js 16 이상
- npm 또는 pnpm

### 설치 및 실행

```bash
# 의존성 설치
npm install
# 또는
pnpm install

# 개발 서버 시작
npm run dev
# 또는
pnpm dev
```

개발 서버는 [http://localhost:8574](http://localhost:8574)에서 실행됩니다.

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# Docker로 실행
docker-compose up -d
```

## 📱 페이지 구조

1. **홈페이지** (`/`) - 서비스 소개 및 시작
2. **질문페이지** (`/questions`) - MBTI 성향 테스트
3. **결과페이지** (`/results`) - 맞춤 핫스팟 추천 결과

## 📈 SEO 최적화

✅ **완전한 SEO 최적화 구현** (2025.07.17)

- **검색 엔진 최적화**: robots.txt, sitemap.xml, 메타태그
- **소셜 미디어 최적화**: Open Graph, Twitter Card
- **구조화된 데이터**: JSON-LD Schema.org 마크업
- **성능 최적화**: Core Web Vitals, 이미지 최적화, 캐싱

### 주요 SEO 키워드
- MBTI 테스트, 핫스팟 추천, 성향 테스트, 장소 추천, 맛집 추천, 카페 추천

## 📊 성능 최적화

- ✅ 이미지 lazy loading
- ✅ 코드 스플리팅
- ✅ 번들 크기 최적화
- ✅ WebP/AVIF 이미지 포맷 지원
- ✅ 정적 리소스 캐싱

## 🎨 주요 특징

- **반응형 디자인**: 모바일 친화적 UI/UX
- **최적화된 성능**: 빠른 로딩과 부드러운 애니메이션
- **접근성**: 사용자 친화적 인터페이스
- **SEO 친화적**: 검색 엔진 최적화 완료

## 🔗 링크

- **서비스**: [place.patkid.xyz](https://place.patkid.xyz)
- **노션**: [PATKID 노션 페이지](https://www.notion.so/PATKID-b28bf7de62bb4e95919b5dca4e8c08ec?pvs=4)

## 📝 업데이트 로그

### 2025-07-17 - 코드 업데이트
- 12개 파일 수정
- 주요 변경: 페이지 5개, 설정파일 1개

### 2025.07.17 - SEO 최적화 완료
- robots.txt 및 sitemap.xml 구성
- 메타태그 및 Open Graph 최적화
- 구조화된 데이터 (JSON-LD) 추가
- 페이지별 동적 메타태그 구현
- Core Web Vitals 성능 최적화

---

**Made with ❤️ by PATKID Team**
