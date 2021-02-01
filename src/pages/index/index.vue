<template>
  <view class="content">
    <navigator class="main_img_con" url="/pages/allince/allince">
      <image src="../../static/imgs/index_01.jpg"></image>
      <div class="title_con">
        <image class="icon" src="../../static/icon/icon_allince.png"></image>
        <view>
          <p>Alliance</p>
          <p>创业联盟</p>
        </view>
      </div>
    </navigator>

    <view class="list_con">
      <navigator class="img_con" url="/pages/engineering/engineering">
        <image src="../../static/imgs/index_02.jpg"></image>
        <div class="title_con">
          <image
            class="icon"
            src="../../static/icon/icon_engineering.png"
          ></image>
          <view>
            <p>Engineering Alliance</p>
            <p>工程联盟</p>
          </view>
        </div>
      </navigator>
      
      <!-- <navigator class="img_con" url="/pages/outershop/outershop?url=http://ding.szcci.net/">
        <image src="../../static/imgs/index_03.jpg"></image>
        <div class="title_con">
          <image class="icon" src="../../static/icon/icon_shop.png"></image>
          <view>
            <p>Life e-commerce</p>
            <p>生活电商</p>
          </view>
        </div>
      </navigator> -->

      <view class="img_con" @click="goToOuterShop('http://ding.szcci.net/')">
        <image src="../../static/imgs/index_03.jpg"></image>
        <div class="title_con">
          <image class="icon" src="../../static/icon/icon_shop.png"></image>
          <view>
            <p>Life e-commerce</p>
            <p>生活电商</p>
          </view>
        </div>
      </view>
    </view>

    <view class="list_con">
      <navigator class="img_con" url="/pages/education/education">
        <image src="../../static/imgs/index_04.jpg"></image>
        <div class="title_con">
          <image
            class="icon"
            src="../../static/icon/icon_education.png"
          ></image>
          <view>
            <p>Children education</p>
            <p>少儿教育</p>
          </view>
        </div>
      </navigator>
      <view class="img_con">
        <image src="../../static/imgs/index_05.jpg"></image>
        <div class="title_con">
          <image
            class="icon"
            src="../../static/icon/icon_charitable.png"
          ></image>
          <view>
            <p>Charitable ativities</p>
            <p>公益活动</p>
          </view>
        </div>
      </view>
    </view>

    <custabbar :current-page="2"></custabbar>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad() {},
  methods: {
    goToOuterShop(url) {
      //新窗口打开
      //#ifdef H5
      window.open(url);
      //#endif

      //#ifndef H5
      plus.runtime.openURL(url);
      //#endif
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  background: #20a937;
  padding: 30rpx 40rpx 0;
  height: 100vh;
  box-sizing: border-box;
  image {
    display: block;
  }
  .main_img_con {
    position: relative;
    padding: 30rpx 0;
    image {
      height: 252rpx;
      width: 100%;
      margin: 0 auto;
    }
    .title_con {
      position: absolute;
      top: 5%;
      left: 1.5%;
      color: #fff;
    }
  }
  .list_con {
    display: flex;
    justify-content: space-between;
    padding-bottom: 30rpx;
  }
  .img_con {
    width: 48%;
    background: #fff;
    image {
      width: 100%;
      height: 161rpx;
    }
  }
  .title_con {
    display: flex;
    align-items: center;
    padding: 30rpx 15rpx;
    font-size: 22rpx;
    .icon {
      display: inline-block;
      margin-right: 5rpx;
      width: 45rpx;
      height: 45rpx;
    }
  }
}
</style>
