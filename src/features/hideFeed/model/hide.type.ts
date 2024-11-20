// 피드 숨기기
export interface IHideFeedParamsDTO {
  feedId: string;
}
export interface IHideFeedResDTO {
  isHidden: boolean;
}

// 피드 숨기기 취소
export interface ICancelHideFeedParamsDTO {
  feedId: string;
}
export interface ICancelHideResDTO {
  isHidden: boolean;
}
