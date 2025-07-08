import { style } from "@vanilla-extract/css";

export const LocationStyle = style({
  gridArea: "location",
  position: "relative",
  display: "grid",
  gridTemplateRows: "auto auto",
  gridTemplateAreas: `
    "title"
    "map"
  `,
  gap: "18px",
  padding: "40px 25px",
  width: "100vw" ,

}); 

export const locationTitleBoxStyle = style({
  gridArea: "title",
  display: "flex",
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
});

export const locationMapBorderStyle = style({
  position: "absolute",
  width: "103%",
  height: "242px",
  zIndex: 1,
  pointerEvents: "none"
});

export const locationMapStyle = style({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: "226px",
});
