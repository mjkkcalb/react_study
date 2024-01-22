import { useEffect, useState } from "react";

const Storage2 = () => {
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState([]);

  const handleSave = () => {
    const dataList = [...data, { abc: inputText }];
    setData(dataList);
    localStorage.setItem("storageData", JSON.stringify(dataList));
    setInputText("");
  };

  useEffect(() => {
    const storageList = JSON.parse(localStorage.getItem("storageData"));
    setData(storageList);
  }, []);

  const handleClear = () => {
    localStorage.clear();
  };

  return (
    <div>
      <h2>로컬스토리지 2</h2>
      <input
        type="text"
        placeholder="이곳에 입력하세요"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleSave}>저장</button>
      <button onClick={handleClear}>모두 삭제</button>
      <ul>
        {data.map((item, idx) => (
          <li key={idx}>{item.abc}</li>
        ))}
      </ul>
    </div>
  );
};

export default Storage2;
