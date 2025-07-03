import { style } from "@vanilla-extract/css";
import { clickAnimation } from "@styles/keyframes.css";
import { vars } from "@styles/theme.css";

export const imageStyle = style({
  position: "absolute",
  width: "462px",
  height: "104px",
  left: "19px",
  top: "730px",
  cursor: "pointer",
  transition: "background-color 0.7s ease",
  touchAction: "manipulation",

  "@media": {
    "screen and (max-width: 500px)": {
      width: "90%",
      height: "auto",
      aspectRatio: "462 / 104",
      left: "5%",
      top: "77%",
      transform: "none",
    },
  },
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
    top: "745px",
    fontWeight: "400",
    fontSize: "41px",
    lineHeight: "40px",

    "@media": {
      "screen and (max-width: 500px)": {
        width: "90%",
        height: "auto",
        left: "5%",
        top: "78.5%",
        transform: "none",
        fontSize: "32px",
        lineHeight: "32px",
        textAlign: "center",
      },
    },
  },
]);

export const secondTextStyle = style([
  baseTextStyle,
  {
    width: "209px",
    height: "20px",
    left: "calc(50% - 100px / 2 + 0.5px)",
    top: "785px",
    fontWeight: "300",
    fontSize: "17px",
    lineHeight: "16px",

    "@media": {
      "screen and (max-width: 500px)": {
        width: "90%",
        height: "auto",
        left: "5%",
        top: "82%",
        transform: "none",
        fontSize: "14px",
        lineHeight: "14px",
        textAlign: "center",
      },
    },
  },
]);
