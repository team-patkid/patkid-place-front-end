import { style } from "@vanilla-extract/css";
import { titleAnimation } from "@styles/keyframes.css";

export const homeLayoutStyle = style({
  backgroundColor: "#ffedf0",
  minHeight: "100vh",
  width: "100%",
  position: "relative",
});

export const homeTitleStyle = style({
  position: "absolute",
  width: "418px",
  height: "411px",
  left: "41px",
  top: "180px",
  animation: `${titleAnimation} 650ms infinite`,

  "@media": {
    "screen and (max-width: 500px)": {
      width: "80%",
      height: "auto",
      aspectRatio: "418 / 411",
      left: "50%",
      top: "25%",
      transform: "translateX(-50%)",
    },
  },
});

export const homeSubTitleStyle = style({
  position: "absolute",
  width: "318.86px",
  height: "22px",
  top: "680px",
  left: "50%",
  transform: "translateX(-50%)",
  fontWeight: 300,
  fontSize: "17px",
  lineHeight: "18px",
  color: "#363636",
  textAlign: "center",

  "@media": {
    "screen and (max-width: 500px)": {
      fontSize: "15px",
      lineHeight: "16px",
      width: "80%",
      top: "580px",
    },
  },
});

export const homeLogoStyle = style({
  position: "absolute",
  width: "103px",
  height: "33px",
  left: "50%",
  top: "940px",
  transform: "translateX(-50%)",

  "@media": {
    "screen and (max-width: 500px)": {
      top: "750px",
      width: "90px",
      height: "29px",
    },
  },
});
