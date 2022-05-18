import '../src/assets/normailze.css'
import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import {
		Tabbar,
		TabbarItem,
		Search,
		Swipe,
		SwipeItem,
		NavBar,
		Sidebar,
		SidebarItem,
		Sticky,
		Image as VanImage,
		Col,
		Row,
		Tag,
		Tabs,
		Icon,
		ConfigProvider
	} from 'vant'
const app = createApp(App)
app.use(router)
app.use(Tabbar)
	.use(TabbarItem)
	.use(Search)
	.use(Swipe)
	.use(SwipeItem)
	.use(NavBar)
	.use(Sidebar)
	.use(SidebarItem)
	.use(Sticky)
	.use(VanImage)
	.use(Col)
	.use(Row)
	.use(Tag)
	.use(Tabs)
	.use(Icon)
	.use(ConfigProvider)
app.mount('#app')
