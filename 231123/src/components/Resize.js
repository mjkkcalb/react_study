import React, { useEffect, useState } from "react";

const Resize = () => {
  const [width, setWidth] = useState(null);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log("리사이즈 시작");
    window.addEventListener("resize", handleResize);
    return () => {
      console.log("클린업");
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    console.log(width);
  }, [width]); // 처음 값을 null을 넣었기 때문에 사이즈를 조절해 실행해야 값이 나타난다

  return (
    <div>
      <h2>Resize</h2>
    </div>
  );
};

export default Resize;
