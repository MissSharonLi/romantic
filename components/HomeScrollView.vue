<template>
  <Swiper
    class="swiper"
    :indicator-dots="indicatorDots"
    :autoplay="autoplay"
    :interval="interval"
    :duration="duration"
    :current="current"
    @change="handleChange"
  >
    <Block v-for="(item, index) in dataSource" :key="index">
      <SwiperItem class="scroll-item">
        <view class="swiper-item">
          <ProductList @click="handleOperation"></ProductList>
        </view>
      </SwiperItem>
    </Block>
  </Swiper>
</template>
<script>
import ProductList from '@/components/ProductList'
export default {
  components: {
    ProductList
  },
  props: {
    dataSource: {
      type: Array,
      default: () => ['擂台赛', '随机赏', '推荐', '随机赏', '擂台赛']
    }
  },
  data() {
    return {
      indicatorDots: false,
      current: 2,
      autoplay: false,
      interval: 1000,
      duration: 500
    }
  },
  methods: {
    handleOperation(e) {
      this.$emit('click', e)
    },
    handleChange(e) {
      console.log(e.target.current)
      this.$emit('shiftTab', e.target.current)
    }
  }
}
</script>
<style lang="scss" scoped>
.swiper {
  min-height: 100vh;
  position: relative;
  .scroll-item {
    overflow-y: scroll;
    touch-action: pan-y;
    -webkit-overflow-scrolling: touch;
  }
  .swiper-item {
    min-height: 100vh;
  }
}
</style>
