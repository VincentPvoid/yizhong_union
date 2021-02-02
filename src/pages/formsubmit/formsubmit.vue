<template>
  <view class="content">
    <view class="icon_con">
      <u-icon name="checkmark-circle-fill" color="#20a937" size="300"></u-icon>
      <view class="text">提交成功</view>
    </view>

    <view class="btn_con">
      <navigator class="btn" url="/pages/index/index" open-type="switchTab">回到首页</navigator>
    </view>
  </view>
</template>

<script>

export default {
};
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  background: #20a937;
  color: #fff;
  width: 16em;
  text-align: center;
  border-radius: 40rpx;
  line-height: 2.5;
  font-size:30rpx;
}
.icon_con {
  padding: 100rpx;
  text-align: center;
  .text {
    margin: 50rpx 0;
    color: #959595;
  }
}
.btn_con{
  text-align:center;
}
</style>