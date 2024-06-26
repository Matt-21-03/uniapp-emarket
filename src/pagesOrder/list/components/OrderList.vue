<script setup lang="ts">
import { OrderState } from '@/services/constants'
import { orderStateList } from '@/services/constants'
import { getMemberOrderAPI, putMemberOrderReceiptByIdAPI, deleteMemberOrderAPI } from '@/services/order'
import { getPayMockAPI } from '@/services/pay'
import type { OrderItem } from '@/types/order'
import type { OrderListParams } from '@/types/order'
import { onMounted, ref } from 'vue'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

// 定义 porps
const props = defineProps<{
  orderState: number
}>()

// 请求参数
const queryParams: OrderListParams = {
  page: 1,
  pageSize: 5,
  orderState: props.orderState,
}

//是否加载中标记
const isLoading = ref(false)

// 获取订单列表
const orderList = ref<OrderItem[]>([])
const getMemberOrderData = async () => {
  console.log(queryParams)
  //如果数据出于加载中,退出函数
  if (isLoading.value) return
  //退出分页判断
  if (isFinish.value) {
    return uni.showToast({ icon: 'none', title: '没有更多数据了' })
  }
  //发送请求前,标记为加载中
  isLoading.value = true
  //发送请求
  const res = await getMemberOrderAPI(queryParams)
  //数组追加
  console.log('res.result.items')
  console.log(res.result.items)
  console.log('...res.result.items')
  console.log(...res.result.items)
  orderList.value.push(...res.result.items)
  isLoading.value = false
  //分页条件
  if (queryParams.page < res.result.pages) {
    //页码累加
    queryParams.page++
  } else {
    //分页已结束
    isFinish.value = true
  }
}

onMounted(() => {
  getMemberOrderData()
})

//订单支付
const onOrderPay = async (id: string) => {
  await getPayMockAPI({ orderId: id })
  uni.showToast({ title: '模拟支付成功' })
  setTimeout(() => {
    wx.showModal({
      title: '温馨提示',
      content: '此交易为模拟支付',
      confirm: '知道了',
      showCancel: false,
    })
  }, 1000);
  const order = orderList.value.find((v) => v.id === id)
  order!.orderState = OrderState.DaiFaHuo
}

// 确认收货
const onOrderConfirm = (id: string) => {
  uni.showModal({
    content: '为保障您的权益，请收到货并确认无误后，再确认收货',
    confirmColor: '#27BA9B',
    success: async (res) => {
      if (res.confirm) {
        await putMemberOrderReceiptByIdAPI(id)
        uni.showToast({ icon: 'success', title: '确认收货成功' })
        // 确认成功，更新为待评价
        const order = orderList.value.find((v) => v.id === id)
        order!.orderState = OrderState.DaiPingJia
      }
    },
  })
}

//删除订单
const onOrderDelete = (id: string) => {
  uni.showModal({
    content: '是否删除订单',
    confirmColor: '#27BA9B',
    success: async (success) => {
      if (success.confirm) {
        await deleteMemberOrderAPI({ ids: [id] })
        uni.redirectTo({ url: '/pagesOrder/list/list' })
      }
    },
  })
}

//是否分页结束
const isFinish = ref(false)
//是否触发下拉刷新
const isTriggered = ref(false)
//自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  //开始动画
  isTriggered.value = true
  //重置数据
  queryParams.page = 1
  orderList.value = []
  isFinish.value = false
  //加载数据
  await getMemberOrderData()
  isTriggered.value = false
}
</script>

