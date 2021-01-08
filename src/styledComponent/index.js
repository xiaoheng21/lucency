import generateStyle from "./generateStyle";
import generateClassName from "./generateClassName";
import { addStyle, updateStyle } from "./styled";
export { styledProps as props } from "./propsConfig";

function generateRuleByProps(props, name) {
  const className = name || generateClassName();
  const styleStr = generateStyle(props);
  const RuleStr = `.${className} ${styleStr}`;

  return { className, RuleStr };
}

function add(props) {
  const { className, RuleStr } = generateRuleByProps(props);
  const index = addStyle(RuleStr);

  return { index, className };
}

function update({ props, index, className }) {
  const { RuleStr } = generateRuleByProps(props, className);
  return updateStyle(RuleStr, index);
}

export function useStyled(props) {
  const { index, className } = add(props);

  return {
    index,
    className,
    update
  };
}
