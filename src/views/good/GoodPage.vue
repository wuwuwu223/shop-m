<template>

<!--vant轮播图-->
  <van-cell-group>
    <van-swipe :autoplay="3000"  height="300">
      <van-swipe-item v-for="image in goodDetail.pictures" :key="image">
        <van-image :src="image.url" width="100%"  height="300"/>
      </van-swipe-item>
    </van-swipe>
  </van-cell-group>


  <van-cell-group>
    <van-cell>
      <div class="goods-title">名称：{{ goodDetail.name }}</div>
      <div class="goods-price">价格：{{(goodDetail.price/100).toFixed(2)}} 元</div>
    </van-cell>
    <van-cell class="goods-express">
      <van-col v-if="goodDetail.freight!==0" span="10">运费：{{ (goodDetail.freight/100).toFixed(2) }} 元</van-col>
      <van-col v-if="goodDetail.freight===0" span="10">运费：<van-tag class="goods-tag" type="danger">包邮</van-tag></van-col>
    </van-cell>
  </van-cell-group>
  <van-cell-group class="goods-cell-group">
    <van-cell value="查看卖家信息" icon="shop-o" is-link @click="sorry">
      <template #title>
        <span class="van-cell-text">我是卖家</span>
        <van-tag class="goods-tag" type="danger">个人</van-tag>
      </template>
    </van-cell>
  </van-cell-group>


<!--文本展示详情 -->
  <van-tabs style="min-height:400px;">
    <van-tab title="商品详情">
      <!--html-->
      <van-empty v-if="goodDetail.detail===''" image="search" description="暂无详情" />
      <van-row v-else>
        <div v-html="goodDetail.detail" class="pd-10-20"></div>
      </van-row>
    </van-tab>


    <van-tab title="买家评论">
      <van-empty v-if="pinglun===''" image="search" description="暂无详情" />
      <van-row v-else>
        {{pinglun}}
      </van-row>
    </van-tab>
  </van-tabs>


  <van-action-bar>
    <van-action-bar-icon icon="share-o" text="分享" @click="onClickShare" />
    <van-action-bar-icon icon="chat-o" text="联系卖家" @click="onClickIcon" />
    <van-action-bar-button type="danger" text="立即购买" @click="onClickButton" />
  </van-action-bar>
  <van-share-sheet
      v-model:show="showShare"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
  />
</template>

<script setup>
import {Toast} from "vant";
import {onBeforeMount, ref} from "vue";
import router from "../../router";
import {GoodsDetail} from "../../api/api";
import {useRoute} from "vue-router";
const onClickShare = () => showShare.value=true;
const onClickIcon = () => Toast('点击图标');
const onClickButton = () => router.replace('/orderDetail?id='+goodDetail.value.ID);
const showShare = ref(false);
const comment = ref('');
const options = [
  { name: '微信', icon: 'wechat' },
  { name: '微博', icon: 'weibo' },
  { name: '复制链接', icon: 'link' },
  { name: '分享海报', icon: 'poster' },
  { name: '二维码', icon: 'qrcode' },
];

const onSelect = (option) => {
  Toast(option.name);
  showShare.value = false;
};

//从query获取id
const getId = () => {
  const router=useRoute()
  return router.query.id
};
const goodDetail = ref({});
//获取数据
const getData = async () => {
  const id = getId();
  const res = await GoodsDetail(id);
  console.log(res.data);
  goodDetail.value=res.data.data;
};
const loading = ref(false);
const pinglun = ref('1231321');


//获取数据
onBeforeMount(
    getData
)
</script>

<style scoped>

</style>
