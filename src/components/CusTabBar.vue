<template>
  <view class="tabbar-container">
    <block>
      <view
        class="tabbar-item"
        v-for="(item, index) in tabbarList"
        :key="index"
        :class="[item.centerItem ? ' center-item' : '']"
        @click="changeItem(item)"
      >
        <view class="item-top">
          <image
            :src="currentItem == item.id ? item.selectIcon : item.icon"
          ></image>
        </view>
        <view
          class="item-bottom"
          :class="[currentItem == item.id ? 'item-active' : '']"
        >
          <text>{{ item.text }}</text>
        </view>
      </view>
    </block>
  </view>
</template>  

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentItem: 0,
      tabbarList: [
        {
          id: 0,
          path: "/pages/location/location",
          icon: "/static/icon/tabbar_location.png",
          selectIcon: "/static/icon/tabbar_location_choose.png",
          text: "附近盟友",
          centerItem: false,
        },
        {
          id: 1,
          path: "/pages/life/life",
          icon: "/static/icon/tabbar_life.png",
          selectIcon: "/static/icon/tabbar_life_choose.png",
          text: "幸福生活",
          centerItem: false,
        },
        {
          id: 2,
          path: "/pages/index/index",
          icon: "/static/icon/tabbar_fingerprint.png",
          selectIcon: "/static/icon/tabbar_fingerprint.png",
          text: "先舍后得",
          centerItem: true,
        },
        {
          id: 3,
          path: "/pages/joinus/joinus",
          icon: "/static/icon/tabbar_join.png",
          selectIcon: "/static/icon/tabbar_join_choose.png",
          text: "加入我们",
          centerItem: false,
        },
        {
          id: 4,
          path: "/pages/mine/mine",
          icon: "/static/icon/tabbar_mine.png",
          selectIcon: "/static/icon/tabbar_mine_choose.png",
          text: "我的",
          centerItem: false,
        },
      ],
    };
  },
  mounted() {
    this.currentItem = this.currentPage;
    uni.hideTabBar();
  },
  methods: {
    changeItem(item) {
      let _this = this;
      // _this.currentItem = item.id;
      uni.switchTab({
        url: item.path,
      });
    },
  },
};
</script>  

<style lang="scss" scoped>
view {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.tabbar-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 110rpx;
  // box-shadow: 0 0 5px #999;
  box-shadow: 0 -5rpx 10rpx #ddd;
  display: flex;
  align-items: center;
  padding: 5rpx 0;
  color: #000;
  background: #fff;
  .item-active {
    color: #20a937;
  }
  .tabbar-item {
    width: 20%;
    height: 100rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    .item-top {
      width: 70rpx;
      height: 70rpx;
      padding: 10rpx;
      image {
        width: 100%;
        height: 100%;
      }
    }
    .item-bottom {
      font-size: 20rpx;
      width: 100%;
    }
  }

  .center-item {
    display: block;
    position: relative;
    .item-top {
      flex-shrink: 0;
      width: 100rpx;
      height: 100rpx;
      position: absolute;
      top: -50rpx;
      left: calc(50% - 50rpx);
      border-radius: 50%;
      // box-shadow: 0 0 5px #999;
      box-shadow: 0 -3rpx 10rpx #ddd;
      background-color: #ffffff;
    }
    .item-bottom {
      position: absolute;
      bottom: 0rpx;
    }
  }
}
</style>  