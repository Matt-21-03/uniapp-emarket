<!--
此文件为开发者工具生成，生成时间: 2024/6/5下午11:07:29
使用方法：
在 D:\Code\Codes\uni-app\erabbit-uni-app-vue3-ts\dist\dev\mp-weixin\pages\goods\goods.wxml 引入模板

```
<import src="goods.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\Code\Codes\uni-app\erabbit-uni-app-vue3-ts\dist\dev\mp-weixin\pages\goods\goods.wxss 中引入样式
```
@import "./goods.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view is="pages/goods/components/PageSkeleton">
      <view class="sk-container PageSkeleton--sk-container">
        <scroll-view class="viewport PageSkeleton--viewport" scroll-y="true">
          <view class="goods PageSkeleton--goods">
            <view class="preview PageSkeleton--preview">
              <swiper autoplay="false" circular="true" current="0">
                <swiper-item
                  style="position:absolute;width:100%;height:100%;transform:translate(0%, 0px) translateZ(0px)">
                  <image class="sk-image PageSkeleton--sk-image" mode="aspectFill"></image>
                </swiper-item>
              </swiper>
              <view class="indicator PageSkeleton--indicator">
                <text
                  class="current PageSkeleton--current sk-transparent PageSkeleton--sk-transparent sk-opacity PageSkeleton--sk-opacity">1</text>
                <text
                  class="split PageSkeleton--split sk-transparent PageSkeleton--sk-transparent sk-opacity PageSkeleton--sk-opacity">/</text>
                <text
                  class="total PageSkeleton--total sk-transparent PageSkeleton--sk-transparent sk-opacity PageSkeleton--sk-opacity">4</text>
              </view>
            </view>
            <view class="meta PageSkeleton--meta">
              <view class="price PageSkeleton--price">
                <text
                  class="symbol PageSkeleton--symbol sk-transparent PageSkeleton--sk-transparent sk-opacity PageSkeleton--sk-opacity">¥</text>
                <text
                  class="number PageSkeleton--number sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-920 PageSkeleton--sk-text-14-2857-920 sk-text PageSkeleton--sk-text sk-image">128.00</text>
              </view>
              <view
                class="name PageSkeleton--name ellipsis PageSkeleton--ellipsis sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-208 PageSkeleton--sk-text-14-2857-208 sk-text PageSkeleton--sk-text sk-image">
                钻石陶瓷涂层多用锅18cm 小奶锅</view>
              <view
                class="desc PageSkeleton--desc sk-transparent PageSkeleton--sk-transparent sk-text-0-0000-573 PageSkeleton--sk-text-0-0000-573 sk-text PageSkeleton--sk-text sk-image">
                4</view>
            </view>
            <view class="action PageSkeleton--action">
              <view
                class="item PageSkeleton--item arrow PageSkeleton--arrow sk-pseudo PageSkeleton--sk-pseudo sk-pseudo-circle PageSkeleton--sk-pseudo-circle">
                <text
                  class="label PageSkeleton--label sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-295 PageSkeleton--sk-text-14-2857-295 sk-text PageSkeleton--sk-text sk-image">选择</text>
                <text
                  class="text PageSkeleton--text ellipsis PageSkeleton--ellipsis sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-214 PageSkeleton--sk-text-14-2857-214 sk-text PageSkeleton--sk-text sk-image">
                  请选择商品规格 </text>
              </view>
              <view
                class="item PageSkeleton--item arrow PageSkeleton--arrow sk-pseudo PageSkeleton--sk-pseudo sk-pseudo-circle PageSkeleton--sk-pseudo-circle">
                <text
                  class="label PageSkeleton--label sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-829 PageSkeleton--sk-text-14-2857-829 sk-text PageSkeleton--sk-text sk-image">送至</text>
                <text
                  class="text PageSkeleton--text ellipsis PageSkeleton--ellipsis sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-700 PageSkeleton--sk-text-14-2857-700 sk-text PageSkeleton--sk-text sk-image">
                  请选择收获地址 </text>
              </view>
              <view
                class="item PageSkeleton--item arrow PageSkeleton--arrow sk-pseudo PageSkeleton--sk-pseudo sk-pseudo-circle PageSkeleton--sk-pseudo-circle">
                <text
                  class="label PageSkeleton--label sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-532 PageSkeleton--sk-text-14-2857-532 sk-text PageSkeleton--sk-text sk-image">服务</text>
                <text
                  class="text PageSkeleton--text ellipsis PageSkeleton--ellipsis sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-89 PageSkeleton--sk-text-14-2857-89 sk-text PageSkeleton--sk-text sk-image">
                  无忧退 快速退款 免费包邮 </text>
              </view>
            </view>
          </view>
          <view class="detail PageSkeleton--detail panel PageSkeleton--panel">
            <view class="title PageSkeleton--title">
              <text
                class="sk-transparent PageSkeleton--sk-transparent sk-text-0-0000-501 PageSkeleton--sk-text-0-0000-501 sk-text PageSkeleton--sk-text sk-image">详情</text>
            </view>
            <view class="content PageSkeleton--content">
              <view class="properties PageSkeleton--properties">
                <view class="item PageSkeleton--item">
                  <text
                    class="label PageSkeleton--label sk-transparent PageSkeleton--sk-transparent sk-text-25-0000-783 PageSkeleton--sk-text-25-0000-783 sk-text PageSkeleton--sk-text sk-image">额定电压功率</text>
                  <text
                    class="value PageSkeleton--value sk-transparent PageSkeleton--sk-transparent sk-text-25-0000-963 PageSkeleton--sk-text-25-0000-963 sk-text PageSkeleton--sk-text sk-image">120V
                    50/60Hz 1200W</text>
                </view>
              </view>
            </view>
          </view>
        </scroll-view>
        <view class="toolbar PageSkeleton--toolbar" style="padding-bottom:34px">
          <view class="icons PageSkeleton--icons">
            <button
              class="icons-button PageSkeleton--icons-button sk-transparent PageSkeleton--sk-transparent sk-button PageSkeleton--sk-button sk-pseudo PageSkeleton--sk-pseudo sk-pseudo-circle PageSkeleton--sk-pseudo-circle">
              <text
                class="icon-heart PageSkeleton--icon-heart sk-pseudo PageSkeleton--sk-pseudo sk-pseudo-circle PageSkeleton--sk-pseudo-circle"></text>收藏</button>
            <button
              class="icons-button PageSkeleton--icons-button sk-transparent PageSkeleton--sk-transparent sk-button PageSkeleton--sk-button sk-pseudo PageSkeleton--sk-pseudo sk-pseudo-circle PageSkeleton--sk-pseudo-circle"
              open-type="contact">
              <text
                class="icon-handset PageSkeleton--icon-handset sk-pseudo PageSkeleton--sk-pseudo sk-pseudo-circle PageSkeleton--sk-pseudo-circle"></text>客服
            </button>
            <navigator class="icons-button PageSkeleton--icons-button sk-transparent PageSkeleton--sk-transparent"
              open-type="switchTab">
              <text
                class="icon-cart PageSkeleton--icon-cart sk-pseudo PageSkeleton--sk-pseudo sk-pseudo-circle PageSkeleton--sk-pseudo-circle"></text>购物车
            </navigator>
          </view>
          <view class="buttons PageSkeleton--buttons">
            <view
              class="addcart PageSkeleton--addcart sk-transparent PageSkeleton--sk-transparent sk-text-31-9444-62 PageSkeleton--sk-text-31-9444-62 sk-text PageSkeleton--sk-text sk-image"
              style="background-position-x:50%"> 加入购物车 </view>
            <view
              class="buynow PageSkeleton--buynow sk-transparent PageSkeleton--sk-transparent sk-text-31-9444-587 PageSkeleton--sk-text-31-9444-587 sk-text PageSkeleton--sk-text sk-image"
              style="background-position-x:50%"> 立即购买 </view>
          </view>
        </view>
      </view>
    </view>
    <scroll-view scroll-y="true" class="viewport">
      <view class="goods">
        <view class="preview">
          <swiper circular="true" current="0" autoplay="false">
            <swiper-item
              style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
              <image mode="aspectFill" class="sk-image"></image>
            </swiper-item>
          </swiper>
          <view class="indicator">
            <text class="current sk-transparent sk-opacity">1</text>
            <text class="split sk-transparent sk-opacity">/</text>
            <text class="total sk-transparent sk-opacity">5</text>
          </view>
        </view>
        <view class="meta">
          <view class="price">
            <text class="symbol sk-transparent sk-opacity">¥</text>
            <text class="number sk-transparent sk-text-14-2857-357 sk-text">166.00</text>
          </view>
          <view class="name ellipsis sk-transparent sk-text-14-2857-269 sk-text">极光限定 珠光蓝珐琅锅</view>
          <view class="desc sk-transparent sk-text-0-0000-729 sk-text">5</view>
        </view>
        <view class="action">
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-201 sk-text">选择</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-710 sk-text"> 请选择商品规格 </text>
          </view>
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-661 sk-text">送至</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-30 sk-text"> 请选择收获地址 </text>
          </view>
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-518 sk-text">服务</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-667 sk-text"> 无忧退 快速退款 免费包邮 </text>
          </view>
        </view>
      </view>
      <view is="node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup" class="r"></view>
      <view class="detail panel">
        <view class="title">
          <text class="sk-transparent sk-text-0-0000-29 sk-text">详情</text>
        </view>
        <view class="content">
          <view class="properties">
            <view class="item">
              <text class="label sk-transparent sk-text-25-0000-922 sk-text">电压可变</text>
              <text class="value sk-transparent sk-text-25-0000-218 sk-text">220V</text>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="toolbar" style="padding-bottom:34px">
      <view class="icons">
        <button class="icons-button sk-transparent sk-button sk-pseudo sk-pseudo-circle">
          <text class="icon-heart sk-pseudo sk-pseudo-circle"></text>收藏</button>
        <button class="icons-button sk-transparent sk-button sk-pseudo sk-pseudo-circle" open-type="contact">
          <text class="icon-handset sk-pseudo sk-pseudo-circle"></text>客服 </button>
        <navigator class="icons-button sk-transparent" open-type="switchTab">
          <text class="icon-cart sk-pseudo sk-pseudo-circle"></text>购物车
        </navigator>
      </view>
      <view class="buttons">
        <view class="addcart sk-transparent sk-text-31-9444-811 sk-text" style="background-position-x: 50%;"> 加入购物车
        </view>
        <view class="buynow sk-transparent sk-text-31-9444-31 sk-text" style="background-position-x: 50%;"> 立即购买 </view>
      </view>
    </view>
  </view>
