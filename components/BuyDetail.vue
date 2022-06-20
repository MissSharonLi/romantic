<template>
  <VanPopup :show="show" round custom-style="height:60%" position="bottom">
    <view class="buy__content">
      <view class="buy__title">
        <view class="left">
          <text class="buy__number">购买xxx（900/1000）</text>
          <text class="em">单价：9.00元</text>
        </view>
        <view class="right" @click="handleClose">取消</view>
      </view>
      <view class="buy__button">买5张</view>
      <view class="buy__text">
        购买数量5张，共计￥
        <text class="em">45</text>
        元
      </view>
      <view class="buy__way">
        支付方式
        <text class="em">钱袋余额￥0元</text>
      </view>
      <view class="buy__limit">
        防限额专属充值通道
        <text class="em">点我自助充值！秒到账！！</text>
      </view>
      <view class="buy__list">
        <view class="button">钱袋余额支付</view>
        <view class="button">微信支付</view>
      </view>
      <VanCheckbox
        :value="checked"
        shape="square"
        custom-class="special"
        icon-class="icon__class"
        icon-size="10px"
        @change="handleChange"
      >
        我已仔细阅读并且同意协议
      </VanCheckbox>
      <view class="buy__tips">
        1、特殊商品，理性购买。。。。。。1、特殊商品，理性购买。。。。。。1、特殊商品，理性购买。。。。。。1、特殊商品，理性购买。。。。。。1、特殊商品，理性购买。。。。。。1、特殊商品，理性购买。。。。。。
      </view>
    </view>
  </VanPopup>
</template>
<script>
import VanPopup from '@/wxcomponents/vant/popup/index'
import VanCheckbox from '@/wxcomponents/vant/checkbox/index'
export default {
  name: 'BuyDetail',
  components: {
    VanPopup,
    VanCheckbox
  },
  props: {
    dataSource: {
      type: Array,
      default: () => [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    }
  },
  data() {
    return {
      checked: false,
      show: false
    }
  },
  methods: {
    handleClose(val) {
      this.show = false
    },
    handleChange(val) {
      this.checked = !this.checked
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index.scss';
::v-deep .special,
.icon__class {
  font-size: 12px;
  .icon__class {
    width: 15px;
    height: 15px;
    line-height: 15px;
  }
}
.buy {
  &__content {
    padding: pxTorpx(10);
  }
  &__title {
    font-family: 'PingFangSC';
    font-weight: 700;
    font-size: pxTorpx(14);
    color: rgb(16, 16, 16);
    @include flex(flex-start, space-between);
    .em {
      color: #ff0000;
      font-size: pxTorpx(12);
      display: block;
      margin-top: pxTorpx(5);
    }
  }
  &__button {
    width: pxTorpx(100);
    line-height: pxTorpx(30);
    text-align: center;
    border: 1px solid #ff0000;
    color: #ff0000;
    margin: pxTorpx(20) auto;
    border-radius: pxTorpx(15);
    font-size: pxTorpx(14);
  }
  &__text {
    font-size: pxTorpx(12);
    text-align: right;
    margin-bottom: pxTorpx(20);
    .em {
      font-size: pxTorpx(18);
    }
  }
  &__way {
    font-family: 'PingFangSC';
    font-weight: 400;
    font-size: pxTorpx(14);
    color: rgb(16, 16, 16);
    margin-bottom: pxTorpx(5);
    .em {
      font-family: 'PingFangSC';
      font-weight: 400;
      font-size: pxTorpx(12);
      color: rgba(168, 168, 168, 1);
      padding-left: pxTorpx(5);
    }
  }
  &__limit {
    font-family: 'PingFangSC';
    font-weight: 400;
    font-size: pxTorpx(12);
    color: rgb(16, 16, 16);
    .em {
      color: rgba(255, 0, 0, 1);
      padding-left: pxTorpx(5);
    }
  }
  &__list {
    @include flex(center, center);
    margin: pxTorpx(15) 0;
    .button {
      width: pxTorpx(120);
      line-height: pxTorpx(30);
      border-radius: pxTorpx(4);
      text-align: center;
      font-size: pxTorpx(14);
      &:first-child {
        color: #f8dc4c;
        background-color: $uni-theme-color;
      }
      &:last-child {
        color: $uni-theme-color;
        background-color: #f8dc4c;
        margin-left: pxTorpx(40);
      }
    }
  }
  &__tips {
    font-family: 'PingFangSC';
    font-weight: 700;
    font-size: pxTorpx(12);
    color: rgb(16, 146, 195);
    text-align: justify;
    padding: pxTorpx(10);
    margin-bottom: pxTorpx(15);
  }
}
</style>
