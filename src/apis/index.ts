import axios, { AxiosResponse } from "axios";

export const getBaseURL = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'https://api.patkid.xyz/';
  }
  return 'http://host.docker.internal:8001/';
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

export const getTotalVistorCount = (): Promise<AxiosResponse<VisitorCountResponse>> => 
  api.get("v1/user/total-count");

export const postMBTIResult = (mbti: string): Promise<AxiosResponse<{ data: ResultResponse }>> =>
  api.post("v1/user/result", {
    mbti,
  });

export const getQuestionList = (): Promise<AxiosResponse<QuestionResponse>> =>
  api.get("v1/question/list");
