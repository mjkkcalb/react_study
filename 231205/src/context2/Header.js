import { useContext } from "react";
import styles from "./context2.module.css";
import { UserData } from "./state/UserDate";
import { ThemeContext } from "./state/ThemeContext";

const Header = () => {
  const user = useContext(UserData);
  const { isDark } = useContext(ThemeContext);

  return (
    <header
      className={styles.header}
      style={{
        background: isDark ? "#000" : "#ddd",
        color: isDark ? "#fff" : "#000",
      }}>
      <h2>welcome, {user}님</h2>
    </header>
  );
};

export default Header;
