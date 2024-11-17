import { IUser } from '@/entities/user';
import { IImage } from '@/shared/types';

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

export type TFeedScope = 'public' | 'friends' | 'private';
