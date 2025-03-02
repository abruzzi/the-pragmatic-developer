export type User = {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  friends: User[];
};

export type Post = {
  id: string;
  author: string;
  summary: string;
};
