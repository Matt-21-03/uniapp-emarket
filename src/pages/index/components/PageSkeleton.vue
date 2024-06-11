<template name="skeleton">
  <view class="sk-container">

    <view is="components/XtxSwiper">
      <view class="carousel XtxSwiper--carousel">
        <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
          <swiper-item
            style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
            <navigator class="navigator XtxSwiper--navigator" hover-class="none">
              <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
            </navigator>
          </swiper-item>
        </swiper>
        <view class="indicator XtxSwiper--indicator">
          <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
          <text class="dot XtxSwiper--dot"></text>
          <text class="dot XtxSwiper--dot"></text>
          <text class="dot XtxSwiper--dot"></text>
          <text class="dot XtxSwiper--dot"></text>
        </view>
      </view>
    </view>
    <view is="pages/index/components/CategoryPanel">
      <view class="category CategoryPanel--category">
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-40 sk-text">居家</text>
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-2 sk-text">锦鲤</text>
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-918 sk-text">服饰</text>
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-219 sk-text">母婴</text>
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-329 sk-text">个护</text>
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-155 sk-text">严选</text>
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-170 sk-text">数码</text>
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-624 sk-text">运动</text>
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-296 sk-text">杂项</text>
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-803 sk-text">品牌</text>
        </navigator>
      </view>
    </view>
    <view is="pages/index/components/HotPanel">
      <view class="panel HotPanel--panel hot HotPanel--hot">
        <view class="item HotPanel--item">
          <view class="title HotPanel--title">
            <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-122 sk-text">特惠推荐</text>
            <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-188 sk-text">精选全攻略</text>
          </view>
          <navigator class="cards HotPanel--cards" hover-class="none">
            <image class="image HotPanel--image sk-image" mode="ascpectFit"></image>
            <image class="image HotPanel--image sk-image" mode="ascpectFit"></image>
          </navigator>
        </view>
        <view class="item HotPanel--item">
          <view class="title HotPanel--title">
            <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-510 sk-text">爆款推荐</text>
            <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-746 sk-text">最受欢迎</text>
          </view>
          <navigator class="cards HotPanel--cards" hover-class="none">
            <image class="image HotPanel--image sk-image" mode="ascpectFit"></image>
            <image class="image HotPanel--image sk-image" mode="ascpectFit"></image>
          </navigator>
        </view>
        <view class="item HotPanel--item">
          <view class="title HotPanel--title">
            <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-990 sk-text">一站买全</text>
            <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-114 sk-text">精心优选</text>
          </view>
          <navigator class="cards HotPanel--cards" hover-class="none">
            <image class="image HotPanel--image sk-image" mode="ascpectFit"></image>
            <image class="image HotPanel--image sk-image" mode="ascpectFit"></image>
          </navigator>
        </view>
        <view class="item HotPanel--item">
          <view class="title HotPanel--title">
            <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-483 sk-text">新鲜好物</text>
            <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-659 sk-text">生活加分项</text>
          </view>
          <navigator class="cards HotPanel--cards" hover-class="none">
            <image class="image HotPanel--image sk-image" mode="ascpectFit"></image>
            <image class="image HotPanel--image sk-image" mode="ascpectFit"></image>
          </navigator>
        </view>
      </view>
    </view>
    <scroll-view refresher-enabled="true" scroll-y="true" class="scroll-view scroll-view" lower-threshold="99990">
      <view is="components/XtxGuess" class="r r">
        <view class="caption XtxGuess--caption">
          <text
            class="text XtxGuess--text sk-transparent sk-text-0-0000-381 sk-text sk-pseudo sk-pseudo-circle">猜你喜欢</text>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}

.sk-text-3-3333-610 {
  background-image: linear-gradient(transparent 3.3333%, #EEEEEE 0%, #EEEEEE 96.6667%, transparent 0%) !important;
  background-size: 100% 26.2850rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-47 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.7991rpx;
  position: relative !important;
}

.sk-text-14-2857-40 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}

.sk-text-14-2857-2 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}

.sk-text-14-2857-918 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}

.sk-text-14-2857-219 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}

.sk-text-14-2857-329 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}

.sk-text-14-2857-155 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}

.sk-text-14-2857-170 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}

.sk-text-14-2857-624 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}

.sk-text-14-2857-296 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}

.sk-text-14-2857-803 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}

.sk-text-14-2857-122 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.1589rpx;
  position: relative !important;
}

.sk-text-14-2857-188 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 31.8925rpx;
  position: relative !important;
}

.sk-text-14-2857-510 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.1589rpx;
  position: relative !important;
}

.sk-text-14-2857-746 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 31.8925rpx;
  position: relative !important;
}

.sk-text-14-2857-990 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.1589rpx;
  position: relative !important;
}

.sk-text-14-2857-114 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 31.8925rpx;
  position: relative !important;
}

.sk-text-14-2857-483 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.1589rpx;
  position: relative !important;
}

.sk-text-14-2857-659 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 31.8925rpx;
  position: relative !important;
}

.sk-text-0-0000-381 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 31.5421rpx;
  position: relative !important;
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
