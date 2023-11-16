import React, { useState } from "react";

const State2 = () => {
  const [isShow, setIsShow] = useState(false);
  //하나의 useState 상태값을 사용하기 때문에 같이 움직이게 된다
  const [isHide, setIsHide] = useState(false);
  //상태 값을 각각 사용시 따로 작성(따로 움직임)
  const [isToggle, setIsToggle] = useState();
  const handleShow = () => {
    setIsShow(true);
  };
  const handleHide = () => {
    setIsHide(false);
  };
  const handleToggle = () => {
    setIsToggle(!isToggle); //!부정연산자. !(false) -> true, !(true) -> false
  };

  return (
    <div className="borderTop">
      <h2>State2</h2>
      <p>
        <button onClick={handleShow}>{isShow ? "show" : "hide"}</button>
        <button onClick={handleHide}>{isHide ? "show" : "hide"}</button>
        {/* 토글 버튼 한번 클릭하면 hide, 두번 클릭하면 show */}
        <button onClick={handleToggle}>{isToggle ? "hide" : "show"}</button>
      </p>
      {/* 삼항연산자를 이용해 handleShow 함수가 실행되어 참인 경우 박스 보임. 조건식 ? true : false */}
      {isShow ? (
        <div
          style={{
            width: 150,
            height: 150,
            backgroundColor: "pink",
            margin: 10,
          }}>
          Box1
        </div>
      ) : null}
      <hr />
      {/* // hide 버튼을 클릭하면 div.box2가 보임 */}
      {isHide ? null : (
        <div
          style={{
            width: 150,
            height: 150,
            backgroundColor: "salmon",
            margin: 10,
          }}>
          Box2
        </div>
      )}
      <hr />
      {/* // 토글 버튼을 클릭하면 div.box3가 보여졌다 안보여졌다 함 */}
      {/* And 연산자 : 앞의 값이 참이어야만 뒤의 값을 출력 */}
      {isToggle && (
        <div
          style={{
            width: 150,
            height: 150,
            backgroundColor: "brown",
            margin: 10,
          }}>
          Box3
        </div>
      )}
      {/* OR연산자 : 앞의 값이 참인 상황이면 뒤의 값을 출력하지 않음. 앞의 값이 거짓이어야만 뒤의 값을 출력 */}
      {isToggle || (
        <div
          style={{
            width: 150,
            height: 150,
            backgroundColor: "orange",
            margin: 10,
          }}>
          Box4
        </div>
      )}
    </div>
  );
};

export default State2;
