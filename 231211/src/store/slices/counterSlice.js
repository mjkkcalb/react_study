// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

//named export 방식: 여러 export 함수 중 하나의 함수만 불러와 사용 가능
//import {counterSlice} from "./경로"
export const counterSlice = createSlice({
  name: "counter", // 슬라이스 이름
  initialState, // 초기값
  //리듀스 함수
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
