<template>
  <div>

    <van-row>
      <van-col span="5">
        <van-sidebar v-model="active" @change="onChange">
          <div v-for="item in goodType">
            <van-sidebar-item :title=item.name />
          </div>
      </van-sidebar>
      </van-col>
      <van-col span="19">
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
      </van-col>
    </van-row>




  </div>
</template>

<script setup>
import axios from "axios";
import {onBeforeMount, ref} from "vue";
import {Toast} from "vant";
import {CategoryList, GoodsList, GoodsListByCategory} from "../../api/api";
const data_s=ref([])
const active=ref(0)

const goodType=ref([])
//获取goodType
const GetGoodTypes = async () => {
  const res = await CategoryList();
  console.log(res.data)
  if (res.data.code) {
    goodType.value = res.data.data;
  } else {
    Toast(res.data.msg);
  }
  category_id.value= goodType.value[0].ID;
  await getData()
}

const category_id = ref(0);


const onChange = (index) => {
  category_id.value = goodType.value[index].ID
  getData()
};
//获取数据
const getData = async () => {
  const res = await GoodsListByCategory(category_id.value);
  console.log(res.data);
  data_s.value=res.data.data;
};
onBeforeMount(
    GetGoodTypes
)
</script>

<style scoped>

</style>
