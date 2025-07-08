import { style } from "@vanilla-extract/css";

export const hotSpotStyle = style({
  gridArea: "hotspot",
  position: 'relative',
  width: '100vw',
  display: "grid",
  gridTemplateRows: "auto auto",
  gridTemplateAreas: `
    "title"
    "images"
  `,
  gap: "18px",
  padding: "20px 25px",
});

export const hotSpotTitleBoxStyle = style({
  gridArea: "title",
  display: "flex",
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
  gridArea: "images",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "repeat(3, auto)",
  gap: "20px",
  alignItems: "center",
  justifyContent: "center",
});

export const hotSpotImageBoxStyle = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: "468px",
  height: "242px",
});

export const hotSpotImageBorderStyle = style({
  position: "absolute",
  width: "104%",
  height: "242px",
});

export const hotSpotImageStyle = style({
  width: "100%",
  height: "226px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  objectFit: "cover",
});
