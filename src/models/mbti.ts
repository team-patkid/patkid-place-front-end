export type Mbti = {
  EI: Array<string>;
  NS: Array<string>;
  FT: Array<string>;
  PJ: Array<string>;
};

export type MbtiCount = {
  EI: { [value: string]: number };
  NS: { [value: string]: number };
  FT: { [value: string]: number };
  PJ: { [value: string]: number };
};
