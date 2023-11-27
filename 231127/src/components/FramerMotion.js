import { motion, useAnimation, useAnimate } from "framer-motion";
import agencyStyle from "../styles/Agency.module.css";
import { useEffect } from "react";

const FramerMotion = () => {
  const path = process.env.PUBLIC_URL;
  const control1 = useAnimation();
  const control2 = useAnimation();

  useEffect(() => {
    const imgScroll = () => {
      const scrollY = window.scrollY;
      const scrollHt = document.body.scrollHeight - window.innerHeight;
      const transY1 = (scrollY / scrollHt) * 30;
      const transY2 = (scrollY / scrollHt) * -30;
      control1.start({ y: transY1 });
      control2.start({ y: transY2 });
    };

    window.addEventListener("scroll", imgScroll);

    return () => {
      window.removeEventListener("scroll", imgScroll);
    };
  }, [control1, control2]);

  return (
    <section>
      <motion.div
        className={agencyStyle.imgGroup}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        <motion.img
          src={`${path}/images/SplashColor.png`}
          alt="SplashColor"
          className={agencyStyle.img3}
          animate={control1}
        />
        <motion.img
          src={`${path}/images/CartoonMac.png`}
          alt="MoonsJuice"
          className={agencyStyle.img3}
          animate={control2}
        />
      </motion.div>
      <motion.h3
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}>
        Leading digital agency with solid design and development expertise. We
        focus on building Webflow websites.
      </motion.h3>
    </section>
  );
};

export default FramerMotion;
