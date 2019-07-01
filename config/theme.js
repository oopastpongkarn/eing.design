import { darken } from "polished";

const brand = {
  primary: "#ce1691",
  secondary: "#7b8acc"
};

const colors = {
  grey: "#6b6b6b",
  black: "#000",
  white: "#fff",
  bg_color: "#f3f3f3",
  body_color: "#444",
  link_color: brand.primary,
  link_color_hover: `${darken(0.15, brand.primary)}`
};

const breakpoints = ["400px", "600px", "900px", "1200px"];
breakpoints.xs = breakpoints[0];
breakpoints.s = breakpoints[1];
breakpoints.m = breakpoints[2];
breakpoints.l = breakpoints[3];

const theme = {
  brand,
  colors,
  breakpoints,
  container: {
    base: "100rem",
    text: "55rem"
  },
  spacer: {
    horizontal: "2rem",
    vertical: "3rem"
  }
};

export default theme;
