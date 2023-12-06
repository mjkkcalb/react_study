import React from "react";
import { ColorConsumer } from "./Color";

const colors = [
  "orange",
  "salmon",
  "tomato",
  "teal",
  "purple",
  "pink",
  "lightblue",
];
const SelectColor = () => {
  return (
    <div>
      <h2>색상선택</h2>
      <ColorConsumer>
        {({ actions }) => (
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              margin: 0,
              padding: 0,
            }}>
            {colors.map((color) => (
              <li
                key={color}
                style={{
                  backgroundColor: color,
                  width: 50,
                  height: 50,
                  cursor: "pointer",
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  actions.setSubColor(color);
                }}></li>
            ))}
          </ul>
        )}
      </ColorConsumer>
    </div>
  );
};

export default SelectColor;
