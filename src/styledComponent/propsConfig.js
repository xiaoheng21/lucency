import { mapValues } from "lodash";
import config from "./propsconfig/index";

const propsConfig = {
  ...config
};

// return style_prop
export const propsMap = mapValues(propsConfig, (p) => p.prop);

// return vue use prop
export const styledProps = mapValues(propsConfig, (p) => ({ type: p.type }));

// 自定义config
export const propsCustom = mapValues(propsConfig, (p) => p.custom);
