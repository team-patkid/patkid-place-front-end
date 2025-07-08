import { style } from "@vanilla-extract/css";
import {
  loadingAnimation,
  rotateSixAnimation,
  rotateTenAnimation,
} from "@styles/keyframes.css";

export const loadingLayoutStyle = style({
  position: "relative",
  marginLeft: "auto",
  marginRight: "auto",
  width: "100vw",
  maxWidth: "500px",
  height: "100vh",
  minHeight: "1081px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  overflow: "hidden",
});

export const loadingBgStyle = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  left: "50%",
  transform: "translateX(-50%)",
  objectFit: "cover",
});

export const loadingTitleStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "32px",
  padding: "0 20px",
});

export const loadingHeartStyle = style({
  width: "min(355px, 80vw)",
  height: "auto",
  maxHeight: "348px",
  animation: `${loadingAnimation} 650ms infinite`,
});

export const loadingTextStyle = style({
  position: "relative",
  width: "min(251px, 70vw)",
  height: "auto",
});

export const imageOneStyle = style({
  position: "absolute",
  width: "min(142px, 28vw)",
  height: "auto",
  left: "6.4%",
  top: "5.3%",
  animation: `${rotateSixAnimation} 650ms infinite`,
});

export const imageTwoStyle = style({
  position: "absolute",
  width: "min(48px, 9.6vw)",
  height: "auto",
  left: "58%",
  top: "8%",
});

export const imageThreeStyle = style({
  position: "absolute",
  width: "min(65px, 13vw)",
  height: "auto",
  left: "3.8%",
  top: "50.3%",
});

export const imageFourStyle = style({
  position: "absolute",
  width: "min(120px, 24vw)",
  height: "auto",
  left: "69.2%",
  top: "14.3%",
  animation: `${rotateTenAnimation} 650ms infinite`,
});

export const imageFiveStyle = style({
  position: "absolute",
  width: "min(107px, 21.4vw)",
  height: "auto",
  left: "4.2%",
  top: "70.3%",
  animation: `${rotateSixAnimation} 650ms infinite`,
});
export const imageSixStyle = style({
  position: "absolute",
  width: "min(84px, 16.8vw)",
  height: "auto",
  left: "80.6%",
  top: "58.7%",
});

export const imageSevenStyle = style({
  position: "absolute",
  width: "min(134px, 26.8vw)",
  height: "auto",
  left: "60.2%",
  top: "80.8%",
  animation: `${rotateSixAnimation} 650ms infinite`,
});
