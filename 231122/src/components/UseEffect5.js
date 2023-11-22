import React, { useEffect, useState } from "react";

const UseEffect5 = () => {
  const [count, setCount] = useState(0);
  const [txt, setTxt] = useState(0);

  const changeInput = (e) => {
    const { value } = e.target;
    //input의 반환값은 문자열
    //위 txt useState의 값에 문자열을 넣으면 숫자+문자가 되어 작동 오류가 발생되므로 숫자의 값인 0을 입력해야 된다
    //setTxt(Numner(value));
    //setTxt(parseInt(value));
    setTxt(+value);
  };

  const increment = () => {
    setCount((num) => num + txt);
  };
  useEffect(() => {
    console.log("실행");
    const timer = setInterval(increment, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [txt]);

  return (
    <div className="borderTop">
      <h3> 입력한 값만큼 2초마다 값 증가</h3>
      <p>
        숫자 간격 : <input type="text" value={txt} onChange={changeInput} />
      </p>
      <h3>{count}</h3>
    </div>
  );
};

export default UseEffect5;
