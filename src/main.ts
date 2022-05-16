import App from './App.vue'
import { createApp } from 'vue';
import { Tabbar, TabbarItem } from 'vant';
import '../src/assets/normailze.css'
const app = createApp(App)
app.use(Tabbar).use(TabbarItem)
app.mount('#app')
