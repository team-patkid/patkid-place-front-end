import { style } from "@vanilla-extract/css";

export const wrapperStyle = style({
  position: "relative",
  margin: "0 auto",
  width: "500px",
  minHeight: "100vh",
  
  "@media": {
    "screen and (max-width: 500px)": {
      width: "100%",
    },
  },
});

export const resultStyle = style({
  gridArea: "result",
  position: "relative",
  display: "grid",
  gridTemplateRows: "auto auto",
  gridTemplateAreas: `
    "header"
    "description"
  `,
  alignItems: "center",
  justifyContent: "center",
  gap: "40px",
  padding: "20px",
  minHeight: "800px",
});

export const resultHeaderStyle = style({
  gridArea: "header",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "467px",
});

export const resultBoxImageStyle = style({
  width: "100%",
  height: "auto",
  aspectRatio: "467 / 524",
});

export const resultTitleStyle = style({
  position: "absolute",
  top: "8%",
  fontWeight: 400,
  color: "#000",
  fontSize: "38px",
});

export const resultTooltipStyle = style({
  position: "absolute",
  width: "50%",
  height: "11%",
  right: "2%",
  top: "-5%",
});

export const resultDiceStyle = style({
  position: "absolute",
  width: "8%",
  height: "7%",
  right: "10%",
  top: "7%",
  cursor: "pointer",
});

export const resultSpotStyle = style({
  position: "absolute",
  width: "90%",
  maxWidth: "419px",
  height: "auto",
  aspectRatio: "419 / 281",
  top: "19%",
  left: "50%",
  transform: "translateX(-50%)",
  overflow: "hidden",
  borderRadius: "8px",
  zIndex: 5,
});

export const resultSpotImageStyle = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const tagStyle = style({
  position: "absolute",
  width: "70%",
  maxWidth: "326px",
  top: "87%",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "8px",
});

export const resultDescriptionContainerStyle = style({
  gridArea: "description",
  position: "relative",
  width: "100%",
  maxWidth: "468px",
  justifySelf: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const resultDescriptionBox = style({
  width: "100%",
  height: "auto",
  aspectRatio: "468 / 242",
});

export const resultDescriptionStyle = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85%",
  maxWidth: "397px",
  zIndex: 2,
  fontWeight: 500,
  fontSize: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  
  "@media": {
    "screen and (max-width: 500px)": {
      fontSize: "18px",
    },
  },
});

export const resultDescriptionTextStyle = style({
  marginBottom: "18px",
  textIndent: "-28px",
  paddingLeft: "28px",
});
