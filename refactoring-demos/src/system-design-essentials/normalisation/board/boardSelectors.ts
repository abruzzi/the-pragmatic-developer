import { RootState } from "../../../store.ts"; // or wherever your root state type is

// Select the entire board state
export const selectBoardState = (state: RootState) => state.board

// Select board metadata (name, columnIds)
export const selectBoard = (state: RootState) => selectBoardState(state).board;

// Select a column by ID
export const selectColumnById = (state: RootState, columnId: string) =>
  selectBoardState(state).columns[columnId];

// Select a card by ID
export const selectCardById = (state: RootState, cardId: string) =>
  selectBoardState(state).cards[cardId];

// Select a user by ID
export const selectUserById = (state: RootState, userId: string) =>
  selectBoardState(state).users[userId];

// (Optional) Select all cards in a column (derived)
export const selectCardsByColumnId = (state: RootState, columnId: string) => {
  const column = selectColumnById(state, columnId);
  return column.cardIds.map((cardId) => selectCardById(state, cardId));
};