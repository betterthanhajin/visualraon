import "./App.css";
import "./locomotiveStyle.css";
import React, { useRef } from "react";
import { LandingPage } from "./components/LandingPage";
import Header from "./components/Header";
import { useLax } from "use-lax";
import { elements } from "./lax-config";

function App() {
  const containerRef = useRef(null);
  useLax({
    drivers: [
      {
        name: "scrollY",
        // getValueFn: () => window.scrollY,

        getValueFn: () => document.documentElement.scrollTop,
        options: { frameStep: 1 },
      },
    ],
    elements,
  });

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
