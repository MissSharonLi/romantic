<template>
  <view class="bind__wrapper">
    <SubTabs :dataSource="tabList" @tabClick="handleTab"></SubTabs>
    <view class="bind__content">
      <view class="bind__list">
        <view v-if="tabIndex === 0" class="bind__authorize">
          <input class="bind__authorize__input" placeholder="点击授权获取手机号" type="text" />
          <view class="bind__authorize__button">点击授权</view>
        </view>
        <view v-else class="bind__authorize">
          <input class="bind__authorize__input mobile" placeholder="输入手机号" type="text" />
          <input class="bind__authorize__input" placeholder="输入验证码" type="text" />
          <view class="bind__authorize__button">获取验证码</view>
        </view>
        <view class="bind__button" @click="handleSubmit">确认</view>
      </view>
    </view>
  </view>
</template>
<script>
import SubTabs from '@/components/SubTabs'
export default {
  components: {
    SubTabs
  },
  data() {
    return {
      tabIndex: 0,
      tabList: ['直接授权', '手动收入']
    }
  },
  methods: {
    handleTab(index) {
      this.tabIndex = index
    },
    handleSubmit() {
      wx.redirectTo({ url: '/pages/personal/bindSuccess' })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.bind {
  &__content {
    padding-top: pxTorpx(60);
  }
  &__list {
    height: calc(100vh - 120rpx);
    background: $white;
    padding: 0 pxTorpx(15);
  }
  &__authorize {
    padding-top: pxTorpx(15);
    @include flex(center, space-between, wrap);
    &__input {
      width: pxTorpx(235);
      height: pxTorpx(35);
      background-color: rgb(245, 245, 245);
      border-radius: pxTorpx(5);
      font-size: pxTorpx(14);
      padding: 0 pxTorpx(10);
      &.mobile {
        width: 100%;
        margin-bottom: pxTorpx(15);
      }
    }
    &__button {
      width: pxTorpx(80);
      height: pxTorpx(35);
      background-color: $uni-theme-color;
      color: $white;
      border-radius: pxTorpx(4);
      font-size: pxTorpx(14);
      line-height: pxTorpx(35);
      text-align: center;
    }
  }
  &__button {
    height: pxTorpx(35);
    background-color: $uni-theme-color;
    color: $white;
    border-radius: pxTorpx(10);
    font-size: pxTorpx(14);
    text-align: center;
    margin-top: pxTorpx(30);
    line-height: pxTorpx(35);
  }
}
</style>
