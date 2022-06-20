<template>
  <view class="product__detail__content">
    <view class="product__detail__top">
      <CustomSwiper :isBanner="true"></CustomSwiper>
      <view class="rank__content">
        <view class="love"></view>
        <view class="rank">
          <view class="button">我的赏袋</view>
          <view class="button" @click="handleLottery">抽奖排行</view>
        </view>
      </view>
    </view>
    <view class="product__detail__buttons">
      <view class="button">购买说明</view>
      <view class="button">刷新</view>
    </view>
    <view class="product__detail__rate">
      <view class="product__detail__rate__content">
        <view class="title">锁箱机会剩余1次</view>
        <view class="subtitle">
          <text class="left">赏品一览</text>
          <text class="right">赏品余量</text>
        </view>
        <view class="pages">
          <view class="prev">上一箱</view>
          <view class="context">
            <view class="text">第</view>
            <text class="em">16</text>
            <view class="text">/60</view>
            <view class="text">箱</view>
          </view>
          <view class="context">
            <view class="text">剩余</view>
            <text class="em">20</text>
            <view class="text">/100</view>
            <view class="text">张</view>
          </view>
          <view class="next">下一箱</view>
        </view>
      </view>
    </view>
    <view class="product__detail__list">
      <view
        v-for="(item, index) in dataSource"
        :key="index"
        class="list__item"
        @click="handleClick"
      >
        <image class="list__item__image" :src="require('@/assets/images/p1.jpeg')"></image>
        <text class="label">1/45</text>
        <view class="title">{{ item.title }}</view>
        <view class="sub__title">售价：{{ item.price }}元/张</view>
        <view class="sub__title">获得概率：{{ item.rate }}%</view>
      </view>
    </view>
    <view class="product__detail__footer">
      <view class="product__detail__lang">
        <image class="img" :src="require('@/assets/images/lang1.png')" @click="handleToBuy"></image>
        <image class="img" :src="require('@/assets/images/lang2.png')" @click="handleToBuy"></image>
        <image class="img" :src="require('@/assets/images/lang3.png')" @click="handleToBuy"></image>
        <image class="img" :src="require('@/assets/images/lang4.png')" @click="handleToBuy"></image>
      </view>
      <view class="product__detail__footer__buttons">
        <view class="button" @click="handleOperation(null, '换箱')">换箱</view>
        <view class="button" @click="handleOperation(null, '锁箱')">锁箱</view>
      </view>
    </view>
    <BuyDetail ref="buyProps"></BuyDetail>
    <RankModule ref="rankProps"></RankModule>
    <VanDialog id="van-dialog"></VanDialog>
  </view>
</template>
<script>
import RankModule from '@/components/RankModule'
import BuyDetail from '@/components/BuyDetail'
import CustomSwiper from '@/components/CustomSwiper'
import Dialog from '@/wxcomponents/vant/dialog/dialog'
export default {
  name: 'Detail',
  components: {
    BuyDetail,
    RankModule,
    CustomSwiper
  },
  data() {
    return {
      rankProps: {
        show: false,
        dataSource: []
      },
      dataSource: [
        {
          title: '（全随机）NS归属单随机全系列5',
          price: 10,
          rate: 5
        },
        {
          title: '（全随机）NS归属单随机全系列5',
          price: 10,
          rate: 5
        },
        {
          title: '（全随机）NS归属单随机全系列5',
          price: 10,
          rate: 5
        },
        {
          title: '（全随机）NS归属单随机全系列5',
          price: 10,
          rate: 5
        },
        {
          title: '（全随机）NS归属单随机全系列5',
          price: 10,
          rate: 5
        },
        {
          title: '（全随机）NS归属单随机全系列5',
          price: 10,
          rate: 5
        }
      ]
    }
  },
  onLoad() {
    console.log('dd')
  },
  methods: {
    handleLottery() {
      this.$refs.rankProps.show = true
    },
    handleToBuy() {
      this.$refs.buyProps.show = true
    },
    handleOperation(title = '提示', message) {
      Dialog.alert({
        title: title,
        message: `确认${message}?`,
        showCancelButton: true,
        theme: 'round-button'
      })
        .then(() => {
          // on close
        })
        .catch(() => {})
    }
  }
}
</script>
<style lang="scss">
@import '@/wxcomponents/vant/dialog/index.wxss';
</style>

