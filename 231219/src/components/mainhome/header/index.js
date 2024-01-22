import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Header from "./Header";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Header />
  </StrictMode>,
  rootElement
);
