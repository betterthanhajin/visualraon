import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useRef } from "react";
import slide01 from "../image/slide_01.png";
import slide02 from "../image/slide_02.png";
import slide03 from "../image/slide_03.png";
import slide04 from "../image/slide_04.png";
import starFrame from "../image/starFrame.svg";

export function LandingPage() {
  return (
    <>
      ㄴ
      <div id="scrollContainer">
        <section style={{ position: "relative" }}>
          <div className="o-container">
            <h1
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                zIndex: 10,
                fontSize: "7vw",
                color: "white",
              }}
            >
              VISUAL
              <br />
              RAON
            </h1>
            <div
              className="video-container"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
              }}
            >
              <video
                controls="controls"
                muted="muted"
                autoPlay
                loop="loop"
                playsInline="1"
                className="videoItem"
                webkit-playsinline="1"
                style={{ contentVisibility: "auto", width: "100%" }}
              >
                <source
                  src="https://dev.zipshowkorea.com/assets/Zipshowkorea2023.5508ea02.mp4"
                  type="video/ogg"
                ></source>
                <source
                  src="https://dev.zipshowkorea.com/assets/Zipshowkorea2023.5508ea02.mp4"
                  type="video/mp4"
                ></source>
              </video>
            </div>
            <header className="c-header" id="header">
              <div
                className="c-header_heading"
                data-scroll
                data-scroll-speed="-8"
                data-scroll-position="bottom"
                data-scroll-target="#header"
                data-scroll-repeat
                style={{ color: "white" }}
              >
                <div className="o-layout">
                  <div
                    className="o-layout_item u-1/2"
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="-2"
                    data-scroll-position="top"
                    data-scroll-target="#header"
                  >
                    <span className="u-label c-header_heading_label">
                      <a
                        href="https://locomotive.ca"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "white",
                        }}
                      >
                        VISUALRAON
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </section>

        <section style={{ width: "100%", position: "relative" }}>
          <div className="o-container" style={{ position: "relative" }}>
            <div style={{ paddingLeft: 10, paddingRight: 10 }}>
              <span style={{ color: "white", fontSize: 45 }}>
                ## OUR
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS
              </span>
              <hr color="white" size="1px"></hr>
            </div>
            <div>
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
                mousewheel={true}
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
                    src={slide01}
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
                    src={slide02}
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
                    src={slide03}
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
                    src={slide04}
                    className="sketchImg"
                    width={500}
                    height={500}
                    style={{ width: "100%" }}
                  ></img>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        <section style={{ width: "100%", position: "relative" }}>
          <div className="o-container" style={{ position: "relative" }}>
            <div className="moveLineBox">
              <div className="moveLine" id="lineMove"></div>
            </div>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
              <img
                src={starFrame}
                className="stars"
                style={{ width: "100%" }}
              ></img>
            </div>
            <div
              style={{
                color: "white",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginTop: 200,
              }}
            >
              <div>
                <h2>기획</h2>
                <article style={{ marginTop: 10 }}>
                  클라이언트와 충분한 협의를
                  <br />
                  진행한 후 비주얼라온의 크리
                  <br />
                  에이티브를 결합하여 기획을
                  <br /> 진행합니다
                </article>
              </div>
              <div>
                <h2>기획</h2>
                <article style={{ marginTop: 10 }}>
                  클라이언트와 충분한 협의를
                  <br />
                  진행한 후 비주얼라온의 크리
                  <br />
                  에이티브를 결합하여 기획을
                  <br /> 진행합니다
                </article>
              </div>
            </div>
            <div
              style={{
                color: "white",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginTop: 200,
              }}
            >
              <div>
                <h2>기획</h2>
                <article style={{ marginTop: 10 }}>
                  클라이언트와 충분한 협의를
                  <br />
                  진행한 후 비주얼라온의 크리
                  <br />
                  에이티브를 결합하여 기획을
                  <br /> 진행합니다
                </article>
              </div>
              <div>
                <h2>기획</h2>
                <article style={{ marginTop: 10 }}>
                  클라이언트와 충분한 협의를
                  <br />
                  진행한 후 비주얼라온의 크리
                  <br />
                  에이티브를 결합하여 기획을
                  <br /> 진행합니다
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
