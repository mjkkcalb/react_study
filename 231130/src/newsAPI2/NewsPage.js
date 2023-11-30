import React, { useMemo } from "react";
import Categories from "./Categories";
import NewList from "./NewList";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  const { category } = useParams();
  const mCategoty = useMemo(() => category || "all");

  return (
    <div>
      <Categories />
      <NewList category={mCategoty} />
    </div>
  );
};

export default NewsPage;
