export type UserType = {
  id: string;
  name: string;
};

export type CardType = {
  id: string;
  title: string;
  assignee: UserType;
};

export type ColumnType = {
  id: string;
  name: string;
  cards: CardType[];
};

export type BoardType = {
  name: string;
  columns: ColumnType[];
};

export type NormalizedBoardType = {
  board: {
    name: string;
    columnIds: string[];
  };
  columns: Record<string, { id: string; name: string; cardIds: string[] }>;
  cards: Record<string, { id: string; title: string; assigneeId: string }>;
  users: Record<string, UserType>;
};
