import { style } from "@vanilla-extract/css";
import { titleAnimation } from "@styles/keyframes.css";

export const homeLayoutStyle = style({
  backgroundColor: "#ffedf0",
});

export const homeTitleStyle = style({
  position: "absolute",
  width: "418px",
  height: "411px",
  left: "41px",
  top: "224px",
  animation: `${titleAnimation} 650ms infinite`,
});

export const homeSubTitleStyle = style({
  position: "absolute",
  width: "318.86px",
  height: "22px",
  top: "658px",
  left: "calc(50% - 318.86px / 2)",
  fontWeight: 300,
  fontSize: "17px",
  lineHeight: "22px",
  color: "#363636",
});

export const homeLogoStyle = style({
  position: "absolute",
  width: "103px",
  height: "33px",
  left: "calc(50% - 103px / 2 + 0.5px)",
  top: "884px",
});
