import { Swiper, SwiperSlide } from "swiper/react";
import catData from "../assets/DB/CatData";
import React, { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./styles.module.css";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const SwiperCom = () => {
  const path = process.env.PUBLIC_URL;
  const [data, setData] = useState(catData);
  return (
    <div className={styles.swiperCom}>
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper">
        {data.map((img) => (
          <SwiperSlide key={img.id}>
            <img src={path + img.image} alt={img.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCom;
