import { style } from "@vanilla-extract/css";

export const footerStyle = style({
  position: "fixed",
  bottom: "0",
  width: "100vw",
  maxWidth: "500px",
  margin: "0 auto",
  height: "100px",
  zIndex: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
  padding: "0 20px",
  "@media": {
    "screen and (max-width: 500px)": {
      width: "100%",
    },
  },
});

export const footerRight = style({
  width: "90px",
  height: "67px",
  flex: "none",
});

export const footerShare = style({
  width: "100%",
  maxWidth: "466px", 
  height: "67px",
});
