import { IFeed } from '@/entities/feed';
import { IUser } from '@/entities/user';
import { ICommonSearchData } from '@/shared/types';

//피드 검색
export interface ISearchFeedResDTO {
  feed: ICommonSearchData<IFeed[]>;
}

//유저 검색
export interface ISearchUserResDTO {
  user: ICommonSearchData<IUser[]>;
}
