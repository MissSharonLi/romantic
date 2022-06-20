<template>
  <view class="content">
    <HomeNavBar class="nav__wrapper" title="我的"></HomeNavBar>
    <view class="personal__content" :style="{ 'padding-top': navBarHeight }">
      <view class="personal__top__background">
        <view class="personal__top__content">
          <view class="personal__top__item">
            <view class="left">
              <image class="left__avator" :src="require('@/assets/images/avator.jpeg')"></image>
              <view class="left__detail">
                <text class="left__text">188****4567</text>
                <view class="left__button">
                  <text class="left__button__left">余</text>
                  <text class="left__button__left">余额3911</text>
                </view>
              </view>
            </view>
            <view class="right">未绑定</view>
          </view>
          <view class="personal__top__rank">
            <text class="text">氪金</text>
            <text class="text">氪金分值：88888</text>
            <text class="text">排行</text>
          </view>
        </view>
      </view>
      <view class="personal__main__content">
        <view class="personal__main__list">
          <view class="main__list__item" @click="handleToPath">
            <image class="img" :src="require('@/assets/images/order.png')"></image>
          </view>
          <text class="main__list__text">全部订单</text>
        </view>
        <view class="personal__main__list">
          <view class="main__list__item" @click="handleToPath">
            <image class="img" :src="require('@/assets/images/deal.png')"></image>
          </view>
          <text class="main__list__text">待处理</text>
        </view>
        <view class="personal__main__list">
          <view class="main__list__item" @click="handleToPath">
            <image class="img" :src="require('@/assets/images/car.png')"></image>
          </view>
          <text class="main__list__text">已发货</text>
        </view>
        <view class="personal__main__list">
          <view class="main__list__item" @click="handleToPath">
            <image class="img" :src="require('@/assets/images/compelete.png')"></image>
          </view>
          <text class="main__list__text">已完成</text>
        </view>
      </view>
      <view class="personal__menu__content">
        <view class="personal__menu__title">我的菜单</view>
        <view class="personal__menu__list">
          <view
            v-for="(item, index) in menuData"
            :key="index"
            class="personal__menu__item"
            @click="handleOperation(item)"
          >
            <image class="img" :src="require('@/assets/images/' + item.url)"></image>
            <text class="personal__menu__text">{{ item.title }}</text>
          </view>
        </view>
      </view>
    </view>
    <MyTabs></MyTabs>
  </view>
