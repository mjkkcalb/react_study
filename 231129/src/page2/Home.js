import { Link, Route, Routes } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Products from "./Products";
import Board from "./Board";
import NotFoundPage from "./NotFoundPage";
import Nav from "./Nav";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/board">Board</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/board" element={<Board />} />
        {/* 잘못된 페이지 연결 시 - 가장 마지막에 연결 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* 내비게이션 */}
      <Nav />
    </div>
  );
};

export default Home;
