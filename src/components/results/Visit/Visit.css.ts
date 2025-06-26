import { style } from "@vanilla-extract/css";

export const visitTitleBoxStyle = style({
  position: "relative",
  display: "flex",
  marginLeft: "20px",
  marginTop: "48px",
  marginBottom: "18px",
});

export const visitTitleStyle = style({
  fontWeight: "400",
  fontSize: "32px",
  color: "#000",
});

export const visitIconStyle = style({
  width: "27px",
  height: "31px",
  top: "1315px",
  left: "17px",
});

export const visitBorderStyle = style({
  position: "absolute",
  width: "466px",
  height: "105px",
  left: 0,
});

export const visitTeamLinkStyle = style({
  position: "relative",
  marginLeft: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "105px",
});

export const visitTeamText = style({
  position: "absolute",
  fontWeight: "400",
  fontSize: "25px",
  color: "#000",
});
