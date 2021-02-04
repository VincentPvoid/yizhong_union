<template>
  <view class="content">
    <view class="search_wapper">
      <input type="text" class="search_input" placeholder="搜索" />
    </view>

    <view class="tags_con">
      <TopTabs :list="tags" :current.sync="current" />
    </view>

    <view class="list_con">
      <PageListItem v-for="(item, index) in list" :item="item" :key="index" />
    </view>
  </view>
</template>

<script>
import TopTabs from "@/components/TopTabs.vue";
import PageListItem from "@/components/PageListItem.vue";

export default {
  components: {
    TopTabs,
    PageListItem,
  },
  data() {
    return {
      tags: [
        {
          name: "景区",
        },
        {
          name: "商家",
        },
        {
          name: "商品",
        },
        {
          name: "文章",
        },
      ],
      current: 0,
      list: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.list = [
        {
          url: "/pages/lifedetail/lifedetail",
          title: "丁校长学习中心",
          bio: "产品描述产品描述产品描述产品描述",
          oriPrice: 500,
          price: 29.9,
          count: 999,
          imgSrc: "../static/imgs/life_img1.jpg",
        },
        {
          url: "/pages/lifedetail/lifedetail",
          title: "丁校长学习中心",
          bio: "产品描述产品描述产品描述产品描述",
          oriPrice: 1500,
          price: 299.9,
          count: 1999,
          imgSrc: "../static/imgs/life_img2.jpg",
        },
        {
          url: "/pages/lifedetail/lifedetail",
          title: "丁校长学习中心",
          bio: "产品描述产品描述产品描述产品描述",
          oriPrice: 500,
          price: 29.9,
          count: 999,
          imgSrc: "../static/imgs/life_img1.jpg",
        },
        {
          url: "/pages/lifedetail/lifedetail",
          title: "丁校长学习中心",
          bio: "产品描述产品描述产品描述产品描述",
          oriPrice: 300,
          price: 129.9,
          count: 99,
          imgSrc: "../static/imgs/life_img2.jpg",
        },
        {
          url: "/pages/lifedetail/lifedetail",
          title: "丁校长学习中心",
          bio: "产品描述产品描述产品描述产品描述",
          oriPrice: 500,
          price: 29.9,
          count: 999,
          imgSrc: "../static/imgs/life_img1.jpg",
        },
      ];
    });
  },
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
</style>