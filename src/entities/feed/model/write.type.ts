import { TFeedScope } from './common.type';

export interface IWriteFeedReqDTO {
  content: string;
  images: string[];
  scope: TFeedScope;
}
