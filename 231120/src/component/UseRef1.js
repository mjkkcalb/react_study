import { useState } from "react";

const UseRef1 = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const changeId = (e) => {};
  const changePw = (e) => {};
  return (
    <div className="borderTop">
      <h2>useRef</h2>
      <p>컴포넌트 렌더링과 상관없이 값을 보관</p>
      <p>useRef에 의해 반환된 ref 객체는 컴포넌트가 재렌더링 되지 않음</p>
      <ul>
        <li>DOM에 직접 접근하는 경우</li>
        <li>ref는 컴포넌트 안에서만 동작</li>
        <li>input 의 focus나 scroll 이벤트, 애니메이션 사용시</li>
      </ul>
      <hr />

      <p>
        <input type="text" value onChange={changeId} />
        <input type="text" onChange={changePw} />
        <button>초기화</button>
      </p>
      <h3>id: / pw:</h3>
    </div>
  );
};

export default UseRef1;
/* 
  선언
  const a = useRef();

  사용
  a.current.id = 'userId';
*/
