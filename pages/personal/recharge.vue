<template>
  <view class="recharge__wrapper">
    <view class="recharge__top__content">
      <view class="left">
        <text class="label">当前余额</text>
        <view class="input">
          <text class="number">45.5</text>
          元
        </view>
      </view>
      <view class="right">
        <text class="label">累计充值</text>
        <view class="input">
          <text class="number">136.5</text>
          元
          <text class="path" @click="handleOperation">充值记录</text>
        </view>
      </view>
    </view>
    <view class="recharge__content">
      <view class="recharge__title">微信充值</view>
      <view class="recharge__list">
        <view
          v-for="(item, index) in list"
          :key="index"
          :class="{ active: listIndex === index }"
          class="recharge__item"
          @click="handleTabs(index)"
        >
          {{ item }}
        </view>
      </view>
      <view v-if="listIndex === 5" class="recharge__custom">
        <input v-model="modelForm.value" class="recharge__input" />
        <text class="em">自定义充值金额</text>
      </view>
    </view>
    <view class="recharge__tips">
      <view class="recharge__tips__title">充值提示</view>
      <view class="recharge__tips__list">
        <view v-for="(item, index) in tipsList" :key="index" class="recharge__tips__item">
          {{ index + 1 }}、充值提示
        </view>
      </view>
    </view>
    <view class="recharge__submit">确认</view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      listIndex: 5,
      modelForm: {
        value: '65.5'
      },
      list: ['5元', '15元', '30元', '50元', '80元', '其他'],
      tipsList: ['', '', '']
    }
  },
  methods: {
    handleTabs(index) {
      this.listIndex = index
    },
    handleOperation() {
      wx.navigateTo({
        url: '/pages/personal/rechargeRecords'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.recharge {
  &__wrapper {
    min-height: 100vh;
    background-color: $white;
  }
  &__top__content {
    color: $white;
    height: pxTorpx(94);
    font-size: pxTorpx(14);
    font-weight: normal;
    background-color: $uni-theme-color;
    padding: pxTorpx(10) pxTorpx(20);
    padding-right: 0;
    @include flex(center, space-between);
    .label {
      font-family: $SourceHanSansSC;
      font-weight: 400;
      font-size: pxTorpx(14);
      color: $white;
    }
    .number {
      line-height: pxTorpx(54);
    }
    .left {
      width: 40%;
      position: relative;
      .number {
        font-size: pxTorpx(28);
        margin-right: pxTorpx(10);
      }
      &::after {
        content: '';
        border-right: 1px dashed $white;
        width: 0;
        height: pxTorpx(50);
        display: block;
        position: absolute;
        right: 0;
        top: pxTorpx(5);
      }
    }
    .right {
      width: 45%;
      margin-left: 10%;
      .number {
        font-size: pxTorpx(18);
        margin-right: pxTorpx(10);
      }
      .path {
        text-decoration: underline;
        font-size: pxTorpx(14);
        margin-left: pxTorpx(10);
      }
    }
  }
  &__content {
    padding: pxTorpx(10) pxTorpx(20);
    background-color: $white;
  }
  &__title {
    font-family: $SourceHanSansSC;
    font-weight: 400;
    font-size: pxTorpx(14);
    color: rgb(16, 16, 16);
    margin-bottom: pxTorpx(15);
    margin-top: pxTorpx(5);
    @include flex(center, '');
    &::before {
      content: '';
      display: block;
      width: pxTorpx(21);
      height: pxTorpx(21);
      background: url('@/assets/images/weixin.png') no-repeat;
      background-size: 100% 100%;
      margin-right: pxTorpx(10);
    }
  }
  &__list {
    @include flex(center, space-between, wrap);
  }
  &__item {
    width: pxTorpx(90);
    height: pxTorpx(46);
    line-height: pxTorpx(46);
    border: 1px solid #e8e8e9;
    text-align: center;
    margin-bottom: pxTorpx(10);
    border-radius: pxTorpx(4);
    font-family: $SourceHanSansSC;
    font-weight: 700;
    color: $uni-theme-color;
    font-size: pxTorpx(16);
    margin-bottom: pxTorpx(10);
    &.active {
      color: $uni-theme-color;
      border-color: $uni-theme-color;
    }
  }
  &__custom {
    margin-top: pxTorpx(10);
    font-family: $SourceHanSansSC;
    font-weight: 400;
    font-size: pxTorpx(12);
    .em {
      color: $uni-theme-color;
      display: block;
      margin-top: pxTorpx(5);
    }
  }
  &__input {
    font-size: pxTorpx(35);
    color: rgb(16, 16, 16);
    border-bottom: 1px solid #e8e8e9;
    position: relative;
    height: pxTorpx(65);
    line-height: pxTorpx(65);
    width: calc(100% - 80rpx);
    overflow: visible;
    &::after {
      content: '元';
      display: block;
      position: absolute;
      width: pxTorpx(40);
      text-align: right;
      right: -80rpx;
      bottom: 0;
      height: pxTorpx(44);
      font-size: pxTorpx(20);
    }
  }
  &__tips {
    background-color: $white;
    border-top: pxTorpx(10) solid #f8f8f8;
    font-family: $SourceHanSansSC;
    font-weight: 400;
    font-size: pxTorpx(14);
    color: rgb(47, 37, 32);
    padding: pxTorpx(10) pxTorpx(20);
    &__title {
      @include flex(center, '');
      margin-bottom: pxTorpx(10);
      &::before {
        content: '';
        width: pxTorpx(4);
        display: block;
        height: pxTorpx(12);
        background-color: $uni-theme-color;
        margin-right: pxTorpx(8);
      }
    }
    &__item {
      line-height: 1.8;
      text-align: justify;
      margin-bottom: pxTorpx(5);
    }
  }
  &__submit {
    height: pxTorpx(43);
    background-color: $uni-theme-color;
    box-shadow: #00000066 0px 2px 6px 0px;
    color: $white;
    border-radius: pxTorpx(20);
    font-size: pxTorpx(14);
    line-height: pxTorpx(43);
    text-align: center;
    margin-top: pxTorpx(30);
    width: calc(100% - 80rpx);
    position: fixed;
    bottom: pxTorpx(20);
    left: pxTorpx(20);
  }
}
</style>
