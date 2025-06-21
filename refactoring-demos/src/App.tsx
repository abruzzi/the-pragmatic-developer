import "./App.css";

import { Board } from "./system-design-essentials/normalisation/Board.tsx";

import { store } from "./store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <div className="flex justify-center p-8">
        <Board boardId={"123"} />
      </div>
    </Provider>
  );
}
