<template>
  <van-cell-group>
    <van-cell title="头像" is-link center @click="choseUserImgEvent">
      <div class="user-img-box" style="width: 100%;display: flex;justify-content: flex-end;">
        <van-image v-if="userInfo.headerImg" class="user-img" lazy-load :src="userInfo.headerImg"></van-image>
        <van-uploader v-show="!userInfo.headerImg" ref="userImgUploader" :max-size="userImgMaxSize" @oversize="userImgOversize" :before-read="userImgBeforeRead" :after-read="userImgAfterRead" preview-size="68" />
      </div>
    </van-cell>
    <van-cell v-for="item in featureList" :title="item.title" :value="item.value" :to="item.to" is-link />
  </van-cell-group>
  <van-button type="primary" plain block color="#fff" @click="loginOutEvent" class="button--text-blank_white-bg mgt-middle">退出</van-button>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { Toast } from 'vant'
import Compressor from 'compressorjs'
import { useUserStore } from '@/store'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)

const featureList = computed(() => {
  return [
    {
      title: '名称',
      value: userInfo.value.name,
      to: '/changeName'
    },
    {
      title: '修改密码',
      value: '',
      to: '/changePassword'
    }
  ]
})

// 头像上传最大 5M (图片经过 compressorjs 压缩之后的大小)
const userImgMaxSize = 5 * 1024 * 1024
const userImgUploader = ref(null)
function choseUserImgEvent () {
  userImgUploader.value.chooseFile()
}
function userImgBeforeRead (file) {
  return new Promise((resolve) => {
    // compressorjs 默认开启 checkOrientation 选项、图片压缩
    new Compressor(file, {
      success: resolve,
      error(err) {
        console.log(err.message);
      },
    })
  })
}
function userImgOversize (file) {
  Toast('文件大小不能超过 5M')
}
function userImgAfterRead (file) {
  console.log(file)
  const formData = new FormData()
  formData.append('file', file.file)

  // 自行处理上传逻辑
  const toast = Toast.loading({
    message: '上传中...'
  })
  setTimeout(() => {
    toast.clear()
    userStore.userInfo.headerImg = file.content
  }, 1000)
}

function loginOutEvent () {
  userStore.loginOutFn().then(res => {
    router.replace('/login')
  }).catch(err => {
    console.log(err)
  })
}
</script>

<style lang="less" scoped>
@import './../../styles/common.less';

</style>
