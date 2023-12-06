import styles from "./context2.module.css";
import { useContext } from "react";
import { ThemeContext } from "./state/ThemeContext";
import { ColorData } from "./state/ColorData";

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const { background, color } = useContext(ColorData);
  return (
    <footer
      className={styles.footer}
      style={{
        background: isDark ? "#000" : "#ddd",
        color: isDark ? "#fff" : "#000",
      }}>
      <button
        className={styles.btn}
        style={{
          background: isDark ? "#ddd" : "#000",
          color: isDark ? "#000" : "#fff",
        }}
        onClick={() => setIsDark(!isDark)}>
        dark mode
      </button>
    </footer>
  );
};

export default Footer;
