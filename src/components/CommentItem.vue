<template>
  <view class="list_con">
    <view
      class="comment_item"
      v-for="(item, index) in list"
      :key="index"
      style="align-items: flex-start"
    >
      <view class="avatar_con">
        <image
          class="avatar"
          src="../static/imgs/avatar_1.png"
          mode="widthFix"
        ></image>
      </view>
      <view class="comment_detail_con">
        <view class="user_name">{{ item.user_name }} </view>
        <u-rate :current="item.stars" :disabled="true"></u-rate>
        <view class="post_date">{{ item.time }}发布</view>
        <view class="comment_detail">
          {{ item.detail }}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.list = [
        {
          user_name: "多多熊美育",
          stars: 4,
          time: "2019-10-01",
          detail: `课程讲得很好讲得很好很课程讲得很好讲得很好很课程讲得很好讲得很好很课程讲得很好讲得很好很课程讲得很好讲得很好很课程讲得很好讲得很好很课程讲得很好讲得很好很课程讲得很好讲得很好很课程讲得很好讲得很好很课程讲得很好讲得很好很课程讲得很好讲得很好很`,
        },
        {
          user_name: "多多熊美育",
          stars: 3.5,
          time: "2020-11-01",
          detail: `课程讲得很好讲得很好很课程讲得很好讲得很好很课程讲得很好讲得很好很课程讲得很好讲得很好很课程讲得很好讲得很好很课程讲得很好讲得很好很课程讲得很好讲得很好很课程讲得很好讲得很好很课程讲得很好讲得很好很课程讲得很好讲得很好很课程讲得很好讲得很好很`,
        },
      ];
    }, 300);
  },
};
</script>

<style lang="scss" scoped>
.comment_item {
  display:flex;
  padding: 40rpx 0;
  border-bottom: 1rpx solid #eee;
  .user_name {
    font-size: 45rpx;
  }
  .comment_detail_con {
    position: relative;
    max-width: 80%;
    .post_date {
      position: absolute;
      right: 0;
      top: 10rpx;
      font-size: 20rpx;
    }
    .comment_detail {
      font-size: 20rpx;
      margin: 20rpx 0;
    }
  }
  .avatar_con {
    width: 100rpx;
    height: 100rpx;
    margin-right: 20rpx;
    image {
      width: 100%;
      height: 100%;
    }
  }
}

</style>