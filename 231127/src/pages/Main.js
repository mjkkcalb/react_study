import React from "react";
import mainStyle from "../styles/Main.module.css";
import TitleBox from "../components/TitleBox";
import Agency from "../components/Agency";
import Slide from "../components/Slide";
import AgencyUseEffect from "../components/AgencyUseEffect";
import FramerMotion from "../components/FramerMotion";

const Main = () => {
  return (
    <main className={mainStyle.container}>
      <TitleBox />
      <AgencyUseEffect />
      <Agency />
      <FramerMotion />
      <Slide />
    </main>
  );
};

export default Main;
