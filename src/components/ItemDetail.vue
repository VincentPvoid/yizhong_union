<template>
  <scroll-view
    class="content"
    scroll-y="true"
    :scroll-into-view="scrollTop"
    scroll-with-animation="true"
    style="height: 100vh"
  >
    <!-- 底部固定栏 -->
    <view class="fixed_con" v-if="showFooter">
      <view class="price_con">
        <p class="del-text">原价:500</p>
        <p class="price">¥<span class="big-text">29.9</span></p>
      </view>
      <view class="">
        <span class="btn-fixed">立即报名</span>
      </view>
    </view>
    <view class="banner_con">
      <view class="icons_con">
        <u-icon name="heart-fill" color="#f40" size="40" class="icon"></u-icon>
        <u-icon name="share-fill" color="#fff" size="40" class="icon"></u-icon>
      </view>
      <image :src="item.imgSrc"></image>
      <!-- <image src="../static/imgs/life_banner.jpg"></image> -->
    </view>

    <view class="main_con">
      <u-row class="top_con" style="align-items: flex-start">
        <u-col span="2" class="avatar_con">
          <image
            src="../static/imgs/avatar_1.png"
            class="img"
            mode="widthFix"
          ></image>
        </u-col>
        <u-col span="8" class="middle_con">
          <view class="">
            <h2 class="store_name">{{ item.name }}</h2>
            <p v-if="item.trade">行业：{{ item.trade }}</p>
            <p v-if="item.focus">{{ item.focus }} 人关注</p>
          </view>
          <div class="title_detail" v-if="item.time">
            <!-- <p class="title">{{ item.title }}</p> -->
            <p>活动时间：{{ item.time }}</p>
            <p>参与人数：{{ item.count }}人</p>
          </div>
          <div class="title_detail" v-else-if="item.createTime">
            <p>服务：{{item.offer}} </p>
            <p>创办时间：{{item.createTime}} </p>
            <p>办学规模：{{item.size}} </p>
            <p class="tel">
              校区电话：{{ item.tel }}
              <span class="btn">立即拨号</span>
            </p>
          </div>
          <div class="address_con">
            <u-icon name="map-fill" color="#20a937" size="30"></u-icon>
            地址：{{ item.location }}
            <span class="btn">立即拨号</span>
          </div>
        </u-col>
        <view class="rate_con"  v-if="item.rate">
          <u-rate :current="item.rate" :disabled="true"></u-rate>
        </view>
      </u-row>

      <view class="tags_con">
        <u-tabs
          :list="tags"
          :is-scroll="false"
          :current="current"
          @change="clickTab"
          active-color="#20a937"
          duration="0.3"
          bar-width="80"
          id="tags_nav"
        ></u-tabs>
      </view>

      <view class="info">
        {{ item.info }}
      </view>

      <view class="course_con" id="course_con">
        <view class="title">
          <span class="main-text">{{tags[1].name}}</span>
          <span>全部</span>
        </view>

        <view class="course_list">
          <RowList :url="item.otherUrl" />
        </view>
      </view>

      <view class="course_con" id="comments_con">
        <view class="title">
          <span class="main-text">{{tags[2].name}}</span>
          <span>全部</span>
        </view>

        <view class="comments_list">
          <CommentItem :url="item.commentsUrl" />
        </view>
      </view>
    </view>
  </scroll-view>
</template>

<script>
import RowList from "./RowList.vue";
import CommentItem from "./CommentItem";

