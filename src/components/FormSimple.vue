<template>
  <view class="content">
    <view class="title_con">
      <h2>{{ info.title }}</h2>
      <p>{{ info.sideTitle }}</p>
    </view>
    <view class="form_con">
      <u-form :model="form" ref="uForm">
        <view class="form_item">
          <u-input v-model="form.area" type="select" @click="showArea = true" />
          <u-picker
            mode="region"
            v-model="showArea"
            :default-region="[province, city, area]"
            confirm-color="#20a937"
            @confirm="chooseArea"
          ></u-picker>
        </view>

        <view class="form_item" v-if="info.tel">
          <u-input
            v-model="form.number"
            type="number"
            placeholder="请输入手机号码"
          />
        </view>

        <view class="form_item" v-else style="padding-right: 3em">
          <u-input
            v-model="form.size"
            type="number"
            placeholder="请输入房屋面积"          
          />
          <span class="unit">m²</span>
        </view>

        <view>
          <div class="btn-sumbit">{{ info.btnText }}</div>
        </view>
      </u-form>
    </view>

    <view class="add-tips">{{ info.tips }}</view>
  </view>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
    },
  },
  data() {
    return {
      form: {
        area: "广东省 深圳市 南山区",
      },
      province:'广东省',
      city:'深圳市',
      area:'南山区',
      showArea: false,
    };
  },
  methods:{
    chooseArea(e){
      this.province = e.province.label;
      this.city = e.city.label;
      this.area = e.area.label;
      this.form.area = this.localArea;
    }
  },
  computed:{
    localArea:{
      get(){
        return `${this.province} ${this.city} ${this.area}`
      },
    }
  },
};
</script>

<style lang="scss" scoped>
.content {
  border-top: 1rpx solid #eee;
  padding: 50rpx 60rpx 20rpx;
}
.title_con {
  margin: 30rpx 0;
  line-height: 1.5;
  text-align: center;
  h2 {
    font-size: 50rpx;
    color: #20a937;
    font-weight: 700;
  }
  p {
    font-size: 30rpx;
    color: #959595;
  }
}
.form_item {
  position: relative;
  background: #eee;
  padding: 10rpx 30rpx;
  margin: 30rpx 0;
  width: 100%;
  height: 90rpx;
  box-sizing: border-box;
  .unit {
    position: absolute;
    right: 0.5em;
    top: 0.4em;
    font-size: 40rpx;
  }
}
.btn-sumbit {
  font-size: 28rpx;
  padding: 20rpx 30rpx;
  text-align: center;
  background: #20a937;
  color: #fff;
  letter-spacing: 8rpx;
}
.add-tips {
  margin: 20rpx 0;
  text-align: center;
  color: #959595;
}
</style>