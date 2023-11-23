import React, { useEffect, useRef } from "react";

const Resize2Ref = () => {
  const width = useRef(null);

  const handleResize = () => {
    width.current = window.innerWidth;
    console.log(width.current);
  };

  useEffect(() => {
    console.log("리사이즈 시작");
    window.addEventListener("resize", handleResize);
    return () => {
      console.log("클린업");
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <>
      <h2>Resize-Ref</h2>
    </>
  );
};

export default Resize2Ref;
