import { getCurrentInstance } from "vue"
// 默认命名前缀
export const defaultNamespace = "a";

/** 获取父级 */
export const useParent = (parentName) => {
  const parent = getCurrentInstance().parent
  const group = () => {
    return parent.proxy.$options.name === `${defaultNamespace}-${parentName}`
  }
  const props = (attr) => {
    return parent.props?.[attr] || false
  }
  return {
    group, props
  }
}