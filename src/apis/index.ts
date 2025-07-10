import { ResultResponse } from "../models/result";
import { QuestionResponse } from "../models/question";

export const getBaseURL = () => {
  // 환경 변수에서 API 베이스 URL 가져오기
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  
  if (apiBaseUrl) {
    return apiBaseUrl + "/";
  }
  
  // 폴백: 기존 개발 환경 URL
  return "http://host.docker.internal:8001/";
};

const apiRequest = async <T>(endpoint: string, options?: RequestInit): Promise<{ data: T }> => {
  const response = await fetch(`${getBaseURL()}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
};

interface VisitorCountData {
  data: {
    count: number;
  };
}

export const getTotalVistorCount = (): Promise<{ data: VisitorCountData }> =>
  apiRequest<VisitorCountData>("v1/user/total-count");

export const postMBTIResult = (mbti: string): Promise<{ data: ResultResponse }> =>
  apiRequest<ResultResponse>("v1/user/result", {
    method: "POST",
    body: JSON.stringify({ mbti }),
  });

export const getQuestionList = (): Promise<{ data: QuestionResponse }> =>
  apiRequest<QuestionResponse>("v1/question/list");
