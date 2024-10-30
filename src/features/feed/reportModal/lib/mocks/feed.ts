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
  isBlinded: boolean;

  createdAt: string;
  updatedAt: string;
}

interface IImage {
  id: number;
  imageUrl: string;
}

export function blindFeed(feeds: IFeed[], feedId: number) {
  return feeds.map((feed) => {
    if (feedId === feed.id) {
      feed.isBlinded = true;
    }
    return feed;
  });
}
