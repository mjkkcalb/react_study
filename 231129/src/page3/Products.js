import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Products = ({ data }) => {
  // const {사용자 정의 라이트 변수} = useparams();
  const { name } = useParams();
  return (
    <div>
      <h2>products</h2>
      <h3>{name}값 받기</h3>
      <hr />
      {/* <h3>html</h3>
      <p>html 페이지 입니다.</p> */}
      {data
        .filter((item) => item.title === name)
        .map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.info}</p>
          </div>
        ))}
    </div>
  );
};

export default Products;
