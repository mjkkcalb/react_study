import React from "react";
import Counter from "./Counter";
import CounterProvider from "./state/CounterContext";

const Context3 = () => {
  return (
    <div>
      <h2>context3</h2>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
};

export default Context3;
