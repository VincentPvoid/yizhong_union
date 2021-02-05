<template>
  <view class="content">
    <view class="search_wapper">
      <input type="text" class="search_input" placeholder="搜索" />
    </view>

    <view class="tags_con">
      <view class="tags_wapper">
        <TopTabs :list="tags" :current.sync="current" :isScroll="false" />
      </view>
    </view>

    <view class="list_con">
      <view class="goods_list">
        <MyPageItem
          v-for="item in list"
          :key="item.id"
          :item="item"
          :showCheckbox="true"
          @click.stop.native="chooseItem(item)"
          :checked="isChecked(item)"
        />
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
          name: "全部",
        },
      ],
      current: 0,
      list: [],
      chooseList: [],
    };
  },
  methods: {
    chooseItem(item) {
      // console.log(item);
      if (this.isChecked(item)) {
        this.chooseList = this.chooseList.filter((i) => i != item);
      } else {
        this.chooseList.push(item);
      }
    },
    isChecked(item) {
      return this.chooseList.includes(item);
    },
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
        id: 1,
      },
      {
        url: "/pages/lifedetail/lifedetail",
        title: "丁校长学习中心",
        bio: "产品描述产品描述产品描述产品描述",
        price: 299.9,
        count: 2,
        imgSrc: "../static/imgs/life_img2.jpg",
        sum: 1,
        id: 2,
      },
      {
        url: "/pages/lifedetail/lifedetail",
        title: "丁校长学习中心",
        bio: "产品描述产品描述产品描述产品描述",
        price: 29.9,
        count: 1,
        imgSrc: "../static/imgs/life_img1.jpg",
        sum: 1,
        id: 3,
      },
      {
        url: "/pages/lifedetail/lifedetail",
        title: "丁校长学习中心",
        bio: "产品描述产品描述产品描述产品描述",
        price: 129.9,
        count: 3,
        imgSrc: "../static/imgs/life_img2.jpg",
        sum: 1,
        id: 4,
      },
      {
        url: "/pages/lifedetail/lifedetail",
        title: "丁校长学习中心",
        bio: "产品描述产品描述产品描述产品描述",
        price: 29.9,
        count: 1,
        imgSrc: "../static/imgs/life_img1.jpg",
        sum: 1,
        id: 5,
      },
    ];
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
  display: flex;
  padding: 20rpx $padding-LR;
}
.goods_list {
  margin-bottom: 30rpx;
  border-top: 1rpx solid #eee;
}
</style>