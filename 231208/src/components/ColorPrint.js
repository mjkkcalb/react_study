import ColorInput from "./ColorInput";
import ColorList from "./ColorList";

const ColorPrint = () => {
  return (
    <div>
      <h2>ColorPrint</h2>
      <ol>
        <li>컬러명 입력</li>
        <li>컬러 박스 리스트 컴포넌트에 생성</li>
        <li>
          마우스 우측 버튼 클릭하면 삭제, 왼쪽 버튼 클릭하면 opacity 0.1씩 감소
        </li>
      </ol>
      <ColorInput />
      <ColorList />
    </div>
  );
};

export default ColorPrint;
