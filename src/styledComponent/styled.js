import { generateRuleByProps } from './generateRuleByProps'

// 创建并维护唯一 style 标签
function initStyle() {
  const style = document.createElement('style')
  style.dataset.computedCss = 'css'
  
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(style)
  return style
}

class Styled {
  constructor() {
    this.style = initStyle()
  }

  // 添加 style rule
  insertRule(cssRules) {
    cssRules.forEach(cssRule => {
      this.style.sheet.insertRule(cssRule)
    })
  }

  // 删除 style rule
  deleteRule(className) {
    const rules = [...this.style.sheet.cssRules]
    let indexs = []

    for (const idx in rules) {
      if (rules[idx].selectorText.includes(className)) indexs.push(idx)
    }

    indexs.sort((a, b) => b - a).forEach(index => {
      this.style.sheet.deleteRule(index)
    })
  }

  // 更新 style rule
  updateRule(cssRules, className) {
    this.deleteRule(className)
    this.insertRule(cssRules)
  }
}

const style = new Styled()

function add(props) {
  const { className, rules } = generateRuleByProps(props)
  style.insertRule(rules)

  return className
}

function update(props, className) {
  const { rules } = generateRuleByProps(props, className)
  style.updateRule(rules, className)
}

export function useStyled(props) {
  const className = add(props)
  
  return {
    className,
    update,
  }
}

