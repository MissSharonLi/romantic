<script>
export default {
  onLaunch: function () {
    uni.hideTabBar()
    this.$store.dispatch('initFontFamily')
  },
  onShow: function () {
    // console.log('App Show')
  },
  onHide: function () {
    // console.log('App Hide')
  },
  watch: {
    $route(newV, oldV) {
      console.log(newV)
    }
  }
}
</script>

<style lang="scss">
/*每个页面公共css */
@import '/wxcomponents/vant/common/index.wxss';
@import '@/assets/css/common.scss';
page {
  background-color: #f2f2f2;
}
.van-checkbox__icon--checked {
  background-color: $uni-theme-color !important;
  border-color: $uni-theme-color !important;
}
</style>
