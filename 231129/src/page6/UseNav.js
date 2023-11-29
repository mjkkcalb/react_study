import { Link, Routes, Route } from "react-router-dom";
import Menu from "../page4/Menu";
import History from "./History";

const UseNav = () => {
  return (
    <div>
      <h2>useNavigate</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/history">내비</Link>
        </li>
        <li>
          <Link to="/menu">커피</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<h2>첫 페이지</h2>} />
        <Route path="/history" element={<History />} />
        <Route path="/menu/*" element={<Menu />} />
      </Routes>
    </div>
  );
};

export default UseNav;
