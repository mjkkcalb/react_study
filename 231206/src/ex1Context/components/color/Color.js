import React from "react";
import { useColors } from "../../context/ColorContext";

const Color = () => {
  const { color, onOrange, onLightblue, onLime } = useColors();
  return (
    <div>
      <h2 style={{ color: color }}>색상: {color}</h2>
      <p>
        <button onClick={() => onOrange()}>orange</button>
        <button onClick={() => onLightblue()}>lightblue</button>
        <button onClick={() => onLime()}>lime</button>
      </p>
    </div>
  );
};

export default Color;
