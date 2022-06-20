<template>
  <view class="collection__wrapper">
    <view class="collection__list">
      <view v-for="(item, index) in returnData" :key="index" class="collection__item">
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
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      returnData: [{ isOut: true }, {}, {}]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.collection {
  &__list {
    padding: pxTorpx(10);
  }
  &__item {
    background-color: $white;
    padding: pxTorpx(10);
    border-radius: pxTorpx(5);
    margin-bottom: pxTorpx(10);
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
}
</style>
