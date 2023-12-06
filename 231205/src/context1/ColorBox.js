import React from "react";
import { ColorConsumer } from "./Color";

const ColorBox = () => {
  return (
    <ColorConsumer>
      {({ state }) => (
        <>
          <div
            style={{ width: 100, height: 100, backgroundColor: state.color }}>
            메인컬러
          </div>
          <div
            style={{
              width: 80,
              height: 80,
              backgroundColor: state.subColor,
              borderRadius: "50%",
            }}>
            서브컬러
          </div>
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
