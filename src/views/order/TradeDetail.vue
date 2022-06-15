<template>
  <van-cell-group title="收货信息" >  <van-cell icon="location-o" :title=Order.address :label="Order.name + ' ' + Order.phone" /></van-cell-group>
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
    <van-cell
        title="商品价格"
        :value="(Order.price/100).toFixed(2).toString() + '元'"
    />
    <van-cell title="商品运费" :value="(goodDetail.freight/100).toFixed(2).toString() + '元'" />
    <van-cell title="订单总价" :value="(Order.price/100).toFixed(2).toString() + '元'" />
    <van-cell title="实付价格" :value="(Order.price/100).toFixed(2).toString() + '元'" />
    <van-cell title="订单编号" :value="Order.ID" />
    <van-cell title="订单状态" :value=parsestatus(Order.status) />
    <van-cell title="下单时间" :value=parseTime(Order.CreatedAt) />
    <van-cell title="付款时间" v-if="Order.status>=1" :value="parseUnixTime(Order.pay_at)" />
    <van-cell title="发货时间" v-if="Order.status>=2" :value="parseUnixTime(Order.send_at)" />
    <van-cell title="完成时间" v-if="Order.status>=3" :value="parseUnixTime(Order.receive_at)" />
</van-cell-group>
<van-cell-group v-if="Order.buyer_id===userInfo.id">
  <van-action-bar-button  v-if="Order.status===0" type="warning" text="取消订单" @click="onClickButton" />
  <van-action-bar-button v-if="Order.status===0" type="danger" text="付款" @click="onPay" />
  <van-action-bar-button v-if="Order.status===2" type="primary" text="确认收货" @click="onReceive" />
</van-cell-group>
  <van-cell-group v-if="Order.seller_id===userInfo.id">
    <van-action-bar-button  v-if="Order.status===0" type="warning" text="取消订单" @click="onClickButton" />
    <van-action-bar-button v-if="Order.status===0" type="danger" text="修改价格" @click="onPay" />
    <van-action-bar-button v-if="Order.status===1" type="primary" text="发货" @click="onSend" />
  </van-cell-group>



</template>

<script setup>
import {Toast} from "vant";
import {onBeforeMount, ref} from "vue";
import {CreateOrder, GoodsDetail, OrderDetail, Pay, Receive, Send} from "../../api/api";
import {useRoute} from "vue-router";
import {storeToRefs} from "pinia/dist/pinia";
import {useUserStore} from "../../store";
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
const tel = ref('13000000000');
const name = ref('张三');
const onEdit = () => Toast('edit');

//解析时间戳
function parseUnixTime(unixTime) {
  var time = new Date(unixTime * 1000);
  var ymdhis = time.getFullYear() + "/" + (time.getMonth() + 1) + "/" + time.getDate() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
  return ymdhis;
}

const goodDetail=ref({})
const address=ref('')
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

//付款
const onPay = async () => {
  Toast('付款');
  const res = await Pay(getId());
  if (res.data.code) {
    Toast(res.data.msg);
    await getData();
  } else {
    Toast(res.data.msg);
  }
}
//发货
const onSend = async () => {
  Toast('发货');
  const data = {
    id: getId(),
    address: address.value,
    name: name.value,
    tel: tel.value,
  };
  const res = await Send(data);
  if (res.data.code) {
    Toast(res.data.msg);
    await getData();
  } else {
    Toast(res.data.msg);
  }
}
function parseTime(time) {
  const date = new Date(time)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].join('/') + ' ' + [hour, minute, second].join(':')
}

//收货
const onReceive = async () => {
  Toast('收货');
  const res = await Receive({
    id: getId()
  });
  if (res.data.code) {
    Toast(res.data.msg);
    await getData();
  } else {
    Toast(res.data.msg);
  }
}
//获取数据
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
const getId = () => {
  const router=useRoute()
  return router.query.id
};
const Order = ref({})
const getData = async () => {
  const res = await OrderDetail(getId());
  goodDetail.value=res.data.data.good;
  Order.value=res.data.data;
};

onBeforeMount(
    getData
)



</script>

<style scoped>

</style>
