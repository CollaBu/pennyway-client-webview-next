export interface IScrollablePage<T> {
  contents: T;
  currentPageNumber: number;
  pageSize: number;
  numberOfElements: number;
  hasNextPage: boolean;
}
