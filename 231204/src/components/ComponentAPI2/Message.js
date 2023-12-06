import { useContext } from "react";
import LangContext from "./LangContext";

const Message = () => {
  const currentLang = useContext(LangContext);
  return (
    <div>
      {currentLang === "en" ? <p>Context is...</p> : <p>컨텍스트... 입니다</p>}
    </div>
  );
};

export default Message;
