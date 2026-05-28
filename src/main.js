import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 引入剛寫好的地圖
import './style.css'
 // 💡 關鍵全新加入：引入 Google 字體樣式

createApp(App).use(router).mount('#app')