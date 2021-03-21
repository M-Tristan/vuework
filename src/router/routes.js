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
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'), 
    },
    {
      path: '/ContourWaterfall',
      name: 'ContourWaterfall',
      component: () => import(/* webpackChunkName: "ContourWaterfall" */ '../views/ContourWaterfall.vue'), 
    }
  ]