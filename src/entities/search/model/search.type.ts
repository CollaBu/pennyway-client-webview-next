import { IFeed } from '@/entities/feed';
import { IUser } from '@/entities/user';

//피드 검색
export interface ISearchFeedResDTO {
  feed: ICommonSearchData<IFeed[]>;
}

//유저 검색
export interface ISearchUserResDTO {
  user: ICommonSearchData<IUser[]>;
}

export interface ICommonSearchData<T> {
  contents: T;
  currentPageNumber: number;
  pageSize: number;
  numberOfElements: number;
  hasNextPage: boolean;
}
