import "./App.css";

import { store } from "./store";
import { Provider } from "react-redux";
import { BigListApp } from "./system-design-essentials/virtualisation/BigListApp.tsx";

export default function App() {
  return (
    <Provider store={store}>
      <BigListApp />
    </Provider>
  );
}
