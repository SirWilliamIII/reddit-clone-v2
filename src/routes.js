import Posts from './components/posts/Posts.vue'
import Home from './components/Home.vue'

export const routes = [
	{ path: '', component: Home },
	{ path: '/posts', component: Posts }
]
