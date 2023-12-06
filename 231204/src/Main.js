import React from "react";
import Nav from "./web/Nav";
import Footer from "./web/Footer";
import styles from "./assets/styles/main.module.css";

const Main = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {console.log(children)}
      <Nav />
      <div className={styles.mainBg}>{children}</div>
      <Footer />
    </div>
  );
};

export default Main;
