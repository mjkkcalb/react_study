import { useState } from "react";
import DataDel2Btn from "./DataDel2Btn";

const dataList = [
  { id: 1, name: "아메리카노" },
  { id: 2, name: "카페라떼" },
  { id: 3, name: "바닐라라떼" },
  { id: 4, name: "카페모카" },
  { id: 5, name: "에스프레소" },
];

const DataDel2 = () => {
  const [data, setData] = useState(dataList);
  const onDel = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const onAdd = (name) => {
    setData([...data, { id: 6, name }]);
  };
  const onMod = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, name: "아이스 카페라떼" } : item
      )
    );
  };

  return (
    <div className="borderTop">
      <h2>데이터 삭제 2 - 컴포넌트 분리</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} : {item.name}
          </li>
        ))}
      </ul>
      {/* 하위 컴포넌트 연결 추가, 삭제, 수정 버튼 */}
      <DataDel2Btn onDel={onDel} onAdd={onAdd} onMod={onMod} />
    </div>
  );
};

export default DataDel2;
