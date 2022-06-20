<template>
  <view class="order__detail__wrapper">
    <view class="order__detail__status">
      <text>买家已发货</text>
      <image class="img" :src="require('@/assets/images/logistics.png')"></image>
    </view>
    <view class="order__detail__list">
      <view class="order__detail__item" @click="handleOperation">查看物流</view>
      <view class="order__detail__item">
        <view class="information">
          <view class="text">
            <text class="name">肖先生</text>
            <text class="address">15574324795</text>
          </view>
          <view class="address">湖南省长沙市岳麓区，麓谷企业广场F4栋3楼</view>
        </view>
      </view>
    </view>
    <view class="collection__list">
      <view class="collection__item">
        <text class="collection__time">2022-03-07 19:20:10</text>
        <view class="collection__images">
          <image class="img" :src="require('@/assets/images/p1.jpeg')"></image>
          <view class="collection__detail">
            <text class="title">休闲火影系列双随机</text>
            <view class="price">
              <text>A赏 鸣人</text>
              <text>￥10.00/张</text>
            </view>
          </view>
        </view>
        <view class="collection__footer">
          <text class="label">订单总价</text>
          <text class="price">￥9.00</text>
        </view>
      </view>
    </view>
    <view class="order__detail__footer">
      <view class="order__detail__footer__title">订单信息</view>
      <view class="order__detail__footer__list">
        <view class="order__detail__footer__item">
          <text class="label">订单编号</text>
          <view class="time">
            <text>AA 482823351</text>
            <text class="copy" @click="handleCopy('AA 482823351')">复制</text>
          </view>
        </view>
        <view class="order__detail__footer__item">
          <text class="label">下单时间</text>
          <text class="time">2020.03.16 14：00</text>
        </view>
        <view class="order__detail__footer__item">
          <text class="label">付款时间</text>
          <text class="time">2020.03.16 14：00</text>
        </view>
        <view class="order__detail__footer__item">
          <text class="label">发货时间</text>
          <text class="time">2020.03.16 14：00</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleCopy(data) {
      uni.setClipboardData({
        data: data,
        success: function () {
          console.log('复制成功')
        }
      })
    },
    handleOperation() {
      wx.navigateTo({ url: '/pages/personal/deliveryInfo' })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.order__detail {
  &__status {
    height: pxTorpx(100);
    background-color: $uni-theme-color;
    padding: 0 pxTorpx(20);
    @include flex(center, space-between);
    font-family: $SourceHanSansSC;
    font-weight: 400;
    font-size: pxTorpx(16);
    color: $white;
    .img {
      width: pxTorpx(54);
      height: pxTorpx(42);
    }
  }
  &__list {
    background-color: $white;
    padding: pxTorpx(20);
  }
  &__item {
    position: relative;
    padding-left: pxTorpx(40);
    font-family: 'SourceHanSansSC';
    font-weight: 400;
    font-size: pxTorpx(14);
    color: rgb(36, 34, 34);
    text-align: justify;
    @include flex(center, '', 'wrap');
    &:first-child {
      padding-bottom: pxTorpx(20);
      border-bottom: 1px solid #f2f2f2;
      margin-bottom: pxTorpx(20);
      &::after {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        width: pxTorpx(21);
        height: pxTorpx(21);
        background: url('@/assets/images/arrow.png') no-repeat;
        background-size: 100% 100%;
      }
    }
    &::before {
      content: '';
      display: block;
      width: pxTorpx(27);
      height: pxTorpx(27);
      border-radius: 50%;
      position: absolute;
      background: url('@/assets/images/location_a.png') no-repeat center center;
      background-color: $uni-theme-color;
      background-size: 60%;
      left: 0;
    }
    &:last-child {
      &::before {
        content: '';
        display: block;
        width: pxTorpx(27);
        height: pxTorpx(27);
        border-radius: 50%;
        position: absolute;
        background: url('@/assets/images/logistics.png') no-repeat center center;
        background-color: $uni-theme-color;
        background-size: 60%;
        left: 0;
      }
    }
    .name {
      margin-right: pxTorpx(10);
    }
    .address {
      font-size: pxTorpx(12);
    }
  }
  &__footer {
    padding: pxTorpx(15) pxTorpx(20);
    margin-top: pxTorpx(10);
    background-color: $white;
    font-size: pxTorpx(14);
    font-family: $SourceHanSansSC;
    &__title {
      font-weight: 700;
      font-size: pxTorpx(14);
      color: rgb(16, 16, 16);
      @include flex(center, '');
      margin-bottom: pxTorpx(15);
      &::before {
        content: '';
        display: block;
        width: pxTorpx(4);
        height: pxTorpx(15);
        background-color: #ea5402;
        margin-right: pxTorpx(5);
      }
    }
    &__list {
      font-weight: 400;
    }
    &__item {
      @include flex(center, space-between);
      margin-bottom: pxTorpx(10);
      .time {
        font-size: pxTorpx(12);
      }
      &:first-child {
        .time {
          @include flex(center, space-between);
          .copy {
            color: #ea5404;
            display: block;
            margin-left: pxTorpx(10);
          }
        }
      }
    }
  }
}
.collection {
  &__list {
    background-color: $white;
    padding: pxTorpx(15) pxTorpx(20);
    margin-top: pxTorpx(10);
  }
  &__item {
    border-radius: pxTorpx(5);
  }
  &__time {
    font-family: 'PingFangSC';
    font-weight: 400;
    font-size: pxTorpx(13);
    color: rgb(68, 68, 68);
    margin-bottom: pxTorpx(10);
    margin-top: pxTorpx(5);
    display: block;
  }
  &__images {
    @include flex(center, '');
    padding: pxTorpx(10) 0;
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
    .img {
      width: pxTorpx(80);
      height: pxTorpx(80);
      position: relative;
      margin-right: pxTorpx(20);
    }
    .title {
      font-family: 'PingFangSC';
      font-weight: 700;
      font-size: pxTorpx(14);
      color: rgb(16, 16, 16);
      margin-bottom: pxTorpx(30);
      display: block;
    }
    .price {
      font-family: $SFUIText;
      font-weight: 400;
      font-size: pxTorpx(12);
      color: rgb(133, 133, 133);
      display: block;
      @include flex(center, space-between);
    }
  }
  &__detail {
    width: calc(100% - 200rpx);
  }
  &__footer {
    font-family: $SourceHanSansSC;
    font-weight: 400;
    font-size: pxTorpx(14);
    color: rgb(16, 16, 16);
    margin-top: pxTorpx(15);
    @include flex(center, space-between);
    .price {
      font-size: pxTorpx(12);
    }
  }
}
</style>
