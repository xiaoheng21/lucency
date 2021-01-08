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

export default function generateClassName() {
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
