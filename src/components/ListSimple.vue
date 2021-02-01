<template>
  <view class="content">
    <u-row gutter="20" class="list_item">
      <u-col span="2" class="avatar_con">
        <image
          class="avatar"
          src="../static/imgs/avatar_1.png"
          mode="widthFix"
        ></image>
      </u-col>
      <u-col span="7" class="">
        <p class="friend_name main-text">盟友名称</p>
        <p>行业：新能源</p>
      </u-col>

      <u-col span="3" class="right_con">
        <p class="btn">联系TA</p>
        <p>1.6KM</p>
      </u-col>
    </u-row>
  </view>
</template>

<script>
export default {
  props:{
    list:{
      type:Array,
      default:() =>[]
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  background: #20a937;
  color: #fff;
  padding: 5rpx 20rpx;
  border-radius: 12rpx;
}
.content {
  border-top: 1rpx solid #eee;
}
.list_item {
  padding: 20rpx 20rpx;
  border-bottom:1rpx solid #eee;
  color:#959595;
  line-height: 1.8;
  .avatar {
    width: 100%;
  }
  .friend_name{
    font-size:36rpx;
  }
  .right_con{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}
</style>