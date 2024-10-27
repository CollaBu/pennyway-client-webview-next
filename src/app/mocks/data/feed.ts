interface IImage {
  id: number;
  imageUrl: string;
}

interface IFeed {
  id: number;

  user: {
    id: number;
    profileImage: string;
    username: string;
  };

  content: string;
  images: IImage[];

  likeCount: number;
  commentCount: number;

  isLiked: boolean;
  isBookmarked: boolean;

  createdAt: string;
  updatedAt: string;
}

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
      user: {
        id: id,
        profileImage: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${id}.jpg`,
        username: `user_${id}`,
      },
      content: generateRandomContent(Math.floor(Math.random() * 300)),
      images: generateRandomImages(),
      likeCount: Math.floor(Math.random() * 1000),
      commentCount: Math.floor(Math.random() * 500),
      isLiked: Math.random() < 0.5,
      isBookmarked: Math.random() < 0.5,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    mockFeeds.push(feed);
  }

  return mockFeeds;
}

export const feedMockData = generateFeedMockData(100);
