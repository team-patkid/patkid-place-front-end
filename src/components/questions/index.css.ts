import { style } from "@vanilla-extract/css";

export const layoutStyle = style({
  position: "relative",
  margin: "0 auto",
  width: "500px",
  height: "1081px",
  
  "@media": {
    "screen and (max-width: 500px)": {
      width: "100%",
      height: "100vh",
    },
  },
});

export const backgroundStyle = style({
  position: "absolute",
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
  position: "relative",
  height: "34px",
  marginTop: "24px",
  width: "100%"
});

export const questionBoxStyle = style({
  position: "absolute",
  width: "calc(100% - 40px)",
  maxWidth: "466px",
  height: "auto",
  aspectRatio: "466 / 490",
  left: "50%",
  transform: "translateX(-50%)",
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
  
  "@media": {
    "screen and (max-width: 500px)": {
      top: "17%",
      fontSize: "18px",
      lineHeight: "20px",
    },
  },
});

export const questionTextStyle = style({
  position: "absolute",
  width: "341px",
  height: "50px",
  left: "calc(50% - 341px / 2)",
  top: "545px",
  fontWeight: 400,
  fontSize: "24px",
  lineHeight: "26px",
  textAlign: "center",
  color: "#000000",
  
});
