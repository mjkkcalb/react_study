import { createContext } from "react";

//react.createContext(): 새로운 컨텍스트 객체 생성
// 전역 데이터 관리 함수. 함수의 인자로 해당 컨텍스트에 디폴트로 저장할 값을 넘김
const LangContext = createContext("en");

export default LangContext;
