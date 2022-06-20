<template>
  <view class="set__address__content">
    <view class="set__address__list">
      <view class="set__address__item">
        <view class="label">收货人</view>
        <view class="input">
          <input v-model="formProps.userName" placeholder="请填写收货人姓名" />
        </view>
      </view>
      <view class="set__address__item">
        <view class="label">手机号码</view>
        <view class="input">
          <input v-model.number="formProps.mobile" placeholder="请填写收货人手机号" />
        </view>
      </view>
      <view class="set__address__item province">
        <view class="label">所在地区</view>
        <view class="input" @click="show = true">
          {{ formProps.provinceName }}{{ formProps.cityName }}{{ formProps.areaName }}
        </view>
      </view>
      <view class="set__address__item address">
        <view class="label">详细地址</view>
        <view class="input">
          <textarea
            v-model="formProps.detail"
            class="textarea"
            placeholder="街道、楼牌号等"
          ></textarea>
        </view>
      </view>
    </view>
    <view class="set__address__default">
      <view class="title__content">
        <view class="title">设置默认地址</view>
        <view class="tips">提醒：每次下单会默认推荐该地址</view>
      </view>
      <view class="shift__content">
        <view class="switch" :class="{ active: shift }" @click="handleShift"></view>
      </view>
    </view>
    <view class="set__address__footer">
      <view class="button">保存</view>
    </view>
    <VanPopup
      :show="show"
      custom-style="height:60%"
      :duration="300"
      position="bottom"
      @close="handleClose"
    >
      <VanArea
        :area-list="areaList"
        :columns-num="3"
        @confirm="handleConfirm"
        @cancel="handleCancel"
      />
    </VanPopup>
  </view>
</template>
<script>
import { areaList } from '@vant/area-data'
export default {
  name: 'SetAddress',
  data() {
    return {
      formProps: {
        userName: '',
        mobile: '',
        address: '',
        province: '',
        city: '',
        area: '',
        provinceName: '',
        cityName: '',
        areaName: '',
        addressDetail: ''
      },
      value: '',
      show: false,
      shift: false,
      areaList
    }
  },
  onLoad() {
    console.log(JSON.stringify(areaList))
  },
  methods: {
    handleClose(val) {
      console.log(val)
    },
    handleConfirm(val) {
      console.log(val.detail)
      this.formProps.province = val.detail.values[0].code
      this.formProps.city = val.detail.values[0].code
      this.formProps.area = val.detail.values[0].code
      this.formProps.provinceName = val.detail.values[0].name
      this.formProps.cityName = val.detail.values[1].name
      this.formProps.areaName = val.detail.values[2].name
      this.handleCancel()
    },
    handleCancel(val) {
      this.show = false
    },
    handleShift() {
      this.shift = !this.shift
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.set__address {
  &__list {
    padding-bottom: pxTorpx(40);
    background-color: $white;
  }
  &__item {
    @include flex(center, '');
    padding: pxTorpx(20) pxTorpx(15);
    border-bottom: 1px solid #f2f2f2;
    font-family: $SourceHanSansSC;
    font-weight: 400;
    font-size: pxTorpx(14);
    color: rgb(16, 16, 16);
    &:first-child {
      border-top: 1px solid #f2f2f2;
    }
    .input {
      width: calc(100% - 180rpx);
    }
    &.province {
      padding: 0 pxTorpx(15);
      .input {
        min-height: pxTorpx(60);
        line-height: pxTorpx(60);
      }
    }
    &.address {
      @include flex(flex-start, '');
      padding-bottom: 0;
      .textarea {
        width: 100%;
        padding: pxTorpx(2);
        height: 80px;
      }
    }
    .label {
      font-size: pxTorpx(14);
      margin-right: pxTorpx(15);
      min-width: pxTorpx(58);
    }
  }
  &__default {
    background-color: $white;
    margin-top: pxTorpx(30);
    padding: pxTorpx(20);
    @include flex(center, space-between);
    .title__content {
      font-family: $SourceHanSansSC;
      font-weight: 400;
      font-size: pxTorpx(14);
      color: rgb(16, 16, 16);
      .tips {
        font-size: pxTorpx(12);
        color: rgb(144, 144, 144);
        margin-top: pxTorpx(5);
      }
    }
    .shift__content {
      width: pxTorpx(37);
      height: pxTorpx(20);
      .switch {
        position: relative;
        height: 70%;
        -webkit-box-pack: start;
        justify-content: flex-start;
        background-color: rgb(158, 158, 158);
        border-radius: 10px;
        transition: background 0.25s ease-in-out 0s;
        &::after {
          content: '';
          position: relative;
          display: block;
          top: -6rpx;
          width: pxTorpx(20);
          padding-bottom: pxTorpx(20);
          background-color: rgb(255, 255, 255);
          border-radius: 50%;
          box-shadow: #0000001f 0px 0px 1px 0px, #0000003d 0px 1px 1px 0px;
          transition: transform 0.25s ease-in-out 0s;
          transform: translate(0px, 0px);
        }
        &.active {
          background-color: #adbcf9;
          &::after {
            background-color: rgb(90, 123, 244);
            box-shadow: #0000001f 0px 0px 1px 0px, #0000003d 0px 1px 1px 0px;
            transform: translate(17.12px, 0px);
          }
        }
      }
    }
  }
  &__footer {
    position: fixed;
    width: calc(100% - 60rpx);
    bottom: 0;
    left: 0;
    background-color: $white;
    padding: pxTorpx(20) pxTorpx(15);
    .button {
      width: 100%;
      line-height: pxTorpx(40);
      height: pxTorpx(40);
      text-align: center;
      background-color: $uni-theme-color;
      color: $white;
      font-size: pxTorpx(14);
      border-radius: pxTorpx(100);
    }
  }
}
</style>
