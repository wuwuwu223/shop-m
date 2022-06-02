import { defineStore } from 'pinia'
import cookie from '@/plugins/cookie'
import { Toast } from 'vant'
import {UserInfo} from "../api/api";

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      userInfo: {},
      demoCookie: 'shop-mabcdefg',
      demoUserInfo: {
        id: 6,
        name: 'fxss',
        account: '182****9555',
        headerImg: 'https://img.fxss.work/header-1583418772000-23-production'
      }
    }
  },
  getters: {
    isLogin() {
      return JSON.stringify(this.userInfo) !== '{}'
    }
  },
  actions: {
    loginInFn() {
      this.$patch((state) => {
        state.userInfo=state.demoUserInfo
      })
      console.log('userInfo', this.userInfo)
    },
    async loginOutFn() {
      const toast = Toast.loading({
        message: '加载中...'
      })
      console.log('loginOutFn')
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          toast.clear()
          cookie.remove(import.meta.env.VITE_token, { path: '/' })
          this.$patch((state) => {
            state.userInfo = {}
          })
          console.log('userInfo', this.userInfo)
          resolve()
        }, 1000)
      })
    },
    async getUserInfoFn() {
      const toast = Toast.loading({
        message: '加载中...'
      })
      console.log('getUserInfoFn')
      //调用接口获取用户信息

      let data = await UserInfo();
      if (data.data.code===true){
        this.$patch((state) => {
          state.userInfo = data.data.data
        })
        console.log('userInfo', this.userInfo)
        toast.clear()
        }else {
        toast.clear()
        Toast.fail(data.msg)
      }
    }
  }
})
