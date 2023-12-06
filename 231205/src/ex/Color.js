import React, { useContext, useState } from "react";
import { ColorContext } from "./state/ColorContext";

const Color = () => {
  // const [color, setColor] = useState("#ddd")
  const { color, changeColor } = useContext(ColorContext);
  return (
    <div>
      <h2 style={{ backgroundColor: color }}>Ex1Color : {color}</h2>
      <p>
        <button onClick={() => changeColor("orange")}>orange</button>
        <button onClick={() => changeColor("salmon")}>salmon</button>
        <button onClick={() => changeColor("tomato")}>tomato</button>
        <button onClick={() => changeColor("lightblue")}>lightblue</button>
      </p>
    </div>
  );
};

export default Color;
