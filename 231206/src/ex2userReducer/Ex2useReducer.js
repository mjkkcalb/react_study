import { useState, useReducer } from "react";

/* 
reducer : state를 업데이트하는 역할
dispatch : state 업데이트 요구
state : 상태
action : 상태를 어떤 방식으로 변경할지 결정하는 자바스크립트 객체
payload : action의 실제 데이터 부분. 변경될 값
*/

const ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};

const reducer = (state, action) => {
  console.log("리듀서 작동", state, action);

  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};

const Ex2useReducer = () => {
  const [num, setNum] = useState(0);
  const [money, dispatch] = useReducer(reducer, 10000);

  const handleChagne = (e) => setNum(e.target.value);
  // const handleDeposit = () => {
  //   const newNum = Number(num);
  //   setNum(newNum);
  // };
  // const handleWithdraw = () => {};

  const handleClick = (type) => {
    dispatch({ type, payload: +num });
  };

  return (
    <div>
      <h2>useReducer</h2>
      <h3>잔고 : {money}원</h3>
      <hr />
      <input type="text" value={num} onChange={handleChagne} />
      <p>
        <button onClick={() => handleClick(ACTION_TYPES.deposit)}>예금</button>
        <button onClick={() => handleClick(ACTION_TYPES.withdraw)}>출금</button>
      </p>
    </div>
  );
};

export default Ex2useReducer;
