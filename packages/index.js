// 按需加载
export * from "./components/index"
// 全局注册
import components from "./components.js";
// 全局安装
const install = function (app) {
  // 判断是否安装
  if (install.installed) return;
  // 安装组件
  components.forEach((c) => app.use(c))
};
export default install
