import React, { useRef, useState } from "react";

const UseEffect2 = () => {
  const [data, setData] = useState("");

  const focusRef = useRef();
  const inputText = () => {};
  return (
    <div className="borderTop">
      <h2>useEffect2</h2>
      <input
        type="text"
        ref={focusRef}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={inputText}>클릭</button>
      <p>{data}</p>
    </div>
  );
};

export default UseEffect2;
