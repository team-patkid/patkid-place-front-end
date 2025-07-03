import { globalStyle } from "@vanilla-extract/css";
import { bitBit, gongGothicMedium, pretendard } from "./font.css";
import { vars } from "./theme.css";

globalStyle("*", {
  margin: 0,
  boxSizing: "border-box",
});

globalStyle("html", {
  height: "100%",
  overflow: "auto",

  "@media": {
    "screen and (max-height: 800px)": {
      overflowY: "auto",
      overflowX: "hidden",
      height: "auto",
    },
  },
});

globalStyle("body", {
  backgroundColor: vars.color.white,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  wordBreak: "keep-all",
  margin: 0,
  padding: 0,
  overflow: "auto",
  height: "auto",
  minHeight: "100%",
  width: "100%",

  "@media": {
    "screen and (max-height: 800px)": {
      position: "static",
      overflowY: "auto",
      overflowX: "hidden",
      height: "auto",
    },
  },
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

globalStyle("#__next", {
  height: "auto",
  minHeight: "100%",
  overflow: "visible",

  "@media": {
    "screen and (max-height: 800px)": {
      height: "auto",
      overflowY: "visible",
      overflowX: "hidden",
      minHeight: "100%",
    },
  },
});

globalStyle(".layout", {
  position: "relative",
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
  maxWidth: "500px",
  height: "100%",
  overflow: "hidden",

  "@media": {
    "screen and (min-width: 501px)": {
      width: "500px",
      minHeight: "950px",
    },
    "screen and (max-height: 800px)": {
      height: "auto",
      minHeight: "800px",
      overflowY: "visible",
      overflowX: "hidden",
    },
  },
});

globalStyle(".result_layout", {
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  display: "grid",
  gridTemplateRows: "auto auto auto auto auto",
  gridTemplateAreas: `
    "background"
    "result"
    "location"
    "hotspot"
    "visit"
  `,
  gap: "40px",
  padding: "20px 0",
  
  "@media": {
    "screen and (max-width: 500px)": {
      gap: "30px",
      padding: "15px 0",
    },
  },
});
