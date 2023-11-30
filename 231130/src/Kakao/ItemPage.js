import React, { useMemo } from "react";
import Categories from "./Categories";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemPage = () => {
  const { category } = useParams();
  const mCategory = useMemo(() => category || "한강");

  return (
    <div>
      <Categories />
      <ItemList category={mCategory} />
    </div>
  );
};

export default ItemPage;
