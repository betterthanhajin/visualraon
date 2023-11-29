import React from "react";
import { WideSlider } from "./WideSlider";
import { WideMainVideo } from "./WideMainVideo";
import { AllInOne } from "./AllInOne";
import { OurClient } from "./OurClient";
import "../styles/BubblePure.css";

export function LandingPage() {
  return (
    <>
      <div id="scrollContainer">
        <section style={{ position: "relative" }}>
          <div className="o-container">
            <WideMainVideo />
          </div>
        </section>

        <section style={{ width: "100%", position: "relative" }}>
          <div className="o-container" style={{ position: "relative" }}>
            <WideSlider />
          </div>
        </section>

        <section style={{ width: "100%", position: "relative" }} id="allInone">
          <div
            className="o-container"
            style={{ position: "relative", paddingLeft: 20, paddingRight: 20 }}
          >
            <AllInOne />
          </div>
        </section>

        <section
          style={{ width: "100%", position: "relative", marginTop: 200 }}
        >
          <OurClient />
        </section>
      </div>
    </>
  );
}
