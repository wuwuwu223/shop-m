<template>
  <div class="page">
    <div class="tabs-box">
      <van-tabs v-model:active="tabActive">
        <van-tab v-for="item in tabList" :key="item.value" :title="item.label" :name="item.value"></van-tab>
      </van-tabs>
    </div>
    <div class="form-box">
      <van-form ref="logoForm" @submit="onSubmit">
        <van-cell-group v-if="tabActive === 0">
          <van-field
            v-model="username"
            name="username"
            label="用户名"
            required
            clearable
            center
            autocomplete="username"
            placeholder="请输入用户名"
            :rules="[{ required: true, message: '请输入用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            required
            clearable
            center
            autocomplete="current-password"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请输入密码' }]"
          />
        </van-cell-group>
        <div class="form-button-box">
          <van-button round block type="primary" native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
    <div class="display-flex-between mg-small">
      <div class="button-text" @click="goRegisterPath">注册</div>
<!--      <div class="button-text" @click="goForgetPath">忘记密码</div>-->
    </div>
    <div class="page-footer">
      <div class="page-footer-wrap van-safe-area-bottom">
        <van-checkbox v-model="userAgreement">用户协议</van-checkbox>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Toast } from 'vant'
import { useCountDown } from '@vant/use'
import { phonePattern, smsPattern } from '@/utils'
import { useUserStore } from '@/store'
import axios from "axios";
import cookie from "../../plugins/cookie";
import {Login} from "../../api/api";

const router = useRouter()
const route = useRoute()

function goRegisterPath () {
  router.replace({ path: '/register' })
}
function goForgetPath () {
  router.replace({ path: '/forget' })
}

const tabList = [
  { label: '登陆', value: 0 },
]
const tabActive = ref(tabList[0].value)

const logoForm = ref(null)
// 密码
const username = ref('')
const password = ref('')
// 验证码
const phone = ref('')
const sms = ref('')

const userAgreement = ref(false)
const smsBtnShow = ref(true)

// 倒计时
const countDown = useCountDown({
  // 1 分钟
  time: 60 * 1000,
  onFinish: () => {
    smsBtnShow.value = true
    countDown.reset()
  }
})
// 发送验证码
function sendSmsEvent () {
  logoForm.value.validate('phone')
      .then(res => {
        smsBtnShow.value = false
        countDown.start()
      })
      .catch(err => {
        console.log(err)
      })
}


const userStore = useUserStore()
const onSubmit = async (values) => {
  console.log('submit', values)
  if (!userAgreement.value) {
    Toast.fail('请阅读并勾选用户协议')
    return false
  }
  let data = await Login(values);
  //toast.clear()
  if (data.data.code!==true){
    Toast.fail(data.data.msg)
    return
  }
  cookie.set(import.meta.env.VITE_token, data.data.data.token, {path: '/'})
  await userStore.getUserInfoFn()
  console.log(data)
  if (route.query.from) {
    await router.push({name: route.query.from})
  } else {
    await router.push({path: '/user'})
  }
}
</script>

<style lang="less" scoped>
@import './../../styles/login.less';
</style>