<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.product__detail {
  &__content {
    background-color: $white;
    min-height: 100vh;
    padding-bottom: pxTorpx(100);
  }
  &__top {
    position: relative;
    .rank__content {
      position: absolute;
      width: 100%;
      left: 0;
      top: pxTorpx(50);
      @include flex(center, space-between);
      .love {
        width: pxTorpx(30);
        height: pxTorpx(30);
        display: block;
        border-radius: 50%;
        background: url('@/assets/images/love.png') no-repeat center;
        background-size: pxTorpx(20) pxTorpx(20);
        background-color: $uni-theme-color;
        margin-left: pxTorpx(15);
      }
      .button {
        background-color: $uni-theme-color;
        line-height: pxTorpx(30);
        border-radius: 15px 0px 0px 15px;
        font-size: pxTorpx(14);
        color: #f8dc4c;
        font-weight: bold;
        width: pxTorpx(100);
        @include flex(center, '');
        margin-bottom: pxTorpx(10);
        &::before {
          content: '';
          display: block;
          width: pxTorpx(16);
          height: pxTorpx(16);
          background: url('@/assets/images/bag.png') no-repeat;
          background-size: 100% 100%;
          margin-left: pxTorpx(10);
          margin-right: pxTorpx(10);
        }
        &:last-child {
          &::before {
            background: url('@/assets/images/rank.png') no-repeat;
            background-size: 100% 100%;
          }
        }
      }
    }
  }
  &__buttons {
    @include flex(center, space-between);
    margin: pxTorpx(10) pxTorpx(15);
    .button {
      background-color: #f8dc4c;
      line-height: pxTorpx(30);
      width: pxTorpx(80);
      border-radius: pxTorpx(5);
      font-size: pxTorpx(14);
      text-align: center;
      color: $uni-theme-color;
      font-weight: bold;
      &:last-child {
        @include flex(center, '');
        &::before {
          content: '';
          display: block;
          width: pxTorpx(20);
          height: pxTorpx(20);
          margin-left: pxTorpx(10);
          margin-right: pxTorpx(5);
          background: url('@/assets/images/refresh.png') no-repeat center;
          background-size: 100% 100%;
        }
      }
    }
  }
  &__rate {
    margin: pxTorpx(10);
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: pxTorpx(5);
      left: -10rpx;
      height: pxTorpx(108);
      width: calc(100% + 20rpx);
      background-color: #9fd3e7;
      border-radius: pxTorpx(5);
      z-index: 0;
    }
    &__content {
      @include flex(center, center, wrap);
      position: relative;
      padding: 0 pxTorpx(10);
      background-color: $uni-theme-color;
      background-color: $uni-theme-color;
      height: pxTorpx(108);
      border-radius: pxTorpx(5);
      text-align: center;
      z-index: 9;
      .title {
        font-family: 'PingFangSC';
        font-weight: 400;
        font-size: pxTorpx(14);
        color: #f8dc4c;
        width: 100%;
      }
      .subtitle {
        font-family: $ZKKuaiLeTi;
        font-weight: 400;
        font-size: pxTorpx(20);
        color: $white;
        width: 100%;
        @include flex(center, center);
        .right {
          font-size: pxTorpx(16);
          margin-left: pxTorpx(20);
        }
      }
      .pages {
        @include flex(center, space-between);
        font-family: 'PingFangSC';
        font-weight: 400;
        font-size: pxTorpx(14);
        color: $white;
        width: 100%;
        .prev {
          font-size: pxTorpx(14);
          @include flex(center, '');
          &::before {
            content: '';
            display: block;
            width: pxTorpx(20);
            height: pxTorpx(20);
            background: url('@/assets/images/prev.png') no-repeat;
            background-size: 100% 100%;
          }
        }
        .next {
          font-size: pxTorpx(14);
          @include flex(center, '');
          &::after {
            content: '';
            display: block;
            width: pxTorpx(20);
            height: pxTorpx(20);
            background: url('@/assets/images/next.png') no-repeat;
            background-size: 100% 100%;
          }
        }
        .context {
          text-align: center;
          color: $white;
          font-size: pxTorpx(12);
          @include flex(center, center);
          .em {
            font-size: pxTorpx(14);
            color: #f8dc4c;
            font-style: italic;
            margin-left: pxTorpx(5);
            & + .text {
              margin-right: pxTorpx(5);
            }
          }
        }
      }
    }
  }
  &__list {
    @include flex(center, flex-start, wrap);
    padding: pxTorpx(5) pxTorpx(10);
    .list__item {
      width: calc(25% - 20rpx);
      min-height: pxTorpx(40);
      margin-bottom: pxTorpx(10);
      position: relative;
      &:not(:nth-child(4n)) {
        margin-right: 25rpx;
      }
      &__image {
        width: pxTorpx(80);
        height: pxTorpx(80);
        border-radius: pxTorpx(5);
        position: relative;
        &.sold__out {
          opacity: 0.5;
          border-radius: pxTorpx(5);
          &::after {
            content: '售罄';
            display: block;
            width: pxTorpx(40);
            height: pxTorpx(20);
            background-color: $uni-theme-color;
            border-radius: pxTorpx(10);
            text-align: center;
            position: absolute;
            top: pxTorpx(30);
            left: pxTorpx(20);
            color: $white;
            font-size: pxTorpx(12);
            line-height: pxTorpx(20);
          }
        }
      }
      .label {
        position: absolute;
        top: 0;
        left: pxTorpx(3);
        font-family: $FZYuan;
        font-weight: 700;
        font-size: pxTorpx(12);
        color: $white;
        letter-spacing: 1px;
        padding: pxTorpx(5);
        font-style: italic;
        letter-spacing: 1px;
      }
      .title {
        font-family: $FZYuan;
        font-weight: 700;
        font-size: pxTorpx(12);
        color: rgb(0, 0, 0);
        margin-top: pxTorpx(4);
      }
      .sub__title {
        font-family: 'PingFangSC';
        font-weight: 400;
        font-size: pxTorpx(10);
        color: rgba(168, 168, 168, 1);
        margin-top: pxTorpx(4);
      }
    }
  }
  &__footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    &__buttons {
      @include flex(center, space-between);
      .button {
        width: 50%;
        line-height: pxTorpx(40);
        height: pxTorpx(40);
        text-align: center;
        color: $white;
        &:first-child {
          background-color: $uni-theme-color;
        }
        &:last-child {
          background-color: #f8dc4c;
        }
      }
    }
  }
  &__lang {
    background-color: rgba(255, 255, 255, 0.5);
    padding: pxTorpx(20);
    @include flex(center, space-between);
    .img {
      width: pxTorpx(60);
      height: pxTorpx(60);
    }
  }
}
</style>
