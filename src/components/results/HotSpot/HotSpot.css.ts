import { style } from "@vanilla-extract/css";

export const hotSpotStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "18px",
});

export const hotSpotTitleBoxStyle = style({
  position: "relative",
  display: "flex",
  marginLeft: "20px",
  gap: "12px",
});

export const hotSpotTitleStyle = style({
  fontWeight: "400",
  fontSize: "32px",
  color: "#000",
});

export const hotSpotIconStyle = style({
  width: "27px",
  height: "31px",
  top: "1315px",
  left: "17px",
});

export const hotSpotImagesBox = style({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  alignItems: "center",
});

export const hotSpotImageBoxStyle = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "468px",
  height: "242px",
});

export const hotSpotImageBorderStyle = style({
  position: "absolute",
  width: "468px",
  height: "242px",
});

export const hotSpotImageStyle = style({
  width: "452px",
  height: "226px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  objectFit: "cover",
});
