import { style } from "@vanilla-extract/css";

export const layoutStyle = style({
  position: "relative",
  margin: "0 auto",
  width: "500px",
  height: "1081px",
  display: "grid",
  gridTemplateRows: "auto auto 1fr auto",
  gridTemplateAreas: `
    "title"
    "progress"
    "content" 
    "answers"
  `,

  "@media": {
    "screen and (max-width: 500px)": {
      width: "100%",
      height: "100vh",
    },
  },
});

export const backgroundStyle = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: -1,
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

  "@media": {
    "screen and (max-width: 500px)": {
      top: "70%",
      gap: "8px",
      padding: "0 5%",
    },
  },
});

export const progressBarBoxStyle = style({
  gridArea: "progress",
  height: "34px",
  width: "100%",
});

export const questionSectionStyle = style({
  gridArea: "content",
  position: "relative",
  width: "100%",
  height: "100%",
  marginTop: "20px",
  alignItems: "center",
  justifyContent: "center",
});

export const questionBoxStyle = style({
  position: "relative",
  width: "calc(100% - 40px)",
  maxWidth: "466px",
  height: "auto",
  aspectRatio: "466 / 490",
  margin: "0 auto",
});

export const questionContainerStyle = style({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const questionBackgroundStyle = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 1,
});

export const questionContentStyle = style({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  zIndex: 3,
  padding: "13px 0px 40px 0px",
});

export const questionImagesStyle = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 2,
});

export const questionNumberStyle = style({
  fontWeight: 400,
  fontSize: "21px",
  lineHeight: "23px",
  color: "#000000",
  textAlign: "center",
  margin: 0,

  "@media": {
    "screen and (max-width: 500px)": {
      fontSize: "18px",
      lineHeight: "20px",
    },
  },
});

export const questionTextStyle = style({
  fontWeight: 400,
  fontSize: "24px",
  lineHeight: "26px",
  textAlign: "center",
  color: "#000000",
  margin: 0,
  maxWidth: "80%",

  "@media": {
    "screen and (max-width: 500px)": {
      fontSize: "20px",
      lineHeight: "22px",
      maxWidth: "85%",
    },
  },
});
