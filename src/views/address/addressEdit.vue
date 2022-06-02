<template>
  <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
  />
</template>

<script setup>
import {Toast} from "vant";
import {ref} from "vue";
import { areaList } from '@vant/area-data';

const searchResult = ref([]);

const onSave = () => Toast('save');
const onDelete = () => Toast('delete');
const onChangeDetail = (val) => {
  if (val) {
    searchResult.value = [
      {
        name: '三峡大学',
        address: '宜昌市西陵区',
      },
    ];
  } else {
    searchResult.value = [];
  }
};
</script>

<style lang="less" scoped>
</style>
