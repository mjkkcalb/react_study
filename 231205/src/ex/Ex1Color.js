import React from "react";
import Color from "./Color";
import ColorProvider from "./state/ColorContext";

const Ex1Color = () => {
  return (
    <>
      <ColorProvider>
        <Color />
      </ColorProvider>
    </>
  );
};

export default Ex1Color;
