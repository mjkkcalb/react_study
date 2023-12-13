// countSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  num: 1,
  color: "#000",
  colors: ["red", "orange", "lightblue", "tomato", "salmon"],
};

//named export 방식: 여러 export 함수 중 하나의 함수만 불러와 사용 가능
//import {counterSlice} from "./경로"
export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.num += 1;
    },

    decrement: (state) => {
      state.num -= 1;
    },
    changeColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { increment, decrement, changeColor } = countSlice.actions;
export default countSlice.reducer;
