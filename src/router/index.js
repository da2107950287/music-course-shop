import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: ()=>import('../views/Home.vue')
  },
  {
    path:'/home',
    component:()=>import('../views/Home.vue')
  },
  {
    path:'/detail',
    component:()=>import('../views/Detail.vue')
  },
  {
    path:'/user',
    component:()=>import('../views/User.vue'),
    children:[
      {
        path:'profile',
        component:()=>import('../views/Profile.vue'),
        meta:{title:'我的资料'}
      },
      {
        path:'course',
        component:()=>import('../views/Course.vue'),
        meta:{title:'我的课程'}
      },
      {
        path:'integral',
        component:()=>import('../views/Integral.vue'),
        meta:{title:'我的积分'}
      },
      {
        path:'order',
        component:()=>import('../views/Order.vue'),
        meta:{title:'我的订单'}
      }

    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
