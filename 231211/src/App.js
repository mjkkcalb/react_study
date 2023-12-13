import React from "react";
import Counter from "./conponents/Counter";
import Count from "./conponents/Count";
import ColorBox from "./conponents/ColorBox";
import ColorPrint from "./conponents/ColorPrint";

function App() {
  return (
    <>
      <h1>Redux Toolkit</h1>
      {/* <Counter /> */}
      <Count />
      <ColorBox />
      <ColorPrint />
    </>
  );
}

export default App;
