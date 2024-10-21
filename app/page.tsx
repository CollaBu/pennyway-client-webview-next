export type User = {
  firstName: string;
  lastName: string;
};

async function getUser() {
  const response = await fetch('https://example.com/user');
  const user = (await response.json()) as User;
  return user;
}

export default async function Home() {
  const user = await getUser();

  return <div className=" text-h1b">Hello {user.firstName}</div>;
}
