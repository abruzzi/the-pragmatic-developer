export type User = {
  name: string;
  avatar: string;
  bio: string;
  friends: User[];
};

export type Post = {
  author: string;
  summary: string;
};
