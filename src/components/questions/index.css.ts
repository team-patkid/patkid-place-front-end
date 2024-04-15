import { style } from "@vanilla-extract/css";

export const layoutStyle = style({
  position: "relative",
  margin: "0 auto",
  width: "500px",
  height: "1081px",
});

export const titleStyle = style({
  position: "absolute",
  width: "200px",
  height: "28px",
  left: "calc(50% - 185px / 2)",
  top: "43px",
  fontSize: "32px",
  lineHeight: "28px",
  textAlign: "center",
  color: "#000000",
});

export const titleImageStyle = style({
  position: "absolute",
  width: "12px",
  height: "25px",
  left: "31px",
  top: "43px",
});

export const answerBoxStyle = style({
  position: "absolute",
  top: "684px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});

export const progressBarBoxStyle = style({
  position: "absolute",
  width: "466px",
  height: "34px",
  left: "calc(50% - 466px / 2)",
  top: "88px",
});

export const questionBoxStyle = style({
  position: "absolute",
  width: "466px",
  height: "490px",
  left: "calc(50% - 466px / 2)",
  top: "152px",
});

export const questionNumberStyle = style({
  position: "absolute",
  width: "57px",
  height: "23px",
  left: "calc(50% - 57px / 2 + 0.5px)",
  top: "169px",
  fontWeight: 400,
  fontSize: "21px",
  lineHeight: "23px",
  color: "#000000",
});

export const questionTextStyle = style({
  position: "absolute",
  width: "341px",
  height: "50px",
  left: "calc(50% - 341px / 2)",
  top: "548px",
  fontWeight: 400,
  fontSize: "24px",
  lineHeight: "26px",
  textAlign: "center",
  color: "#000000",
});
