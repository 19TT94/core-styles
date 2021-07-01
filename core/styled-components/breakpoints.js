export const breakpoint = {
  width: {
    1: "480px",
    2: "640px",
    3: "767px",
    4: "1024px",
    5: "1300px",
    6: "1560px"
  }
};

export const bp = width => `@media (min-width: ${breakpoint.width[width]})`;

export const customBp = width => `@media (min-width: ${width})`;

export const minHeight = height => `@media (min-height: ${height})`;
