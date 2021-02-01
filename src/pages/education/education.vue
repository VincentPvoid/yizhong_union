<template>
  <view class="content">
    <view class="search_con">
      <view class="location" @click="showArea=true">
        <u-picker mode="region" v-model="showArea" confirm-color="#20a937"> </u-picker>
        <u-icon name="map-fill" color="#20a937" size="36"></u-icon>
        <span>深圳市</span>
      </view>
      <view class="search_wapper">
        <input type="text" class="search_input" placeholder="搜索" />
      </view>
    </view>
    
    <view class="tags_con">
      <TopTabs :list="tags" :current.sync="current" />
    </view>


    <view class="list_con">
      <PageList :options1="tags" :list="list" />
    </view>

  </view>
</template>

<script>
import TopTabs from '@/components/TopTabs.vue';
import PageList from '@/components/PageList.vue'

export default {
  components:{
    TopTabs,
    PageList,
  },
  data() {
    return {
      showArea: false,
      tags: [
        {
          name: "全部",
        },
        {
          name: "升学教育",
        },
        {
          name: "早教中心",
        },
        {
          name:'脑力开发'
        },
        {
          name:'艺术培训'
        },
        {
          name:'文字测试'
        }
      ],
      current:0,
      list:[]
    };
  },
  mounted(){
    setTimeout(() => {
      this.list = [
        {
          url:'/pages/allincedetail/allincedetail',
          title: "XXX商学院",
          bio: "服务类型：家居建材",
          number:500,
          location:'小于500M',
          imgSrc: "../static/imgs/life_img1.jpg",
        },
        {
          url:'/pages/allincedetail/allincedetail',
          title: "XXX财税记账有限公司",
          bio: "服务类型：家居建材",
          number:100,
          location:'1.1KM',
          imgSrc: "../static/imgs/life_img1.jpg",
        },
        {
          url:'/pages/allincedetail/allincedetail',
          title: "XXX财税记账有限公司",
          bio: "服务类型：家居建材",
          number:100,
          location:'1.1KM',
          imgSrc: "../static/imgs/life_img1.jpg",
        },
        {
          url:'/pages/allincedetail/allincedetail',
          title: "XXX财税记账有限公司",
          bio: "服务类型：家居建材",
          number:100,
          location:'1.1KM',
          imgSrc: "../static/imgs/life_img1.jpg",
        },
        {
          url:'/pages/allincedetail/allincedetail',
          title: "XXX财税记账有限公司",
          bio: "服务类型：家居建材",
          number:100,
          location:'1.1KM',
          imgSrc: "../static/imgs/life_img1.jpg",
        },
      ];
    }, 500);
  }
};
</script>

<style lang="scss" scoped>
$LR:30rpx;

.content{
  padding-bottom:80rpx;
}
.search_con {
  display: flex;
  justify-content: center;
  font-size: 30rpx;
  line-height: 70rpx;
  padding:20rpx $LR;
  .location {
    margin-right: 20rpx;
  }
  .search_wapper {
    flex-grow: 1;
    .search_input {
      padding: 0 20rpx;
      border: 1px solid #eee;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border-radius: 10rpx;
      background: #eee;
    }
  }
}
.tags_con{
  padding:0 $LR;
}
</style>