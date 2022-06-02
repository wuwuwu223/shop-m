<template>
  <div>
      <van-search
          v-model="search_value"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
      />
    <ol>
      <li v-for="data in data_s">
        <van-card
            v-if="data.freight==0"
            tag="包邮"
            :price=(data.price/100).toFixed(2)
            :desc=data.detail
            :title=data.name
            :thumb=data.pictures[0].url
            @click="$router.push('/good/detail'+'?id='+data.ID)"
        />
        <van-card
            v-if="data.freight!==0"
            :price=(data.price/100).toFixed(2)
            :desc=data.detail
            :title=data.name
            :thumb=data.pictures[0].url
            @click="$router.push('/good/detail'+'?id='+data.ID)"
        />
      </li>
    </ol>
  </div>
</template>

<script setup>
import axios from "axios";
import {onBeforeMount, ref} from "vue";
import {useRoute} from "vue-router";
import {SearchGoods} from "../../api/api";
import {Toast} from "vant";

let data_s=ref([])
let search_value=ref("")
const router=useRoute()

const onSubmit = async () => {
  console.log(router.query.search_value)
  search_value.value=router.query.search_value
  const res = await SearchGoods(search_value.value)
  console.log(res.data)
  if (res.data.code) {
    data_s.value = res.data.data;
  } else {
    Toast(res.data.msg);
  }

}
const onSearch = async () => {
  const res = await SearchGoods(search_value.value)
  console.log(res.data)
  if (res.data.code) {
    data_s.value = res.data.data;
  } else {
    Toast(res.data.msg);
  }

}
const onCancel = async () => {
  const res = await SearchGoods(search_value.value)
  console.log(res.data)
  if (res.data.code) {
    data_s.value = res.data.data;
  } else {
    Toast(res.data.msg);
  }

}
onBeforeMount(
    onSubmit
)
</script>

<style scoped>

</style>
