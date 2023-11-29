import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import starFrame from "../image/starFrame.svg";

export const AllInOne = () => {
  const elementRef = useRef(null);

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
      <div className="moveLineBox">
        <div className="moveLine" id="lineMove"></div>
      </div>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
        <img src={starFrame} className="stars" style={{ width: "100%" }}></img>
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
    </>
  );
};
