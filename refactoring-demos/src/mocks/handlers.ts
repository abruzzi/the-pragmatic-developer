import {delay, http, HttpResponse} from "msw";

const dbTable = [
    { "id": 1, "name": "Java", "description": "A high-level, class-based, object-oriented programming language used for enterprise applications." },
    { "id": 2, "name": "JavaScript", "description": "A lightweight, interpreted programming language commonly used for web development and frontend applications." },
    { "id": 3, "name": "C", "description": "A powerful, low-level language that serves as the foundation for many modern programming languages." },
    { "id": 4, "name": "C++", "description": "An extension of C with object-oriented features, used in game development, systems programming, and high-performance applications." },
    { "id": 5, "name": "C#", "description": "A modern, object-oriented language developed by Microsoft, widely used for .NET applications and game development with Unity." },
    { "id": 6, "name": "Python", "description": "A versatile, high-level programming language known for its simplicity and readability, widely used in data science, web development, and AI." },
    { "id": 7, "name": "Go", "description": "A statically typed, compiled language designed at Google, known for its simplicity and efficiency in building scalable applications." },
    { "id": 8, "name": "Swift", "description": "A modern programming language developed by Apple, optimized for performance and safety in iOS and macOS applications." },
    { "id": 9, "name": "Ruby", "description": "A dynamic, interpreted language popular for web development, particularly with the Ruby on Rails framework." },
    { "id": 10, "name": "Rust", "description": "A systems programming language focused on safety and concurrency, widely used for high-performance applications." },
    { "id": 11, "name": "Kotlin", "description": "A statically typed language that runs on the JVM, officially supported for Android development." },
    { "id": 12, "name": "TypeScript", "description": "A superset of JavaScript that adds static typing, improving scalability and maintainability for large applications." }
  ];

const generateMockResults = (query: string) => {
  if (!query) return [];

  return dbTable.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
};

export const handlers = [
  http.get("/rest/approval/:id", (res) => {
    const id = res.params.id;

    if(id === 'completed-approval') {
      return HttpResponse.json({ id, isDone: true });
    } else {
      return HttpResponse.json({ id, isDone: false });
    }
  }),

  http.post("/rest/approval/:id/approve", (res) => {
    const id = res.params.id;
    return HttpResponse.json({ id, isDone: true });
  }),

  http.post("/rest/approval/:id/decline", (res) => {
    const id = res.params.id;
    return HttpResponse.json({ id, isDone: true });
  }),

  http.get('/api/search', async ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('q')?.toLowerCase() || '';

    await delay(query === 'java' ? 2000 : 200);

    return HttpResponse.json(generateMockResults(query));
  })
];


