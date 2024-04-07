import { style } from "@vanilla-extract/css";

export const baseStyle = style({
  position: "relative",
  width: "466px",
  height: "105px",
  cursor: "pointer",
  overflow: "hidden",
});

export const buttonImageStyle = style({
  width: "100%",
  height: "100%",
  transition: "transform 0.3s ease",

  selectors: {
    "&:hover": {
      transform: "scale(0.95)",
    },
  },
});

export const buttonTextStyle = style({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
});

export const clickedStyle = style({});
