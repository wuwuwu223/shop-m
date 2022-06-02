<template>
  <div class="item" v-for="(item,index) of chatArray" :key="item.time">
    <p class="time" v-if="(index)">
      {{parseTime(item.time)}}
    </p>
    <!-- 自己本人 -->
    <div v-if="item.id == 1" class="user">
      <div v-if="item.type == 0" class="user-item">
        <span v-if="item.nick">{{item.nick}}</span>
        <p class="msg">{{item.msg}}</p>
      </div>
      <div v-if="item.type == 1">
        <van-image lazy-load :src="item.msg" class="msgImg" @load="loadImg" />
      </div>
      <van-image lazy-load :src="item.pic" class="picUrl" @click="toUser(user)" />
    </div>
    <!-- 聊天对象 -->
    <div v-else class="fuser">
      <van-image lazy-load :src="item.pic" class="picUrl" @click="toUser(item)" />
      <div v-if="item.type === 0" class="fuser-item">
        <span v-if="item.nick">{{item.nick}}</span>
        <p v-html="item.msg" class="msg"></p>
      </div>
      <div v-if="item.type === 1">
        <van-image lazy-load :src="item.msg" class="msgImg" @load="loadImg"/>
      </div>
    </div>
  </div>
</template>
<script setup>

const chatArray = [
  {"id":1,"nick":"mzfqy","msg":"111","pic":"https://img.fxss.work/header-1583418772000-23-production","type":0,"time":"2020-04-17T09:33:00.000Z","groupMsg":0},
  {"id":2,"nick":"mzfqy","msg":"111","pic":"https://img.fxss.work/header-1583418772000-23-production","type":0,"time":"2020-04-17T09:33:00.000Z","groupMsg":0},
  {"id":3,"nick":"mzfqy","msg":"111","pic":"https://img.fxss.work/header-1583418772000-23-production","type":0,"time":"2020-04-17T09:33:00.000Z","groupMsg":0},
  {"id":4,"nick":"mzfqy","msg":"111","pic":"https://img.fxss.work/header-1583418772000-23-production","type":0,"time":"2020-04-17T09:33:00.000Z","groupMsg":0},
  {"id":5,"nick":"mzfqy","msg":"111","pic":"https://img.fxss.work/header-1583418772000-23-production","type":0,"time":"2020-04-17T09:33:00.000Z","groupMsg":0},
  {"id":6,"nick":"mzfqy","msg":"111","pic":"https://img.fxss.work/header-1583418772000-23-production","type":0,"time":"2020-04-17T09:33:00.000Z","groupMsg":0},
  {"id":7,"nick":"111","msg":"111","pic":"https://img.fxss.work/header-1583418772000-23-production","type":0,"time":"2020-04-17T09:33:00.000Z","groupMsg":0},
  {"id":8,"nick":"1111","msg":"https://img.fxss.work/header-1583418772000-23-production","pic":"https://img.fxss.work/header-1583418772000-23-production","type":1,"time":"2020-04-17T09:34:00.000Z","groupMsg":0},
]

//loadImg
function loadImg(e) {
  const img = e.target
  const src = img.src
  const parent = img.parentNode
  const imgWidth = img.width
  const imgHeight = img.height
  const parentWidth = parent.clientWidth
  const parentHeight = parent.clientHeight
  const scale = parentWidth / imgWidth
  const imgRealHeight = imgHeight * scale
  if (imgRealHeight > parentHeight) {
    img.style.width = parentWidth + 'px'
    img.style.height = parentHeight + 'px'
  } else {
    img.style.width = parentWidth + 'px'
    img.style.height = imgRealHeight + 'px'
  }
}

    //解析时间
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


</script>
<style lang="less" scoped>
.item{
  margin-bottom: 10px;
  .time{
    text-align: center;
    font-size: 12px;
    margin: 5px 0;
  }
  .fuser,.user{
    display: flex;
    .picUrl{
      width: 30px;
      height: 30px;
      :deep(img){
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }
    .msg{
      padding: 5px 10px;
      line-height: 20px;
      border-radius: 5px;
      word-break:break-word;
    }
    .msgImg{
      max-width: 250px;
      margin: 0 10px;
    }
  }
  .fuser{
    justify-content: flex-start;
    padding-right: 40px;
    .msg{
      margin-left: 10px;
      background: #fff;
      color: #333;
    }
  }
  .user{
    justify-content: flex-end;
    padding-left: 40px;
    .msg{
      margin-right: 10px;
      background: #1989FA;
      color: #fff;
    }
  }
  .fuser-item,.user-item{
    display: flex;
    flex-direction: column;
  }
  .fuser-item{
    span{
      padding-left: 10px;
      margin-bottom: 5px;
      align-self: flex-start;
    }
  }
  .user-item{
    span{
      margin-bottom: 5px;
      padding-right: 10px;
      align-self: flex-end;
    }
  }
}
</style>
