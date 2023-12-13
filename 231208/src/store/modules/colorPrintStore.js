// colorPrintStore.js
import { v4 as uuid } from "uuid";

// 액션 타입 정의
const ADD = "colorPrint/ADD";
const UPDATE = "colorPrint/UPDATE";
const REMOVE = "colorPrint/REMOVE";
const CHANGE_INPUT = "colorPrint/CHANGE_INPUT";

// 액션 생성자 함수 정의
export const add = (color) => ({ type: ADD, color, id: uuid() });
export const update = (id) => ({ type: UPDATE, id });
export const remove = (id) => ({ type: REMOVE, id });
export const changeInput = (text) => ({ type: CHANGE_INPUT, text });

const initialState = {
  input: "",
  list: [], // [{id:1, color:"orange", opacity:1 },{},{}]
};
// 리듀서 설정
const colorPrint = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        list: [
          ...state.list,
          { id: action.id, color: action.color, opacity: 1 },
        ],
      };
    // 마우스 우측버튼 클릭시 투명도 조절
    case UPDATE:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.id
            ? { ...item, opacity: item.opacity - 0.1 }
            : item
        ),
      };
    case REMOVE:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.id),
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

// 리듀서 함수 보내기
export default colorPrint;
