// 创建并维护唯一 style 标签

const style = document.createElement('style')
style.dataset.computedCss = 'css'

const head = document.getElementsByTagName('head')[0]
head.appendChild(style)

// 添加 style rule
function addStyle(cssRule) {
  style.sheet.insertRule(cssRule)
}

// 删除 style rule
function removeStyleByclassName(className) {
  const index = [...style.sheet.cssRules].findIndex((s) =>
    s.selectorText.includes(className)
  )
  style.sheet.deleteRule(index)
}

// 更新 style rule
function updateStyle(cssRule, className) {
  removeStyleByclassName(className)
  addStyle(cssRule)
}

export { style, addStyle, updateStyle }
