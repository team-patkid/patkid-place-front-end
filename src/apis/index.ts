import axios, { AxiosResponse } from "axios";

export const getBaseURL = () => {
  // 환경 변수에서 API 베이스 URL 가져오기
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  
  if (apiBaseUrl) {
    return apiBaseUrl + "/";
  }
  
  // 폴백: 기존 개발 환경 URL
  return "http://host.docker.internal:8001/";
};

const api = axios.create({
  baseURL: getBaseURL(),
});

interface VisitorCountResponse {
  data: {
    count: number;
  };
}

import { ResultResponse } from "../models/result";
import { QuestionResponse } from "../models/question";

export const getTotalVistorCount = (): Promise<
  AxiosResponse<VisitorCountResponse>
> => api.get("v1/user/total-count");

export const postMBTIResult = (
  mbti: string,
): Promise<AxiosResponse<{ data: ResultResponse }>> =>
  api.post("v1/user/result", {
    mbti,
  });

export const getQuestionList = (): Promise<AxiosResponse<QuestionResponse>> =>
  api.get("v1/question/list");
