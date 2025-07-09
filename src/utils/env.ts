export const getDomain = (): string => {
  // 환경 변수에서 도메인 가져오기
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  
  if (domain) {
    return domain;
  }
  
  // 폴백: 클라이언트 사이드에서 현재 도메인 사용
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  
  // 서버 사이드 폴백
  return 'http://localhost:3000';
};