</template>
<script>
import mixins from '@/mixins'
import MyTabs from '@/components/MyTabs'
import HomeNavBar from '@/components/HomeNavBar'
export default {
  components: {
    MyTabs,
    HomeNavBar
  },
  mixins: [mixins],
  data() {
    return {
      menuData: [
        {
          url: 'like.png',
          title: '我的收藏',
          path: '/pages/personal/collection'
        },
        {
          url: 'buy.png',
          title: '购买记录',
          path: '/pages/personal/buyRecords'
        },
        {
          url: 'location.png',
          title: '地址管理',
          path: '/pages/personal/addressManagement'
        },
        {
          url: 'amount.png',
          title: '余额',
          path: '/pages/personal/recharge'
        },
        {
          url: 'about.png',
          title: '关于我们',
          path: '/pages/personal/aboutUs'
        },
        {
          url: 'gold.png',
          title: '氪金排行',
          path: '/pages/personal/goldRanking'
        },
        {
          url: 'mobile.png',
          title: '绑定手机',
          path: '/pages/personal/bindPhone'
        },
        {
          url: 'reward.png',
          title: '中奖记录',
          path: '/pages/personal/winningRecords'
        }
      ]
    }
  },
  onLoad() {},
  methods: {
    handleOperation(record) {
      const { path } = record
      wx.navigateTo({ url: path })
    },
    handleToPath(type) {
      wx.navigateTo({ url: '/pages/personal/orderManagement' })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.content {
  background-color: $white;
}
.personal__top {
  &__background {
    background-color: $uni-theme-color;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    height: pxTorpx(140);
    position: relative;
  }
  &__content {
    padding: pxTorpx(15) pxTorpx(30);
  }
  &__item {
    @include flex(center, space-between);
    margin-bottom: pxTorpx(20);
    .left {
      @include flex(center, '');
      &__avator {
        width: pxTorpx(55);
        height: pxTorpx(55);
        border-radius: 50%;
        margin-right: pxTorpx(10);
      }
      &__detail {
        .left {
          &__text {
            font-family: 'PingFangSC';
            font-weight: 400;
            font-size: rpxTorpx(16);
            color: $white;
            text-align: center;
          }
          &__button {
            width: pxTorpx(100);
            height: pxTorpx(27);
            min-height: pxTorpx(27);
            background-color: rgb(248, 220, 76);
            border: 1px solid $white;
            border-radius: pxTorpx(22);
            font-size: pxTorpx(14);
            @include flex(center, '');
            margin-top: pxTorpx(5);
            &__left {
              &:nth-child(1) {
                width: pxTorpx(23);
                height: pxTorpx(23);
                background-color: rgb(240, 151, 68);
                color: $white;
                font-size: pxTorpx(12);
                border-radius: 50%;
                text-align: center;
                line-height: pxTorpx(23);
              }
              &:nth-child(2) {
                color: $white;
                margin-left: pxTorpx(5);
                font-size: pxTorpx(13);
              }
            }
          }
        }
      }
    }
    .right {
      font-family: 'PingFangSC';
      font-weight: 400;
      font-size: pxTorpx(12);
      color: $white;
      @include flex(center, space-between);
      &::after {
        content: '';
        display: block;
        width: pxTorpx(18);
        height: pxTorpx(18);
        margin-left: pxTorpx(5);
        background: url('@/assets/images/go.png') no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  &__rank {
    height: pxTorpx(53);
    line-height: pxTorpx(53);
    background-color: rgb(64, 64, 64);
    font-size: pxTorpx(14);
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-top-left-radius: pxTorpx(20);
    border-top-right-radius: pxTorpx(20);
    position: absolute;
    bottom: 0;
    left: pxTorpx(30);
    width: calc(100% - 200rpx);
    @include flex(center, space-around);
    padding: 0 pxTorpx(20);
    .text {
      font-family: 'PingFangSC';
      font-weight: 400;
      font-size: pxTorpx(16);
      color: rgb(227, 197, 158);
      margin-top: -15rpx;
      &:nth-child(2) {
        font-size: pxTorpx(14);
        margin-top: -8rpx;
      }
      &:last-child {
        width: pxTorpx(71);
        height: pxTorpx(21);
        background-color: rgb(252, 211, 175);
        color: rgb(138, 96, 50);
        border-radius: pxTorpx(19);
        font-size: pxTorpx(14);
        text-align: center;
        line-height: pxTorpx(21);
      }
    }
  }
}
.personal__main {
  &__content {
    background-color: $white;
    box-shadow: #0000001f 0px 2px 6px 0px;
    color: $white;
    border-radius: pxTorpx(8) pxTorpx(12) pxTorpx(12);
    font-size: pxTorpx(14);
    @include flex(center, space-between);
    padding: 0 pxTorpx(40);
    padding-top: pxTorpx(115);
    margin-top: -200rpx;
    padding-bottom: pxTorpx(15);
  }
  &__list {
    .main__list {
      &__item {
        width: pxTorpx(48);
        height: pxTorpx(48);
        border: 1px solid $uni-theme-color;
        box-shadow: #10101038 0px 2px 6px 0px;
        border-radius: pxTorpx(35);
        font-size: pxTorpx(14);
        text-align: center;
        @include flex(center);
        margin-bottom: pxTorpx(10);
        .img {
          width: pxTorpx(28);
          height: pxTorpx(28);
        }
      }
      &__text {
        font-family: 'PingFangSC';
        font-weight: 400;
        font-size: pxTorpx(14);
        color: rgb(16, 16, 16);
        display: block;
        text-align: center;
      }
    }
  }
}
.personal__menu {
  &__content {
    border-color: 1px solid rgba(255, 0, 0, 0);
    box-shadow: #cacccc33 0px 2px 6px 0px;
    border-radius: pxTorpx(10);
    margin: pxTorpx(10);
    padding-bottom: pxTorpx(35);
  }
  &__list {
    font-size: pxTorpx(14);
    @include flex(center, '', wrap);
  }
  &__title {
    font-family: 'PingFangSC';
    font-weight: 400;
    font-size: pxTorpx(16);
    color: rgb(0, 0, 0);
    line-height: pxTorpx(60);
    padding-left: pxTorpx(15);
  }
  &__item {
    width: 25%;
    @include flex(center, center, wrap);
    margin-bottom: pxTorpx(25);
    .img {
      width: pxTorpx(30);
      height: pxTorpx(30);
      margin-bottom: pxTorpx(10);
    }
  }
  &__text {
    display: block;
    width: 100%;
    text-align: center;
    font-family: 'PingFangSC';
    font-weight: 400;
    font-size: pxTorpx(12);
    color: rgb(16, 16, 16);
  }
}
</style>
