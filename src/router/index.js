import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
//全局前置守卫
router.beforeEach((to, from, next) => {
  next()
})
export default router
