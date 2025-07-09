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

export const newBoxStyle = style({
  position: "absolute",
  width: "120px",
  height: "50px",
  right: "20px",
  top: "20px",
  backgroundColor: "#6B73FF",
  border: "none",
  borderRadius: "20px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 15px rgba(107, 115, 255, 0.3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  ":hover": {
    backgroundColor: "#5A63E8",
    boxShadow: "0 6px 20px rgba(107, 115, 255, 0.4)",
    transform: "translateY(-2px)",
  },

  ":active": {
    transform: "translateY(0)",
    boxShadow: "0 2px 10px rgba(107, 115, 255, 0.3)",
  },

  "@media": {
    "screen and (max-width: 500px)": {
      width: "80px",
      height: "40px",
      right: "10px",
      top: "10px",
    },
  },
});

export const shareButtonTextStyle = style({
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: "500",
  textAlign: "center",
  margin: "0",
  userSelect: "none",

  "@media": {
    "screen and (max-width: 500px)": {
      fontSize: "15px",
    },
  },
});
