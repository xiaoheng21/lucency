import { propsMap, propsCustom } from './propsConfig'
import { merge, pickBy, cloneDeep } from 'lodash'

function initClassNames() {
  const classNames = {} // 类名池子,保证不会重复
  
  function getHashStr() {
    // 创建一个 hash 值
    return (
      'sc-' +
      Math.random()
        .toString(36)
        .substring(7)
    )
  }
  
  return function generateClassName() {
    // 生成唯一类名
    let className
    // eslint-disable-next-line no-constant-condition
    while (true) {
      className = getHashStr()
      if (!classNames[className]) break
    }
  
    classNames[className] = true // 已注册
  
    return className
  }
}

const generateClassName = initClassNames()

function formatStyle(str) {
  // 格式化 style 代码
  return str.replace(/\s+/g, ' ')
}

function generateStyle(props) {
  // 遍历 props 生成 style 字符串
  let styleStr = '{ '

  for (const [key, val] of Object.entries(propsMap)) {
    let curStr
    if (propsCustom[key]) {
      // 自定义
      curStr = propsCustom[key](props[key])
    } else {
      // default
      curStr = props[key] ? `${val}: ${props[key]};` : ''
    }
    styleStr += curStr
  }

  return formatStyle(styleStr + ' }')
}

export function generateRuleByProps(props, name) {
  const className = name || generateClassName()
  const _props = merge(cloneDeep(props), pickBy(props.sx, (val, key) => ![":", "@"].includes(key[0])) || {})
  const specialProps = pickBy(props.sx, (val, key) => [":", "@"].includes(key[0])) || {} // 伪类和伪元素支持

  const defaultStyleStr = generateStyle(_props)
  const defaultRuleStr = `.${className} ${defaultStyleStr}`
  
  const specialRules = Object.entries(specialProps).map(([key, val]) => {
    const _styleStr = generateStyle(val)
    const startMap = {
      ':': `.${className}${key} ${_styleStr}`,
      '@': `${key} { .${className} ${_styleStr} }`
    }

    return startMap[key[0]]
  })

  return  { className, rules: [ ...specialRules, defaultRuleStr ] }
}