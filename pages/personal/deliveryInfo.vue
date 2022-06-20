<template>
  <view class="delivery__wrapper">
    <view class="delivery__status">
      <text>已签收</text>
      <image class="img" :src="require('@/assets/images/logistics.png')"></image>
    </view>
    <view class="delivery__list">
      <view
        v-for="(item, index) in returnData"
        :key="index"
        class="delivery__item"
        :class="{ success: item.status === 1 }"
      >
        <text class="context">{{ item.content }}</text>
        <text v-if="item.status === 0" class="time">{{ item.time }}</text>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      returnData: [
        {
          status: 1,
          content: '已签收，签收人类型：收发室',
          time: '2022-03-09 18:20:10'
        },
        {
          status: 0,
          content:
            '派送中,快递小哥已接种新冠疫苗，德邦已开启u201d安全呼叫u201c，保护您的电话隐私，小哥今日体温正常，将佩戴口罩为您配送，也可联系小哥将包裹放置指定地点，祝您身体健康。派送人：陆倪东,电话:1888888888',
          time: '2022-03-09 18:20:10'
        },
        {
          status: 0,
          content: '可联系小哥将包裹放置指定地点，祝您身体健康。派送人：陆倪东,电话:1888888888',
          time: '2022-03-09 18:20:10'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.delivery {
  &__status {
    height: pxTorpx(100);
    background-color: $uni-theme-color;
    padding: 0 pxTorpx(20);
    @include flex(center, space-between);
    font-family: $SourceHanSansSC;
    font-weight: 400;
    font-size: pxTorpx(16);
    color: $white;
    .img {
      width: pxTorpx(54);
      height: pxTorpx(42);
    }
  }
  &__list {
    padding: pxTorpx(20);
  }
  &__item {
    padding-left: pxTorpx(40);
    position: relative;
    min-height: pxTorpx(30);
    padding-bottom: pxTorpx(30);
    &::before {
      content: '';
      display: block;
      width: pxTorpx(20);
      height: pxTorpx(20);
      background: url('@/assets/images/to.png') no-repeat;
      background-size: 100% 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    &.success {
      &::before {
        content: '收';
        font-size: pxTorpx(12);
        color: $white;
        line-height: pxTorpx(20);
        text-align: center;
        background: $uni-theme-color;
        border-radius: 50%;
      }
      .context {
        color: $uni-theme-color;
      }
    }
    &:not(:last-child) {
      &::after {
        content: '';
        width: pxTorpx(1);
        height: calc(100% - 80rpx);
        position: absolute;
        background-color: #bbbbbb;
        left: pxTorpx(10);
        top: pxTorpx(30);
      }
    }
    .context {
      font-family: 'PingFangSC';
      font-weight: 400;
      font-size: pxTorpx(14);
      color: rgb(16, 16, 16);
      display: block;
      text-align: justify;
      line-height: 1.8;
      margin-bottom: pxTorpx(10);
    }
    .time {
      font-family: 'PingFangSC';
      font-weight: 400;
      font-size: pxTorpx(12);
      color: rgba(168, 168, 168, 1);
    }
  }
}
</style>
