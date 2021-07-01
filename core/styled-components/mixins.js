/* Layout Mixins */

// Flexbox shortcut
export const flex = (direction = null, wrap = null, justify = null, align = null) => ({
  display: "flex",
  "flex-direction": direction,
  "flex-wrap": wrap,
  "justify-content": justify,
  "align-items": align
});

// Positioning: z-index
export const position = {
  root: -10,
  below: -1,
  base: 0,
  above: 1,
  top: 2,
  peak: 10
};

export const z = layer => position[layer];

/* USAGE
 * reference: https://www.sitepoint.com/better-solution-managing-z-index-sass/
   z-index: z('top');
   or
   z-index: z('modal', 'content');
*/
