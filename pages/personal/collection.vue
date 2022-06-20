<template>
  <view class="collection__wrapper">
    <SubTabs :dataSource="tabList"></SubTabs>
    <view class="collection__list">
      <view v-for="(item, index) in returnData" :key="index" class="collection__item">
        <text class="collection__time">2022-03-07 19:20:10</text>
        <view class="collection__images">
          <image
            class="img"
            :class="{ sold__out: item.isOut }"
            :src="require('@/assets/images/p1.jpeg')"
          ></image>
          <view>
            <text class="title">休闲火影系列双随机</text>
            <text class="price">￥10.00/张</text>
          </view>
        </view>
        <view class="collection__footer">
          <text class="footer__text">
            第
            <text class="speacial">19</text>
            /100箱
          </text>
          <text class="footer__text">剩余190张</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import mixins from '@/mixins'
import SubTabs from '@/components/SubTabs'
export default {
  components: {
    SubTabs
  },
  mixins: [mixins],
  data() {
    return {
      tabList: ['全部', '在售', '售罄'],
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
    padding-top: pxTorpx(65);
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
    .title {
      font-family: 'PingFangSC';
      font-weight: 700;
      font-size: pxTorpx(14);
      color: rgb(16, 16, 16);
      margin-bottom: pxTorpx(20);
      display: block;
    }
    .price {
      font-family: $SFUIText;
      font-weight: 400;
      font-size: pxTorpx(12);
      color: rgb(133, 133, 133);
      display: block;
    }
  }
  &__footer {
    font-size: pxTorpx(12);
    text-align: right;
    padding-top: pxTorpx(10);
    color: rgb(92, 92, 92);
    .footer__text {
      &:last-child {
        margin-left: pxTorpx(30);
      }
      .speacial {
        color: $uni-theme-color;
        font-style: italic;
      }
    }
  }
}
</style>
