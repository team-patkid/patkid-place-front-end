import { rotateSixAnimation, rotateTenAnimation } from "@/styles/keyframes.css";
import { style } from "@vanilla-extract/css";

export const baseStyle = style({
  position: "absolute",
  width: "500px",
  height: "1081px",
  left: 0,
  top: 0,
});

export const imageStyle = style({
  position: "absolute",
});

export const coffeeImageStyle = style([
  imageStyle,
  {
    width: "142px",
    height: "140px",
    left: "32px",
    top: "57px",
    animation: `${rotateSixAnimation} 650ms infinite`,
  },
]);

export const heartImageOneStyle = style([
  imageStyle,
  {
    width: "43px",
    height: "41px",
    left: "286px",
    top: "80px",
  },
]);

export const musicImageStyle = style([
  imageStyle,
  {
    width: "118px",
    height: "112px",
    left: "350px",
    top: "103px",
    animation: `${rotateTenAnimation} 650ms infinite`,
  },
]);

export const cakeImageStyle = style([
  imageStyle,
  {
    width: "86px",
    height: "128px",
    left: "7px",
    top: "523px",
    animation: `${rotateSixAnimation} 650ms infinite`,
  },
]);

export const heartImageTwoStyle = style([
  imageStyle,
  {
    width: "47px",
    height: "45px",
    left: "433px",
    top: "549px",
  },
]);

export const bookImageStyle = style([
  imageStyle,
  {
    width: "99px",
    height: "90px",
    left: "377px",
    top: "658px",
    animation: `${rotateSixAnimation} 650ms infinite`,
  },
]);
