import { style } from "@vanilla-extract/css";

export const wrapperStyle = style({
  position: "relative",
  marginLeft: "auto",
  marginRight: "auto",
  width: "500px",
  height: "2546px",
});

export const resultStyle = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  height: "1080px",
});

export const resultBoxImageStyle = style({
  position: "absolute",
  width: "467px",
  height: "524px",
  left: "calc(50% - 467px / 2 + 0.5px)",
  top: "78px",
});

export const resultTitleStyle = style({
  position: "absolute",
  width: "290px",
  height: "41px",
  top: "116px",
  left: "calc(50% - 310px / 2)",
  fontWeight: 400,
  lineHeight: "41px",
  color: "#000",
  fontSize: "38px",
  textAlign: "center",
});

export const resultTooltipStyle = style({
  position: "absolute",
  width: "227px",
  height: "55px",
  left: "250px",
  top: "55px",
});

export const resultDiceStyle = style({
  position: "absolute",
  width: "26px",
  height: "26px",
  top: "123px",
  left: "413px",
  transform: "rotate(7.1deg)",
  cursor: "pointer",
});

export const resultSpotStyle = style({
  position: "absolute",
  width: "419px",
  height: "281px",
  left: "calc(50% - 419px / 2 + .5px)",
  top: "179px",
  overflow: "hidden",
});

export const resultSpotImageStyle = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const tagStyle = style({
  position: "absolute",
  width: "326px",
  height: "46px",
  left: "calc(50% - 326px / 2)",
  top: "534px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
});

export const resultDescriptionBox = style({
  position: "absolute",
  width: "468px",
  height: "242px",
  left: "calc(50% - 468px / 2)",
  top: "643px",
});

export const resultDescriptionStyle = style({
  position: "absolute",
  width: "397px",
  height: "190px",
  left: "52px",
  top: "670px",
  zIndex: 999,
  fontWeight: 500,
  fontSize: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const resultDescriptionTextStyle = style({
  flex: 1,
  marginBottom: "18px",
});
