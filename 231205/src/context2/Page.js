import React from "react";
import Header from "./Header";
import Contents from "./Contents";
import Footer from "./Footer";
import styles from "./context2.module.css";

const Page = () => {
  return (
    <div className={styles.page}>
      <Header />
      <Contents />
      <Footer />
    </div>
  );
};

export default Page;
