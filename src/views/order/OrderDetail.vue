<template>
  <van-cell-group title="收货信息" >  <van-cell icon="location-o" :title=address value="点击修改" :label="name + ' ' + tel" is-link @click="show = true" /></van-cell-group>
  <van-cell-group title="商品信息" ></van-cell-group>
  <van-card
      :price=(goodDetail.price/100).toFixed(2)
      :desc=goodDetail.detail
      :title=goodDetail.name
      :thumb=goodDetail.pictures[0].url
      @click="$router.push('/good/detail?id='+goodDetail.ID)"
  />


  <van-action-sheet v-model:show="show" :actions="actions" @select="onSelect" />

  <van-cell-group title="订单信息">
    <van-cell v-if="goodDetail.freight!==0" title="运费" :value="(goodDetail.freight/100).toFixed(2).toString() + '元'" />
    <van-cell v-if="goodDetail.freight===0"  title="运费" ><van-tag type="danger">包邮</van-tag></van-cell>
  </van-cell-group>


  <van-submit-bar :price=goodDetail.price+goodDetail.freight button-text="提交订单" @submit="onSubmit" />
</template>

<script setup>
import {Toast} from "vant";
import {onBeforeMount, ref} from "vue";
import {CreateOrder, GoodsDetail} from "../../api/api";
import {useRoute, useRouter} from "vue-router";
import router from "../../router";
const tel = ref('13000000000');
const name = ref('张三');
const onEdit = () => Toast('edit');
const onSubmit = async () => {
  //CreateOrder
  const router=useRouter();
  const data = {
      name: name.value,
      tel: tel.value,
      address: address.value,
      good_id: getId()
    }
  const res = await CreateOrder(data);
  if (res.data.code) {
    Toast(res.data.msg);
    await router.replace('/OrderView' + '?id=' + res.data.data.order_id);
  } else {
    Toast(res.data.msg);
  }
};
const goodDetail=ref({})
const address=ref('湖北省宜昌市 西陵区 大学路 三峡大学')
const show = ref(false);
const actions = [
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三' },
];
const onSelect = (item) => {
  // 默认情况下点击选项时不会自动收起
  // 可以通过 close-on-click-action 属性开启自动收起
  show.value = false;
  Toast(item.name);
};
//获取数据
const getId = () => {
  const router=useRoute()
  return router.query.id
};
const getData = async () => {
  const res = await GoodsDetail(getId());
  console.log(res.data);
  goodDetail.value=res.data.data;
};

onBeforeMount(
    getData
)



</script>

<style scoped>

</style>
