<template>
  <view class="content">

    <view class="user_con">
      <view class="user_info">
        <view class="avatar_con">
          <u-avatar src="../static/imgs/avatar_1.png" class="avatar" size="large"></u-avatar>
        </view>
        <view class="info_con">
          <p class="user_name">名称名称</p>
          <view class="member_con">
            <view class="member_bg">
              <image
                class="icon"
                src="../../static/icon/icon_member.png"
              ></image>
            </view>
            <view class="text"> 普通用户 </view>
          </view>
        </view>
      </view>

      <view class="my_list">
        <navigator class="my_list_item" url="/pages/myfavourite/myfavourite">
          <p class="number">1</p>
          <span>我的收藏</span>
        </navigator>
        <view class="my_list_item">
          <p class="number">0</p>
          <span>礼物篮</span>
        </view>
        <navigator class="my_list_item" url="/pages/mycart/mycart">
          <p class="number">0</p>
          <span>购物车</span>
        </navigator >
      </view>
    </view>


  </view>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$padding-LR:50rpx;

.content {
  background: #eee;
  padding-bottom: 90rpx;
}
.user_con {
  background: #20a937;
  padding: 40rpx $padding-LR;
  color: #fff;
  .user_info {
    display: flex;
    margin: 30rpx 0;
    .avatar_con {
      width: 150rpx;
      height: 150rpx;
      margin-right: 20rpx;
      image {
        width: 100%;
        height: 100%;
      }
    }
    .icon {
      position: absolute;
      left: -6rpx;
      top: -4rpx;
      // display: block;
      // margin: 16rpx auto;
      background: transparent;
      width: 30rpx;
      height: 30rpx;
      opacity: 0.5;
    }
    .member_con {
      position: relative;
      display: flex;
      color: #959595;
      font-size: 24rpx;
      margin: 20rpx 0;
      .member_bg {
        position: relative;
        background: #eee;
        border-radius: 50%;
        width: 60rpx;
        height: 60rpx;
      }
      .text {
        position: absolute;
        left: 46rpx;
        top: 12rpx;
        background: #eee;
        line-height: 1.5;
        padding: 0 1.5em;
        width: 4em;
        border-radius: 14rpx;
      }
    }
  }
}
</style>