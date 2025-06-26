import { style } from "@vanilla-extract/css";
import { clickAnimation } from "@styles/keyframes.css";
import { vars } from "@styles/theme.css";

export const imageStyle = style({
  position: "absolute",
  width: "462px",
  height: "104px",
  left: "19px",
  top: "757px",
  cursor: "pointer",
  transition: "background-color 0.7s ease",
});

export const imageHoverStyle = style({
  animation: `${clickAnimation} 0.5s linear`,
  animationDelay: "0.1s",
});

export const baseTextStyle = style({
  position: "absolute",
  color: vars.color.white,
  margin: "0 auto",
});

export const firstTextStyle = style([
  baseTextStyle,
  {
    width: "133px",
    height: "44px",
    left: "calc(50% - 133px / 2 + 0.5px)",
    top: "774px",
    fontWeight: "400",
    fontSize: "41px",
    lineHeight: "44px",
  },
]);

export const secondTextStyle = style([
  baseTextStyle,
  {
    width: "209px",
    height: "20px",
    left: "calc(50% - 100px / 2 + 0.5px)",
    top: "825px",
    fontWeight: "300",
    fontSize: "17px",
    lineHeight: "20px",
  },
]);
