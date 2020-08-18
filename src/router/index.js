import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from 'store'
Vue.use(VueRouter)
// 解决vue-router重复点击菜单报错的问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
const routes = [
  { path: '/', redirect: '/index' },
  {
    path: '/index',
    component: () => import('views/Index.vue'),
    children: [
      {
        path: '/',
        redirect: 'home'
      },
      {
        path: 'home',
        component: () => import('views/Home.vue'),
      },
      {
        path: 'detail',
        component: () => import('views/Detail.vue'),
        meta: { title: "课程详情" }
      },
      {
        path: 'vedio',
        component: () => import('views/Vedio.vue'),
        meta: { title: "录播播放" }
      },
      {
        path: 'courses',
        component: () => import('views/Courses.vue'),
        meta: { title: "" }
      },
      {
        path: 'submitOrder',
        component: () => import('views/SubmitOrder.vue'),
        meta: { title: '提交订单' }
      },
      {
        path: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ 'views/About.vue')
      },
      {
        path: 'buySuccess',
        component: () => import('views/BuySuccess.vue'),
        meta: { title: '购买成功' }
      },
      {
        path: 'orderDetail',
        component: () => import('views/OrderDetail.vue'),
        meta: { title: '订单详情' }
      },
      {
        path: 'courseLearning',
        component: () => import("views/CourseLearning.vue"),
        meta: { title: "课程学习" }
      },

      {
        path: 'scanPay',
        component: () => import("views/ScanPay.vue"),
        meta: { title: "扫码支付" }
      },
      {
        path: 'paySuccess',
        component: () => import("views/PaySuccess.vue"),
        meta: { title: "支付成功" }
      },
      {
        path: 'user',
        component: () => import('views/User.vue'),
        children: [
          {
            path: "/", redirect: "profile"
          },
          {
            path: 'profile',
            component: () => import('views/Profile.vue'),
            meta: { title: '我的资料' }
          },

          {
            path: 'course',
            component: () => import('views/Course.vue'),
            meta: { title: '我的课程' }
          },

          {
            path: 'order',
            component: () => import('views/Order.vue'),
            meta: { title: '我的订单' }
          },
          {
            path: 'collect',
            component: () => import('views/Collect.vue'),
            meta: { title: '我的收藏' }
          },
          {
            path: 'news',
            component: () => import('views/News.vue'),
            meta: { title: '我的消息' }
          },
          {
            path: 'integral',
            component: () => import('views/Integral.vue'),
            meta: { title: '我的积分' }
          },
        ]
      },
      {
        path: 'liveVedio',
        component: () => import("views/LiveVedio.vue"),
        meta: { title: "直播" }
      },

    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (localStorage.getItem("token")) {
    next();
  } else {
    if (to.path.includes('/user')) {
      next({
        path: '/index/home'
      })
    } else {
      next();

    }
  }
})
export default router
