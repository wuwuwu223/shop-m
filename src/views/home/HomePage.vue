<template>
<!--  <div class="page-head">二手市场</div>-->
  <van-notice-bar
      left-icon="volume-o"
      text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
  />


  <van-search
      v-model="search_value"
      placeholder="请输入搜索关键词"
      @search="onSearch"
  />
  <van-cell-group>
    <van-swipe :autoplay="3000"  height="300">
      <van-swipe-item v-for="image in items" :key="image">
        <van-image :src="image.pic" width="100%"  height="300"/>
      </van-swipe-item>
    </van-swipe>
  </van-cell-group>

  <van-grid :column-num="3">
    <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
  </van-grid>


</template>

<script setup>

import {ref} from "vue";
import {useRouter} from "vue-router";
import {Banner} from "../../api/api";
const router = useRouter()
let search_value=ref("")
const onSearch =  () => {
  router.push('/search?search_value='+search_value.value)
}

//轮播图
const items = ref([])
const getItems = async () => {
  const data=await Banner()
  //打印数据
  console.log(data)

  items.value=data.data.data
}

//挂载页面之前调用轮播图
getItems()


</script>

<style lang="less" scoped>
</style>
<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>

