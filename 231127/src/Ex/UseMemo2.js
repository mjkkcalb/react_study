import { useMemo, useState } from "react";

const UseMemo2 = () => {
  const [num, setNum] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const light = (isOn) => {
    console.log("불", isOn);
    return isOn ? "yes" : "no";
  };

  //light(isOn); 렌더링이 될 때마다 새로운 값을 구함. 그래서 물의 양을 수정하면 같이 렌더링 됨

  useMemo(() => {
    return light(isOn);
  }, [isOn]);

  return (
    <div>
      <h2>하루에 마시는 물의 양은?</h2>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <hr />
      <h2>동생~</h2>
      <p>불 좀 꺼 줘</p>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? "응" : "..."}</button>
    </div>
  );
};

export default UseMemo2;
