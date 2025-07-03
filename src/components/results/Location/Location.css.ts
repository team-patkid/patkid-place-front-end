import { style } from "@vanilla-extract/css";

export const LocationStyle = style({
  gridArea: "location",
  display: "grid",
  gridTemplateRows: "auto auto",
  gridTemplateAreas: `
    "title"
    "map"
  `,
  alignItems: "center",
  justifyContent: "center",
  gap: "18px",
  padding: "40px 20px",
});

export const locationTitleBoxStyle = style({
  gridArea: "title",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  width: "100%",
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
  gridArea: "map",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: "468px",
  justifySelf: "center",
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
