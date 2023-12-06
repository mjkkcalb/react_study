import React from "react";
import LangContext from "./LangContext";

const Title = () => {
  return (
    <LangContext.Consumer>
      {(lang) => <h2>{lang === "en" ? "Context" : "컨텍스트"}</h2>}
    </LangContext.Consumer>
  );
};

export default Title;
/*
.consumer : 컨텍스트 값을 소비(consumer)
  context 컴포넌트에서 제공한 컨텍스트 값을 하위 컴포넌트에 제공
    1. 컨텍스트 값 가져오기
    2.컨텍스트 값이 변경 될 때마다 렌더링 . 그에 따른 컴포넌트 업데이트 내부에서 함수를 렌더링함. 이 함수는 컴텍스트 값을 매개변수로 받아 사용 컴포넌트 내수에서만 컨텍스트 값을 가져오기 때문에 함수 컴포넌트의 다른 곳에서는 직접 컨텍스트 값을 접근 할 수 없음    
    
*/
