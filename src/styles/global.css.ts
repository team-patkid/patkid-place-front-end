import { globalStyle } from "@vanilla-extract/css";
import { bitBit, gongGothicMedium, pretendard } from "./font.css";
import { vars } from "./theme.css";

globalStyle("*", {
  margin: 0,
});

globalStyle("html", {
  scrollBehavior: "smooth",
});

globalStyle("body", {
  backgroundColor: vars.color.white,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  wordBreak: "keep-all",
  margin: 0,
});

globalStyle("p", {
  fontFamily: bitBit,
});

globalStyle(".isaText", {
  fontFamily: gongGothicMedium,
  fontWeight: 300,
});

globalStyle(".marginR", {
  marginRight: "17px",
});

globalStyle(".preText", {
  fontFamily: pretendard,
});
