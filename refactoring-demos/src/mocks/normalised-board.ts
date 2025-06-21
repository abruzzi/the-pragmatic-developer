export const normalisedBoard = {
  board: {
    name: "Being awesome",
    columnIds: ["col-1", "col-2", "col-3"],
  },
  columns: {
    "col-1": {
      id: "col-1",
      name: "Todo",
      cardIds: ["card-1", "card-2"],
    },
    "col-2": {
      id: "col-2",
      name: "In progress",
      cardIds: [],
    },
    "col-3": {
      id: "col-3",
      name: "Done",
      cardIds: ["card-3"],
    },
  },
  cards: {
    "card-1": {
      id: "card-1",
      title: "Fix chrome layout bug",
      assigneeId: "u1",
    },
    "card-2": {
      id: "card-2",
      title: "Introduce eslint",
      assigneeId: "u2",
    },
    "card-3": {
      id: "card-3",
      title: "Deploy to staging",
      assigneeId: "u1",
    },
  },
  users: {
    u1: {
      id: "u1",
      name: "Juntao",
    },
    u2: {
      id: "u2",
      name: "Kakie",
    },
  },
};
