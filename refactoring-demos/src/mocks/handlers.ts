import { http, HttpResponse } from "msw";

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
];
