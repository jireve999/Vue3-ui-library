export const useStyle = () => {
  // 尺寸
  const fontSize = (value) => {
    return value ? {'font-size': `${value}px`} : {}
  }
  // 颜色
  const color = (value) => {
    return value ? {'color': value} : {}
  }
  // 宽度
  const width = (value) => value ? {'width': value} : {}
  
  return {
    fontSize,
    color,
    width
  }
}