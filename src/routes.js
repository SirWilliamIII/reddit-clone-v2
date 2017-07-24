import Posts from './components/Posts.vue'
import Home from './components/Home.vue'
import CreatePost from './components/CreatePost.vue'

export const routes = [
	{ path: '', component: Home },
	{ path: '/posts', component: Posts },
	{ path: '/createpost', component: CreatePost }
]
