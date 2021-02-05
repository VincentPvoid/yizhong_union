<template>
  <view class="content">
    <view class="search_con">
      <view class="location" @click="showArea=true">
       <u-picker
          mode="region"
          v-model="showArea"
          confirm-color="#20a937"
          :params="pickerParams"
          :default-region="[province,city]"
          @confirm="chooseCity"
        >
        </u-picker>
        <u-icon name="map-fill" color="#20a937" size="36"></u-icon>
        <span>{{city}}</span>
      </view>
      <view class="search_wapper">
        <input type="text" class="search_input" placeholder="搜索" />
      </view>
    </view>
    
    <view class="tags_con">
      <TopTabs :list="tags" :current.sync="current" />
    </view>


    <view class="list_con">
      <PageList :options1="tags" :url="url" />
    </view>



    <custabbar :current-page="1"></custabbar>
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
      pickerParams: { // picker显示参数
        province: true,
        city: true,
        area: false,
      },
      province:'广东省',
      city:'深圳市', // 当前选中的城市
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
      url:'',
    };
  },
  methods: {
    chooseCity(e) {
      this.province = e.province.label;
      this.city = e.city.label;
    },
  },
  created(){
    if(this.tags.length){
      this.tags.map(item => item.label = item.name)
    }
  }
};
</script>

<style lang="scss" scoped>
$LR:30rpx;

.btn {
  // position: absolute;
  display: inline-block;
  background: #20a937;
  color: #fff;
  padding: 5rpx 15rpx;
  border-radius: 12rpx;
  line-height: 1.5;
}
.content{
  padding-bottom:120rpx;
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