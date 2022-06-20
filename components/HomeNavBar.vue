<template>
  <view
    class="custom__nav__content"
    :class="{ default: isDefault }"
    :style="{ width: '100%', height: navBarHeight }"
  >
    <image v-if="type === 1" class="nav__image" :src="require('@/assets/images/title.png')"></image>
    <text v-else class="nav__title">{{ title }}</text>
  </view>
</template>
<script>
export default {
  name: 'HomeNavBar',
  props: {
    type: {
      type: Number,
      default: null
    },
    title: {
      type: String,
      default: ''
    },
    isDefault: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    navBarHeight() {
      return this.$store.getters.getNavBarHeight
    }
  }
}
</script>
<style lang="scss" scoped>
.custom__nav__content {
  width: 100%;
  height: 100%;
  background-color: $uni-theme-color;
  display: flex;
  align-items: bottom;
  display: flex;
  align-items: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  &.default {
    background-color: $white;
    .nav__title {
      font-family: 'PingFangSC';
      font-weight: 700;
      font-size: pxTorpx(18);
      color: $uni-text-color;
    }
  }
}
</style>
