<template>
  <view class="list__tab__content">
    <text
      v-for="(item, index) in dataSource"
      :key="index"
      :class="{ active: tabIndex === index }"
      @click="handleTab(index)"
    >
      {{ item }}
    </text>
  </view>
</template>
<script>
export default {
  props: {
    dataSource: {
      type: Array,
      default: () => ['擂台赛', '随机赏', '推荐', '随机赏', '擂台赛']
    }
  },
  data() {
    return {
      tabIndex: 2
    }
  },
  methods: {
    handleTab(index) {
      this.tabIndex = index
      this.$emit('shift', index)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.list__tab__content {
  line-height: pxTorpx(50);
  @include flex(center, space-around);
  font-family: $ZKWenYi;
  font-weight: 400;
  font-size: pxTorpx(16);
  color: $special-color;
  font-style: normal;
  letter-spacing: 1px;
  .active {
    color: #404040;
    font-size: pxTorpx(18);
    font-family: $ZKKuaiLeTi;
    position: relative;
    &::after {
      content: '';
      display: block;
      position: absolute;
      width: pxTorpx(13);
      height: pxTorpx(13);
      background: url('@/assets/images/sub.png') no-repeat;
      background-size: 100% 100%;
      bottom: 0;
      left: calc(50% - 15rpx);
    }
  }
}
</style>
