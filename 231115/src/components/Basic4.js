import React from "react";

const Basic4 = () => {
  const title = "menu";
  const latte = "라떼";
  const size = "tall";
  const price = 4000;

  return (
    <>
      <section style={{ borderTop: "1px solid #000" }}>
        <h2
          style={{
            fontSize: "30px",
            color: "blue",
            textDecoration: "underline",
          }}>
          {title}
        </h2>
        <ul style={{ listStyle: "none" }}>
          <li
            style={{
              fontSize: "18px",
              backgroundColor: "pink",
              color: "white",
            }}>
            주문 커피:{latte}
          </li>
          <li
            style={{
              fontSize: "18px",
              color: "red",
            }}>
            가격: {price}
          </li>
          <li
            style={{
              fontSize: "18px",
              color: "#000",
            }}>
            사이즈:{size}
          </li>
        </ul>
      </section>
    </>
  );
};

export default Basic4;
