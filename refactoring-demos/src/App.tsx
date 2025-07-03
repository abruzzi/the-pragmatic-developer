import "./App.css";

import { store } from "./store";
import { Provider } from "react-redux";
import { FeedApp } from "./system-design-essentials/optimistic-update/FeedApp.tsx";

export default function App() {
  return (
    <Provider store={store}>
      <FeedApp />
    </Provider>
  );
}
