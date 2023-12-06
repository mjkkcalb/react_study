import { useContext, useState } from "react";
import Page from "./Page";
import { UserData } from "./state/UserDate";
import { ThemeContext } from "./state/ThemeContext";

// useContext :hook을 이용하여 컴포넌트들의 상태,스타일 공유.
const Context2 = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserData.Provider value={"리액트"}>
      <h2>Context2</h2>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserData.Provider>
  );
};

export default Context2;
