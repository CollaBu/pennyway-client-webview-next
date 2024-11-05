import { http } from 'msw';

import { feedMockData } from '../data';
import { createHttpErrorResponse, createHttpSuccessResponse } from '../lib';
interface IReportFeedReqDto {
  category: string;
  content: string;
  isBlind: boolean;
}
export const feedHandlers = [
  http.post('http://api.example.com/v2/feeds/:feedId/reports', async ({ request, params }) => {
    const { feedId } = params;

    const { category, isBlind } = (await request.json()) as IReportFeedReqDto;

    if (!feedId || !category) {
      return createHttpErrorResponse('피드 ID, 신고 카테고리가 필수로 입력되어야 합니다.');
    }

    if (isBlind) {
      feedMockData.forEach((cur) => {
        if (cur.id === +feedId) {
          cur.isBlinded = true;
        }
      });
    }

    return createHttpSuccessResponse({
      isReported: true,
    });
  }),
];
