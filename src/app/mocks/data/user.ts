interface IUser {
  id: number;
  profileImage: string;
  username: string;
}

function generateRandomUsername(id: number) {
  const prefixes = ['user', 'player', 'guest', 'member', 'star'];
  return prefixes[Math.floor(Math.random() * prefixes.length)] + id;
}

function generateUserMockData(count: number) {
  const mockUsers: IUser[] = [];

  for (let id = 1; id <= count; id++) {
    const user = {
      id,
      profileImage: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${id - 1}.jpg`,
      username: generateRandomUsername(id),
    };

    mockUsers.push(user);
  }

  return mockUsers;
}

export const userMockData = generateUserMockData(100);
