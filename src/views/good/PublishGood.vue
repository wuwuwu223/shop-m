<template>
  <van-cell-group>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-cell-group inset>
        <!-- 可以使用 CellGroup 作为容器 -->
        <van-field
            v-model="name"
            label="商品名称"
            placeholder="请输商品名称"
            required
            :rules="[{ required: true, message: '请输入商品名称' }]"
        />
        <van-field
            required
            v-model="detail"
            rows="2"
            autosize
            label="商品详情"
            type="textarea"
            maxlength="1000"
            placeholder="请输入商品详情"
            show-word-limit
            :rules="[{ required: true, message: '请输入商品详情' }]"
        />
        <van-cell required title="商品价格">
          <template #extra>
            <van-stepper v-model="price" min="0" decimal-length="2"/> &nbsp; 元
          </template>
        </van-cell>
        <van-cell required center title="是否包邮">
          <template #right-icon>
            <van-switch v-model="baoyou" size="24" ></van-switch>
          </template>
        </van-cell>
        <van-cell
            v-if="!baoyou"
            title="运费">
          <template #extra>
            <van-stepper v-model="freight" min="0" decimal-length="2"/> &nbsp; 元
          </template>
        </van-cell>

        <van-cell title="商品分类" required is-link arrow-direction="down" value="点击选择" @click=openActionSheet />
        <van-cell required title="商品图片">
          <van-uploader v-model="fileList" multiple />
        </van-cell>

      </van-cell-group>

      <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
    </van-cell-group>
  </van-form>
  </van-cell-group>
  <van-action-sheet v-model:show="show" title="商品分类">
    <div class="content">
      <van-checkbox-group v-model="checked">
        <van-cell-group inset>
          <van-cell
              v-for="(item, index) in goodType"
              clickable
              :key="item.id"
              :title=item.name
              @click="toggle(index)"
          >
            <template #right-icon>
              <van-checkbox
                  :name="item"
                  :ref="el => goodType_selected[index] = el"
                  @click.stop
              />
            </template>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>

    </div>
  </van-action-sheet>
</template>

<script setup>
import {ref} from "vue";
import {AddGoods, CategoryList} from "../../api/api";
import {Toast} from "vant";
import {useRouter} from "vue-router";
const fileList = ref([
  { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' },
  // Uploader 根据文件后缀来判断是否为图片文件
  // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
]);
const detail = ref('');
const name = ref('');
const price = ref('0');
const freight = ref('0');
const router = useRouter();
const baoyou = ref(true);
const goodType=ref([])
const goodType_selected=ref([])
const show = ref(false);

const openActionSheet = () => {
  show.value = true;
};
const toggle = (index) => {
  goodType_selected.value[index].toggle();
  console.log(checked.value)
};
const checked = ref([]);
const onSubmit = async () => {
  //循环遍历checked获取id
  let ids = [];
  for (let i = 0; i < checked.value.length; i++) {
      ids.push(checked.value[i].ID);
  }
  const data = {
    freight: freight.value,
    price: price.value,
    name: name.value,
    detail: detail.value,
    file_list: fileList.value,
    good_type: ids,
  };
  console.log(data);
  // 提交表单

  const res = await AddGoods(data);

  if (res.data.code) {
    Toast('添加成功')
    await router.replace({
      path: '/list'
    })
  } else {
    Toast(res.data.msg)
  }
};

// 初始化数据
const initData = async () => {
  const res = await CategoryList();
  if (res.data.code) {
    goodType.value = res.data.data;
  } else {
    Toast(res.data.msg)
  }
};

initData()

</script>

<style scoped>
.icon-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 18px;
}

.icon-wrapper .van-icon-success {
  line-height: 32px;
  color: var(--van-blue);
}

.icon-wrapper .van-icon-cross {
  line-height: 32px;
  color: var(--van-gray-5);
}
</style>
