import headerStyle from "../styles/Header.module.css";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className={headerStyle.wrapper}>
      <h1 className={headerStyle.logo}>로고</h1>
      <Navigation />
    </header>
  );
};

export default Header;
