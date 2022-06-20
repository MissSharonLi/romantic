<template>
  <view class="notify__nav__content" :style="{ top: isCustom && navBarHeight }">
    <view
      v-for="(item, index) in dataSource"
      :key="index"
      class="notify__nav__item"
      :class="{ active: tabIndex === index }"
      @click="handleTab(index)"
    >
      {{ item }}
    </view>
  </view>
</template>
<script>
import mixins from '@/mixins'
export default {
  mixins: [mixins],
  props: {
    isCustom: {
      type: Boolean,
      default: () => false
    },
    dataSource: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      tabIndex: 0
    }
  },
  methods: {
    handleTab(index) {
      this.tabIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.notify__nav {
  &__content {
    background-color: $white;
    @include flex(center, space-around);
    position: fixed;
    width: 100%;
    left: 0;
    z-index: 9;
    height: pxTorpx(55);
  }
  &__item {
    font-family: 'PingFangSC';
    font-weight: 400;
    font-size: pxTorpx(14);
    color: rgb(16, 16, 16);
    padding-top: pxTorpx(20);
    padding-bottom: pxTorpx(5);
    &::after {
      content: '';
      display: block;
      width: pxTorpx(16);
      height: pxTorpx(3);
      background-color: transparent;
      margin: 0 auto;
      margin-top: pxTorpx(5);
      border-radius: pxTorpx(3);
    }
    &.active {
      color: $uni-theme-color;
      &::after {
        background-color: $uni-theme-color;
      }
    }
  }
}
</style>
