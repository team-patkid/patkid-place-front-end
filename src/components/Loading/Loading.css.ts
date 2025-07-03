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
  width: "500px",
  height: "1081px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
});

export const loadingBgStyle = style({
  position: "absolute",
  width: "500px",
  height: "1081px",
  left: "50%",
  transform: "translateX(-50%)",
});

export const loadingTitleStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: " center",
  flexDirection: "column",
  gap: "32px",
});

export const loadingHeartStyle = style({
  width: "355px",
  height: "348px",
  animation: `${loadingAnimation} 650ms infinite`,
});

export const loadingTextStyle = style({
  position: "relative",
  width: "251px",
});

export const imageOneStyle = style({
  position: "absolute",
  width: "142px",
  height: "140px",
  left: "32px",
  top: "57px",
  animation: `${rotateSixAnimation} 650ms infinite`,
});

export const imageTwoStyle = style({
  position: "absolute",
  width: "48px",
  height: "45px",
  left: "290px",
  top: "87px",
});

export const imageThreeStyle = style({
  position: "absolute",
  width: "65px",
  height: "62px",
  left: "19px",
  top: "544px",
});

export const imageFourStyle = style({
  position: "absolute",
  width: "120px",
  height: "114px",
  left: "346px",
  top: "155px",
  animation: `${rotateTenAnimation} 650ms infinite`,
});

export const imageFiveStyle = style({
  position: "absolute",
  width: "107px",
  height: "167px",
  left: "21px",
  top: "760px",
  animation: `${rotateSixAnimation} 650ms infinite`,
});
export const imageSixStyle = style({
  position: "absolute",
  width: "84px",
  height: "79px",
  left: "403px",
  top: "635px",
});

export const imageSevenStyle = style({
  position: "absolute",
  width: "134px",
  height: "121px",
  left: "301px",
  top: "874px",
  animation: `${rotateSixAnimation} 650ms infinite`,
});
