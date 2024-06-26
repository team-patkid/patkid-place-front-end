import axios from "axios";

const api = axios.create({
  baseURL: "https://place-api.patkid.kr/",
});

export const getTotalVistorCount = () => api.get("v1/user/total-count");

export const postMBTIResult = (mbti: string) =>
  api.post("v1/user/result", {
    mbti,
  });
