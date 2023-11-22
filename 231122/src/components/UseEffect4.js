import React, { useEffect, useState } from "react";

const UseEffect4 = () => {
  const [count, setCount] = useState(0);

  //화면에 렌더링 된 후 한 번만 실행
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("setInterval");
      setCount((num) => num + 1);
    }, 1000);

    //setInterval 제거 후 재 랜더링
    return () => {
      console.log("클린업");
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="borderTop">
      <h2>UseEffect4</h2>
      <h3>count: {count}</h3>
      <p>1초마다 증가</p>
    </div>
  );
};

export default UseEffect4;
