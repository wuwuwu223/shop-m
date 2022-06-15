import {createRouter, createWebHistory} from 'vue-router'
import permission from './permission'
import demoRouters from './demo'

const HomePage = () => import('../views/home/HomePage.vue')
const ListPage = () => import('../views/list/ListPage.vue')
const ShoppingCartPage = () => import('../views/ShoppingCart/ShoppingCartPage.vue')
const SearchPage = () => import('../views/search/SearchPage.vue')
const GoodDetail = () => import('../views/good/GoodPage.vue')
const GoodPublishIndex = () => import('../views/good/PublishIndex.vue')
const GoodPublish = () => import('../views/good/PublishGood.vue')
const UserPage = () => import('../views/user/UserPage.vue')
const NotFoundPage = () => import('../views/common/NotFoundPage.vue')
const LoginPage = () => import('../views/common/LoginPage.vue')
const RegisterPage = () => import('../views/common/RegisterPage.vue')
const ForgetPage = () => import('../views/common/ForgetPage.vue')
const UserInfoPage = () => import('../views/user/UserInfoPage.vue')
const ChangeNamePage = () => import('../views/user/ChangeNamePage.vue')
const ChangePasswordPage = () => import('../views/user/ChangePasswordPage.vue')
const AddressList = () => import('../views/address/addresslist.vue')
const addressEdit = () => import('../views/address/addressEdit.vue')
const OrderDetail = () => import('../views/order/OrderDetail.vue')
const OrderList = () => import('../views/order/OrderList.vue')
const orderView = () => import('../views/order/TradeDetail.vue')
const SellList = () => import('../views/order/SellList.vue')
const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...demoRouters,
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        requiresAuth: false,
        title: '首页'
      }
    },
    {
      path: '/list',
      name: 'list',
      component: ListPage,
      meta: {
        requiresAuth: false,
        title: '列表'
      }
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: ShoppingCartPage,
      meta: {
        requiresAuth: true,
        title: '消息'
      }
    },
    {
      path: '/search',
      name: 'search',
      component: SearchPage,
      meta: {
        requiresAuth: false,
        title: '搜索'
      }
    },
    {
      path: '/good/detail',
      name: 'goodDetail',
      component: GoodDetail,
      meta: {
        requiresAuth: false,
        title: '商品详情'
      }
    },
    {
      path: '/good/publish/index',
      name: 'goodPublishIndex',
      component: GoodPublishIndex,
      meta: {
        requiresAuth: true,
        title: '发布商品选择类型'
      }
    },
    {
      path: '/good/publish/good',
      name: 'goodPublish',
      component: GoodPublish,
      meta: {
        requiresAuth: false,
        title: '发布商品'
      }
    },
    {
      path: '/user',
      name: 'user',
      component: UserPage,
      meta: {
        requiresAuth: false,
        title: '我的'
      }
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: UserInfoPage,
      meta: {
        requiresAuth: true,
        title: '个人信息'
      }
    },
    {
      path: '/addressList',
      name: 'AddressList',
      component: AddressList,
      meta: {
        requiresAuth: true,
        title: '地址管理'
      }
    },
    {
      path: '/addressEdit',
      name: 'AddressEdit',
      component: addressEdit,
      meta: {
        requiresAuth: true,
        title: '地址编辑'
      }
    },
    {
      path: '/changeName',
      name: 'changeName',
      component: ChangeNamePage,
      meta: {
        requiresAuth: true,
        title: '修改名称'
      }
    },
    {
      path: '/changePassword',
      name: 'changePassword',
      component: ChangePasswordPage,
      meta: {
        requiresAuth: true,
        title: '修改密码'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: {
        requiresAuth: false,
        title: '登录'
      }
    },
    {
      path: '/orderDetail',
      name: 'orderDetail',
      component: OrderDetail,
      meta: {
        requiresAuth: true,
        title: '订单预览'
      }
    },
    {
      path: '/orderView',
      name: 'orderView',
      component: orderView(),
      meta: {
        requiresAuth: true,
        title: '订单详情'
      }
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: OrderList(),
      meta: {
        requiresAuth: true,
        title: '我买到的'
      }
    },
    {
      path: '/sellList',
      name: 'sellList',
      component: SellList(),
      meta: {
        requiresAuth: true,
        title: '我卖出的'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
      meta: {
        requiresAuth: false,
        title: '注册'
      }
    },
    {
      path: '/forget',
      name: 'forget',
      component: ForgetPage,
      meta: {
        requiresAuth: false,
        title: '忘记密码'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundPage,
      meta: {
        requiresAuth: false,
        title: '404'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

permission(router)

export default router
