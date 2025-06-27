import { style } from "@vanilla-extract/css";

export const ProgressWrapperStyle = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: '12px 20px',
  width: "calc(100% - 40px)",
});

export const ProgressContainerStyle = style({
  position: "absolute",
  width: "100%",
  maxWidth: "471px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  gap: "3px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 10,
});

export const ProgressItemStyle = style({
  padding: "1px",
  display: "flex",
  alignItems: "center",
  selectors: {
    "&:first-of-type": {
      marginLeft: "16px",
    },
  },
});

export const ProgressImageStyle = style({
  "@media": {
    "screen and (max-width: 500px)": {
      width: "9px !important",
      height: "9px !important",
    },
  },
});

export const ProgressHeartStyle = style({
  position: "relative",
  width: "45px",
  height: "39px",
  marginLeft: "-5px",
});

export const ProgressBarImageStyle = style({
  width: "100%",
  height: "auto",
  maxWidth: "471px",
});
