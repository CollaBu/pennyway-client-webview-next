import { IFeed } from '@/entities/feed';
import { ICommonSearchData } from '@/shared/types';
//피드 검색
export interface ISearchFeedResDTO {
  feed: ICommonSearchData<IFeed[]>;
}
