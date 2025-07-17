// Google Analytics 설정
export const GA_MEASUREMENT_ID = 'G-XKHSKJYP00';

// gtag 함수 타입 정의
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// 페이지뷰 추적
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// 이벤트 추적
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// PATKID 전용 이벤트 추적 함수들
export const trackMBTIStart = () => {
  event({
    action: 'mbti_test_start',
    category: 'engagement',
    label: 'MBTI 테스트 시작',
  });
};

export const trackQuestionAnswer = (questionNumber: number, answer: string) => {
  event({
    action: 'question_answered',
    category: 'engagement',
    label: `질문 ${questionNumber}: ${answer}`,
    value: questionNumber,
  });
};

export const trackMBTIResult = (mbtiType: string) => {
  event({
    action: 'mbti_result_viewed',
    category: 'conversion',
    label: `MBTI 결과: ${mbtiType}`,
  });
};

export const trackPlaceRecommendation = (placeName: string, mbtiType: string) => {
  event({
    action: 'place_recommendation_viewed',
    category: 'conversion',
    label: `${mbtiType} -> ${placeName}`,
  });
};

export const trackShare = (platform: string, mbtiType: string) => {
  event({
    action: 'result_shared',
    category: 'engagement',
    label: `${platform}: ${mbtiType}`,
  });
};

export const trackVisitPlace = (placeName: string) => {
  event({
    action: 'visit_place_clicked',
    category: 'engagement',
    label: placeName,
  });
};