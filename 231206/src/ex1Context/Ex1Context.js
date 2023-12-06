import React from "react";
import Todos from "./components/todos/Todos";
import TodoProvider from "./context/TodoContext";
import Color from "./components/color/Color";
import ColorProvider from "./context/ColorContext";

const Ex1Context = () => {
  return (
    <div>
      <h2>Ex1</h2>
      <TodoProvider>
        <ColorProvider>
          <Color />
        </ColorProvider>
        <Todos />
      </TodoProvider>
    </div>
  );
};

export default Ex1Context;
