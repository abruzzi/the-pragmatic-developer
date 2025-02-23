import {delay, http, HttpResponse} from "msw";
import {dbTable} from "./langs.ts";
import {posts, users} from "./users.ts";

const generateMockResults = (query: string) => {
  if (!query) return [];

  return dbTable.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
};

export const handlers = [
  http.get('/api/users/:id', async (res) => {
    const id = res.params.id;

    const user = users.find(user => user.id === id);

    await delay(2000);
    return HttpResponse.json(user);
  }),

  http.get('/api/users/:id/friends', async (res) => {
    const id = res.params.id;

    const user = users.find(user => user.id === id);

    await delay(3000);

    if(user?.friends) {
      const friends = users.filter(u => user.friends.includes(u.id));
      return HttpResponse.json(friends);
    }

    return HttpResponse.json([]);
  }),

  http.get('/api/posts', async () => {
    await delay(3000);
    return HttpResponse.json(posts);
  }),

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


