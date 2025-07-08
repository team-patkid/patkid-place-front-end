import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const modalBackDropStyle = style({
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: 999,
});

export const modalContainerStyle = style({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  zIndex: 100,
  maxWidth: "450px",
  width: '90%'
});

export const modalBackgroundStyle = style({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

export const modalContentStyle = style({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
  overflow: "auto",
  padding: "20px",
});

export const modalTitleStyle = style({
  width: "min(290px, 80vw)",
  textAlign: "center",
  fontWeight: 400,
  fontSize: "min(41px, 8vw)",
  lineHeight: "min(41px, 8vw)",
  color: "#000000",
  marginTop: "min(40px, 10vh)",
});

export const modalImgBoxStyle = style({
  marginTop: "18px",
  width: "min(400px, 80vw)",
  height: "min(281px, 35vh)",
  overflow: "hidden",
  borderRadius: "10px",
});

export const modalImgStyle = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 1,
});

export const modalHashSyle = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  width: "min(326px, 80vw)",
  minHeight: "46px",
  marginTop: "18px",
});

export const modalLineStyle = style({
  width: "min(410px, 80vw)",
  height: "0",
  border: `1px solid ${vars.color.pink}`,
});

export const modalResultStyle = style({
  width: "min(397px, 80vw)",
  minHeight: "217px",
  fontWeight: 500,
  fontSize: "min(20px, 4vw)",
  lineHeight: "min(24px, 5vw)",
  marginTop: "18px",
  color: vars.color.black,
  overflow: "auto",
});

export const modalCloseStyle = style({
  width: "33px",
  height: "33px",
  cursor: "pointer",
});
