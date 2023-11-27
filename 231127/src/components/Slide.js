import { Swiper, SwiperSlide } from "swiper/react";
import { BiCaretRightCircle, BiCaretLeftCircle } from "react-icons/bi";

import "swiper/css";
import "swiper/css/navigation";
import slideStyle from "../styles/Slide.module.css";

import { Autoplay, Navigation } from "swiper/modules";

const Slide = () => {
  const path = process.env.PUBLIC_URL;

  const NextBtn = () => <BiCaretRightCircle className="swiper-button-next" />;
  const PrevBtn = () => {
    return <BiCaretLeftCircle className="swiper-button-prev" />;
  };

  return (
    <section>
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className={slideStyle.slide}>
        <SwiperSlide className={slideStyle.slideItem}>
          <img src={`${path}/images/MockUp1.png`} alt="MockUp1" />
          <p>When will be Available my brand new website?</p>
        </SwiperSlide>
        <SwiperSlide className={slideStyle.slideItem}>
          <img src={`${path}/images/MockUp2.jpg`} alt="MockUp2" />
          <p>Why do we use Webflow?</p>
        </SwiperSlide>
        <SwiperSlide className={slideStyle.slideItem}>
          <img src={`${path}/images/MockUp3.jpg`} alt="MockUp3" />
          <p>What is our SECRET ingredie</p>
        </SwiperSlide>
        <SwiperSlide className={slideStyle.slideItem}>
          <img src={`${path}/images/MockUp4.jpg`} alt="MockUp4" />
          <p>Types of clients we want to work</p>
        </SwiperSlide>
        {/* 커스텀 버튼 */}
        <PrevBtn />
        <NextBtn />
      </Swiper>
    </section>
  );
};

export default Slide;
