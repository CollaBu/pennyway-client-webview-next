export interface IReportFeedParamsDTO {
  feedId: string;
}
export interface IReportFeedReqDTO {
  category: string;
  content: string;
  isBlind: boolean;
}

export interface IReportFeedResDTO {
  isReported: boolean;
}
