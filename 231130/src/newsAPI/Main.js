import { Link, Route, Routes } from "react-router-dom";
import Sub1 from "./Sub1";
import Sub2 from "./Sub2";
import Sub3 from "./Sub3";
import Sub4 from "./Sub4";
import Sub5 from "./Sub5";
import Sub6 from "./Sub6";
import SubAll from "./SubAll";

const Main = () => {
  return (
    <div>
      <h2>news</h2>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          width: "80%",
          justifyContent: "space-between",
          margin: "auto",
        }}>
        <li>
          <Link to="/">전체 보기</Link>
        </li>
        <li>
          <Link to="/sub1">비지니스</Link>
        </li>
        <li>
          <Link to="/sub2">연예</Link>
        </li>
        <li>
          <Link to="/sub3">건강</Link>
        </li>
        <li>
          <Link to="/sub4">과학</Link>
        </li>
        <li>
          <Link to="/sub5">스포츠</Link>
        </li>
        <li>
          <Link to="/sub6">기술</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<SubAll />} />
        <Route path="/sub1" element={<Sub1 />} />
        <Route path="/sub2" element={<Sub2 />} />
        <Route path="/sub3" element={<Sub3 />} />
        <Route path="/sub4" element={<Sub4 />} />
        <Route path="/sub5" element={<Sub5 />} />
        <Route path="/sub6" element={<Sub6 />} />
      </Routes>
    </div>
  );
};

export default Main;
