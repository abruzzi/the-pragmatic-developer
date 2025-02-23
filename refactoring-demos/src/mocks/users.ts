export type User = {
    id: string;
    name: string;
    avatar: string;
    bio: string;
    friends: string[];
};

export type Post = {
    id: string;
    author: string;
    summary: string;
};

export const users: User[] = [
    {
        id: "u1",
        name: "Juntao Qiu",
        bio: "I share in-depth insights and practical tutorials in books, courses and videos.",
        avatar:
            "https://www.icodeit.com.au/_next/image?url=%2Fjuntao.qiu.avatar.png&w=256&q=75",
        friends: ["u2", "u3", "u4"],
    },
    {
        id: "u2",
        name: "Ava Martinez",
        avatar: "https://randomuser.me/api/portraits/men/50.jpg",
        bio: "Backend developer with a knack for optimizing database performance.",
        friends: [],
    },
    {
        id: "u2",
        name: "Liam Johnson",
        avatar: "https://randomuser.me/api/portraits/men/60.jpg",
        bio: "DevOps engineer passionate about automation and infrastructure as code.",
        friends: [],
    },
    {
        id: "u3",
        name: "Sophia Brown",
        avatar: "https://randomuser.me/api/portraits/women/70.jpg",
        bio: "Full-stack developer who enjoys creating seamless integrations between frontend and backend.",
        friends: [],
    },
];

export const posts: Post[] = [
    {
        id: "p1",
        author: "John Doe",
        summary:
            "Exploring the benefits of TypeScript in modern web development. Learn how TypeScript can improve code quality and maintainability.",
    },
    {
        id: "p2",
        author: "Jane Smith",
        summary:
            "A deep dive into React hooks. Understand how hooks can simplify your component logic and enhance reusability.",
    },
    {
        id: "p3",
        author: "Alice Johnson",
        summary:
            "An introduction to the Headless Component pattern. Discover how this pattern can help you create flexible and reusable UI components.",
    }
];
