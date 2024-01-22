import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./Main";
import New from "../review/New";
import HighNew from "../highlight/HighNew";

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path={"/feed"} element={<Main />} />
        <Route path={"/new"} element={<New />} />
        <Route path={"/highnew"} element={<HighNew />} />
      </Routes>
    </div>
  );
};

export default Home;
