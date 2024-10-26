import Fuse from 'fuse.js';
import { http } from 'msw';

import { feedMockData } from '../data';
import { createHttpErrorResponse, createHttpSuccessResponse } from '../lib';

export const searchHandlers = [
  http.get('http://api.example.com/v2/feeds', ({ request }) => {
    const url = new URL(request.url);

    const query = url.searchParams.get('query');
    const page = Number(url.searchParams.get('page') || 1);
    const size = Number(url.searchParams.get('size') || 15);

    if (!query || query.length < 2) {
      return createHttpErrorResponse('검색어는 최소 2글자 이상이어야 합니다');
    }

    const fuse = new Fuse(feedMockData, {
      keys: ['content', 'user.username'],
    });

    const contents = fuse
      .search(query)
      .map((result) => result.item)
      .slice((page - 1) * size, page * size);
    const totalFeeds = contents.length;
    const hasNextPage = totalFeeds > page * size;

    return createHttpSuccessResponse({
      feed: {
        contents,
        currentPageNumber: page,
        pageSize: size,
        numberOfElements: contents.length,
        hasNextPage,
      },
    });
  }),
];
