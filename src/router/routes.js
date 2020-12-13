import Home from '../views/Home.vue'
export default [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
    //   meta: { requiresAuth: true },//路由元信息
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      /**
       * 路由独享的守卫
       * @param {*} to 
       * @param {*} from 
       * @param {*} next 
       */
      beforeEnter: (to, from, next) => {
        
      }
    },
    // {
    //     path: '*',
    //     name: '404',
    //     component: import(/* webpackChunkName: "about" */ '../views/404.vue')
    // },
    
  ]