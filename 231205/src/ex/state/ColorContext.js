import { createContext, useState } from "react";

export const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("#ddd");
  const changeColor = (text) => setColor(text);

  return (
    <ColorContext.Provider value={{ color, changeColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
