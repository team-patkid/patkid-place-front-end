import { useCallback, useMemo } from "react";
import { Mbti, MbtiCount } from "@/models/mbti";

export const useMBTI = () => {
  const calculateMBTI = useCallback((mbtiList: Mbti): string => {
    const mbtiCount: MbtiCount = {
      EI: { E: 0, I: 0 },
      NS: { N: 0, S: 0 },
      FT: { F: 0, T: 0 },
      PJ: { P: 0, J: 0 },
    };

    // 함수형 접근: reduce를 사용하여 카운트 계산
    Object.entries(mbtiList).forEach(([type, values]) => {
      values.forEach(value => {
        const mbtiType = type as keyof Mbti;
        const key = value as keyof typeof mbtiCount[typeof mbtiType];
        mbtiCount[mbtiType][key] += 1;
      });
    });

    // 함수형 접근: map과 reduce를 조합하여 결과 문자열 생성
    return Object.values(mbtiCount)
      .map(typeCount => 
        Object.keys(typeCount).reduce((a, b) => 
          typeCount[a as keyof typeof typeCount] > typeCount[b as keyof typeof typeCount] ? a : b
        )
      )
      .join("");
  }, []);

  const addMBTIChoice = useCallback((
    prevMbti: Mbti, 
    type: keyof Mbti, 
    choice: string
  ): Mbti => ({
    ...prevMbti,
    [type]: [...prevMbti[type], choice],
  }), []);

  return {
    calculateMBTI,
    addMBTIChoice,
  };
};