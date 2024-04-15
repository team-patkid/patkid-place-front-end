export interface Tag {
  tagId: number;
  tag: string;
  type: string;
}

export interface Place {
  placeId: number;
  name: string;
  naverUrl: string;
  x: number;
  y: number;
  imageUrl: string;
  content: string;
  tags: Array<Tag>;
}
