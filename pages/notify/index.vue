<template>
  <view class="content">
    <HomeNavBar title="最新预告" isDefault></HomeNavBar>
    <view class="notify__wrapper" :style="{ 'padding-top': navBarHeight }">
      <SubTabs :isCustom="true" :dataSource="tabList"></SubTabs>
      <view class="notify__content">
        <view class="notify__progress__bar">
          <view v-for="(item, index) in progressList" :key="index" class="notify__progress__item">
            <text class="progress__text">{{ item.time }}</text>
            <view class="progress__image">
              <image class="img" :src="require('@/assets/images/' + item.url)"></image>
              <view>
                <text class="progress__title">{{ item.title }}</text>
                <text class="progress__price">￥{{ item.price }}/张</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <MyTabs></MyTabs>
  </view>
</template>

<script>
// import { api } from '@/api'
import mixins from '@/mixins'
import SubTabs from '@/components/SubTabs'
import HomeNavBar from '@/components/HomeNavBar'
import MyTabs from '@/components/MyTabs'
export default {
  components: {
    SubTabs,
    MyTabs,
    HomeNavBar
  },
  mixins: [mixins],
  data() {
    return {
      tabIndex: 0,
      tabList: ['新品预告', '补箱预告', '每日补箱'],
      progressList: [
        {
          time: '2022-03-06 01:00:05 补1箱',
          title: '（水滴）海贼王',
          price: '9.00',
          url: 'p2.jpeg'
        },
        {
          time: '2022-03-06 01:00:05 补1箱',
          title: '（水滴）海贼王',
          price: '9.00',
          url: 'p2.jpeg'
        }
      ]
    }
  },
  methods: {
    handleTab(index) {
      this.tabIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.content {
  background-color: $white;
}
.notify {
  &__wrapper {
    position: relative;
  }
  &__content {
    padding-top: pxTorpx(55);
  }
}
.notify__nav {
  &__content {
    background-color: $white;
    @include flex(center, space-around);
    position: fixed;
    width: 100%;
    left: 0;
    z-index: 9;
    height: pxTorpx(55);
  }
  &__item {
    font-family: 'PingFangSC';
    font-weight: 400;
    font-size: pxTorpx(14);
    color: rgb(16, 16, 16);
    padding-top: pxTorpx(20);
    padding-bottom: pxTorpx(5);
    &::after {
      content: '';
      display: block;
      width: pxTorpx(16);
      height: pxTorpx(3);
      background-color: transparent;
      margin: 0 auto;
      margin-top: pxTorpx(5);
      border-radius: pxTorpx(3);
    }
    &.active {
      color: $uni-theme-color;
      &::after {
        background-color: $uni-theme-color;
      }
    }
  }
}
.notify__progress {
  &__bar {
    padding: pxTorpx(10) pxTorpx(15);
    background-color: $white;
    border-top: pxTorpx(5) solid $uni-bg-color;
  }
  &__item {
    position: relative;
    padding-left: pxTorpx(25);
    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      background: url('@/assets/images/timer.png') no-repeat;
      background-size: 100% 100%;
      width: pxTorpx(20);
      height: pxTorpx(20);
      top: -2rpx;
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      left: pxTorpx(10);
      background-color: $uni-theme-color;
      background-size: 100% 100%;
      width: pxTorpx(1);
      height: pxTorpx(70);
      top: pxTorpx(30);
    }
    .progress {
      &__text {
        margin: pxTorpx(15) 0;
      }
      &__text,
      &__title,
      &__price {
        font-family: 'PingFangSC';
        font-weight: 400;
        font-size: pxTorpx(12);
        color: $uni-theme-color;
        display: block;
      }
      &__title {
        margin-bottom: pxTorpx(5);
      }
      &__image {
        @include flex(center, '');
        margin-bottom: pxTorpx(20);
        height: pxTorpx(60);
        border-radius: pxTorpx(5);
        background-color: rgb(248, 220, 76);
        overflow: hidden;
        .img {
          width: pxTorpx(60);
          height: pxTorpx(60);
          margin-right: pxTorpx(15);
        }
      }
    }
  }
}
</style>
