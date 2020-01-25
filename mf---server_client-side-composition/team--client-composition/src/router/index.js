import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
		component: Home,
		props: {gender: ''}
	},
	{
    path: '/men',
    name: 'men',
		component: Home,
		props: {gender: 'men'}
	},
	{
    path: '/woman',
    name: 'woman',
		component: Home,
		props: {gender: 'woman'}
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/Detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
