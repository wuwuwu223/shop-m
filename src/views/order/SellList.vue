<template>
  <div>
    <ol>
      <li v-for="data in data_s">
        <van-card
            :price=(data.price/100).toFixed(2)
            :desc=data.good.detail
            :tag=parsestatus(data.status)
            :title=data.good.name
            :thumb=data.good.pictures[0].url
            @click="$router.push('/orderView'+'?id='+data.ID)"
        />
      </li>
    </ol>
  </div>
</template>

<script setup>
import {onBeforeMount, ref} from "vue";
import {useRoute} from "vue-router";
import {MyOrderList, MySellOrderList} from "../../api/api";

let data_s=ref([])
const router=useRoute()

//fetch data from server
const FetchData = async () => {
  const data = {
    page: 1,
    size: 10,
  }
  const res=await MySellOrderList(data)
  if(res.data.code){
    data_s.value=res.data.data
  }
}
function parsestatus(status){
  switch (status){
    case 0:
      return '待付款';
    case 1:
      return '待发货';
    case 2:
      return '待收货';
    case 3:
      return '已完成';
    case 4:
      return '已取消';
    case 5:
      return '已退款';
  }
}
onBeforeMount(
    FetchData
)
</script>

<style scoped>

</style>
