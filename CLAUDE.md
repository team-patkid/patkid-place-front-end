# PATKID - 성향 기반 핫스팟 추천 서비스

## 프로젝트 개요
사용자의 성향(MBTI 기반)을 분석하여 개인에게 맞는 핫스팟을 추천하는 웹 서비스입니다.

## 기술 스택

### Frontend
- **Next.js** 13.4.19 - React 기반 풀스택 프레임워크
- **React** 18.2.0 - UI 라이브러리
- **TypeScript** 5.4.2 - 타입 안전성
- **Vanilla Extract CSS** - CSS-in-JS 스타일링
- **Axios** - HTTP 클라이언트
- **React Transition Group** - 애니메이션

### Development Tools
- **ESLint** - 코드 품질 관리
- **pnpm** - 패키지 매니저
- **Docker** & **Docker Compose** - 컨테이너화

### 포트
- 개발/프로덕션: 8574

## 프로젝트 구조

```
src/
├── pages/                 # Next.js 페이지 라우팅
│   ├── index.tsx         # 홈 페이지
│   ├── questions/        # 질문 페이지
│   └── results/          # 결과 페이지
├── components/           # 재사용 가능한 UI 컴포넌트
│   ├── Button/           # 버튼 컴포넌트
│   ├── Loading/          # 로딩 컴포넌트
│   ├── Modal/            # 모달 컴포넌트
│   ├── ProgressBar/      # 진행률 표시
│   ├── home/             # 홈 페이지 전용 컴포넌트
│   ├── questions/        # 질문 페이지 전용 컴포넌트
│   └── results/          # 결과 페이지 전용 컴포넌트
├── hooks/                # 커스텀 훅
│   ├── useMBTI.ts        # MBTI 계산 로직
│   └── useShare.ts       # 공유 기능
├── models/               # TypeScript 타입 정의
│   ├── mbti.ts           # MBTI 관련 타입
│   ├── place.ts          # 장소 관련 타입
│   ├── question.ts       # 질문 관련 타입
│   └── result.ts         # 결과 관련 타입
├── styles/               # 전역 스타일
│   ├── global.css.ts     # 전역 CSS
│   ├── theme.css.ts      # 테마 색상
│   └── keyframes.css.ts  # 애니메이션
├── utils/                # 유틸리티 함수
│   ├── env.ts            # 환경 변수
│   └── imageHelpers.ts   # 이미지 처리
├── constants/            # 상수 정의
└── apis/                 # API 호출 함수
```

## 애플리케이션 플로우

1. **홈 페이지 (/)** 
   - 서비스 소개 및 시작 버튼
   - 방문자 수 표시
   - PATKID 로고 및 Notion 링크

2. **질문 페이지 (/questions)**
   - 12개의 MBTI 기반 질문 진행
   - 진행률 표시 및 애니메이션
   - 답변에 따른 MBTI 성향 계산

3. **결과 페이지 (/results)**
   - 계산된 MBTI 기반 추천 장소 표시
   - 장소 정보 (이름, 이미지, 태그, 설명)
   - 핫스팟 추천 및 지도 위치
   - 공유 기능 (카카오톡, 웹 공유)

## 주요 기능

### MBTI 계산
- EI (외향/내향), NS (감각/직관), FT (사고/감정), PJ (판단/인식) 4가지 축으로 분류
- 각 질문의 답변을 통해 성향 점수 계산
- 최종 MBTI 유형 결정

### 장소 추천
- MBTI 결과에 따른 개인화된 장소 추천
- 장소별 태그 및 상세 정보 제공
- 네이버 지도 연동

### 공유 기능
- 카카오톡 공유
- 웹 공유 API
- URL 파라미터를 통한 결과 공유

## 브레인스토밍 공간

### 새로운 기능 아이디어
- [ ] 추천 장소 북마크 기능
- [ ] 사용자 리뷰 및 평점 시스템
- [ ] 친구와 결과 비교 기능
- [ ] 계절별/날씨별 추천 장소 필터링
- [ ] 위치 기반 주변 추천 장소 표시

### UI/UX 개선
- [ ] 다크 모드 지원
- [ ] 반응형 디자인 최적화
- [ ] 접근성 향상 (ARIA 라벨, 키보드 네비게이션)
- [ ] 로딩 스켈레톤 UI 추가

### 성능 최적화
- [x] 이미지 lazy loading 구현
- [ ] 코드 스플리팅 최적화
- [ ] PWA 지원 (오프라인 모드, 앱 설치)
- [ ] 번들 크기 최적화

## 추가 고려 기술

### 상태 관리
- **Zustand** 또는 **Jotai** - 가벼운 상태 관리
- **React Query** - 서버 상태 관리 및 캐싱

### 테스팅
- **Jest** - 단위 테스트
- **React Testing Library** - 컴포넌트 테스트
- **Cypress** - E2E 테스트

### 성능 모니터링
- **Vercel Analytics** - 성능 분석
- **Sentry** - 에러 추적
- **Google Analytics** - 사용자 행동 분석

### 데이터베이스 & 백엔드
- **Supabase** - BaaS (Backend as a Service)
- **Prisma** - ORM
- **PostgreSQL** - 데이터베이스

### 배포 & 인프라
- **Vercel** - 배포 플랫폼
- **CDN** - 이미지 최적화
- **환경 변수 관리** - 보안 강화

### 추가 라이브러리
- **Framer Motion** - 고급 애니메이션
- **React Hook Form** - 폼 관리
- **Storybook** - 컴포넌트 문서화
- **Lottie** - 고품질 애니메이션

## 개발 명령어

```bash
# 개발 서버 시작
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# 코드 린팅
npm run lint

# Docker 실행
docker-compose up -d
```

## 메모 및 참고사항

- 이미지 최적화: WebP 형식 사용으로 성능 개선
- 포트 8574 사용 (개발/프로덕션 동일)
- Notion 연동으로 추가 정보 제공
- 카카오톡 공유 기능 구현 완료
- 방문자 수 추적 기능 포함

## 추후 개발 계획

1. **Phase 1: 기본 기능 안정화**
   - 버그 수정 및 성능 최적화
   - 모바일 반응형 완성도 향상

2. **Phase 2: 사용자 경험 개선**
   - 추천 알고리즘 개선
   - 사용자 피드백 수집 시스템

3. **Phase 3: 확장 기능 개발**
   - 소셜 기능 추가
   - 개인화 추천 고도화