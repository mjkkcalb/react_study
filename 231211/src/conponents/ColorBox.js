import { useSelector } from "react-redux";
import ColorBoxItem from "./ColorBoxItem";

const ColorBox = () => {
  const colors = useSelector((state) => state.count.colors);

  return (
    <div style={{ display: "flex" }}>
      {colors.map((color) => (
        <ColorBoxItem key={color} color={color} />
      ))}
    </div>
  );
};

export default ColorBox;
