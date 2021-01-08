import generateStyle from './generateStyle'
import generateClassName from './generateClassName'
import { addStyle, updateStyle } from './styled'
export { styledProps as props } from './propsConfig'

function generateRuleByProps(props, name) {
  const className = name || generateClassName()
  const styleStr = generateStyle(props)
  const RuleStr = `.${className} ${styleStr}`

  return { className, RuleStr }
}

function add(props) {
  const { className, RuleStr } = generateRuleByProps(props)
  addStyle(RuleStr)

  return className
}

function update({ props, className }) {
  const { RuleStr } = generateRuleByProps(props, className)
  return updateStyle(RuleStr, className)
}

export function useStyled(props) {
  const className = add(props)

  return {
    className,
    update,
  }
}
