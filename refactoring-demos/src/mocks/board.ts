export const board = {
  name: "Being awesome",
  columns: [
    {
      id: "col-1",
      name: "Todo",
      cards: [
        {
          id: "card-1",
          title: "Fix chrome layout bug",
          assignee: { id: "u1", name: "Juntao" },
        },
        {
          id: "card-2",
          title: "Introduce eslint",
          assignee: { id: "u2", name: "Kakie" },
        },
      ],
    },
    {
      id: "col-2",
      name: "In progress",
      cards: [],
    },
    {
      id: "col-3",
      name: "Done",
      cards: [
        {
          id: "card-3",
          title: "Deploy to staging",
          assignee: { id: "u1", name: "Juntao" },
        },
      ],
    },
  ],
};