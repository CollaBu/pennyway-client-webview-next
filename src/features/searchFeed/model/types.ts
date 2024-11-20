import { IFeed } from '@/entities/feed';
import { IScrollablePage } from '@/shared/types';

//피드 검색
export interface ISearchFeedResDTO {
  feed: IScrollablePage<IFeed[]>;
}
