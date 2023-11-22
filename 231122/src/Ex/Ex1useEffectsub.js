import React, { useCallback, useEffect, useState } from "react";

const Ex1useEffectsub = () => {
  const [now, setNow] = useState(new Date());

  const updateTime = useCallback(() => {
    setNow(new Date());
  }, []);

  useEffect(() => {
    console.log("시작");
    const timer = setInterval(updateTime, 1000);

    //자식 컴포넌트를 사용하는 경우, setInterval()의 경우 clean-up 함수 필요
    return () => {
      console.log("클린업");
      clearInterval(timer);
    };
  }, [updateTime]);

  return (
    <div>
      <p>날짜 : {now.toLocaleDateString()}</p>
      <p>시간 : {now.toLocaleTimeString()}</p>
    </div>
  );
};

export default Ex1useEffectsub;
