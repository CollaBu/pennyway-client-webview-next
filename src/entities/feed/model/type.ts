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
