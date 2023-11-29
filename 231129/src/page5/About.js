import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const detail = search.get("detail");
  const query = search.get("query");
  const page = search.get("page");
  return (
    <div>
      <h2>About</h2>
      {detail && (
        <p>
          query의 값은 <strong>{query}</strong>이고 페이지는
          <strong>{page}</strong>입니다
        </p>
      )}
    </div>
  );
};

export default About;
