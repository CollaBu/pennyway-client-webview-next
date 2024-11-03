export interface IReportFeedReqDTO {
  category: string;
  content: string;
  isBlind: boolean;
}

export interface IWriteFeedReqDTO {
  content: string;
  images: string[];
  scope: TFeedScope;
}

export type TFeedScope = 'public' | 'friends' | 'private';
