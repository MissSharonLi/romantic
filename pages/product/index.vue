<template>
  <view class="product__content">
    <view class="search__input__wrapper">
      <view class="search__input__content">
        <input class="search__input" type="text" placeholder="海贼王" />
      </view>
    </view>
    <ProductList></ProductList>
  </view>
</template>
<script>
import ProductList from '@/components/ProductList'
export default {
  components: {
    ProductList
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.product__content {
  background-color: $white;
  .search__input {
    width: calc(100% - 100rpx);
    padding-left: 30rpx;
    &__wrapper {
      padding: pxTorpx(5) pxTorpx(15);
    }
    &__content {
      background-color: rgba(0, 0, 0, 0.07);
      border-radius: pxTorpx(15);
      font-size: pxTorpx(14);
      height: pxTorpx(40);
      line-height: pxTorpx(40);
      @include flex(center);
      position: relative;
      margin-bottom: pxTorpx(5);
      &::after {
        content: '';
        display: block;
        width: pxTorpx(27);
        height: pxTorpx(27);
        background: url('@/assets/images/search.png') no-repeat;
        background-size: 100% 100%;
        margin-right: pxTorpx(15);
      }
    }
  }
}
</style>
