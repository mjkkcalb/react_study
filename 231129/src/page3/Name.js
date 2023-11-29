import { Link, Route, Routes } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Products from "./Products";
import Profile from "./Profile";
import Nav from "./Nav";
import NotFoundPage from "../page2/NotFoundPage";

const data = [
  { id: 1, title: "html", info: "html 페이지 입니다." },
  { id: 2, title: "css", info: "css 페이지 입니다." },
  { id: 3, title: "js", info: "js 페이지 입니다." },
  { id: 4, title: "react", info: "react 페이지 입니다." },
];

const Name = () => {
  return (
    <div>
      {/* 내비게이션 */}
      {/* 화면 설정 : 첫페이지, 어바웃, 프로필, 제품(>html, css, js, react) */}
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
          <hr />
          <ul>
            <li>
              <Link to="/products/html">html</Link>
            </li>
            <li>
              <Link to="/products/css">css</Link>
            </li>
            <li>
              <Link to="/products/js">js</Link>
            </li>
            <li>
              <Link to="/products/react">react</Link>
            </li>
          </ul>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        {/* useParams을 이용해 name값을 가져옴 */}
        <Route path="/products/:name" element={<Products data={data} />} />
        {/* 잘못된 페이지 연결 시 - 가장 마지막에 연결 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* 내비게이션 */}
      {/*<Nav />*/}
    </div>
  );
};

export default Name;
