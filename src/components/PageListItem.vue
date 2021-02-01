<template>
  <view class="content">
    <navigator :url="item.url">
      <u-row gutter="20" class="list_item">
        <u-col :span="imgWidth" class="img_con">
          <!-- <image :src="item.imgSrc" class="img" mode="widthFix"></image> -->
          <image
            src="../static/imgs/allince_img1.jpg"
            class="img"
            mode="widthFix"
          ></image>
        </u-col>
        <u-col :span="12 - imgWidth" style="height: 100%">
          <view class="text_con">
            <view class="top_con">
              <view class="title">{{ item.title }} </view>
              <span>{{ item.bio }} </span>
            </view>
            <view class="bottom_con">
              <view class="left_con">
                <p v-if="item.number">规模：{{ item.number }}</p>
                <slot name="price_con"></slot>
              </view>
              <view class="right_con">
                <p v-if="item.location">{{ item.location }}</p>
                <slot name="btn"></slot>
              </view>
            </view>
          </view>
        </u-col>
      </u-row>
    </navigator>
  </view>
</template>

<script>
export default {
  props: {
    imgWidth: {
      type: Number,
      default: 6,
    },
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  border-top: 1rpx solid #eee;
  padding-bottom:10rpx;
}
.list_item {
  display: flex;
  flex-direction: column;
  padding: 20rpx 30rpx;
  border-bottom: 1rpx solid #eee;
  color: #959595;
  font-size: 20rpx;
  max-height: 350rpx;
  box-sizing: border-box;
  .img {
    display: block;
    width: 100%;
    height: 350rpx;
  }
  .title {
    font-size: 36rpx;
    font-weight: 700;
    color: #000;
  }
  .top_con {
    margin-bottom: 20rpx;
  }
  .bottom_con {
    display: flex;
    justify-content: space-between;
    .right_con {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  }
}
</style>