// Color 컨텍스트
// React.createContext(초기값);

import { createContext, useState } from "react";

// 생성
const ColorContext = createContext({
  state: { color: "#999", subColor: "#efefef" },
  actions: { setColor: () => {}, setSubColor: () => {} },
});

// 하위 컴포넌트에 컨텍스트 값 전달
const ColorProvider = ({ children }) => {
  // color, subColor 초기값 설정
  const [color, setColor] = useState("#999");
  const [subColor, setSubColor] = useState("#efefef");

  const value = {
    state: { color, subColor },
    actions: { setColor, setSubColor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const ColorConsumer = ColorContext.ColorConsumer와 같은 내용
// 하위 컴포넌트에서 컨텍스트 값을 소비
const { Consumer: ColorConsumer } = ColorContext;

// 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;

/* 
  동적 Context : state,actions 객체를 가짐
  const ColorContext = createContext({state:, actions:});
  state: 전역에서 사용되는 상태 값

  actions: 상태를 변경하는 함수
          ()=>{} 초기값 


  Context.Provider : 하위 컴포넌트에게 값을 제공하는 역할  
  Context.Consumer : Context 값을 읽는 역할
*/
