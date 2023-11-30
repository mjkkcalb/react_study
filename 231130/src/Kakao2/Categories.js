import { NavLink } from "react-router-dom";

const categories = [
  { id: 1, title: "공룡" },
  { id: 2, title: "강아지" },
  { id: 3, title: "백희나" },
  { id: 4, title: "제인구달" },
  { id: 5, title: "html" },
  { id: 6, title: "SQL" },
];

const Categories = () => {
  const style = { padding: "5px 20px" };
  const activeStyle = {
    backgroundColor: "orange",
    color: "#fff",
    borderBottom: "2px solid #000",
  };
  return (
    <div>
      {categories.map((list) => (
        <NavLink
          key={list.id}
          to={`/book/${list.title}?page=1`}
          activestyle={activeStyle}>
          <strong style={style}>{list.title}</strong>
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
