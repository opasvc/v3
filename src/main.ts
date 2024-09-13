import { createApp } from 'vue'
import router from './router'
import axios from 'axios'
import ELP from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(router)
app.use(ELP)
app.mount('#app')
