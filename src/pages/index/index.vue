<script setup lang="ts">
import type { XtxGuessInstance } from '@/types/component'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { http } from '@/utils/http'


const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

const goodList = ref<CategoryItem[]>([])
const getGoodsData = async () => {
  const goods_res = await getHomeCategoryAPI()
  goodList.value = goods_res.result
}

const hotList = ref<HotItem[]>([])
const getHotListData = async () => {
  const hotList_res = await getHomeHotAPI()
  hotList.value = hotList_res.result
  console.log(hotList.value)
}

const guessRef = ref<XtxGuessInstance>()

const onScrolltolower = () => {
  console.log("容器新增数据")
  guessRef.value?.getMore()
}

const isTriggered = ref(false)

const onRefresherrefresh = async () => {
  isTriggered.value = true
  //reset data
  console.log("容器刷新")
  guessRef.value?.resetData()
  await Promise.all([getHomeBannerData(), getGoodsData(), getHotListData(), guessRef.value?.getMore()])
  console.log("容器刷新完成")
  isTriggered.value = false
}

const isLoading = ref(true)

onLoad(async () => {

  isLoading.value = true
  console.log(isLoading.value)
  await Promise.all([getHomeBannerData(), getGoodsData(), getHotListData()])
  isLoading.value = false
  console.log(isLoading.value)
})

const scroll = (e) => {
  console.log(e.detail.scrollTop)
}

</script>

<template>

  <CustomNavbar />

  <scroll-view @scrolltolower="onScrolltolower" @refresherrefresh="onRefresherrefresh" refresher-enabled
    :refresher-triggered="isTriggered" class="scroll-view" lower-threshold="50" @scroll="scroll" scroll-y>
    <PageSkeleton v-if="isLoading"></PageSkeleton>
    <template v-else>
      <XtxSwiper :list="bannerList" />
      <CategoryPanel :list="goodList" />
      <HotPanel :list="hotList" />
      <XtxGuess ref="guessRef" />
    </template>

  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  overflow: hidden;
}

.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
  overflow: hidden;
}
</style>
