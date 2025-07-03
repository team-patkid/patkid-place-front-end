import { style } from "@vanilla-extract/css";

export const bgContainerStyle = style({
  gridArea: "background",
  position: "fixed",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  width: "500px",
  height: "100vh",
  zIndex: -1,
  
  "@media": {
    "screen and (max-width: 500px)": {
      left: 0,
      transform: "none",
      width: "100%",
    },
  },
});

export const bgStyle = style({
  width: "100%",
  height: "100vh",
  objectFit: "cover",
});

export const bgTwoStyle = style([
  bgStyle,
  {
    position: "absolute",
    top: "1081px",
    left: "0",
  },
]);

export const bgThreeStyle = style([
  bgStyle,
  {
    position: "absolute",
    height: "384px",
    top: "2162px",
    left: "0",
  },
]);
