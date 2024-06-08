import UserDashboard from "./before/UserDashboard.tsx";
import { Post, User } from "./types.ts";

const posts: Post[] = [
  {
    author: "John Doe",
    summary:
      "Exploring the benefits of TypeScript in modern web development. Learn how TypeScript can improve code quality and maintainability.",
  },
  {
    author: "Jane Smith",
    summary:
      "A deep dive into React hooks. Understand how hooks can simplify your component logic and enhance reusability.",
  },
  {
    author: "Alice Johnson",
    summary:
      "An introduction to the Headless Component pattern. Discover how this pattern can help you create flexible and reusable UI components.",
  }
];

const friends: User[] = [
  {
    name: "Ava Martinez",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    bio: "Backend developer with a knack for optimizing database performance.",
    friends: [],
  },
  {
    name: "Liam Johnson",
    avatar: "https://randomuser.me/api/portraits/men/60.jpg",
    bio: "DevOps engineer passionate about automation and infrastructure as code.",
    friends: [],
  },
  {
    name: "Sophia Brown",
    avatar: "https://randomuser.me/api/portraits/women/70.jpg",
    bio: "Full-stack developer who enjoys creating seamless integrations between frontend and backend.",
    friends: [],
  },
];

const user: User = {
  name: "Juntao Qiu",
  bio: "I share in-depth insights and practical tutorials in books, courses and videos.",
  avatar:
    "https://www.icodeit.com.au/_next/image?url=%2Fjuntao.qiu.avatar.png&w=256&q=75",
  friends: friends,
};

const UserDashboardDemo = () => {
  return <UserDashboard user={user} posts={posts} />;
};

export { UserDashboardDemo };
