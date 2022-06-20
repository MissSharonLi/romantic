<template>
  <view class="product__search__wrapper">
    <view class="search__input__content">
      <input class="search__input" type="text" placeholder="搜索商品" @focus="handleOperation" />
      <text class="search__text">取消</text>
    </view>
    <view class="search__panel__content">
      <view class="search__panel__wrapper">
        <view class="search__panel__item">
          <text class="search__panel__title">历史记录</text>
          <image class="search__panel__icon" :src="require('@/assets/images/delete.png')"></image>
        </view>
        <view class="search__panel__list">
          <text class="button">海贼王</text>
          <text class="button">皮卡丘</text>
          <text class="button">鸣人</text>
          <text class="button">海贼王</text>
          <text class="button">皮卡丘</text>
          <text class="button">鸣人</text>
        </view>
      </view>
      <view class="search__panel__wrapper">
        <view class="search__panel__item">
          <text class="search__panel__title">大家都在搜</text>
        </view>
        <view class="search__panel__list">
          <text class="button">皮卡丘</text>
          <text class="button">鸣人</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: 'Search',
  data() {
    return {}
  },
  methods: {
    handleOperation(type) {
      switch (type) {
        case 0:
          break
        default:
          wx.navigateTo({
            url: '/pages/product/index'
          })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.product__search__wrapper {
  min-height: 100vh;
  padding: pxTorpx(5) pxTorpx(15);
  background-color: $white;
  .search__input {
    &__content {
      @include flex(center);
      margin-bottom: pxTorpx(5);
      .search__text {
        text-align: right;
        font-family: 'PingFangSC';
        font-weight: 700;
        font-size: pxTorpx(14);
        color: rgb(16, 16, 16);
        width: 100rpx;
      }
    }
    background-color: rgba(0, 0, 0, 0.07);
    border-radius: pxTorpx(15);
    font-size: pxTorpx(14);
    height: pxTorpx(40);
    line-height: pxTorpx(40);
    position: relative;
    width: calc(100% - 140rpx);
    padding-left: pxTorpx(50);
    &::before {
      content: '';
      display: block;
      width: pxTorpx(27);
      height: pxTorpx(27);
      background: url('@/assets/images/search.png') no-repeat;
      background-size: 100% 100%;
      line-height: pxTorpx(40);
      position: absolute;
      left: pxTorpx(15);
      top: pxTorpx(7);
    }
  }
  .search__panel {
    &__item {
      @include flex(center, space-between);
      margin: pxTorpx(20) 0;
    }
    &__title {
      text-align: right;
      font-family: 'PingFangSC';
      font-weight: 700;
      font-size: pxTorpx(14);
      color: rgb(16, 16, 16);
    }
    &__icon {
      width: pxTorpx(18);
      height: pxTorpx(18);
    }
    &__list {
      @include flex(center, '', wrap);
      .button {
        height: pxTorpx(28);
        line-height: pxTorpx(28);
        background-color: rgba(0, 0, 0, 0.13);
        border-radius: pxTorpx(26);
        font-size: pxTorpx(14);
        color: #101010;
        padding: 0 pxTorpx(15);
        margin-right: pxTorpx(15);
        margin-bottom: pxTorpx(15);
      }
    }
  }
}
</style>
