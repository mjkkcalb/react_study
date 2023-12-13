import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import countReducer from "./slices/countSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    count: countReducer,
  },
});

export default store;