export default {
  components: {
    RowList,
    CommentItem,
  },
  props: {
    url: {
      type: String,
      default: "",
    },
    tags: {
      type: Array,
      default: () => [],
    },
    showFooter: {
      // 是否显示底部固定栏
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scrollTop: "",
      current: 0,
      item: {},
    };
  },
  mounted() {
    setTimeout(() => {
      this.item = {
        name: "商家名称",
        // trade: "家居建材",
        title: "活动名称",
        focus: 8823421,
        createTime: "2020.11.11",
        offer: "中小学辅导、英语、艺术",
        tel: 8888888,
        location: "深圳市龙岗区南联街道XX号",
        size:'200平方米',
        rate: 5,
        // time: "01.09-01.20",
        count: 334,
        oriPrice: 500,
        price: 29.9,
        imgSrc: "../static/imgs/life_img1.jpg",
        info: ` 开创未来教育新路径，互联网和信息技术的发展，让一切都在或多或少地发生着变化，
        教育方式也不例外，在未来的社会，学力将比学历更重开创未来教育新路径，互联网和信息技术的发展，让一切都在或多或少地发生着变化，
        教育方式也不例外，在未来的社会，学力将比学历更重开创未来教育新路径，互联网和信息技术的发展，让一切都在或多或少地发生着变化，
        教育方式也不例外，在未来的社会，学力将比学历更重开创未来教育新路径，互联网和信息技术的发展，让一切都在或多或少地发生着变化，
        教育方式也不例外，在未来的社会，学力将比学历更重`,
        otherUrl: "",
        commentsUrl: "",
      };
    }, 300);
  },
  methods: {
    clickTab(index) {
      this.current = index;
      if (index == 0) {
        this.scrollTop = "tags_nav";
      } else if (index == 1) {
        this.scrollTop = "course_con";
      } else if (index == 2) {
        this.scrollTop = "comments_con";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  position: absolute;
  display: inline-block;
  background: #20a937;
  color: #fff;
  padding: 5rpx 15rpx;
  border-radius: 12rpx;
}
.fixed_con {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  background: #fff;
  width: 100%;
  padding: 20rpx 50rpx;
  box-shadow: 0 -5rpx 20rpx 5rpx #eee;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  // align-items: flex-end;
  font-size: 26rpx;
  color: #959595;
  .price_con {
    text-align: right;
  }
  .price {
    color: #f40;
  }
  .big-text {
    font-size: 50rpx;
  }
  .btn-fixed {
    display: inline-block;
    background: #20a937;
    color: #fff;
    width: 16em;
    text-align: center;
    border-radius: 40rpx;
    line-height: 3;
  }
}

.banner_con {
  position: relative;
  height: 740rpx;
  image {
    width: 100%;
    height: 100%;
  }
  .icons_con {
    position: absolute;
    top: 10rpx;
    right: 10rpx;
    z-index: 5;
    .icon {
      margin: 0 10rpx;
      padding: 10rpx;
      background: #000c;
      border-radius: 50%;
    }
  }
}

.main_con {
  padding: 40rpx 0 0;
  .top_con {
    position:relative;
    // display: flex;
    font-size: 20rpx;
    padding: 0 50rpx;
    .avatar_con {
      display: flex;
    }
    .img {
      // width:100%;
      // height: 100rpx;
      // margin-right: 25rpx;
    }
    .store_name {
      font-size: 36rpx;
      margin: 10rpx 0;
      font-weight: 700;
    }
    .title_detail {
      position: relative;
      margin: 20rpx 0;
      .title {
        font-size: 50rpx;
      }
    }
    .rate_con {
      position: absolute;
      right:30rpx;
      top:20rpx;
    }
    .tel {
      position: relative;
      .btn {
        bottom: -5rpx;
        right: 3em;
      }
    }
    .address_con {
      position: relative;
      .btn {
        bottom: -5rpx;
        right: -6em;
      }
    }
  }
  .tags_con {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin: 50rpx 0;
    padding: 20rpx 50rpx;
  }
  .info {
    padding: 0 50rpx;
    font-size: 20rpx;
    color: #959595;
  }
  .course_con {
    margin: 30rpx 0;
    .title {
      display: flex;
      justify-content: space-between;
      padding: 20rpx 50rpx;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      line-height: 2;
      font-size: 30rpx;
      color: #959595;
    }
  }
  .comments_list {
    padding: 0 30rpx;
  }
}
</style>