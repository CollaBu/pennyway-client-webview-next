import { http } from 'msw';

import { createHttpErrorResponse, createHttpSuccessResponse } from '../lib';

interface IReportFeedReqDto {
  category: string;
  content: string;
  isBlind: boolean;
}
export const feedHandlers = [
  http.post('http://api.example.com/v2/feeds/:feedId/reports', async ({ request, params }) => {
    const { feedId } = params;

    const { category, content } = (await request.json()) as IReportFeedReqDto;

    if (!feedId || !category || !content) {
      return createHttpErrorResponse('피드 ID, 신고 카테고리, 컨텐츠가 다 입력되어야 합니다.');
    }

    return createHttpSuccessResponse({
      isReported: true,
    });
  }),
];
