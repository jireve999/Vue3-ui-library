import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// UI组件库
import UILibrary from "../../packages"
import "@ui-library/theme/src/index.scss"

const app = createApp(App)
app.use(UILibrary).mount('#app')
