import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Redux 14-07-2026/redux tool  kit/Store";
import store1 from "./Redux 14-07-2026/Store1";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store1}>
    <App />
  </Provider>
);