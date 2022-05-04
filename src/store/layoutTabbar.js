import { defineStore } from 'pinia'
import merge from 'lodash.merge'
import { validatorDetailObject, validatorNumber, validatorString } from './../utils'

export const useLayoutTabbar = defineStore('layoutTabbar', {
  state: () => {
    return {
      show: true,
      active: 0,
      tabbarProps: {
        fixed: true,
        border: true,
        'z-index': 100,
        'active-color': '#1989fa',
        'inactive-color': '#7d7e80',
        route: true,
        placeholder: true,
        'safe-area-inset-bottom': true
      },
      tabbar: [
        {
          name: 0,
          title: '首页',
          icon: 'home-o',
          dot: false,
          badge: '',
          to: '/',
          replace: true
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
          title: '购物车',
          icon: 'cart-o',
          dot: false,
          badge: '',
          to: '/shopping-cart',
          replace: true
        },
        {
          name: 3,
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
      if (validatorDetailObject(object)) this.tabbar[object.index] = merge(this.tabbar[object.index], object.detail)
    },
    /**
     * 添加 tabbar
     * @param {Object} object : { index: 在哪一项后面添加, detail: 设置项的具体内容 }
     */
    addTabbar(object) {
      if (validatorDetailObject(object)) this.tabbar.splice(object.index, 0, object.detail)
    },
    /**
     * 删除 tabber 的某一项
     * @param {Number} index : 删除 tabber 的某一项索引值
     */
    removeTabbar(index) {
      if (validatorNumber(index)) this.tabbar.splice(index, 1)
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