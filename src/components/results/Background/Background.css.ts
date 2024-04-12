import { style } from "@vanilla-extract/css";

export const bgStyle = style({
  marginLeft: "auto",
  marginRight: "auto",
  width: "500px",
  height: "1081px",
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
