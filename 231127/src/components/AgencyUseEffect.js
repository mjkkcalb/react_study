import { useEffect, useRef, useState } from "react";
import agencyStyle from "../styles/Agency.module.css";

const AgencyUseEffect = () => {
  const path = process.env.PUBLIC_URL;
  const [mouseY, setMouseY] = useState(0);
  //const img1 = document.querySelector(`.${agencyStyle.img1}`);
  //const img2 = document.querySelector(`.${agencyStyle.img2}`);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  const handleMousseMove = (e) => {
    //.getBoundingClientRect() 엘리먼트 크기와 뷰포트에 상대적인 위치 정보를 제공 DOMRect 객체 반환
    const imgGtroupRect = e.currentTarget.getBoundingClientRect();
    console.log(imgGtroupRect);
    const centerY = imgGtroupRect.top + imgGtroupRect.height / 2;
    setMouseY(e.clientY - centerY);
  };

  const applyTrans = (ref, offsetY) => {
    const translateY = offsetY * 0.1;
    ref.current.style.transform = `translate(-50%, ${translateY}px)`;
  };
  useEffect(() => {
    const imgScroll = () => {
      applyTrans(img1Ref, mouseY);
      applyTrans(img2Ref, -mouseY);
    };
    window.addEventListener("scroll", imgScroll);

    return () => {
      window.removeEventListener("scroll", imgScroll);
    };
  }, [mouseY]);

  return (
    <section onMouseMove={handleMousseMove}>
      <div className={agencyStyle.imgGroup}>
        <img
          src={`${path}/images/SplashColor.png`}
          alt="SplashColor"
          className={agencyStyle.img1}
          ref={img1Ref}
        />
        <img
          src={`${path}/images/CartoonMac.png`}
          alt="CartoonMac"
          className={agencyStyle.img2}
          ref={img2Ref}
        />
      </div>
      <h3>
        Leading digital agency with solid design and development expertise. We
        focus on buliding Webflow websites
      </h3>
    </section>
  );
};

export default AgencyUseEffect;
