import ButtonGroup from "./src/index.vue"
// 提供按需加载的方式
ButtonGroup.install = (app) => {
    app.component(ButtonGroup.name, ButtonGroup)
}
// 导出组件
export default ButtonGroup