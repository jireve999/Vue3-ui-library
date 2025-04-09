/**
 * 按需加载注册组件
 * @param { Object } com 
 */
export const componentInstall = (com) => {
  com.install = (app) => {
    app.component(com.name, com)
  }
  return com
}