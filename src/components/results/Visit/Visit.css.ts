import { style } from "@vanilla-extract/css";

export const visitContainerStyle = style({
  gridArea: "visit",
  display: "grid",
  gridTemplateRows: "auto auto",
  gridTemplateAreas: `
    "title"
    "link"
  `,
  gap: "18px",
  padding: "20px",
});

export const visitTitleBoxStyle = style({
  gridArea: "title",
  display: "flex",
  gap: "12px",
});

export const visitTitleStyle = style({
  fontWeight: "400",
  fontSize: "32px",
  color: "#000",
});

export const visitIconStyle = style({
  width: "27px",
  height: "31px",
});

export const visitBorderStyle = style({
  width: "100%",
  height: "auto",
  aspectRatio: "466 / 105",
});

export const visitTeamLinkStyle = style({
  gridArea: "link",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: "466px",
  height: "105px",
});

export const visitTeamText = style({
  position: "absolute",
  fontWeight: "400",
  fontSize: "25px",
  color: "#000",
  zIndex: 2,
});
