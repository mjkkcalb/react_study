import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import ColorBox from "./components/ColorBox";
import ColorPrint from "./components/ColorPrint";
import Todos from "./components/Todos";

const App = () => {
  return (
    <>
      <h1>redux</h1>
      <Counter />
      <ColorBox />
      <hr />
      <ColorPrint />
      <hr />
      <Todos />
    </>
  );
};

export default App;
