<template>
  <view class="goods_item">
    <view class="top_con">
      <view class="check_con" v-if="showCheckbox">
          <!-- <checkbox v-model="checked" color="#20a937" /> -->
          <u-checkbox v-model="checked" active-color="#20a937"></u-checkbox>
      </view>
      <image
        src="../static/icon/mine_icon_storesManage_black.png"
        class="icon"
      ></image>
      <span class="good_name bold-text">{{ item.title }}</span>
      <span class="status green-text">等待发货</span>
    </view>
    <view class="detail_con">
      <view
        class="img_con"
        :class="{height300:showCheckbox, height250:!showCheckbox}"
      >
        <image src="../static/imgs/education_ad_1.png"></image>
      </view>
      <!-- <u-col :span="showCheckbox ? 6 : 4"> -->
        <view class="good_info">
          <p>{{ item.bio }}</p>
          <view class="price_con">
            <p class="price">¥<span class="big-text">29.9</span></p>
          </view>
          <view class="count_con" v-if="showCheckbox">
            <u-number-box
              v-model="item.count"
              @change="valChange"
            ></u-number-box>
          </view>
        </view>
      <!-- </u-col> -->
    </view>

    <view class="btns_con" v-if="!showCheckbox">
      <span class="btn">再次购买</span>
      <span class="btn">申请退款</span>
      <span class="btn">我要催单</span>
      <span class="btn btn-green">确认收货</span>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    showCheckbox: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      default: () => {},
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    valChange(e) {
      console.log(e);
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
$padding-LR: 50rpx;

.height250{
  height:250rpx;
  flex:2;
}
.height300{
  height:300rpx;
  flex:1;
}
.green-text {
  color: #20a937;
}
.btn {
  display: inline-block;
  border: 1rpx solid #959595;
  padding: 5rpx 15rpx;
  margin: 30rpx 0 0;
  margin-left: 10rpx;
  border-radius: 24rpx;
  line-height: 1.5;
  font-size: 16rpx;
  color: #959595;
}
.btn-green {
  background: #20a937;
  border-color: #20a937;
  color: #fff;
}

.goods_item {
  border-bottom: 1rpx solid #eee;
  padding: 35rpx $padding-LR;
}
.icon {
  width: 50rpx;
  height: 50rpx;
  margin-right: 10rpx;
}
.top_con {
  display: flex;
  font-size: 34rpx;
  .status {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
  }
}
.detail_con {
  // position: relative;
  display: flex;
  justify-content: space-between;
  margin: 30rpx 0 0;
  .img_con {
    // flex: 2;
    display: flex;
    // height: 300rpx;
    // margin-right: 30rpx;
    image {
      width: 100%;
      height: 100%;
      margin-right: 10rpx;
    }
  }

  .good_info {
    flex: 1;
    font-size: 26rpx;
    color: #959595;
    text-align: right;
    .price_con {
      margin: 2em 0;
      color: #f40;
      span {
        font-size: 50rpx;
      }
    }
  }
}
.btns_con {
  text-align: right;
}
</style>