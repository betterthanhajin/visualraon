import "./App.css";
import "./sample.css";
import React, { useRef } from "react";
import { LandingPage } from "./components/LandingPage";
import Header from "./components/Header";
function App() {
  const containerRef = useRef(null);
  return (
    <>
      <Header />
      <main data-scroll-container ref={containerRef}>
        <LandingPage />
      </main>
    </>
  );
}

export default App;
