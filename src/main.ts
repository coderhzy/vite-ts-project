import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import router from './router/index'

const app = createApp(App)

app.use(router).mount('#app')