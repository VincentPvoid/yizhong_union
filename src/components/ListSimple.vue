<template>
  <view class="content">
    <view v-if="column == 1" class="column">
      <view
        class="list_item"
        v-for="item in list"
        :style="{ width: `${100 / column}%` }"
      >
        <view class="avatar_con">
          <u-avatar src="../static/imgs/avatar_1.png" class="avatar"></u-avatar>
        </view>
        <view class="middle_con">
          <p class="friend_name main-text">{{ item.name }}</p>
          <p>{{ item.bio }}</p>
        </view>

        <view class="right_con">
          <p class="btn" v-if="item.tel">联系TA</p>
          <p>{{ item.location }}</p>
        </view>
      </view>
    </view>

    <view v-else class="column">
      <navigator
        class="list_item"
        v-for="item in list"
        :style="{ width: `${100 / column}%` }"
        url="/pages/locationdetail/locationdetail"
      >
        <view class="img_con">
          <image src="../static/imgs/location_img1.jpg" class="img"></image>
        </view>

        <view class="detail_con">
          <h3 class="title main-text">特斯拉</h3>
          <p>行业：新能源</p>
          <view class="bottom-text">
            <p>{{ item.location }}</p>
          </view>
        </view>
      </navigator>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    column: {
      type: Number,
      default: 1,
    },
  },
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
  .column {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
}
.list_item {
  position: relative;
  display: flex;
  padding: 20rpx 30rpx;
  border-bottom: 1rpx solid #eee;
  color: #959595;
  font-size: 20rpx;
  line-height: 1.5;
  box-sizing: border-box;
  .avatar {
    display: block;
    // width: 100rpx;
    margin-right: 15rpx;
  }
  .middle_con {
    flex: 1;
  }
  .friend_name {
    font-size: 32rpx;
  }
  .right_con {
    text-align: center;
  }
  .img_con {
    width: 50%;
    .img {
      max-width: 150rpx;
      max-height: 150rpx;
      min-width: 150rpx;
      min-height: 150rpx;
      margin-right: 10rpx;
    }
  }
  .title {
    font-size: 36rpx;
  }
  .detail_con {
    font-size: 20rpx;
  }
  .bottom-text {
    position: absolute;
    right: 15rpx;
    bottom: 15rpx;
    font-size: 16rpx;
  }
}
</style>