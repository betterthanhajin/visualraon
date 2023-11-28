import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { throttle } from "lodash";
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
import starFrame from "../image/starFrame.svg";

export function LandingPage() {
  const elementRef = useRef(null);
  setTimeout(() => {
    let circlewrap = document.getElementById("circleEvent");
    let circles = document.querySelectorAll(".circle0");
    let random = Math.floor(Math.random() * 180);
    let random2 = Math.floor(Math.random() * 480);
    const mouseX = random;
    const mouseY = random2;

    for (let i = 0; i < circles.length; i++) {
      circles[i].style.left = mouseX + "px";
      circles[i].style.top = mouseY + "px";
      circles[i].style.transition = "1s";
    }
    let j = 0;
    circlewrap.addEventListener("mouseout", function () {
      let random = Math.floor(Math.random() * 600 + 100);
      let random2 = Math.floor(Math.random() * 480 + 200);
      const mouseX = random;
      const mouseY = random2;
      circles[j].style.left = mouseX + "px";
      circles[j].style.top = mouseY + "px";
      circles[j].style.transition = "2.5s";
      j++;
      if (j == circles.length) {
        j = 0;
      }
    });
  }, 1000);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 요소가 화면에 나타나면 CSS 클래스를 추가하여 애니메이션을 실행합니다.
          entry.target.classList.add("typing-text");
        }
      });
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  return (
    <>
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
                padding: "0 20",
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
                backgroundColor: "yellow",
                top: "0",
                left: "0",
                right: "0",
              }}
            >
              {/* <video
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
              </video> */}
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
            <div style={{ paddingLeft: 10, paddingRight: 10, marginTop: 100 }}>
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
          </div>
        </section>

        <section style={{ width: "100%", position: "relative" }} id="allInone">
          <div
            className="o-container"
            style={{ position: "relative", paddingLeft: 20, paddingRight: 20 }}
          >
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
            <motion.div
              initial={{ x: -1500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 4 }}
              style={{
                width: 400,
                border: "1px solid white",
                position: "absolute",
                top: 300,
                left: 0,
              }}
            />
            <motion.div
              initial={{ y: -700, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 4 }}
              style={{
                borderLeft: "2px solid white" /* 세로 방향 선 속성 */,
                height: 300 /* 선의 길이 */,
                margin: 20 /* 여백 설정 */,
                position: "absolute",
                top: 0,
                left: "48%",
              }}
            />
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 4 }}
              style={{
                width: 400,
                border: "1px solid white",
                position: "absolute",
                top: 300,
                right: 0,
              }}
            />
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 200, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 4 }}
              style={{
                borderLeft: "2px solid white" /* 세로 방향 선 속성 */,
                height: 150 /* 선의 길이 */,
                margin: 20 /* 여백 설정 */,
                position: "absolute",
                bottom: 0,
                left: "48%",
                zIndex: 10,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "35%",
                right: 0,
              }}
            >
              <span
                style={{ color: "white", fontSize: 45 }}
                className="typing-text"
                ref={elementRef}
              >
                ## ALL-IN-ONE
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SYSTEM
              </span>
            </div>
            <div
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                marginTop: 200,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 400,
                }}
              >
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
              <div style={{ position: "absolute", right: 400 }}>
                <h2>제작</h2>
                <article style={{ marginTop: 10 }}>
                  기획된 내용에 따라 다양한
                  <br />
                  프로그램을 활용하여
                  <br />
                  고퀄리티 콘텐츠를 제작합니다
                </article>
              </div>
            </div>
            <div
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                marginTop: 400,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 400,
                  zIndex: 10,
                }}
              >
                <h2>설치</h2>
                <article style={{ marginTop: 10 }}>
                  설치될 공간과 제작된 콘텐츠
                  <br />
                  에 적합한 장비 , 인테리어등을
                  <br />
                  통해 콘텐츠 활용도를 극대화
                  <br /> 합니다
                </article>
              </div>
              <div
                style={{
                  position: "absolute",
                  right: 400,
                  zIndex: 10,
                }}
              >
                <h2>유지보수</h2>
                <article style={{ marginTop: 10 }}>
                  설치될 공간과 제작된 콘텐츠
                  <br />
                  에 적합한 장비 , 인테리어등을
                  <br />
                  통해 콘텐츠 활용도를 극대화
                  <br /> 합니다
                </article>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{ width: "100%", position: "relative", marginTop: 200 }}
        >
          <div style={{ paddingLeft: 10, paddingRight: 10 }}>
            <span style={{ color: "white", fontSize: 45 }}>
              ## OUR
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLIENTS
            </span>
            <hr color="white" size="1px"></hr>
          </div>
          <div className="circleGroup" id="circleEvent">
            <div id="circle0" className="circle0">
              <span>문화재청</span>
            </div>

            <div id="circle1" className="circle0">
              <span>강화군</span>
            </div>

            <div id="circle2" className="circle0">
              <span>김해시</span>
            </div>

            <div id="circle3" className="circle0">
              <span>문화재단</span>
            </div>

            <div id="circle4" className="circle0">
              <span>인천시</span>
            </div>

            <div id="circle5" className="circle0">
              <span>서산시</span>
            </div>

            <div id="circle6" className="circle0">
              <span>김해시</span>
            </div>

            <div id="circle7" className="circle0">
              <span>문화재청</span>
            </div>

            <div id="circle8" className="circle0">
              <span>고흥군</span>
            </div>

            <div id="circle9" className="circle0">
              <span>양구군</span>
            </div>

            <div id="circle10" className="circle0">
              <span>영동군</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
