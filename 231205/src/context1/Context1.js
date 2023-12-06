import React from "react";
import ColorBox from "./ColorBox";
import SelectColor from "./SelectColor";
import { ColorProvider } from "./Color";

const Context1 = () => {
  return (
    <div>
      <ColorProvider>
        <SelectColor />
        <ColorBox />
      </ColorProvider>
    </div>
  );
};

export default Context1;
