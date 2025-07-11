import { style } from "@vanilla-extract/css";

export const answerTextStyle = style({
  fontSize: "24px",
  marginInline: "28px",
  fontWeight: 400,
  lineHeight: "26px",
  textAlign: "center",
  color: "#000000",

  "@media": {
    "screen and (max-width: 500px)": {
      fontSize: "18px",
      lineHeight: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
  },
});