</template>

<style>
/*
此文件为开发者工具生成，生成时间: 2024/6/5下午11:07:29

在 D:\Code\Codes\uni-app\erabbit-uni-app-vue3-ts\dist\dev\mp-weixin\pages\goods\goods.wxss 中引入样式
```
@import "./goods.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}

.sk-opacity {
  opacity: 0 !important;
}

.sk-text-14-2857-357 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 78.4000rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-269 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text-0-0000-729 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 24.0000rpx;
  position: relative !important;
}

.sk-text-14-2857-201 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-710 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-661 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-30 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-518 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-667 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-0-0000-29 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 28.0000rpx;
  position: relative !important;
}

.sk-text-25-0000-922 {
  background-image: linear-gradient(transparent 25.0000%, #EEEEEE 0%, #EEEEEE 75.0000%, transparent 0%) !important;
  background-size: 100% 52.0000rpx;
  position: relative !important;
}

.sk-text-25-0000-218 {
  background-image: linear-gradient(transparent 25.0000%, #EEEEEE 0%, #EEEEEE 75.0000%, transparent 0%) !important;
  background-size: 100% 52.0000rpx;
  position: relative !important;
}

.sk-text-31-9444-811 {
  background-image: linear-gradient(transparent 31.9444%, #EEEEEE 0%, #EEEEEE 68.0556%, transparent 0%) !important;
  background-size: 100% 72.0000rpx;
  position: relative !important;
}

.sk-text-31-9444-31 {
  background-image: linear-gradient(transparent 31.9444%, #EEEEEE 0%, #EEEEEE 68.0556%, transparent 0%) !important;
  background-size: 100% 72.0000rpx;
  position: relative !important;
}

.sk-button {
  color: #EFEFEF !important;
  background: #EFEFEF !important;
  border: none !important;
  box-shadow: none !important;
}

.sk-image {
  background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
  background: #EFEFEF !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
