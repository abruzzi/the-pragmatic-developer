import { BoardType, NormalizedBoardType } from "./types.tsx";

export const normalizeBoard = (input: BoardType): NormalizedBoardType => {
  const columns: NormalizedBoardType["columns"] = {};
  const cards: NormalizedBoardType["cards"] = {};
  const users: NormalizedBoardType["users"] = {};

  for (const col of input.columns) {
    const cardIds: string[] = [];

    for (const card of col.cards) {
      // Add user if not already added
      users[card.assignee.id] = card.assignee;

      // Normalize card
      cards[card.id] = {
        id: card.id,
        title: card.title,
        assigneeId: card.assignee.id,
      };

      cardIds.push(card.id);
    }

    // Normalize column
    columns[col.id] = {
      id: col.id,
      name: col.name,
      cardIds,
    };
  }

  return {
    board: {
      name: input.name,
      columnIds: input.columns.map((col) => col.id),
    },
    columns,
    cards,
    users,
  };
};