import { createApp } from 'vue'
import App from './App.vue'
// UI组件库
import UILibrary from "../../packages"
import "@ui-library/components/button/src/style"
createApp(App).use(UILibrary).mount('#app')