// 피드 신고
export interface IReportFeedParamsDTO {
  feedId: string;
}
export interface IReportFeedReqDTO {
  category: string;
  content: string;
  isBlind: boolean;
}

export interface IReportFeedResDTO {
  isReported: boolean;
}

// 피드 작성
export type TWriteFeedReqDTO = IFeedEditCommonDTO;

// 피드 수정
export type TModifyFeedReqDTO = IFeedEditCommonDTO;

// common types...
export type TFeedScope = 'public' | 'friends' | 'private';
export interface IFeedEditCommonDTO {
  content: string;
  images: string[];
  scope: TFeedScope;
}
export interface IFeed {
  id: number;

  user: {
    id: number;
    profileImage: string;
    username: string;
  };

  content: string;
  images: IImage[];

  likeCount: number;
  commentCount: number;

  isLiked: boolean;
  isBookmarked: boolean;
  isBlinded: boolean;

  createdAt: string;
  updatedAt: string;
}

export interface IImage {
  id: number;
  imageUrl: string;
}
