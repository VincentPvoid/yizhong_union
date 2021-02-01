<template>
  <view class="list_con">
    <view class="list_item" v-for="(item, index) in list" :key="index">
      <image :src="item.imgSrc" mode="widthFix"></image>
      <view class="">
        <p class="course_name main-text">{{ item.title }}</p>
        <view class="detail">
          {{ item.bio }}
        </view>
      </view>
      <view class="bottom_con">
        <view class="left_con">
          <p>老师：{{ item.name }}</p>
          <p>已报名：{{ item.count }} 人</p>
        </view>
        <view class="price_con">
          <p class="del-text">原价：{{ item.oriPrice }}</p>
          <p class="price">
            ¥<span class="big-text">{{ item.price }} </span>
          </p>
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
          title: "丁校长学习中心",
          bio: "产品描述产品描述产品描述产品描述",
          oriPrice: 500,
          price: 29.0,
          count: 999,
          imgSrc: "../static/imgs/life_img1.jpg",
          name: "test",
        },
        {
          title: "丁校长学习中心",
          bio: "产品描述产品描述产品描述产品描述",
          oriPrice: 500,
          price: 29.0,
          count: 999,
          imgSrc: "../static/imgs/life_img1.jpg",
          name: "test",
        },
      ];
    }, 300);
  },
};
</script>

<style lang="scss" scoped>
.list_con {
  display: flex;
  justify-content: space-around;
  margin: 30rpx 30rpx;
  image {
    width: 100%;
  }
  .list_item {
    width: 48%;
    font-size: 18rpx;
    color: #959595;
  }
  .course_name {
    font-size: 30rpx;
    margin: 10rpx 0 5rpx;
  }
  .bottom_con {
    display: flex;
    justify-content: space-between;
    margin: 10rpx 0;
  }
  .price {
    color: #f40;
    font-weight: 700;
    text-align: right;
  }
}
</style>