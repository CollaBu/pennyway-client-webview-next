import { IUser } from '@/entities/user/model/type';
import { IImage } from '@/shared/types/image';

export interface IFeed {
  id: number;
  user: IUser;

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
