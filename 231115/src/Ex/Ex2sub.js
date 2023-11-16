import React from "react";

const Ex2sub = ({ name, price }) => {
  return (
    <>
      <h3>Ex2sub 하부 컴포넌트</h3>
      <p>
        커피: {name}, 가격: {price}
      </p>
    </>
  );
};

export default Ex2sub;
