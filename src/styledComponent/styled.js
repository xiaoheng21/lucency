// 创建并维护唯一 style 标签

const style = document.createElement("style");
style.dataset.computedCss = "css";

const head = document.getElementsByTagName("head")[0];
head.appendChild(style);

// 添加 style rule
function addStyle(cssRule, idx) {
  const index = idx || style.sheet.cssRules.length;
  style.sheet.insertRule(cssRule, index);

  return index;
}

// 删除 style rule
function removeStyle(index) {
  style.sheet.deleteRule(index);
}

// 更新 style rule
function updateStyle(cssRule, index) {
  removeStyle(index);
  addStyle(cssRule, index);

  return index;
}

export { style, addStyle, updateStyle };
