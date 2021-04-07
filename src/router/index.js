import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../views/layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect:"/home",
    component: layout,
    children:[
      {
        path: '/home',
        name: 'home',
        component: () => import( '../views/home/index.vue')
      },
    ]
  },
  {
    path: "/pms",
    name: "layout",
    redirect: "/pms/product",
    component: layout,
    children: [
      {
        path: "product",
        name: "product",
        component: () =>
            import(
                /* webpackChunkName: "product" */ "../views/pms/product/index.vue"
                ),
      },
      {
        path: "productAttr",
        name: "productAttr",
        component: () =>
            import(
                /* webpackChunkName: "product" */ "../views/pms/productAttr/index.vue"
                ),
      },
      {
        path: "productCate",
        name: "productCate",
        component: () =>
            import(
                /* webpackChunkName: "product" */ "../views/pms/productCate/index.vue"
                ),
      },
      {
        path: "brand",
        name: "brand",
        component: () =>
            import(
                /* webpackChunkName: "brand" */ "../views/pms/brand/index.vue"
                ),
      },
      {
        path: "addProduct",
        name: "addProduct",
        component: () =>
            import(
                /* webpackChunkName: "brand" */ "../views/pms/addProduct/index.vue"
                ),
      },
      {
        path: "productType",
        name: "productType",
        component: () =>
            import(
                /* webpackChunkName: "brand" */ "../views/pms/productType/index.vue"
                ),
      },
    ],
  },

  {
    path: "/dms",
    name: "orderList",
    redirect: "/dms/orderList",
    component: layout,
    children: [
      {
        path: "orderList",
        name: "orderList",
        component: () =>
            import(
                /* webpackChunkName: "product" */ "../views/dms/orderList/index.vue"
                ),
      },
      {
        path: "orderSet",
        name: "orderSet",
        component: () =>
            import(
                /* webpackChunkName: "product" */ "../views/dms/orderSet/index.vue"
                ),
      },
      {
        path: "reason",
        name: "reason",
        component: () =>
            import(
                /* webpackChunkName: "product" */ "../views/dms/reason/index.vue"
                ),
      },
      {
        path: "salesReturn",
        name: "salesReturn",
        component: () =>
            import(
                /* webpackChunkName: "brand" */ "../views/dms/salesReturn/index.vue"
                ),
      },

    ],
  },












  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/login/index.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( '../views/register/index.vue' +
    '')
  },

  {
    path: '*',
    name: '404',
    component: () => import( '../views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
