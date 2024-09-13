import { createApp } from 'vue'
import router from './router'
import axios from 'axios'
import ELP from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)
// 设置全局axios
app.config.globalProperties.$axios = axios
app.use(router)
// 设置element-plus
app.use(ELP)
app.mount('#app')
