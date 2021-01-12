import marginConfig from "./config/margin-padding";
import typographyConfig from "./config/typography";
import layout from "./config/layout";
import flexbox from "./config/flexbox";
import color from "./config/color";
import box from "./config/box";
import other from "./config/other";
import custom from "./config/custom";

export default {
  ...marginConfig,
  ...typographyConfig,
  ...layout,
  ...flexbox,
  ...color,
  ...box,
  ...other,
  ...custom
};
