// 이미지 관련 유틸리티 함수들
export const getImageAlt = (src: string, context?: string): string => {
  const altMap: Record<string, string> = {
    // 로고 및 브랜딩
    'logo_patKid.webp': 'PatKid 로고',
    'title.svg': '제목 이미지',
    
    // UI 요소들
    'close_btn.webp': '닫기 버튼',
    'restart_btn.webp': '다시 시작 버튼',
    'share_btn.webp': '공유하기 버튼',
    'share_button2.webp': '공유하기 버튼',
    'start_btn.webp': '시작하기 버튼',
    'start_btn_click.webp': '시작하기 버튼 (클릭)',
    'visit.webp': '방문하기 버튼',
    'visit_click.webp': '방문하기 버튼 (클릭)',
    
    // 배경 이미지들
    'background_h_1.webp': '배경 이미지',
    'background_h_2.webp': '질문 페이지 배경',
    'background_h_3.webp': '로딩 페이지 배경',
    'questions.webp': '질문 배경',
    'modal_box.webp': '모달 배경',
    
    // 아이콘들
    'location.webp': '위치 아이콘',
    'hotspot.webp': '핫스팟 아이콘',
    'progress_heart.webp': '진행률 하트',
    'heart_1.webp': '하트 아이콘',
    'heart_2.webp': '하트 아이콘',
    
    // 데코레이션
    'coffee.webp': '커피 아이콘',
    'music.webp': '음악 아이콘',
    'cake.webp': '케이크 아이콘',
    'book.webp': '책 아이콘',
    
    // 로딩 관련
    'loding.webp': '로딩 하트',
    'loding_text.webp': '로딩 텍스트',
  };

  const fileName = src.split('/').pop() || src;
  return altMap[fileName] || (context ? `${context} 이미지` : '이미지');
};

export const getImageDimensions = (src: string): { width: number; height: number } => {
  const dimensionMap: Record<string, { width: number; height: number }> = {
    'background_h_1.webp': { width: 500, height: 1081 },
    'background_h_2.webp': { width: 500, height: 1081 },
    'background_h_3.webp': { width: 500, height: 1081 },
    'questions.webp': { width: 467, height: 492 },
    'modal_box.webp': { width: 467, height: 821 },
    'start_btn.webp': { width: 312, height: 87 },
    'restart_btn.webp': { width: 90, height: 67 },
    'share_btn.webp': { width: 344, height: 67 },
    'close_btn.webp': { width: 33, height: 33 },
  };

  const fileName = src.split('/').pop() || src;
  return dimensionMap[fileName] || { width: 100, height: 100 };
};