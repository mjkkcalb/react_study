import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./web/Home";
import About from "./web/About";
import Product from "./web/Product";
import Service from "./web/Service";
import Board from "./web/Board";
import Login from "./web/Login";
import NotFoundPage from "./web/NotFoundPage";
import Main from "./Main";

function App() {
  return (
    <>
      {/* 공통된 레이아웃을 구성할 때 주로 사용 */}
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/service" element={<Service />} />
          <Route path="/board" element={<Board />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
