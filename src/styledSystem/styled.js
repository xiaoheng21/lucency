import hash from 'object-hash'
import { findKey } from 'lodash'
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
      const classNameText = rules[idx].selectorText || rules[idx].cssText // @ 媒体查询类的类名在 cssText 里
      if (classNameText.includes(className)) indexs.push(idx)
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

// 维护静态 cssRule
function initStaticRules() {
  const _rules = {}

  const getStaticRule = hash => _rules[hash]
  const insertStaticRule = (hash, info) => _rules[hash] = info
  const removeStaticRule = className => delete _rules[findKey(_rules, rule => rule.className === className)]

  return {
    getStaticRule,
    insertStaticRule,
    removeStaticRule
  }
}

const { getStaticRule, insertStaticRule, removeStaticRule } = initStaticRules()

function add(props) {
  const propHash = hash(props)
  const staticRule = getStaticRule(propHash)

  if (!props.static) {
    const { className, rules } = generateRuleByProps(props)
    style.insertRule(rules)

    return className
  } else {
    if (!staticRule) {
      const { className, rules } = generateRuleByProps(props)
      style.insertRule(rules)
      insertStaticRule(propHash, { className, rules })
      return className
    } else {
      const { className } = staticRule
      return className
    }
  }

}

function update(props, className) {
  if (!props.static) {
    const { rules } = generateRuleByProps(props, className)
    style.updateRule(rules, className)
  }
}

function remove(className) {
  style.deleteRule(className)
  removeStaticRule(className)
}

export function useStyled(props) {
  const className = add(props)
  
  return {
    className,
    update,
    remove
  }
}

