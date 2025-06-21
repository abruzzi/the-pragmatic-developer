import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./system-design-essentials/normalisation/board/boardSlice.ts";

export const store = configureStore({
  reducer: {
    board: boardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
