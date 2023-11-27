import { useState, useMemo } from "react";

const simpleCalc = (num) => {
  console.log("쉬운 계산기");
  return num + 1;
};
const complexCalc = (num) => {
  let now = Date.now();
  const nextNow = now;
  while (now < nextNow + 500) {
    now = Date.now();
  }

  console.log("복잡한 계산기");
  return num + 100;
};

const UseMemo1 = () => {
  const [simple, setSimple] = useState(0);
  const [complex, setComplex] = useState(0);

  // 렌더링 될 때마다 새로운 값을 구하기 때문에 오래 걸림
  // 복잡한 계산기.입력값에 +1000 되어 출력
  // const complexSum = complexCalc(complex);
  // 쉬운 계산기. 입력값에 +1 되어 출력
  // const simpleSum = simpleCalc(simple);

  const complexSum = useMemo(() => {
    return complexCalc(complex);
  }, [complex]);

  const simpleSum = useMemo(() => {
    return simpleCalc(simple);
  }, [simple]);

  return (
    <div>
      <h2>useMemo()</h2>
      <ul>
        <li>렌더링 성능 처적화를 위해 사용</li>
        <li>
          기존 연산 값을 저장한 뒤 동일한 값 입력시 재계산 대신 캐시된 값을 반환
        </li>
        <li>
          <p>useMemo(()={"{계산 비용이 큰 함수}"},[의존성배열])</p>
          의존성 배열값이 변경되지 않으면 이전의 결과값을 반환하며 다시 계산하지
          않음
        </li>
        <li>useMemo는 값을, useCallbak은 함수 반환</li>
      </ul>
      <hr />
      <h2>복잡한 계산기</h2>
      <input
        type="number"
        value={complex}
        onChange={(e) => setComplex(Number(e.target.value))}
      />
      <strong>+100 = {complexSum}</strong>

      <h2>쉬운 계산기</h2>
      <input
        type="number"
        value={simple}
        onChange={(e) => setSimple(Number(e.target.value))}
      />
      <strong>+1 = {simpleSum}</strong>
    </div>
  );
};

export default UseMemo1;
