//todosStore.js
import { v4 as uuid } from "uuid";

const ADD = "todos/ADD";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";
const CHANGE_INPUT = "todos/CHANGE_INPUT";

export const add = (text) => ({ type: ADD, text, id: uuid() });
export const toggle = (id) => ({ type: TOGGLE, id });
export const remove = (id) => ({ type: REMOVE, id });
export const changeInput = (text) => ({ type: CHANGE_INPUT, text });

const initialState = {
  input: "",
  list: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        list: [
          ...state.list,
          { id: action.id, text: action.text, done: false },
        ],
      };
    case REMOVE:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.id),
      };
    case TOGGLE:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.id ? { ...item, done: !item.done } : item
        ),
      };
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.text,
      };
    default:
      return state;
  }
};

export default reducer;
