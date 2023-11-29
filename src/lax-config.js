export const elements = [
  {
    selector: ".wide-main-video",
    animationData: {
      scrollY: {
        translateY: [
          [-400, 0, 100],
          [300, 0, 100],
        ],
        scale: [
          [100, "screenHeight"],
          [0.25, 10],
        ],
        opacity: [
          [0, "screenHeight/2", "screenHeight"],
          [1, 1, 0],
        ],
      },
    },
  },
];
