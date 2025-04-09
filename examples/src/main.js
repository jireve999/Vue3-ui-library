import { createApp } from 'vue'
import './style.css'
import Saji from "../../packages";
import App from './App.vue'
const app = createApp(App)
app.use(Saji).mount('#app')
