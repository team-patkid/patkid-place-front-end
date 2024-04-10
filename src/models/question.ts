import { Mbti } from "./mbti";

export type QuestionResponse = {
  data: {
    total: number;
    list: Array<Question>;
  };
};

export type Question = {
  id: number;
  content: string;
  type: string;
  sort: 11;
  questionSub: Array<QuestionSub>;
};

export type QuestionSub = {
  id: number;
  questionId: number;
  type: keyof Mbti;
  content: string;
};
