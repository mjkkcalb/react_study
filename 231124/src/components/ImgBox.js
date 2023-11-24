import React, { useEffect, useRef } from "react";
//스크롤이벤트 이미지 => useRef :돔 직접 제어
const ImgBox = () => {
  const imgBox1Ref = useRef(null);
  const imgBox2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if ((imgBox1Ref.current, imgBox2Ref.current)) {
        const scrollY = window.scrollY || window.pageYOffset;
        imgBox1Ref.current.style.transform = `translateY(${-scrollY / 6}px)`;
        imgBox2Ref.current.style.transform = `translateY(${-scrollY / 6}px)`;
      }
    };

    // 윈도우에 이벤트 리스너 추가
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트되면 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="imgBox1">
        <img src={"images/CartoonMac.png"} alt="컴퓨터" ref={imgBox1Ref} />
        <img src={"images/SplashColor.png"} alt="물감" ref={imgBox2Ref} />
      </div>
      <p className="imgBox1txt">
        Leading digital agency with solid design and development expertise. We
        focus on buliding Webflow websites
      </p>
    </div>
  );
};

export default ImgBox;
