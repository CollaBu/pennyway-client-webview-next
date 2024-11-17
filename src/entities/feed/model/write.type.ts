import { TFeedScope } from './common.type';

// 피드 작성
export type TWriteFeedReqDTO = IFeedEditCommonDTO;

// 피드 수정
export type TModifyFeedReqDTO = IFeedEditCommonDTO;

export interface IFeedEditCommonDTO {
  content: string;
  images: string[];
  scope: TFeedScope;
}
