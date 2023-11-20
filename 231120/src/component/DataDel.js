import { useState } from "react";

const dataList = [
  { id: 1, name: "아메리카노" },
  { id: 2, name: "라떼" },
  { id: 3, name: "카푸치노" },
  { id: 4, name: "카페모카" },
  { id: 5, name: "에스프레소" },
];

const DataDel = () => {
  const [data, setData] = useState(dataList);

  const onDel1 = () => {
    setData(data.filter((item) => item.name !== "카페모카"));
  };
  const onDel2 = () => {
    setData(data.filter((item) => item.id !== 3));
  };
  const onDel3 = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const onAdd1 = () => {
    setData([...data, { id: 6, name: "비엔나커피" }]);
  };

  //편의상 매개변수(NAME)에 키값과 동일한 이름 부여. 키와 값이 같은 경우, 같은 이름으로 작성 가능
  const onAdd2 = (item) => {
    setData([...data, { id: data.length + 1, name: item }]);
  };

  const onMod1 = () => {
    setData(
      data.map((item) => {
        if (item.id === 4) {
          return {
            ...item,
            name: "아이스 카페모카",
          };
        } else {
          return item;
        }
      })
    );
  };

  const onMod2 = () => {
    setData(
      data.map((item) =>
        item.id === 5 ? { ...item, name: "아이스커피" } : item
      )
    );
  };

  const onMod3 = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, name: "아이스 아메리카노" } : item
      )
    );
  };

  // 추가 create
  return (
    <div>
      <h2>데이터 삭제1</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id}:{item.name}
          </li>
        ))}
      </ul>
      <p>
        <button onClick={onDel1}>카페모카 삭제</button>
        <button onClick={onDel2}>3번 삭제</button>
        <button onClick={() => onDel3(1)}>1번 삭제</button>
        <button onClick={() => onDel3(5)}>5번 삭제</button>
        <button onClick={() => onDel3(2)}>2번 삭제</button>
      </p>
      <p>
        <button onClick={onAdd1}>비엔나 커피 추가</button>
        <button onClick={() => onAdd2("디카페인 커피")}>
          디카페인 커피 추가
        </button>
        <button onClick={() => onAdd2("헤이즐넛 커피")}>
          헤이즐넛 커피 추가
        </button>
      </p>
      <p>
        <button onClick={onMod1}>카페모카 수정</button>
        <button onClick={onMod2}>에스프레소 수정</button>
        <button onClick={() => onMod3(1)}>아메리카노 수정</button>
      </p>
    </div>
  );
};

export default DataDel;
