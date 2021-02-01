<template>
  <view class="content">
    <view class="banner_con">
      <image src="../../static/imgs/joinus_banner.jpg"></image>
    </view>

    <view class="btns_con">
      <navigator url="/pages/becomefounder/becomefounder">
        <view class="btn">加入创始团队</view>
      </navigator>
      <navigator url="/pages/becomefounder/becomefounder">
        <view class="btn green">成为创始人</view>
      </navigator>
      <navigator url="/pages/becomefounder/becomefounder">
        <view class="btn">成为合伙人</view>
      </navigator>
      <navigator url="/pages/becomefounder/becomefounder">
        <view class="btn">
          <p>成为会员</p>
          <span>在平台消费199元以上可成为会员</span>
        </view>
      </navigator>
    </view>

    <custabbar :current-page="3"></custabbar>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content {
  padding-bottom: 80rpx;
  overflow-y: auto;
}
.btn {
  position: relative;
  border: 2rpx solid #20a937;
  margin: 30rpx 0;
  padding: 20rpx 0;
  text-align: center;
  color: #959595;
  font-size: 30rpx;
  line-height: 1.5;
  border-radius: 40rpx;
}
.green {
  background: #20a937;
  color: #fff;
}

.banner_con {
  width: 100%;
  height: 360rpx;
  image {
    width: 100%;
    height: 100%;
  }
}
.btns_con {
  padding: 80rpx 60rpx;
  span {
    position: absolute;
    width: 100%;
    font-size: 20rpx;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>