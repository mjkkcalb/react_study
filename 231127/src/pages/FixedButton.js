import { BiArrowFromBottom } from "react-icons/bi";
import ButtonStyle from "../styles/FixedButton.module.css";

const FixedButton = () => {
  //버튼 클릭시에만 스크롤 이벤트가 발생하기 때문에 useEffect는 불필요
  const handleUpTo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={ButtonStyle.upTo} onClick={handleUpTo}>
      <BiArrowFromBottom />
    </div>
  );
};

export default FixedButton;
