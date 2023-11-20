import React, { useState } from "react";

const dataList = [
  { id: 1, name: "아메리카노" },
  { id: 2, name: "라떼" },
  { id: 3, name: "카푸치노" },
  { id: 4, name: "카페모카" },
  { id: 5, name: "에스프레소" },
  { id: 6, name: "아인슈타인" },
  { id: 7, name: "초코라떼" },
  { id: 8, name: "고구마라떼" },
  { id: 9, name: "단호박라떼" },
  { id: 10, name: "얼그레이바닐라티라떼" },
];

const Ex1 = () => {
  const [data, setData] = useState([]);

  const onAdd = () => {
    const randomItem = Math.floor(Math.random() * dataList.length);
    const randomDrink = dataList[randomItem];

    setData([...data, { id: randomDrink.id, name: randomDrink.name }]);
  };

  const onDel = () => {
    setData(data.filter((item) => item.id !== 3));
  };

  return (
    <div className="borderTop">
      <button onClick={onAdd}>음료 추가</button>
      <button onClick={onDel}>삭제</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id}: {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ex1;
