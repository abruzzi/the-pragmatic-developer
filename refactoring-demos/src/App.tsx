import "./App.css";

import { Board } from "./system-design-essentials/normalisation/Board.tsx";
import { NormalizedBoard } from "./system-design-essentials/normalisation/NormalisedBoard.tsx";

import { store } from "./store";
import { Provider } from "react-redux";
import { NormalizedBoardWithRedux } from "./system-design-essentials/normalisation/NormalisedBoardWithRedux.tsx";

export default function App() {
  return (
    <Provider store={store}>
      <div className="flex justify-center p-8">
        {/*<Board boardId={"123"} />*/}
        {/*<NormalizedBoard boardId={"123"} />*/}
        <NormalizedBoardWithRedux boardId={"123"} />
      </div>
    </Provider>
  );
}
