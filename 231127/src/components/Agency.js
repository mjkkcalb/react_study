import { useEffect, useRef } from "react";
import agencyStyle from "../styles/Agency.module.css";

const Agency = () => {
  const path = process.env.PUBLIC_URL;
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    const imgScroll = () => {
      const scrollY = window.scrollY;
      const scrollHt = document.body.scrollHeight - window.innerHeight;
      const move1 = `translate(-50%, ${(scrollY / scrollHt) * 20}px)`;
      const move2 = `translate(-50%, ${(scrollY / scrollHt) * -20}px)`;

      img1Ref.current.style.transform = move1;
      img2Ref.current.style.transform = move2;
    };

    window.addEventListener("scroll", imgScroll);

    return () => {
      window.removeEventListener("scroll", imgScroll);
    };
  }, []);

  return (
    <section>
      <div className={agencyStyle.imgGroup}>
        <img
          src={`${path}/images/SplashColor.png`}
          alt="SplashColor"
          className={agencyStyle.img1}
          ref={img1Ref}
        />
        <img
          src={`${path}/images/CartoonMac.png`}
          alt="MoonsJuice"
          className={agencyStyle.img2}
          ref={img2Ref}
        />
      </div>
      <h3>
        Leading digital agency with solid design and development expertise. We
        focus on building Webflow websites.
      </h3>
    </section>
  );
};

export default Agency;
