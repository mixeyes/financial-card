export type IRatings = Record<string, IRatingItem>;

export interface IRatingItem {
  rating: string;
  score: number;
}

export interface IRatingData {
  rating: string;
  score: number;
  source: string;
}
