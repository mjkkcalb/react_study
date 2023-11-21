import { useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 30px auto;
  border: 1px solid #000;
  width: ${(props) => (props.width ? props.width : "80vw")};
`;
const Button = styled.button`
  cursor: pointer;
  border: 1px solid #000;
  background-color: #fff;
  padding: 4px 10px;
  margin: 10px;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
const List = styled.ul``;

const coffee =
  "아메리카노, 카페라떼, 바닐라라떼, 에스프레소, 카페모카, 디카페인 커피, 오늘의 커피, 콜드브루, 플랫화이트, 아인슈페너".split(
    ","
  );

const UseRef4 = () => {
  // 버튼을 클릭하면 배열안에 객체로 저장 [{id: , name: 아메리카노 },{},{}]
  const [data, setData] = useState([]);
  const idRef = useRef(1);

  const onPrint = () => {
    const ran = Math.floor(Math.random() * coffee.length);
    setData([...data, { id: idRef.current++, name: coffee[ran] }]);
  };

  return (
    <Container width="60vw">
      <Button onClick={onPrint}>출력</Button>
      <List>
        {data.map((list) => (
          <li key={list.id}>
            {list.id} : {list.name}
          </li>
        ))}
      </List>
    </Container>
  );
};

export default UseRef4;
