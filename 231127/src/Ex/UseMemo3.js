import React, { useState } from "react";

const UseMemo3 = () => {
  const [num, setNum] = useState(0);
  const [list, setList] = useState([]);

  const onAdd = () => {
    let num = Number(num);
    setList([...list, num]);
    setNum("");
  };
  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={onAdd}>추가</button>
      <ul>
        {list.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h2>평균값:</h2>
    </div>
  );
};

export default UseMemo3;
