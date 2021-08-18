// Constants
export const BREAKPOINTS = {
  phone: 375,
  tablet: 768,
  laptop: 1110,
  xl: 1440,
};

export const theme = {
  COLORS: {
    dark: {
      1: "#000000",
      2: "#06090C",
    },
    grey: {
      1: "#DDE4F0",
      2: "#F2F2F2",
    },
  },
  FONTS: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  FONT_SIZES: {
    header1: `${56 / 16}rem`,
    body: `${14 / 16}rem`,
  },
  WEIGHTS: {
    normal: 400,
    bold: 500,
    extraBold: 800,
  },
  // Using REM for breakpoints to maintain a nicer UI when changing
  // Zoom levels
  QUERIES: {
    phoneAndUp: `(min-width: ${BREAKPOINTS.phone / 16}rem)`,
    tabletAndUp: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`,
    laptopAndUp: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`,
    xlAndUp: `(min-width: ${BREAKPOINTS.xl / 16}rem)`,
  },
};
