import { propsMap, propsCustom } from './propsConfig'

function formatStyle(str) {
  // 格式化 style 代码
  return str.replace(/\s+/g, ' ')
}

export default function generateStyle(props) {
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
