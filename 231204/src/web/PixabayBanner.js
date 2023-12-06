import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import pixabayStyle from "../assets/styles/pixabayBanner.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const PixabayBanner = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const APPKEY = `40846064-823311df2bf5c347a7670fc40`;
    const URL = `https://pixabay.com/api/?key=${APPKEY}&q=yellow+flowers&image_type=photo`;

    const getData = async () => {
      const imgs = await axios.get(URL);
      //console.log(imgs.data.hits);
      setData(imgs.data.hits.slice(0, 5));
    };
    getData();
  }, []);
  return (
    <article>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={`mySwiper ${pixabayStyle.pixabaySwiper}`}>
        {data.map((img) => (
          <SwiperSlide key={img.id} className={pixabayStyle.bg}>
            <img src={img.largeImageURL} alt={img.tags} />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

export default PixabayBanner;
