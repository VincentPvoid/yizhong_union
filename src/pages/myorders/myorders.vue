<template>
  <view class="content">
    <view class="search_wapper">
      <input type="text" class="search_input" placeholder="搜索" />
    </view>

    <view class="tags_con">
      <TopTabs :list="tags" :current.sync="current" :isScroll="false" />
    </view>

    <view class="list_con">
      <view class="goods_list">
        <MyPageItem v-for="item in list" :item="item" :key="item.id" />
      </view>
      
    </view>


    
  </view>
</template>

<script>
import TopTabs from "@/components/TopTabs.vue";
import MyPageItem from "@/components/MyPageItem.vue";

export default {
  components: {
    TopTabs,
    MyPageItem,
  },
  data() {
    return {
      tags: [
        {
          name: "待付款",
        },
        {
          name: "待发货",
        },
        {
          name: "待收货",
        },
        {
          name: "已完成",
        },
        {
          name: "全部",
        },
      ],
      current: 0,
      list:[],
    };
  },
  mounted() {
    this.list = [
      {
        url: "/pages/lifedetail/lifedetail",
        title: "丁校长学习中心",
        bio: "产品描述产品描述产品描述产品描述",
        price: 29.9,
        count: 1,
        imgSrc: "../static/imgs/life_img1.jpg",
        sum: 2,
        id:1,
      },
      {
        url: "/pages/lifedetail/lifedetail",
        title: "丁校长学习中心",
        bio: "产品描述产品描述产品描述产品描述",
        price: 299.9,
        count: 2,
        imgSrc: "../static/imgs/life_img2.jpg",
        sum: 1,
        id:2,
      },
      {
        url: "/pages/lifedetail/lifedetail",
        title: "丁校长学习中心",
        bio: "产品描述产品描述产品描述产品描述",
        price: 29.9,
        count: 1,
        imgSrc: "../static/imgs/life_img1.jpg",
        sum: 1,
        id:3,
      },
      {
        url: "/pages/lifedetail/lifedetail",
        title: "丁校长学习中心",
        bio: "产品描述产品描述产品描述产品描述",
        price: 129.9,
        count: 3,
        imgSrc: "../static/imgs/life_img2.jpg",
        sum: 1,
        id:4,
      },
      {
        url: "/pages/lifedetail/lifedetail",
        title: "丁校长学习中心",
        bio: "产品描述产品描述产品描述产品描述",
        price: 29.9,
        count: 1,
        imgSrc: "../static/imgs/life_img1.jpg",
        sum: 1,
        id:5,
      },
    ];
  }
};
</script>

<style lang="scss" scoped>
$padding-LR: 50rpx;
.search_wapper {
  padding: 20rpx $padding-LR;
  .search_input {
    padding: 10rpx 20rpx;
    border: 1px solid #eee;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 10rpx;
    background: #eee;
    font-size: 30rpx;
    line-height: 2;
  }
}
.tags_con {
  padding: 20rpx $padding-LR;
}

.goods_list {
  margin-bottom: 30rpx;
  border-top: 1rpx solid #eee;
}
</style>