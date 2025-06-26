import { style } from "@vanilla-extract/css";

export const LocationStyle = style({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "18px",
  marginTop: "-180px",
  marginBottom: "40px",
});

export const locationTitleBoxStyle = style({
  position: "relative",
  display: "flex",
  gap: "12px",
  width: "calc(100% - 20px)",
  marginTop: "20px",
});

export const locationTitleStyle = style({
  fontWeight: "400",
  fontSize: "32px",
  color: "#000",
});

export const locationIconStyle = style({
  width: "27px",
  height: "31px",
});

export const locationMapBoxStyle = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "468px",
});

export const locationMapBorderStyle = style({
  position: "absolute",
  width: "468px",
  height: "242px",
  left: 0,
});

export const locationMapStyle = style({
  position: "relative",
  overflow: "hidden",
  width: "452px",
  height: "226px",
});
