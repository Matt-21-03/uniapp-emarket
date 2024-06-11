<template>
  <view>222</view>
  <view>

    <scroll-view scroll-y="true" refresher-enabled="true" class="scroll-Y" @scrolltolower="onScrolltolower2"
      show-scrollbar="true" @scroll="scroll" lower-threshold="50">
      <view id="demo1" class="scroll-view-item">A1</view>
      <view id="demo2" class="scroll-view-item">B</view>
      <view id="demo3" class="scroll-view-item">C</view>
      <button @click="onScrolltolower2">click me</button>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">

const scroll = (e) => {
  console.log(e.detail.scrollTop)
}

const refresh = () => {
  console.log("refresh")
}

const onScrolltolower2 = () => {
  console.log("容器新增数据")

}
</script>

<style>
.scroll-Y {
  height: 900rpx;
}

.scroll-view_H {
  white-space: nowrap;
  width: 100%;
}

.scroll-view-item {
  height: 300rpx;
  line-height: 300rpx;
  text-align: center;
  font-size: 36rpx;
  margin-top: 0;
}

.scroll-view-item_H {
  display: inline-block;
  width: 100%;
  height: 300rpx;
  line-height: 300rpx;
  text-align: center;
  font-size: 36rpx;
}
</style>