<template>
  <scroll-view scroll-y class="orders" enable-back-to-top='true' refresher-enabled='true'
    @refresher-triggered="onRefresherrefresh" @scrolltolower="getMemberOrderData">
    <view class="card" v-for="order in orderList" :key="order.id">
      <!-- 订单信息 -->
      <view class="status">
        <text class="date">{{ order.createTime }}</text>
        <!-- 订单状态文字 -->
        <text>{{ orderStateList[order.orderState].text }}</text>
        <!-- 待评价/已完成/已取消 状态: 展示删除订单 -->
        <text v-if="order.orderState >= OrderState.DaiPingJia" @tap="onOrderDelete(order.id)"
          class="icon-delete"></text>
      </view>
      <!-- 商品信息，点击商品跳转到订单详情，不是商品详情 -->
      <navigator v-for="item in order.skus" :key="item.id" class="goods"
        :url="`/pagesOrder/detail/detail?id=${order.id}`" hover-class="none">
        <view class="cover">
          <image mode="aspectFit" :src="item.image"></image>
        </view>
        <view class="meta">
          <view class="name ellipsis">{{ item.name }}</view>
          <view class="type">{{ item.attrsText }}</view>
        </view>
      </navigator>
      <!-- 支付信息 -->
      <view class="payment">
        <text class="quantity">共{{ order.totalNum }}件商品</text>
        <text>实付</text>
        <text class="amount"> <text class="symbol">¥</text>{{ order.payMoney }}</text>
      </view>
      <!-- 订单操作按钮 -->
      <view class="action">
        <!-- 待付款状态：显示去支付按钮 -->
        <template v-if="order.orderState === OrderState.DaiFuKuan">
          <view class="button primary" @tap="onOrderPay(order.id)">去支付</view>
        </template>
        <template v-else>
          <navigator class="button secondary" :url="`/pagesOrder/create/create?orderId=${order.id}`" hover-class="none">
            再次购买
          </navigator>
          <!-- 待收货状态: 展示确认收货 -->
          <view v-if="order.orderState === OrderState.DaiShouHuo" @tap="onOrderConfirm(order.id)"
            class="button primary">
            确认收货</view>
        </template>
      </view>
    </view>
    <!-- 底部提示文字 -->
    <view class="loading-text" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
      {{ isFinish ? '没有更多数据~' : '正在加载...' }}
    </view>
  </scroll-view>
</template>

<style lang="scss">
// 订单列表
.orders {
  .card {
    min-height: 100rpx;
    padding: 20rpx;
    margin: 20rpx 20rpx 0;
    border-radius: 10rpx;
    background-color: #fff;

    &:last-child {
      padding-bottom: 40rpx;
    }
  }

  .status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 28rpx;
    color: #999;
    margin-bottom: 15rpx;

    .date {
      color: #666;
      flex: 1;
    }

    .primary {
      color: #ff9240;
    }

    .icon-delete {
      line-height: 1;
      margin-left: 10rpx;
      padding-left: 10rpx;
      border-left: 1rpx solid #e3e3e3;
    }
  }

  .goods {
    display: flex;
    margin-bottom: 20rpx;

    .cover {
      width: 170rpx;
      height: 170rpx;
      margin-right: 20rpx;
      border-radius: 10rpx;
      overflow: hidden;
      position: relative;

      .image {
        width: 170rpx;
        height: 170rpx;
      }
    }

    .quantity {
      position: absolute;
      bottom: 0;
      right: 0;
      line-height: 1;
      padding: 6rpx 4rpx 6rpx 8rpx;
      font-size: 24rpx;
      color: #fff;
      border-radius: 10rpx 0 0 0;
      background-color: rgba(0, 0, 0, 0.6);
    }

    .meta {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .name {
      height: 80rpx;
      font-size: 26rpx;
      color: #444;
    }

    .type {
      line-height: 1.8;
      padding: 0 15rpx;
      margin-top: 10rpx;
      font-size: 24rpx;
      align-self: flex-start;
      border-radius: 4rpx;
      color: #888;
      background-color: #f7f7f8;
    }

    .more {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22rpx;
      color: #333;
    }
  }

  .payment {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    line-height: 1;
    padding: 20rpx 0;
    text-align: right;
    color: #999;
    font-size: 28rpx;
    border-bottom: 1rpx solid #eee;

    .quantity {
      font-size: 24rpx;
      margin-right: 16rpx;
    }

    .amount {
      color: #444;
      margin-left: 6rpx;
    }

    .symbol {
      font-size: 20rpx;
    }
  }

  .action {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 20rpx;

    .button {
      width: 180rpx;
      height: 60rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 20rpx;
      border-radius: 60rpx;
      border: 1rpx solid #ccc;
      font-size: 26rpx;
      color: #444;
    }

    .secondary {
      color: #27ba9b;
      border-color: #27ba9b;
    }

    .primary {
      color: #fff;
      background-color: #27ba9b;
      border-color: #27ba9b;
    }
  }

  .loading-text {
    text-align: center;
    font-size: 28rpx;
    color: #666;
    padding: 20rpx 0;
  }
}
</style>
