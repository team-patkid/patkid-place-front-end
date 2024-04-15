import { style } from "@vanilla-extract/css";

export const titleStyle = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "calc(100% - 32px)",
  margin: "0 auto",
  paddingTop: "36px",
});

export const titleTextStyle = style({
  width: "200px",
  height: "28px",
  fontSize: "32px",
  lineHeight: "28px",
  textAlign: "center",
  color: "#000000",
  flex: 1,
});

export const titleImageStyle = style({
  width: "12px",
  height: "25px",
});
