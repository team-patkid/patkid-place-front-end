import { style } from "@vanilla-extract/css";

export const baseStyle = style({
  position: "relative",
  width: "100%",
  maxWidth: "466px",
  height: "auto",
  aspectRatio: "466 / 105",
  cursor: "pointer",
  overflow: "hidden",
  
  "@media": {
    "screen and (max-width: 480px)": {
      maxWidth: "400px",
    },
  },
});

export const buttonImageStyle = style({
  width: "100%",
  height: "100%",
  transition: "transform 0.3s ease",
  position: "absolute",

  selectors: {
    "&:hover": {
      transform: "scale(0.95)",
    },
  },
});

export const buttonTextStyle = style({
  position: "relative",
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
