<template>
  <view class="order__management">
    <view class="order__management__top">
      <view class="search__input__content">
        <input class="search__input" type="text" placeholder="商品名称（仅支持三个月以内的订单）" />
      </view>
      <SubTabs :dataSource="tabList" @tabClick="handleTab"></SubTabs>
    </view>
    <view class="order__management__list">
      <view v-for="(item, index) in returnData" :key="index" class="order__management__item">
        <view class="order__management__time">
          <text>2022-03-07 19:20:10</text>
          <text>待处理</text>
        </view>
        <view class="order__management__images">
          <image class="img" :src="require('@/assets/images/p1.jpeg')"></image>
          <view class="order__management__detail">
            <text class="title">休闲火影系列双随机</text>
            <view class="price">
              <text>A赏 鸣人</text>
            </view>
          </view>
        </view>
        <view class="order__management__footer">
          <view v-if="!item.success">回购价格：￥8.00</view>
          <view>
            <text>共1件</text>
            <text class="price">
              价格：
              <text class="em">￥9.00</text>
            </text>
          </view>
        </view>
        <view class="order__management__buttons">
          <text class="button" @click="handleOperation(0)">回购</text>
          <text class="button">提货</text>
          <text class="button" @click="handleOperation">查看物流</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import SubTabs from '@/components/SubTabs'
export default {
  components: {
    SubTabs
  },
  data() {
    return {
      tabIndex: 0,
      tabList: ['全部', '待处理', '完成回购', '提货待发', '发货中', '完成交易'],
      returnData: [{ success: true }, {}]
    }
  },
  methods: {
    handleTab(index) {
      this.tabIndex = index
    },
    handleOperation(type) {
      switch (type) {
        case 0:
          wx.navigateTo({ url: '/pages/personal/orderDetail' })
          break
        default:
          wx.navigateTo({ url: '/pages/personal/deliveryInfo' })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.order__management {
  padding-top: pxTorpx(90);
  &__top {
    background-color: $white;
    box-shadow: #0000000a 0px 2px 6px 0px;
    padding: pxTorpx(10);
    padding-bottom: 0;
    position: fixed;
    left: 0;
    width: calc(100% - 40rpx);
    top: 0;
    z-index: 9;
    ::v-deep .notify__nav__content {
      position: relative;
    }
  }
  .search__input {
    &__content {
      @include flex(center);
    }
    background-color: rgba(0, 0, 0, 0.07);
    border-radius: pxTorpx(15);
    font-size: pxTorpx(14);
    height: pxTorpx(34);
    line-height: pxTorpx(34);
    position: relative;
    width: 100%;
    padding-left: pxTorpx(40);
    &::before {
      content: '';
      display: block;
      width: pxTorpx(21);
      height: pxTorpx(21);
      background: url('@/assets/images/search.png') no-repeat;
      background-size: 100% 100%;
      line-height: pxTorpx(34);
      position: absolute;
      left: pxTorpx(10);
      top: pxTorpx(6);
    }
  }
  &__list {
    padding: pxTorpx(10);
    margin-top: pxTorpx(15);
  }
  &__item {
    background-color: $white;
    padding: pxTorpx(10);
    border-radius: pxTorpx(5);
    margin-bottom: pxTorpx(10);
    &.success {
      .order__management__buttons {
        .button {
          background-color: $uni-theme-color;
          color: #f8dc4c;
        }
      }
      .order__management__footer {
        text-align: right;
        display: block;
      }
    }
  }
  &__time {
    font-family: 'PingFangSC';
    font-weight: 400;
    font-size: pxTorpx(13);
    color: rgb(68, 68, 68);
    margin-bottom: pxTorpx(10);
    margin-top: pxTorpx(5);
    display: block;
    @include flex(center, space-between);
  }
  &__images {
    @include flex(center, '');
    padding: pxTorpx(10);
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
    font-family: 'PingFangSC';
    font-weight: 400;
    font-size: pxTorpx(12);
    color: rgba(168, 168, 168, 1);
    margin-top: pxTorpx(12);
    @include flex(center, space-between);
    .price {
      margin-left: pxTorpx(20);
      .em {
        font-weight: 700;
        font-size: pxTorpx(14);
        color: rgba(16, 16, 16, 0.99);
      }
    }
  }
  &__buttons {
    font-family: 'PingFangSC';
    font-weight: 400;
    font-size: pxTorpx(13);
    color: $uni-theme-color;
    text-align: right;
    margin-top: pxTorpx(20);
    .button {
      min-width: pxTorpx(80);
      height: pxTorpx(26);
      line-height: pxTorpx(26);
      text-align: center;
      border: 1px solid $uni-theme-color;
      display: inline-block;
      border-radius: pxTorpx(22);
      & + .button {
        margin-left: pxTorpx(15);
      }
    }
  }
}
</style>
