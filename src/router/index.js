import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 解决vue-router重复点击菜单报错的问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
const routes = [
  {
    path: '/',redirect:'/home'
  },
  {
    path: '/home',
    component: () => import('../views/Home.vue'),
    children:[
      
    ]
  },
  {
    path: '/detail',
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/buySuccess',
    component: () => import('../views/BuySuccess.vue'),
    meta: { title: '购买成功' }
  },
  {
    path: '/orderDetail',
    component: () => import('../views/OrderDetail.vue'),
    meta: { title: '订单详情' }
  },
  {
    path:'/courseLearning',
    component:()=>import("../views/CourseLearning.vue")
  },
  {
    path: '/user',
    component: () => import('../views/User.vue'),
    children: [
      {
        path: "/user", redirect: "profile"
      },
      {
        path: 'profile',
        component: () => import('../views/Profile.vue'),
        meta: { title: '我的资料' }
      },

      {
        path: 'course',
        component: () => import('../views/Course.vue'),
        meta: { title: '我的课程' }
      },

      {
        path: 'order',
        component: () => import('../views/Order.vue'),
        meta: { title: '我的订单' }
      },
      {
        path: 'collect',
        component: () => import('../views/Collect.vue'),
        meta: { title: '我的收藏' }
      },
      {
        path: 'news',
        component: () => import('../views/News.vue'),
        meta: { title: '我的消息' }
      },
      {
        path: 'integral',
        component: () => import('../views/Integral.vue'),
        meta: { title: '我的积分' }
      },
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
  // base: process.env.BASE_URL,
  routes
})

export default router
