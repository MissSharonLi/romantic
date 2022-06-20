<template>
  <view class="recharge__records__wrapper">
    <view class="recharge__records__list">
      <view v-for="(item, index) in list" :key="index" class="recharge__records__item">
        <view class="left">
          <text class="em">100元</text>
          <view class="time">充值时间：2022-03-07 19:20:10</view>
        </view>
        <view class="right">余额：300元</view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      list: [{}, {}, {}, {}]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.recharge__records {
  &__list {
    padding: pxTorpx(10);
  }
  &__item {
    border-radius: pxTorpx(5);
    font-size: pxTorpx(14);
    padding: pxTorpx(10);
    background-color: $white;
    margin-bottom: pxTorpx(10);
    @include flex(center, space-between, wrap);
    &::after {
      content: '';
      width: 100%;
      display: block;
      margin: 0 auto;
      height: pxTorpx(1);
      background: #10101014;
      margin-top: pxTorpx(15);
    }
    .left {
      font-family: 'PingFangSC';
      font-weight: 700;
      font-size: pxTorpx(20);
      color: $uni-theme-color;
      .time {
        font-weight: 400;
        font-size: pxTorpx(12);
        color: rgb(68, 68, 68);
        margin-top: pxTorpx(5);
      }
    }
    .right {
      font-family: 'PingFangSC';
      font-weight: 400;
      font-size: pxTorpx(14);
      color: rgba(248, 220, 76, 1);
    }
  }
}
</style>
