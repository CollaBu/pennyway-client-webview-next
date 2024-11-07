import { http } from 'msw';

import { IReportFeedReqDTO, IWriteFeedReqDTO } from '@/entities/feed';

import { feedMockData } from '../data';
import { createHttpErrorResponse, createHttpSuccessResponse } from '../lib';

export const feedHandlers = [
  // 1️⃣ 피드 신고
  http.post('http://api.example.com/v2/feeds/:feedId/reports', async ({ request, params }) => {
    const { feedId } = params;

    const { category, isBlind } = (await request.json()) as IReportFeedReqDTO;

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

  // 2️⃣ 피드 작성
  http.post('http://api.example.com/v2/feeds', async ({ request }) => {
    const { content, images, scope } = (await request.json()) as IWriteFeedReqDTO;

    if (!content) {
      return createHttpErrorResponse('피드 등록을 위해 컨텐츠를 작성해야 합니다.');
    } else if (!scope) {
      return createHttpErrorResponse('피드 등록을 위해 공개 범위를 설정해야 합니다.');
    }

    feedMockData.push({
      id: feedMockData.length + 1,
      user: { ...feedMockData[feedMockData.length - 1].user },
      content,
      images: images.map((url, index) => ({ id: index + 1, imageUrl: url })),
      likeCount: 0,
      commentCount: 0,
      isLiked: false,
      isBookmarked: false,
      isBlinded: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return createHttpSuccessResponse({});
  }),

  // 3️⃣ 피드 수정
  http.put('http://api.example.com/v2/feeds/:feedId', async ({ request, params }) => {
    const { feedId } = params;

    const { content, images, scope } = (await request.json()) as IWriteFeedReqDTO;

    if (!content) {
      return createHttpErrorResponse('피드 수정을 위해 컨텐츠를 작성해야 합니다.');
    } else if (!scope) {
      return createHttpErrorResponse('피드 수정을 위해 공개 범위를 설정해야 합니다.');
    }

    feedMockData.forEach((feed) => {
      const numFeedId = +feedId;
      if (feed.id === numFeedId) {
        feedMockData[numFeedId] = {
          ...feedMockData[numFeedId],
          content,
          images: images.map((url, index) => ({ id: index + 1, imageUrl: url })),
          updatedAt: new Date().toISOString(),
        };
      }
    });

    return createHttpSuccessResponse({});
  }),
];
