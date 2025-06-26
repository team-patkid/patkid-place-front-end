import { style } from "@vanilla-extract/css";

export const ProgressWrapperStyle = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const ProgressContainerStyle = style({
  position: "absolute",
  width: "476px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  gap: "3px",
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

export const ProgressHeartStyle = style({
  position: "relative",
  width: "45px",
  height: "39px",
  marginLeft: "-5px",
});
