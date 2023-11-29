export const WideMainVideo = () => {
  return (
    <>
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
    </>
  );
};
