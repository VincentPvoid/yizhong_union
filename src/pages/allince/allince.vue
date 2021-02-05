<template>
  <view class="content">
    <view class="search_con">
      <view class="location" @click="showArea = true">
        <u-picker
          mode="region"
          v-model="showArea"
          confirm-color="#20a937"
          :params="pickerParams"
          :default-region="[province, city]"
          @confirm="chooseCity"
        >
        </u-picker>
        <u-icon name="map-fill" color="#20a937" size="36"></u-icon>
        <span>{{ city }}</span>
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
  </view>
</template>

<script>
import TopTabs from "@/components/TopTabs.vue";
import PageList from "@/components/PageList.vue";

export default {
  components: {
    TopTabs,
    PageList,
  },
  data() {
    return {
      showArea: false, // 是否显示picker
      pickerParams: {
        // picker显示参数
        province: true,
        city: true,
        area: false,
      },
      province: "广东省",
      city: "深圳市", // 当前选中的城市
      tags: [
        {
          name: "全部",
        },
        {
          name: "商学院",
        },
        {
          name: "工商财税",
        },
        {
          name: "法务咨询",
        },
        {
          name: "视觉设计",
        },
        {
          name: "文字测试",
        },
      ],
      current: 0,
      url: "test",
    };
  },
  methods: {
    chooseCity(e) {
      // console.log(a, "sfffffffffffff");
      this.province = e.province.label;
      this.city = e.city.label;
    },
  },
  created() {
    if (this.tags.length) {
      this.tags.map((item) => (item.label = item.name));
    }
  },
};
</script>

<style lang="scss" scoped>
$LR: 30rpx;

.content {
  padding-bottom: 80rpx;
}
.search_con {
  display: flex;
  justify-content: center;
  font-size: 30rpx;
  line-height: 70rpx;
  padding: 20rpx $LR;
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
.tags_con {
  padding: 0 $LR;
}
</style>