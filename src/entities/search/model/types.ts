import { IFeed } from '@/entities/feed';
import { IUser } from '@/entities/user';

//피드 검색
export interface ISearchFeedResDTO extends ISearchCommonResDTO {
  contents: IFeed;
}

//유저 검색
export interface ISearchUserResDTO extends ISearchCommonResDTO {
  contents: IUser;
}

export interface ISearchCommonResDTO {
  currentPageNumber: number;
  pageSize: number;
  numberOfElements: number;
  hasNextPage: boolean;
}
