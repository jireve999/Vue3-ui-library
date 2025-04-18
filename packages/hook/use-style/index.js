export const useStyle = () => {
  // 尺寸
  const fontSize = (value) => {
    return value ? {'font-size': `${value}px`} : {}
  }
  // 颜色
  const color = (value) => {
    console.log('value', value)
    return value ? {'color': value} : {}
  }
  return {
    fontSize,
    color
  }
}


