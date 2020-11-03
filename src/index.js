import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./stateProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  rootElement
);