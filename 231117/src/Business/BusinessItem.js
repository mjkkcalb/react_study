import React from "react";

const BusinessItem = ({ item }) => {
  // 구조분해할당, 비구조할당
  const { imgUrl, title, subTitle, des } = item;
  const path = process.env.PUBLIC_URL;
  return (
    <li>
      <a href="#">
        <img src={path + imgUrl} alt={title} />
        <h3>
          <strong>{title}</strong>
          {subTitle}
        </h3>
        <p>{des}</p>
      </a>
    </li>
  );
};

export default BusinessItem;
