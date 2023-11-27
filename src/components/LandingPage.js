export function LandingPage() {
  return (
    <>
      {/* <div style={{ background: "orange", width: "100%", height: "500px" }}>
        aaaa
      </div>
      <div style={{ background: "pink", width: "100%", height: "500px" }}>
        bbbb
      </div>
      <div style={{ background: "blue", width: "100%", height: "500px" }}>
        cccc
      </div> */}

      <div
        className="o-scroll"
        id="js-scroll"
        data-scroll-container
        style={{ background: "white" }}
      >
        <section data-scroll-section style={{ position: "relative" }}>
          <div className="o-container">
            <h1
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                zIndex: 10,
                fontSize: "7vw",
                color: "white"
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
                right: "0"
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
                          color: "white"
                        }}
                      >
                        VISUALRAON
                      </a>
                    </span>
                  </div>
                  <div
                    className="o-layout_item u-1/2"
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="2"
                    data-scroll-position="top"
                    data-scroll-target="#header"
                  >
                    <div className="u-text-right">
                      <p
                        className="u-label c-header_heading_label"
                        style={{
                          color: "white",
                          mixBlendMode: "difference"
                        }}
                      >
                        zipshowkorea.2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h1
                className="c-header_title o-h1"
                data-scroll
                style={{ color: "#ffb521e0", mixBlendMode: "difference" }}
              >
                <span className="c-header_title_line">
                  <span
                    data-scroll
                    data-scroll-speed="3"
                    data-scroll-position="top"
                  >
                    Visual
                  </span>
                </span>
                <span className="c-header_title_line">
                  <span
                    data-scroll
                    data-scroll-speed="2"
                    data-scroll-position="top"
                  >
                    Raon
                  </span>
                </span>
                <span className="c-header_title_line -version u-white">
                  <p
                    className="o-h1"
                    data-scroll
                    data-scroll-speed="3"
                    data-scroll-position="top"
                    data-scroll-delay="0.05"
                  >
                    zipshow
                  </p>
                  <span
                    className="o-h1"
                    data-scroll
                    data-scroll-speed="5"
                    data-scroll-position="top"
                    data-scroll-delay="0.05"
                  >
                    Korea
                  </span>
                  <span
                    className="o-h1"
                    data-scroll
                    data-scroll-speed="2"
                    data-scroll-position="top"
                    data-scroll-delay="0.05"
                  >
                    .
                  </span>
                  <span
                    className="o-h1"
                    data-scroll
                    data-scroll-speed="4"
                    data-scroll-position="top"
                    data-scroll-delay="0.05"
                  ></span>
                </span>
              </h1>
              <hr
                className="c-header_line"
                data-scroll
                data-scroll-offset="100"
              />
              <a
                className="c-header_logo"
                href="https://locomotive.ca"
                target="_blank"
              >
                <svg role="img">
                  <use xlinkHref="dist/images/sprite.svg#logo"></use>
                </svg>
              </a>
            </header>
          </div>
        </section>

        <section className="c-section" data-scroll-section>
          <div
            className="o-container"
            id="speed-control"
            style={{ position: "relative" }}
          >
            <div
              className="video-container"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "0",
                right: "0"
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
                style={{ contentVisibility: "auto" }}
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

            <div className="o-layout -gutter">
              <div className="o-layout_item u-2/5@from-medium">
                <div
                  className="c-section_infos -padding"
                  data-scroll
                  data-scroll-speed="-2"
                  data-scroll-call="test"
                >
                  <div
                    className="c-section_infos_inner"
                    data-scroll
                    data-scroll-offset="200"
                    style={{ color: "white" }}
                  >
                    <h3 style={{ fontWeight: 900, fontSize: "2rem" }}>
                      01. <br />
                      프로젝트
                    </h3>
                    <div className="c-sections_infos_text u-text">
                      <p
                        style={{
                          fontFamily: "Noto Serif KR",
                          fontSize: "1.5rem",
                          fontWeight: 700
                        }}
                      >
                        정확한 소통을 통한 깊이있는 분석으로 스토리를 찾아내고
                        각 분야 전문가들이 모여 당신만의 비주얼로 완성합니다.
                        우리의 상상으로부터 브랜드를 넘어 세상에 기억될 당신만의
                        스토리, 비주얼라온이 만듭니다.!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="o-layout_item u-3/5@from-medium">
                <div
                  className="c-speed-block"
                  data-scroll
                  data-scroll-speed="2"
                >
                  <div
                    className="o-image_wrapper"
                    data-scroll
                    data-scroll-call="dynamicBackground"
                    data-scroll-repeat
                  >
                    <div className="o-image">
                      <img
                        src="https://lh3.googleusercontent.com/qo-fBvfzVVsE8cihC7cseqrgtdCwp4NqjlvtVjfoWIxTUiBRe4W4mJW4VS4BfuvMdHJhdy_9mq58EWx5VC2rM1TGILgPVKJqzBp5kEPF3CZWSe740Vjxzko=w1920-h1081-n"
                        className=""
                        alt="마당을나온암탉_03.png"
                        data-attach="true"
                        data-img-original="OFF"
                      ></img>
                    </div>
                  </div>
                  {/* <p className="c-speed-block_title" data-scroll>
                    마당을 나온 암탉
                  </p> */}
                  <span
                    className="c-speed-block_bubble"
                    data-scroll
                    data-scroll-speed="4"
                    data-scroll-call="dynamicColor"
                    data-scroll-repeat
                    style={{ color: "#d4c9c9" }}
                  >
                    Create
                  </span>
                </div>
              </div>
            </div>
            <div className="o-layout -gutter -bottom">
              <div className="o-layout_item u-2/5@from-medium">
                <div
                  className="c-speed-block"
                  data-scroll
                  data-scroll-speed="4"
                >
                  <div
                    className="o-image_wrapper"
                    data-scroll
                    data-scroll-call="dynamicBackground"
                    data-scroll-repeat
                  >
                    <div
                      className="o-image"
                      data-scroll
                      data-scroll-speed="-1.5"
                    >
                      <img
                        src="https://lh3.googleusercontent.com/1lCoK1Ygrf2hshYRBL5DfqKi2nlr_kgosMpK1vAHQi0YyLVCGxD3ygtQ3fE4ncI-MbsKa5vn10UqLCBikflkevxOtxJEf_y7wIYcSKZhlgtaQgdnKsi-vA=w1920-h1080-n"
                        className="img-responsive"
                        alt="가야_해상도시_01.jpg"
                        data-attach="true"
                        data-img-original="OFF"
                      ></img>
                    </div>
                  </div>
                  {/* <p className="c-speed-block_title" data-scroll>
                    Speed x4
                  </p> */}
                  {/* <span
                    className="c-speed-block_bubble -right"
                    data-scroll
                    data-scroll-speed="1"
                    data-scroll-call="dynamicColor"
                    data-scroll-repeat
                  >
                    aaa
                  </span> */}
                  <span
                    className="c-speed-block_bubble -left -bottom"
                    data-scroll
                    data-scroll-speed="3"
                    data-scroll-call="dynamicColor"
                    data-scroll-repeat
                  >
                    3x
                  </span>
                </div>
              </div>
              <div className="o-layout_item u-3/5@from-medium">
                <div className="o-layout u-text-right">
                  <div className="o-layout_item u-1/2@from-medium">
                    <div
                      className="c-speed-block -margin"
                      data-scroll
                      data-scroll-speed="6"
                    >
                      <div
                        className="o-image_wrapper"
                        data-scroll
                        data-scroll-call="dynamicBackground"
                        data-scroll-repeat
                      >
                        <div
                          className="o-image"
                          data-scroll
                          data-scroll-speed="-2"
                        >
                          <img
                            src="https://lh3.googleusercontent.com/DLm0UZOBF8ywNGR0eMzZnNeTeJn0XRPFoG3Vn0X9Qk0Y70sACwXaq_71Ypb_w_CE_quqgLEmRtxpD8FS4-pFKHAzbS3gqI4SFyNu7y5ndqCYj7NInhNhSg=w1920-h1080-n"
                            className="img-responsive"
                            alt="박수근미술관_파빌리온_01.png"
                            data-attach="true"
                            data-img-original="OFF"
                          ></img>
                        </div>
                      </div>
                      {/* <p className="c-speed-block_title" data-scroll>
                        Speed x6
                      </p> */}
                      <span
                        className="c-speed-block_bubble -left -top"
                        data-scroll
                        data-scroll-speed="2"
                        data-scroll-call="dynamicColor"
                        data-scroll-repeat
                      >
                        2x
                      </span>
                      <span
                        className="c-speed-block_bubble -right"
                        data-scroll
                        data-scroll-speed="6"
                        data-scroll-call="dynamicColor"
                        data-scroll-repeat
                      >
                        6x
                      </span>
                      <span
                        className="c-speed-block_bubble -left -bottom"
                        data-scroll
                        data-scroll-speed="9"
                        data-scroll-call="dynamicColor"
                        data-scroll-repeat
                      >
                        9x
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="c-section" data-scroll-section>
          <div className="o-container" id="scroll-direction">
            <div
              className="video-container"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "0",
                right: "0"
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
                style={{ contentVisibility: "auto" }}
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
            <div className="c-direction-block_wrapper">
              <div
                className="c-section_infos -padding"
                data-scroll
                data-scroll-sticky
                data-scroll-target="#scroll-direction"
                style={{ mixBlendMode: "difference" }}
              >
                <div
                  className="c-section_infos_inner"
                  data-scroll
                  style={{ color: "white" }}
                >
                  <h3 style={{ fontWeight: 900, fontSize: "2rem" }}>
                    02. <br />
                    클라이언트
                  </h3>
                  <div className="c-sections_infos_text u-text">
                    <p
                      style={{
                        fontFamily: "Noto Serif KR",
                        fontSize: "1.5rem",
                        fontWeight: 700
                      }}
                    >
                      비주얼라온은 다양한 고객사들과 함께 크리에이티브한
                      결과물을 만들어 내고 있습니다. 비주얼라온과 함께하는
                      고객사들을 소개합니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="c-direction-block" id="direction">
                <div className="c-direction-block_item -one">
                  <span
                    className="c-direction-block_item_inner"
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="6"
                    data-scroll-target="#direction"
                  >
                    기획의 어려움
                  </span>
                </div>
                <div className="c-direction-block_item -two">
                  <span
                    className="c-direction-block_item_inner"
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="-8"
                    data-scroll-target="#direction"
                  >
                    제작의 어려움
                  </span>
                </div>
                <div className="c-direction-block_item -three">
                  <span
                    className="c-direction-block_item_inner"
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="9"
                    data-scroll-target="#direction"
                    data-scroll-delay="0.05"
                  >
                    설치의 어려움
                  </span>
                </div>
                <div className="c-direction-block_item -four">
                  <span
                    className="c-direction-block_item_inner"
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="15"
                    data-scroll-target="#direction"
                  >
                    유지보수의 어려움
                  </span>
                </div>
                <div className="c-direction-block_item -five">
                  <span
                    className="c-direction-block_item_inner"
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="-20"
                    data-scroll-target="#direction"
                    data-scroll-delay="0.05"
                  >
                    모든걸 한번에 해결할 수 있는
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="c-section" data-scroll-section>
          <div className="o-container" id="lerp-effect">
            <div
              className="video-container"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "0",
                right: "0"
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
                style={{ contentVisibility: "auto" }}
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
            <div className="o-layout">
              <div className="o-layout_item u-2/5@from-medium">
                <div className="c-section_infos" data-scroll>
                  <div
                    className="c-section_infos_inner"
                    data-scroll
                    data-scroll-offset="200"
                  >
                    <h3 style={{ fontWeight: 900, fontSize: "2rem" }}>
                      03. <br />
                      올인원시스템
                    </h3>
                    <div className="c-sections_infos_text u-text">
                      <p
                        style={{
                          fontFamily: "Noto Serif KR",
                          fontSize: "1.5rem",
                          fontWeight: 700
                        }}
                      >
                        비주얼라온에서는 기획부터 제작, 설치 및 유지보수까지
                        모든 과정을 올인원 시스템으로 진행하고 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="o-layout_item u-3/5@from-medium">
                <div className="c-lerp-block">
                  <span
                    className="c-lerp-block_index"
                    data-scroll
                    data-scroll-delay="0.2"
                    data-scroll-speed="6"
                    data-scroll-call="dynamicColor"
                    data-scroll-repeat
                  >
                    기획
                  </span>
                  <span
                    className="c-lerp-block_title"
                    data-scroll
                    data-scroll-delay="0.6"
                    data-scroll-speed="6"
                  >
                    <span>
                      클라이언트와 충분한 협의를 진행한 후 비주얼라온의
                      크리에이티브를 결합하여 기획을 진행합니다
                    </span>
                  </span>
                </div>
                <div className="c-lerp-block">
                  <span
                    className="c-lerp-block_index"
                    data-scroll
                    data-scroll-delay="0.06"
                    data-scroll-speed="6"
                    data-scroll-call="dynamicColor"
                    data-scroll-repeat
                  >
                    제작
                  </span>
                  <span
                    className="c-lerp-block_title"
                    data-scroll
                    data-scroll-delay="0.1"
                    data-scroll-speed="6"
                  >
                    <span>
                      기획된 내용에 따라 다양한 프로그램을 활용하여 고퀄리티
                      콘텐츠를 제작합니다
                    </span>
                  </span>
                </div>
                <div className="c-lerp-block">
                  <span
                    className="c-lerp-block_index"
                    data-scroll
                    data-scroll-delay="0.06"
                    data-scroll-speed="6"
                    data-scroll-call="dynamicColor"
                    data-scroll-repeat
                  >
                    설치
                  </span>
                  <span className="c-lerp-block_title" data-scroll>
                    <span
                      data-scroll
                      data-scroll-delay="0.13"
                      data-scroll-speed="6"
                    >
                      설치될 공간과 제작된 콘텐츠에 적합한 장비,인테리어 등을
                      통해 콘텐츠 활용도를 극대화합니다.
                    </span>
                    {/* <span
                      data-scroll
                      data-scroll-delay="0.12"
                      data-scroll-speed="6"
                    >
                      y
                    </span>
                    <span
                      data-scroll
                      data-scroll-delay="0.11"
                      data-scroll-speed="6"
                    >
                      {" "}
                    </span>
                    <span
                      data-scroll
                      data-scroll-delay="0.1"
                      data-scroll-speed="6"
                    >
                      L
                    </span>
                    <span
                      data-scroll
                      data-scroll-delay="0.09"
                      data-scroll-speed="6"
                    >
                      e
                    </span>
                    <span
                      data-scroll
                      data-scroll-delay="0.08"
                      data-scroll-speed="6"
                    >
                      t
                    </span>
                    <span
                      data-scroll
                      data-scroll-delay="0.07"
                      data-scroll-speed="6"
                    >
                      t
                    </span>
                    <span
                      data-scroll
                      data-scroll-delay="0.06"
                      data-scroll-speed="6"
                    >
                      e
                    </span>
                    <span
                      data-scroll
                      data-scroll-delay="0.05"
                      data-scroll-speed="6"
                    >
                      r
                    </span> */}
                  </span>
                </div>
                <div className="c-lerp-block">
                  <span
                    className="c-lerp-block_index"
                    data-scroll
                    data-scroll-delay="0.03"
                    data-scroll-speed="6"
                    data-scroll-call="dynamicColor"
                    data-scroll-repeat
                  >
                    유지
                  </span>
                  <span
                    className="c-lerp-block_title"
                    data-scroll
                    data-scroll-delay="0.04"
                    data-scroll-speed="6"
                  >
                    <span>
                      체결한 계약 사항에 따라 적절한 유지보수 서비스를
                      지원합니다.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="c-section -fixed"
          data-scroll-section
          data-persistent
        >
          <div className="o-container" id="fixed-elements">
            <div
              className="video-container"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "0",
                right: "0"
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
                style={{ contentVisibility: "auto" }}
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
            <div className="o-layout">
              <div className="o-layout_item u-2/5@from-medium">
                <div
                  className="c-section_infos -padding"
                  data-scroll
                  data-scroll-sticky
                  data-scroll-target="#fixed-elements"
                  style={{ mixBlendMode: "difference" }}
                >
                  <div
                    className="c-section_infos_inner"
                    data-scroll
                    data-scroll-offset="200"
                    style={{ color: "white" }}
                  >
                    <h3 style={{ fontWeight: 900, fontSize: "2rem" }}>
                      04. <br />
                      회사소개
                    </h3>
                    <div className="c-sections_infos_text u-text">
                      <p
                        style={{
                          fontFamily: "Noto Serif KR",
                          fontSize: "1.5rem",
                          fontWeight: 700
                        }}
                      >
                        비주얼라온은 프로젝션 맵핑, 인터랙티브 체험, 가상현실,
                        증강현실, 미디어파사드, 디지털 사이니지 등 콘텐츠와
                        미디어의 결합을 통해 시각적인 즐거움을 주는 크리에이티브
                        플랫폼 그룹입니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="o-layout_item u-3/5@from-medium">
                <div
                  className="c-fixed_wrapper"
                  data-scroll
                  data-scroll-call="dynamicBackground"
                  data-scroll-repeat
                >
                  <div className="c-fixed_target" id="fixed-target"></div>
                  <div
                    className="c-fixed"
                    data-scroll
                    data-scroll-sticky
                    data-scroll-target="#fixed-target"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/qyt9cZQ4Mz9w-P5KI0PiSUDXcQemcxDa6ndPoh-v4ZrC9qmw2ffUxnjYV2hzT4EQF78V8yRwbkR4LCzkp_HZj1N-_WE34FmyCMQtVfj9URxrb7yJO-ju=w650-h370-n')"
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="c-section" data-scroll-section>
          <div className="o-container">
            <div className="c-cta">
              <h1 className="o-title" data-scroll>
                <span className="o-title_line">
                  <span>비주얼라온만의</span>
                </span>
                <span className="o-title_line">
                  <span>컨텐츠를</span>
                </span>
                <span className="o-title_line u-white">
                  <span style={{ background: "black" }}>즐겨보세요</span>
                </span>
              </h1>
              <hr className="c-cta_line" data-scroll data-scroll-offset="100" />
              <div className="c-cta_content">
                <div className="o-layout -gutter">
                  <div className="o-layout_item u-2/5@from-medium">
                    <p className="u-label"></p>
                  </div>
                  <div className="o-layout_item u-3/5@from-medium">
                    <div className="c-cta_section">
                      <div
                        className="c-cta_content_text"
                        data-scroll
                        data-scroll-offset="100"
                      >
                        <h3>비주얼라온</h3>
                        <p>
                          인천광역시 부평구 부평대로 293, 905호 Copyright 2023
                          <br />
                          (주)집쇼코리아 all rights reserved.
                        </p>
                        <p>
                          Visit the GitHub repository page for a complete
                          introduction and list of available options. Search the
                          GitHub issue tracker carefully to check if your
                          issue/feature has already been reported/requested
                          before opening a new issue or submitting a pull
                          request.
                        </p>
                      </div>
                      <a
                        className="c-cta_button o-button"
                        href="https://github.com/locomotivemtl/locomotive-scroll"
                        target="_blank"
                        data-scroll
                        data-scroll-offset="100"
                      >
                        <span className="o-button_icon">
                          <svg role="img">
                            <use xlinkHref="dist/images/sprite.svg#github"></use>
                          </svg>
                        </span>
                        VisualRaon
                        <span className="o-button_arrow u-icon">→</span>
                      </a>
                    </div>
                    <hr
                      className="c-cta_line -margin"
                      data-scroll
                      data-scroll-offset="100"
                    />
                    <div className="c-cta_section">
                      <div
                        className="c-cta_content_text"
                        data-scroll
                        data-scroll-offset="100"
                      >
                        <h4>
                          Neue Montreal <br />
                          Pangram Pangram® Foundry
                        </h4>
                        <p>
                          You like the font used on this page? Well this is your
                          lucky day. You can get it on{" "}
                          {/* <a
                            className="o-link -underline"
                            href="https://pangrampangram.com/"
                            target="_blank"
                          >
                            pangrampangram.com
                          </a> */}
                          ! Thanks to our good friend Mathieu Desjardins ❤️
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section data-scroll-section>
          <div className="c-choochoo">
            <div
              className="c-choochoo_item u-text-center"
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="10"
            >
              <span>🚂</span>
            </div>
            <div
              className="c-choochoo_item u-text-center -reverse"
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-10"
            >
              <span>🚂</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
