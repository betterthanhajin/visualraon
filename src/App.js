import "./App.css";
import "./sample.css";
import React, { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { LandingPage } from "./components/LandingPage";
import Header from "./components/Header";
function App() {
  const containerRef = useRef(null);
  return (
    <>
      {/* <link rel="stylesheet" href="/sample.css" /> */}
      <LocomotiveScrollProvider
        options={{
          smooth: true
          // ... all available Locomotive Scroll instance options
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        <Header />
        <main data-scroll-container ref={containerRef}>
          <LandingPage />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
