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
});

export const modalBackgroundStyle = style({
  width: "467px",
  height: "821px",
});

export const modalContentStyle = style({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
});

export const modalTitleStyle = style({
  width: "290px",
  textAlign: "center",
  fontWeight: 400,
  fontSize: "41px",
  lineHeight: "41px",
  color: "#000000",
  marginTop: "90px",
});

export const modalImgBoxStyle = style({
  marginTop: "18px",
  width: "400px",
  height: "281px",
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
  width: "326px",
  minHeight: "46px",
  marginTop: "18px",
});

export const modalLineStyle = style({
  width: "410px",
  height: "0",
  border: `1px solid ${vars.color.pink}`,
});

export const modalResultStyle = style({
  width: "397px",
  height: "217px",
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "24px",
  marginTop: "18px",
  color: vars.color.black,
});

export const modalCloseStyle = style({
  position: "absolute",
  width: "33px",
  height: "33px",
  left: "407px",
  top: "21px",
  zIndex: 1,
});
