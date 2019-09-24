import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
	routes: [
		// 登陆组件
		{
			path: '/',
			name: 'Login',
			meta: {
				title: '登陆'
			},
			component: () => import('../view/login/login.vue')
		},
		// 页面容器组件
		{
			path: '/home',
			name: 'Main',
			meta: {
				title: '首页'
			},
			component: () => import('../view/layout/main.vue'),
			children: [
				{
					path: '/clientCenter',
					name: 'clientCenter',
					meta: {
						title: '用户中心'
					},
					component: () => import('../view/clientCenter/clientCenter.vue')
				}
			]
		}
	]
})
