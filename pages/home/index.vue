<template>
  <view class="content" :style="{ 'padding-top': navBarHeight }">
    <HomeNavBar class="nav__wrapper" :type="1"></HomeNavBar>
    <view class="nav__background">
      <view class="home__main__content">
        <view class="home__main__slogan">
          <image class="slogan" :src="require('@/assets/images/slogan.png')"></image>
          <view class="notice">
            <image :src="require('@/assets/images/notice.png')" class="icon__notice"></image>
            <text class="text font-loaded" @click="handleOperation($event, 1)">最新公告</text>
          </view>
        </view>
        <view class="home__main__search">
          <image class="search__icon" :src="require('@/assets/images/search.png')"></image>
          <input
            class="search__input"
            type="text"
            placeholder="搜索商品"
            @focus="handleOperation"
          />
        </view>
        <CustomSwiper></CustomSwiper>
      </view>
    </view>
    <view class="home__main__list">
      <CustomTabs ref="tabsProps" @shift="handleOperation($event, 3)"></CustomTabs>
      <HomeScrollView
        ref="scrollProps"
        @click="handleOperation($event, 0)"
        @shiftTab="handleOperation($event, 2)"
      ></HomeScrollView>
    </view>
    <MyTabs></MyTabs>
  </view>
</template>

<script>
import { api } from '@/api'
import mixins from '@/mixins'
import HomeNavBar from '@/components/HomeNavBar'
import CustomTabs from '@/components/CustomTabs'
import CustomSwiper from '@/components/CustomSwiper'
import HomeScrollView from '@/components/HomeScrollView'
import MyTabs from '@/components/MyTabs'

export default {
  components: {
    HomeNavBar,
    CustomTabs,
    CustomSwiper,
    HomeScrollView,
    MyTabs
  },
  mixins: [mixins],
  data() {
    return {
      bannerList: []
    }
  },
  onLoad() {
    this.query()
  },
  methods: {
    async query() {
      const { code, data } = await api.getBannerList()
      if (code === 1) this.bannerList = (data || []).map((i) => i.image)
    },
    onReachBottom() {
      console.log('dd')
    },
    handleOperation($event, type) {
      switch (type) {
        case 0:
          uni.navigateTo({
            url: '/pages/product/detail'
          })
          break
        case 1:
          uni.switchTab({
            url: '/pages/notify/index'
          })
          break
        case 2:
          this.$refs.tabsProps.handleTab($event)
          break
        case 3:
          this.$refs.scrollProps.current = $event
          break
        default:
          wx.navigateTo({
            url: '/pages/product/search'
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.font-loaded {
  font-family: $ZKKuaiLeTi;
}
.content {
  padding-bottom: pxTorpx(100);
}
.home__main {
  &__content {
    padding: 10rpx 30rpx;
  }
  &__slogan {
    @include flex(center, space-between);
    .slogan {
      width: 450rpx;
      height: 50rpx;
      display: block;
    }
    .notice {
      width: pxTorpx(76);
      height: pxTorpx(30);
      background-color: $uni-theme-color;
      border: 1px solid $uni-text-color-inverse;
      border-radius: 15px 0px 0px 15px;
      margin-right: -30rpx;
      line-height: pxTorpx(30);
      @include flex(center, space-around);
    }
    .icon__notice {
      height: pxTorpx(18);
      width: pxTorpx(18);
      margin-right: pxTorpx(-3);
      margin-top: pxTorpx(-2);
    }
    .text {
      font-family: $ZKKuaiLeTi;
      font-weight: 400;
      font-size: pxTorpx(12);
      text-align: center;
      color: $white;
    }
  }
  &__search {
    height: pxTorpx(34);
    margin-top: pxTorpx(15);
    background-color: $white;
    border: 1px solid #f2f2f2;
    border-radius: 9px;
    line-height: pxTorpx(34);
    @include flex(center, space-between);
    .search__icon {
      width: pxTorpx(21);
      height: pxTorpx(21);
      padding-left: pxTorpx(10);
    }
    .search__input {
      height: pxTorpx(21);
      width: calc(100% - 74rpx);
      line-height: pxTorpx(21);
      color: #888;
      font-size: pxTorpx(13);
    }
  }
  &__list {
    min-height: pxTorpx(400);
    background-color: $white;
    border-radius: pxTorpx(26);
    margin-top: pxTorpx(35);
    margin-bottom: pxTorpx(20);
  }
}
</style>
