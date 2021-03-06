import { defineStore } from 'pinia'
import merge from 'lodash.merge'
import { getType, validatorDetailObject, validatorNumber, validatorString } from './../utils'

export const useLayoutTabbar = defineStore('layoutTabbar', {
  state: () => {
    return {
      show: true, // 可以控制 tabbar 是否显示
      active: 0, // tabbar 当前选中项
      tabbarProps: { // tabbar 的 props，https://vant-contrib.gitee.io/vant/#/zh-CN/tabbar#tabbar-props
        fixed: true,
        border: true,
        'z-index': 100,
        route: true,
        placeholder: true,
        'safe-area-inset-bottom': true
      },
      tabbar: [ // tabbaritem 的 props， https://vant-contrib.gitee.io/vant/#/zh-CN/tabbar#tabbaritem-props
        {
          name: 0,
          title: '首页',
          icon: 'home-o',
          dot: false,
          badge: '',
          to: '/',
          replace: false
        },
        {
          name: 1,
          title: '商品',
          icon: 'gift-o',
          dot: false,
          badge: '',
          to: '/list',
          replace: true
        },
        {
          name: 2,
          title: '发布商品',
          icon: 'add-o',
          dot: false,
          badge: '',
          to: '/good/publish/index',
          replace: false
        },
        // {
        //   name: 3,
        //   title: '消息',
        //   icon: 'chat-o',
        //   dot: false,
        //   badge: '',
        //   to: '/shoppingCart',
        //   replace: true
        // },
        {
          name: 4,
          title: '我的',
          icon: 'user-o',
          dot: false,
          badge: '',
          to: '/user',
          replace: true
        }
      ]
    }
  },
  getters: {
    tabbarToList() {
      return this.tabbar.map(x => x.to)
    }
  },
  actions: {
    /**
     * 设置 tabbar 的单个项
     * @param {Object} object : { index: 设置项的索引值, detail: 设置项的具体内容 }
     */
    setTabBarItem(object) {
      if (validatorDetailObject(object)) {
        this.$patch((state) => {
          state.tabbar[object.index] = merge(this.tabbar[object.index], object.detail)
        })
      }
    },
    /**
     * 添加 tabbar
     * @param {Object} object : { index: 要添加位置的索引值, detail: 设置项的具体内容 }
     */
    addTabbar(object) {
      if (validatorDetailObject(object)) {
        this.$patch((state) => {
          state.tabbar.splice(object.index, 0, object.detail)
        })
      }
    },
    /**
     * 删除 tabber 的某一项
     * @param {Number|String} value : 删除 tabber 的某一项索引值或者路由path
     */
    removeTabbar(value) {
      if (getType(value) === 'Number') {
        this.$patch((state) => {
          state.tabbar.splice(value, 1)
        })
      } else if (getType(value) === 'String') {
        this.$patch((state) => {
          state.tabbar.splice(this.tabbar.findIndex(x => x.to === value), 1)
        })
      }
    },
    /**
     * 隐藏tabbar
     */
    hideTabbar() {
      this.show = false
    },
    /**
     * 显示tabbar
     */
    showTabbar() {
      this.show = true
    },
    /**
     * 根据 tabbar 中的 to ，返回对应的 name
     * @param {String} path
     * @returns
     */
    pathToName(path) {
      let res = 0
      if (validatorString(path)) {
        const curTabbar = this.tabbar.find(x => x.to === path)
        if (curTabbar) {
          res = curTabbar.name
        }
      }
      return res
    }
  }
})
