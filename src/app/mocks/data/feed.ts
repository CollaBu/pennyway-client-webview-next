import { IFeed } from '@/entities/feed';
import { IImage } from '@/shared/types/image';

import { userMockData } from './user';

function generateRandomContent(length: number) {
  const words = 'Lorem ipsum dolor sit amet consectetur adipiscing elit'.split(' ');
  let content = '';

  for (let i = 0; i < length; i++) {
    content += words[Math.floor(Math.random() * words.length)] + ' ';
  }

  return content.trim();
}

function generateRandomImages() {
  const imageCount = Math.floor(Math.random() * 4);
  const images: IImage[] = [];

  for (let id = 1; id <= imageCount; id++) {
    images.push({
      id,
      imageUrl: `https://picsum.photos/id/${id}/200/300`,
    });
  }

  return images;
}

function generateFeedMockData(count: number) {
  const mockFeeds: IFeed[] = [];

  for (let id = 1; id <= count; id++) {
    const feed = {
      id,
      user: userMockData[id - 1],
      content: generateRandomContent(Math.floor(Math.random() * 300)),
      images: generateRandomImages(),
      likeCount: Math.floor(Math.random() * 1000),
      commentCount: Math.floor(Math.random() * 500),
      isLiked: Math.random() < 0.5,
      isBookmarked: Math.random() < 0.5,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isBlinded: false,
    };

    mockFeeds.push(feed);
  }

  return mockFeeds;
}

export const feedMockData = generateFeedMockData(100);
