import { Place } from "./place";

export type Result = {
  userId: string;
  name: string;
  place: Place;
};

export type ResultResponse = {
  result: Result;
  hotPlace: Place[];
};
