import { rotateSixAnimation, rotateTenAnimation } from "@/styles/keyframes.css";
import { style } from "@vanilla-extract/css";

export const baseStyle = style({
  position: "absolute",
  width: "500px",
  height: "950px",
  left: 0,
  top: 0,
  
  "@media": {
    "screen and (max-width: 500px)": {
      width: "100%",
      height: "100%",
    },
  },
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
    
    "@media": {
      "screen and (max-width: 500px)": {
        width: "min(25vw, 120px)",
        height: "auto",
        aspectRatio: "142 / 140",
        left: "6%",
        top: "8%",
      },
    },
  },
]);

export const heartImageOneStyle = style([
  imageStyle,
  {
    width: "43px",
    height: "41px",
    left: "286px",
    top: "80px",
    
    "@media": {
      "screen and (max-width: 500px)": {
        width: "min(8vw, 35px)",
        height: "auto",
        aspectRatio: "43 / 41",
        left: "57%",
        top: "12%",
      },
    },
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
    
    "@media": {
      "screen and (max-width: 500px)": {
        width: "min(18vw, 80px)",
        height: "auto",
        aspectRatio: "118 / 112",
        right: "5%",
        top: "15%",
        left: "auto",
      },
    },
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
    
    "@media": {
      "screen and (max-width: 500px)": {
        width: "min(15vw, 70px)",
        height: "auto",
        aspectRatio: "86 / 128",
        left: "2%",
        top: "48%",
      },
    },
  },
]);

export const heartImageTwoStyle = style([
  imageStyle,
  {
    width: "47px",
    height: "45px",
    left: "433px",
    top: "549px",
    
    "@media": {
      "screen and (max-width: 500px)": {
        width: "min(8vw, 40px)",
        height: "auto",
        aspectRatio: "47 / 45",
        right: "8%",
        top: "50%",
        left: "auto",
      },
    },
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
    
    "@media": {
      "screen and (max-width: 500px)": {
        width: "min(16vw, 70px)",
        height: "auto",
        aspectRatio: "99 / 90",
        right: "5%",
        top: "60%",
        left: "auto",
      },
    },
  },
]);
