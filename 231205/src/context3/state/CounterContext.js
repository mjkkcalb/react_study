//CounterContext.js
import { createContext, useState } from "react";

export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(1);

  const handleUp = () => setCount(count + 1);
  const handleDown = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, handleUp, handleDown }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
