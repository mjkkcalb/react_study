import { useSelector } from "react-redux";
import ColorItem from "./ColorItem";

const ColorBox = () => {
  const { colors } = useSelector((state) => state.counter);

  return (
    <article style={{ display: "flex" }}>
      {colors.map((color) => (
        <ColorItem key={color} color={color} />
      ))}
    </article>
  );
};

export default ColorBox;
