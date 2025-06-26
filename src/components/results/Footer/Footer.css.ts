import { style } from "@vanilla-extract/css";

export const footerStyle = style({
  position: "fixed",
  bottom: "0",
  width: "500px",
  margin: "0 auto",
  height: "100px",
  zIndex: 100,
});

export const footerRight = style({
  position: "absolute",
  width: "90px",
  height: "67px",
  left: "393px",
  top: "18px",
});

export const footerShare = style({
  position: "absolute",
  width: "466px",
  height: "67px",
  left: "17px",
  top: "18px",
});
