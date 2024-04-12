export type Tag = {
  tagId: number;
  tag: string;
  type: string;
};

export type Place = {
  placeId: number;
  name: string;
  naverUrl: string;
  content: string;
  imageUrl: string;
  x: number;
  y: number;
  tags: Tag[];
};

export type Result = {
  userId: string;
  name: string;
  place: Place;
};

export type ResultResponse = {
  result: Result;
  hotPlace: Place[];
};
