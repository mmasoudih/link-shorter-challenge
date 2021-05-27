import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import './index.css'

const axiosInstance = axios.create({
  baseURL: 'https://api.shrtco.de/v2/',
  timeout: 40000,
})

const app = createApp(App)
app.config.globalProperties.$axios = axiosInstance
app.mount('#app')