import { Swiper, SwiperSlide } from "swiper/react";
import imgData from "../assets/DB/Imgdata";
import React, { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

const ImgBox2 = () => {
  const [data, setData] = useState(imgData);

  return (
    <div className="imgBox2">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper">
        {data.map((img) => (
          <SwiperSlide key={img.id}>
            <img src={img.image} alt={img.id} />
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="imgBox2txt">Types of clients we want to work</p>
    </div>
  );
};

export default ImgBox2;
