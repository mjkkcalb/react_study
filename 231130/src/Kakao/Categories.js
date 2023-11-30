import myStyle from "./Categories.module.css";
import { Link, NavLink } from "react-router-dom";

const categories = [
  { name: "한강", authors: "한강" },
  { name: "백희나", authors: "백희나" },
  { name: "청소", authors: "청소" },
  { name: "제인구달", authors: "제인구달" },
  { name: "html", authors: "html" },
  { name: "css", authors: "css" },
  { name: "SQL", authors: "SQL" },
  { name: "java", authors: "java" },
];
const Categories = ({ category, onSelect }) => {
  return (
    <ul className={myStyle.categoriesWrapper}>
      {categories.map((item) => (
        <li key={item.name}>
          <NavLink
            activeClassName={myStyle.active}
            to={item.authors === "한강" ? "/" : `/${item.authors}`}
            end={item.authors === "한강"}>
            {item.authors}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
