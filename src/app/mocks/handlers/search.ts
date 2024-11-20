import Fuse from 'fuse.js';
import { http } from 'msw';

import { ISearchFeedResDTO } from '@/features/searchFeed';
import { ISearchUserResDTO } from '@/features/searchUser';

import { feedMockData, userMockData } from '../data';
import { createHttpErrorResponse, createHttpSuccessResponse } from '../lib';

export const searchHandlers = [
  // 1️⃣ 피드 검색
  http.get('http://api.example.com/v2/feeds', ({ request }) => {
    const url = new URL(request.url);

    const target = url.searchParams.get('target');
    const page = Number(url.searchParams.get('page') || 1);
    const size = Number(url.searchParams.get('size') || 15);

    if (!target || target.length < 2) {
      return createHttpErrorResponse('검색어는 최소 2글자 이상이어야 합니다');
    }

    const fuse = new Fuse(feedMockData, {
      keys: ['content', 'user.username'],
    });

    const contents = fuse
      .search(target)
      .map((result) => result.item)
      .slice((page - 1) * size, page * size);
    const totalFeeds = contents.length;
    const hasNextPage = totalFeeds > page * size;

    return createHttpSuccessResponse<ISearchFeedResDTO>({
      feed: {
        contents,
        currentPageNumber: page,
        pageSize: size,
        numberOfElements: contents.length,
        hasNextPage,
      },
    });
  }),

  // 2️⃣ 사용자 검색
  http.get('http://api.example.com/v2/users', ({ request }) => {
    const url = new URL(request.url);

    const target = url.searchParams.get('target');
    const page = Number(url.searchParams.get('page') || 1);
    const size = Number(url.searchParams.get('size') || 15);

    if (!target || target.length < 2) {
      return createHttpErrorResponse('검색어는 최소 2글자 이상이어야 합니다');
    }

    const fuse = new Fuse(userMockData, {
      keys: ['username'],
    });

    const contents = fuse
      .search(target)
      .map((result) => result.item)
      .slice((page - 1) * size, page * size);
    const totalFeeds = contents.length;
    const hasNextPage = totalFeeds > page * size;

    return createHttpSuccessResponse<ISearchUserResDTO>({
      user: {
        contents,
        currentPageNumber: page,
        pageSize: size,
        numberOfElements: contents.length,
        hasNextPage,
      },
    });
  }),
];
