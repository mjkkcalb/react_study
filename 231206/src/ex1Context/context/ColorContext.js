//ColorContext.js

import { createContext, useContext, useMemo, useState } from "react";

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("#ddd");

  const onOrange = () => setColor("Orange");
  const onLightblue = () => setColor("Lightblue");
  const onLime = () => setColor("Lime");

  const value = useMemo(
    () => ({
      color,
      onOrange,
      onLightblue,
      onLime,
    }),
    [color, onOrange, onLightblue, onLime]
  );
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

export default ColorProvider;
