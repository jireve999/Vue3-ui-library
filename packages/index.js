// 引入组件
import AButton from "./components/button/index.js"
import AButtonGroup from "./components/buttonGroup/index.js"

const install = function (app) {
  // 判断是否安装
  if (install.installed) return;
  // 安装组件
  app.component('AButton', AButton)
  app.component('AButtonGroup', AButtonGroup)
};
// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  AButton,
  AButtonGroup
}