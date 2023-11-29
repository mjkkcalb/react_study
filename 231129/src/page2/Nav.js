import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">첫페이지</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/pro">Products</Link>
        </li>
        <li>
          <Link to="/board">Board</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
