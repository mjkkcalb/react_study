// counterStore.js
// 액션 타입 정의
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const CHANGE_COLOR = "counter/CHANGE_COLOR";

// 액션 생성자 정의
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const changeColor = (color) => ({ type: CHANGE_COLOR, color });

const initialState = {
  num: 1,
  color: "#222",
  colors: ["#65B741", "#7E57C2", "#EA80FC", "#00BCD4", "#9BB8CD"],
};

// 리듀서 설정
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        num: state.num + 1,
      };
    case DECREASE:
      return {
        ...state,
        num: state.num - 1,
      };

    case CHANGE_COLOR:
      return {
        ...state,
        color: action.color,
      };
    default:
      return state;
  }
};

// 리듀서 함수 보내기
export default counter;
