import { getCurrentInstance } from "vue"
// 默认命名前缀
export const defaultNamespace = "a";

export const useParent = (parentName) => {
  // 获取父级
  const parent = getCurrentInstance().parent
  // 获取父级组件
  const group = () => {
    return parent.proxy.$options.name === `${defaultNamespace}-${parentName}`
  }
  // 获取父级属性
  const props = (attr) => {
    return parent.props[attr] || false
  }
  return {
    group, props
  }
}