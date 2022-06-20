<template>
  <view class="gold__wrapper">
    <view class="gold__self">
      <image class="img" :src="require('@/assets/images/p2.jpeg')"></image>
      <view class="nickname">我的昵称</view>
      <view class="rate">
        <text class="text">
          第
          <text class="em">188</text>
          名
        </text>
        <text class="text">
          冲
          <text class="em">66</text>
          发
        </text>
      </view>
    </view>
    <view class="gold__list">
      <view v-for="(item, index) in returnData" :key="index" class="gold__item">
        <view class="left">
          <view class="images__content" :class="{ champion: index === 0 }">
            <image class="img" :src="require('@/assets/images/p2.jpeg')"></image>
            <view class="text">我的昵称</view>
          </view>
          <view class="ranking__content">
            第
            <text class="em">{{ index + 1 }}</text>
            名
          </view>
        </view>
        <view class="right">
          冲
          <text class="em">666</text>
          发
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      returnData: [
        {
          url: ''
        },
        {
          url: ''
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.gold {
  &__wrapper {
    padding: pxTorpx(10);
  }
  &__self {
    height: pxTorpx(119);
    background-color: $uni-theme-color;
    border: 1px solid rgb(248, 220, 76);
    border-radius: pxTorpx(5);
    font-size: pxTorpx(14);
    text-align: center;
    margin-bottom: pxTorpx(10);
    .img {
      width: pxTorpx(50);
      height: pxTorpx(50);
      border-radius: 50%;
      margin-bottom: pxTorpx(3);
      margin-top: pxTorpx(10);
    }
    .nickname {
      font-family: 'PingFangSC';
      font-weight: 400;
      font-size: pxTorpx(14);
      color: $white;
      margin-bottom: pxTorpx(3);
    }
    .rate {
      .text {
        font-family: 'PingFangSC';
        color: $white;
        font-size: pxTorpx(12);
        margin-left: pxTorpx(15);
        font-weight: lighter;
        .em {
          font-size: pxTorpx(14);
          color: rgba(248, 220, 76, 1);
        }
      }
    }
  }
  &__item {
    background-color: $white;
    height: pxTorpx(70);
    border-radius: pxTorpx(5);
    @include flex(center, space-between);
    margin-bottom: pxTorpx(10);
    padding: pxTorpx(12);
    .left {
      @include flex(center, '');
      .images__content {
        &.champion {
          position: relative;
          &::before {
            content: '';
            position: absolute;
            display: block;
            width: pxTorpx(20);
            height: pxTorpx(20);
            background: url('@/assets/images/crown.png') no-repeat;
            background-size: 100% 100%;
            left: -6rpx;
            top: -16rpx;
            transform: rotate(-45deg);
          }
        }
      }
      .img {
        width: pxTorpx(36);
        height: pxTorpx(36);
        border-radius: 50%;
        margin: 0 auto;
        display: block;
        margin-bottom: pxTorpx(5);
        z-index: 9;
        position: relative;
      }
      .text {
        font-family: 'PingFangSC';
        font-weight: 400;
        font-size: pxTorpx(12);
        color: rgb(16, 16, 16);
      }
      .ranking__content {
        font-family: 'PingFangSC';
        font-weight: 400;
        font-size: pxTorpx(14);
        color: rgb(16, 16, 16);
        margin-left: pxTorpx(30);
        .em {
          font-size: pxTorpx(16);
          color: rgba(248, 220, 76, 1);
        }
      }
    }
    .right {
      font-family: 'PingFangSC';
      font-weight: 400;
      font-size: pxTorpx(14);
      color: rgb(16, 16, 16);
      .em {
        color: $uni-theme-color;
      }
    }
  }
}
</style>
