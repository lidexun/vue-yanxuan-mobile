// import { createApp } from 'vue'
import App from './App.vue'
// import { Tabbar, TabbarItem } from 'vant';
// createApp(App).mount('#app')
import { createApp } from 'vue';
import { Tabbar, TabbarItem } from 'vant';

const app = createApp(App)
app.use(Tabbar).use(TabbarItem)
app.mount('#app')
