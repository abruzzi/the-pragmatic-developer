import "./App.css";

import { SearchBox } from "./search-box/SearchBox.tsx";
import {Board} from "./system-design-essentials/normalisation/Board.tsx";

export default function App() {
  return (
    <div className="flex justify-center p-8">
      {/*<SearchBox />*/}
      <Board boardId={"123"} />
    </div>
  );
}
