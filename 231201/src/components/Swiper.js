import React, { useState, useEffect } from "react";
import axios from "axios"; // axios import 추가
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import MyStyle from "./Main.module.css";

const MySwiper = () => {
  // 컴포넌트 이름 변경
  const [data, setData] = useState([]);

  useEffect(() => {
    const APP_KEY = "40846064-823311df2bf5c347a7670fc40";
    const URL = `https://pixabay.com/api/?key=${APP_KEY}&q=nature&image_type=photo&lang=ko`; // text 변수가 정의되어 있지 않아 기본값인 'nature' 사용
    const getData = async () => {
      try {
        // setLoading(true); // setLoading을 선언하지 않았기 때문에 주석 처리
        const res = await axios.get(URL);
        setData(res.data.hits);
      } catch (err) {
        // setLoading(true);
        console.log("오류", err);
        setData([]);
      } finally {
        // setLoading(false);
      }
    };

    getData();
  }, []); // text가 정의되어 있지 않아 빈 배열로 변경

  return (
    <div className={MyStyle.swiperSlide}>
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
            <img
              src={img.webformatURL}
              alt={img.user}
              className={MyStyle.swiperImg}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MySwiper;
