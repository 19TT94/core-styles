export const breakpoints = {
  widths: {
    1: "480px",
    2: "640px",
    3: "767px",
    4: "1024px",
    5: "1300px",
    6: "1560px"
  }
};

export const bp = (width) => {
  return `@media (min-width: ${breakpoints.widths[width]})`;
};

export const customBp = (width) => {
  return `@media (min-width: ${width})`;
}

export const minHeight = (height) => {
  return `@media (min-height: ${height})`;
}