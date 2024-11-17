import { http } from 'msw';

import {
  ICancelHideFeedParamsDTO,
  ICancelHideResDTO,
  IHideFeedParamsDTO,
  IHideFeedResDTO,
} from '@/entities/hide';

import { feedMockData } from '../data';
import { createHttpErrorResponse, createHttpSuccessResponse } from '../lib';

export const feedHandlers = [
  // 1️⃣ 피드 숨기기
  http.put<IHideFeedParamsDTO>(
    'http://api.example.com/v2/feeds/:feedId/hides',
    async ({ params }) => {
      const { feedId } = params;

      if (!feedId) {
        return createHttpErrorResponse('피드 ID가 입력되어야 합니다.');
      }

      feedMockData.forEach((cur) => {
        if (cur.id === +feedId) cur.isBlinded = true;
      });

      return createHttpSuccessResponse<IHideFeedResDTO>({
        isHidden: true,
      });
    },
  ),

  // 2️⃣ 피드 숨기기 취소
  http.delete<ICancelHideFeedParamsDTO>(
    'http://api.example.com/v2/feeds/:feedId/hides',
    async ({ params }) => {
      const { feedId } = params;

      if (!feedId) {
        return createHttpErrorResponse('피드 ID가 입력되어야 합니다.');
      }

      feedMockData.forEach((cur) => {
        if (cur.id === +feedId) cur.isBlinded = false;
      });

      return createHttpSuccessResponse<ICancelHideResDTO>({
        isHidden: false,
      });
    },
  ),
];
