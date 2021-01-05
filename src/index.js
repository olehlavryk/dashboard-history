import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/AppContainer";
import { getStore } from "src/store/index";

const store = getStore();

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
