import { useDispatch } from "react-redux";
import { remove, update } from "../store/modules/colorPrintStore";

const ColorListItem = ({ item }) => {
  const { color, id, opacity } = item;
  const dispatch = useDispatch();

  return (
    <div
      style={{
        backgroundColor: color,
        opacity: opacity,
        width: 80,
        height: 80,
        border: "1px solid #000",
      }}
      onClick={() => dispatch(update(id))}
      onContextMenu={(e) => {
        e.preventDefault();
        dispatch(remove(id));
      }}>
      {color}
    </div>
  );
};

export default ColorListItem;
