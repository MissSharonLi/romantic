<template>
  <view class="address__wrapper">
    <view class="address__list">
      <view
        v-for="(item, index) in returnData"
        :key="index"
        class="address__item"
        :class="{ default: item.isDefault }"
      >
        <view class="address__title">
          <text class="text">张小白</text>
          <text class="text">181****0202</text>
        </view>
        <view class="address__detail">
          <text>广州市越秀区东风中路268号1109-1110</text>
          <image
            class="img"
            :src="require('@/assets/images/edit.png')"
            @click="handleToAdd"
          ></image>
        </view>
      </view>
    </view>
    <view class="address__footer" @click="handleToAdd">新增收货地址</view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      returnData: [{ isDefault: true }, {}, {}]
    }
  },
  methods: {
    handleToAdd() {
      uni.navigateTo({ url: '/pages/personal/setAddress' })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.address {
  &__list {
    margin-top: pxTorpx(1);
  }
  &__item {
    background-color: $white;
    padding: pxTorpx(20);
    margin-bottom: pxTorpx(1);
    &.default {
      position: relative;
      padding-left: pxTorpx(40);
      &::before {
        content: '';
        display: block;
        position: absolute;
        width: pxTorpx(17);
        height: pxTorpx(17);
        background: url('@/assets/images/select.png') no-repeat;
        background-size: 100% 100%;
        left: pxTorpx(12);
        top: pxTorpx(30);
      }
      .address__title {
        @include flex(center, '');
        .text {
          &:last-child {
            @include flex(center, '');
            &::after {
              content: '默认';
              display: block;
              width: pxTorpx(34);
              height: pxTorpx(18);
              line-height: pxTorpx(18);
              color: $white;
              text-align: center;
              margin-left: pxTorpx(10);
              background-color: $uni-theme-color;
              font-size: pxTorpx(12);
              font-weight: lighter;
            }
          }
        }
      }
    }
  }
  &__title {
    font-family: $SourceHanSansSC;
    font-weight: 700;
    font-size: 14px;
    color: rgb(16, 16, 16);
    margin-bottom: pxTorpx(10);
    .text {
      &:first-child {
        margin-right: pxTorpx(20);
      }
    }
  }
  &__detail {
    font-family: $SourceHanSansSC;
    font-weight: 400;
    font-size: pxTorpx(14);
    color: rgba(144, 144, 144, 1);
    @include flex(center, space-between);
    .img {
      width: pxTorpx(21);
      height: pxTorpx(21);
    }
  }
  &__footer {
    height: pxTorpx(40);
    background-color: $uni-theme-color;
    border: 1px solid $uni-theme-color;
    color: rgb(255, 255, 255);
    border-radius: pxTorpx(100);
    font-size: pxTorpx(14);
    text-align: center;
    line-height: pxTorpx(40);
    position: fixed;
    bottom: pxTorpx(20);
    left: pxTorpx(20);
    width: calc(100% - 80rpx);
  }
}
</style>
