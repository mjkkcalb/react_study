import React, { useState } from "react";
import Button from "./ComponentAPI2/Button";
import Message from "./ComponentAPI2/Message";
import Title from "./ComponentAPI2/Title";
import LangContext from "./ComponentAPI2/LangContext";

const ContextAPI2 = () => {
  const [lang, setLang] = useState("en");
  const handleToggle = () => {
    setLang(lang === "en" ? "kr" : "en");
  };

  return (
    <LangContext.Provider value={lang}>
      <Button lang={lang} handleToggle={handleToggle} />
      <Message />
      <Title />
    </LangContext.Provider>
  );
};

export default ContextAPI2;
/*
.provider : 컨텍스트 값 제공

 provider로 하위 컴포넌트를 감싸면 React.createContext()에 저장한 전역 데이터에 접근 가능.

 <MyContext.Provider value={어떤 값이든 제공}>
  <하위 컴포넌트>
</MyContext.Provider>

접근) 
  useContext();
  .Consumer
*/
