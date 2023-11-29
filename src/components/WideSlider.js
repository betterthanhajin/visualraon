import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import slide01 from "../image/slide_01.png";
import slide02 from "../image/slide_02.png";
import slide03 from "../image/slide_03.png";
import slide04 from "../image/slide_04.png";
import pic01 from "../image/pic_1.jpg";
import pic02 from "../image/pic_2.jpg";
import pic03 from "../image/pic_3.jpg";
import pic04 from "../image/pic_4.jpg";
import pic05 from "../image/pic_5.jpg";
import pic06 from "../image/pic_6.jpg";
import pic07 from "../image/pic_7.jpg";

export const WideSlider = () => {
  return (
    <>
      <div style={{ paddingLeft: 10, paddingRight: 10, marginTop: 100 }}>
        <span style={{ color: "white", fontSize: 45 }}>
          ## OUR
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS
        </span>
        <hr color="white" size="1px"></hr>
      </div>
      <div className="wide-main-video">
        <Swiper
          direction={"vertical"}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => {}}
          onSwiper={(swiper) => console.log(swiper)}
          className="swiperVertical"
          style={{ height: 500, overflow: "hidden" }}
        >
          <SwiperSlide className="slides" style={{}}>
            <img
              src={slide01}
              className="slideImg"
              width={500}
              height={500}
              style={{ width: "100%" }}
            ></img>
          </SwiperSlide>
          <SwiperSlide className="slides" style={{ width: 2145 }}>
            <img
              src={slide02}
              className="slideImg"
              width={500}
              height={500}
              style={{ width: "100%" }}
            ></img>
          </SwiperSlide>
          <SwiperSlide className="slides" style={{ width: 2145 }}>
            <img
              src={slide03}
              className="slideImg"
              width={500}
              height={500}
            ></img>
          </SwiperSlide>
          <SwiperSlide className="slides" style={{ width: 2145 }}>
            <img
              src={slide04}
              className="slideImg"
              width={500}
              height={500}
            ></img>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <Swiper
          direction={"horizontal"}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="swiperHorizontal"
          style={{ height: 600, overflow: "hidden" }}
        >
          <SwiperSlide
            className="sketchSlides"
            style={{ width: "50%", height: 600 }}
          >
            <img
              src={pic01}
              className="sketchImg"
              width={500}
              height={500}
              style={{ width: "100%" }}
            ></img>
          </SwiperSlide>
          <SwiperSlide
            className="sketchSlides"
            style={{
              height: 600,
              display: "flex",
              width: 4000,
              flexDirection: "row",
            }}
          >
            <img
              src={pic02}
              className="sketchImg"
              width={500}
              height={500}
              style={{ width: "100%" }}
            ></img>
          </SwiperSlide>
          <SwiperSlide
            className="sketchSlides"
            style={{ width: 1900, height: 600 }}
          >
            <img
              src={pic03}
              className="sketchImg"
              width={500}
              height={500}
              style={{ width: "100%" }}
            ></img>
          </SwiperSlide>
          <SwiperSlide
            className="sketchSlides"
            style={{ width: 1900, height: 600 }}
          >
            <img
              src={pic04}
              className="sketchImg"
              width={500}
              height={500}
              style={{ width: "100%" }}
            ></img>
          </SwiperSlide>
          <SwiperSlide
            className="sketchSlides"
            style={{ width: 1900, height: 600 }}
          >
            <img
              src={pic05}
              className="sketchImg"
              width={500}
              height={500}
              style={{ width: "100%" }}
            ></img>
          </SwiperSlide>
          <SwiperSlide
            className="sketchSlides"
            style={{ width: 1900, height: 600 }}
          >
            <img
              src={pic06}
              className="sketchImg"
              width={500}
              height={500}
              style={{ width: "100%" }}
            ></img>
          </SwiperSlide>
          <SwiperSlide
            className="sketchSlides"
            style={{ width: 1900, height: 600 }}
          >
            <img
              src={pic07}
              className="sketchImg"
              width={500}
              height={500}
              style={{ width: "100%" }}
            ></img>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
