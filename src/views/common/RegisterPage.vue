<template>
  <div class="page">
    <div class="form-box">
      <van-form ref="logoForm" @submit="onSubmit">
        <van-cell-group>
<!--          上传头像-->
          <van-field name="uploader" label="头像" required>
            <template #input>
              <van-uploader v-model="file" multiple  :max-count="1" />
            </template>
          </van-field>


          <van-field
            v-model="username"
            name="username"
            label="用户名"
            required
            clearable
            center
            placeholder="请输入用户名"
            :rules="[{ required: true, message: '请输入用户名' }]"
          />
          <van-field
            v-model="password"
            name="password"
            label="密码"
            required
            clearable
            center
            autocomplete="off"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请输入密码' }]"
          >
          </van-field>
          <van-field
            v-model="phone"
            name="phone"
            label="手机号"
            required
            clearable
            center
            autocomplete="tel"
            placeholder="请输入手机号"
            :rules="[{ required: true, message: '请输入手机号' }, { pattern: phonePattern, message: '手机号格式有误' }]"
          />
        </van-cell-group>
        <div class="form-button-box">
          <van-button round block type="primary" native-type="submit">注册</van-button>
        </div>
      </van-form>
    </div>
    <div class="display-flex-between mg-small">
      <div class="button-text" @click="goLoginPath">登录</div>
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
import {Register} from "../../api/api";

const router = useRouter()
const route = useRoute()

function goLoginPath () {
  router.replace({ path: '/login' })
}
function goForgetPath () {
  router.replace({ path: '/forget' })
}

const logoForm = ref(null)
const username = ref('')
const password = ref('')
const phone = ref('')
const file = ref([])

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
const afterRead = (file) => {
 // avatar.value = file.content
  console.log(file)
}
const onSubmit = async (values) => {
  console.log('submit', values)
  if (!userAgreement.value) {
    Toast.fail('请阅读并勾选用户协议')
    return false
  }
  // 提交
  const data = {
    username: username.value,
    password: password.value,
    avatar: file.value[0].content,
    phone: phone.value
  }

  console.log(data)
  const res = await Register(data)
  if (res.data.code) {
    Toast.success('注册成功')
    await router.replace({path: '/login'})
  } else {
    Toast.fail(res.msg)
  }
}
</script>

<style lang="less" scoped>
@import './../../styles/login.less';
</style>
