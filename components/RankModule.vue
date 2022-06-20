<template>
  <VanPopup :show="show" round custom-style="border-radius:10px">
    <view class="rank__content">
      <view class="rank__title">抽奖排行榜</view>
      <view class="rank__list">
        <view v-for="(item, index) in dataSource" :key="index" class="rank__item">
          <view class="nickname">
            <image class="img" :src="require('@/assets/images/avator.jpeg')"></image>
            <text>昵称昵称昵称</text>
          </view>
          <view class="number">
            冲
            <text class="em">66</text>
            发
          </view>
        </view>
      </view>
      <view class="rank__footer" @click="handleClose">关闭</view>
    </view>
  </VanPopup>
</template>
<script>
import VanPopup from '@/wxcomponents/vant/popup/index'
export default {
  name: 'RankModule',
  components: {
    VanPopup
  },
  props: {
    dataSource: {
      type: Array,
      default: () => [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    handleClose(val) {
      this.show = false
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.rank {
  &__content {
    background-color: $white;
    width: pxTorpx(300);
    height: pxTorpx(400);
    border-radius: pxTorpx(5);
  }
  &__title {
    font-family: 'PingFangSC';
    font-weight: 400;
    font-size: pxTorpx(14);
    color: rgb(16, 16, 16);
    text-align: center;
    line-height: pxTorpx(40);
  }
  &__list {
    padding: pxTorpx(10);
    padding-top: 0;
    height: pxTorpx(300);
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
  &__item {
    font-size: pxTorpx(14);
    height: 50px;
    background-color: #f8dc4c;
    border: 1px solid $uni-theme-color;
    @include flex(center, space-between);
    padding: 0 pxTorpx(10);
    margin-bottom: pxTorpx(5);
    border-radius: pxTorpx(5);
    .nickname {
      font-family: 'PingFangSC';
      font-weight: 400;
      font-size: pxTorpx(12);
      color: rgba(16, 16, 16, 1);
      @include flex(center, '');
      .img {
        width: pxTorpx(28);
        height: pxTorpx(28);
        border-radius: 50%;
        margin-right: pxTorpx(10);
      }
    }
    .number {
      font-size: pxTorpx(12);
      .em {
        color: $uni-theme-color;
      }
    }
  }
  &__footer {
    width: pxTorpx(80);
    height: pxTorpx(30);
    line-height: pxTorpx(30);
    background-color: #f8dc4c;
    color: $white;
    text-align: center;
    margin: pxTorpx(10) auto;
    border-radius: pxTorpx(5);
  }
}
</style>
