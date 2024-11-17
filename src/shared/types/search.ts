export interface ICommonSearchData<T> {
  contents: T;
  currentPageNumber: number;
  pageSize: number;
  numberOfElements: number;
  hasNextPage: boolean;
}
