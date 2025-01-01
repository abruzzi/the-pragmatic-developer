import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/rest/approval/:id/approve", (res) => {
    const id = res.params.id;
    return HttpResponse.json({ id, isDone: true });
  }),

  http.post("/rest/approval/:id/decline", (res) => {
    const id = res.params.id;
    return HttpResponse.json({ id, isDone: true });
  }),
];
