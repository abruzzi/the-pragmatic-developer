import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { NormalizedBoardType } from "../types.tsx";

const initialState: NormalizedBoardType = {
  board: {
    name: "",
    columnIds: [],
  },
  columns: {},
  cards: {},
  users: {},
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    initialise: (state, action: PayloadAction<NormalizedBoardType>) => {
      return { ...state, ...action.payload };
    },
    changeUserName: (state, action: PayloadAction<{ id: string; name: string }>) => {
      const { id, name } = action.payload;
      return {
        ...state,
        users: {
          ...state.users,
          [id]: { ...state.users[id], name: name },
        },
      };
    },
  },
});

export const { initialise, changeUserName } = boardSlice.actions;
export default boardSlice.reducer;
