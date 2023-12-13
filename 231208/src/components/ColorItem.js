import { useDispatch } from "react-redux";
import { changeColor } from "../store/modules/counterStore";

const ColorItem = ({ color }) => {
  // 디스패치 함수 반환. 액션을 스토어에 보낼 수 있음
  const dispatch = useDispatch();
  const style = { backgroundColor: color, width: 50, height: 50 };

  return <div style={style} onClick={() => dispatch(changeColor(color))}></div>;
};

export default ColorItem;
