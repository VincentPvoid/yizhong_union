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

    <view
      class="list_con"
      v-if="current === 0 || current === 1 || current === 2"
    >
      <PageList :options1="tags" :url="url" />
    </view>

    <view v-if="current === 3" class="cost_con">
      <FormSimple :info="info1" key='form1' />
    </view>

    <view v-if="current === 4" class="cost_con">
      <FormSimple :info="info2" key="form2" />
    </view>
  </view>
</template>

<script>
import TopTabs from "@/components/TopTabs.vue";
import PageList from "@/components/PageList.vue";
import FormSimple from "@/components/FormSimple.vue";

export default {
  components: {
    TopTabs,
    PageList,
    FormSimple,
  },
  data() {
    return {
      showArea: false, // 是否显示选择地区菜单
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
          name: "家居建材",
        },
        {
          name: "装修公司",
        },
        {
          name: "算报价",
        },
        {
          name: "免费设计",
        },
      ],
      current: 0,
      url: "",
      // info: {}, // 要显示的表单内容
      info1: {
        title: "我家装修要花多少钱？",
        sideTitle: "累计超过7778854次估价请求",
        btnText: "查询报价",
        tips: "提交之后会有专属客服为您提供设计方案",
      },
      info2: {
        title: "免费效果图设计 只需2步",
        sideTitle: "房屋所在城市",
        btnText: "获取免费设计方案",
        tips: "提交之后会有资深设计为您提供设计方案",
        tel: 111,
      },
    };
  },
  methods: {
    chooseCity(e) {
      this.province = e.province.label;
      this.city = e.city.label;
    },
  },
  created() {
    if (this.tags.length) {
      this.tags.map((item) => (item.label = item.name));
    }
  },
  // watch: {
  //   current(val) {
  //     if (val === 3) {
  //       this.info = {
  //         title: "我家装修要花多少钱？",
  //         sideTitle: "累计超过7778854次估价请求",
  //         btnText: "查询报价",
  //         tips: "提交之后会有专属客服为您提供设计方案",
  //       };
  //     }
  //     if (val === 4) {
  //       this.info = {
  //         title: "免费效果图设计 只需2步",
  //         sideTitle: "房屋所在城市",
  //         btnText: "获取免费设计方案",
  //         tips: "提交之后会有资深设计为您提供设计方案",
  //         tel:111,
  //       };
  //     }
  //   },
  // },
};
</script>

<style lang="scss" scoped>
$LR: 30rpx;

.btn {
  // position: absolute;
  display: inline-block;
  background: #20a937;
  color: #fff;
  padding: 5rpx 15rpx;
  border-radius: 12rpx;
  line-height: 1.5;
}
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