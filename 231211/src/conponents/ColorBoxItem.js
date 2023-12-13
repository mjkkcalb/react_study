import React from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../store/slices/countSlice";

const ColorBoxItem = ({ color }) => {
  const dispatch = useDispatch();
  const style = { backgroundColor: color, width: 50, height: 50 };

  return <div style={style} onClick={() => dispatch(changeColor(color))}></div>;
};

export default ColorBoxItem;
