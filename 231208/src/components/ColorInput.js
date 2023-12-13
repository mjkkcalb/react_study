import { useDispatch, useSelector } from "react-redux";
import { add, changeInput } from "../store/modules/colorPrintStore";

const ColorInput = () => {
  const dispatch = useDispatch();
  const { input } = useSelector((state) => state.colorPrint);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(add(input));
    dispatch(changeInput(input));
    dispatch(changeInput(""));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="원하는 색을 입력하세요"
        value={input}
        onChange={(e) => dispatch(changeInput(e.target.value))}
      />
    </form>
  );
};

export default ColorInput;
