import React, { useRef, useState } from "react";

const USeRef2 = () => {
  const [count, setCount] = useState(1);
  //특정 값을 저장하기 위해 사용, 특정 값이 변경되어도 렌더링이 일어나지 않음, 즉 렌더링을 하고싶지 않을 때 사용
  const countRef = useRef(1);

  const incrementState = () => setCount(count + 1);

  const incrementRef = () => {
    countRef.current = countRef.current + 1;
  };
  return (
    <div className="borderTop">
      <h2>useRef2</h2>
      <h3>
        카운트 - useState : {count} / useRef :{countRef.current}
      </h3>
      <p>
        <button onClick={incrementState}>useState()</button>
        <button onClick={incrementRef}>useRef()</button>
      </p>
    </div>
  );
};

export default USeRef2;
