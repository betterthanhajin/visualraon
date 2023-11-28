import React from "react";

export function Header() {
  return (
    <div
      style={{
        backgroundColor: "black",
        marginLeft: "100px",
        marginRight: "100px",
        width: "100%",
        margin: "0 auto",
        position: "fixed" /* 헤더를 고정시킵니다. */,
        top: 0 /* 화면 상단에 고정됩니다. */,
        width: "100%" /* 가로 너비를 꽉 채웁니다. */,
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" /* 그림자 효과 */,
        zIndex: 100 /* 다른 요소 위에 표시될 수 있도록 z-index 설정 */,
      }}
    >
      <ul
        style={{
          padding: "20px",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <li>HOME</li>
        <li>PROJECTS</li>
        <li>ALL-IN-ONE</li>
        <li>CLIENTS</li>
      </ul>
    </div>
  );
}

export default Header;
