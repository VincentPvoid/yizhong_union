<template>
  <view>
    <view class="dropdown_con">
      <u-dropdown active-color="#20a937">
        <u-dropdown-item
          v-model="value1"
          title="筛选"
          :options="options1"
        ></u-dropdown-item>
        <u-dropdown-item
          v-model="value2"
          title="排序"
          :options="options2"
        ></u-dropdown-item>
        <span></span>
      </u-dropdown>
    </view>

    <view class="list_con">
      <PageListItem v-for="(item, index) in list" :item="item" :key="index">
        <!-- <template v-slot:price_con>
          <p class="del-text">原价：{{ item.oriPrice }}</p>
          <p class="count">已售：{{ item.count }}</p>
          <p class="price">
            ¥<span class="big-text">{{ item.price }} </span>
          </p>
        </template>
        <template v-slot:btn>
          <span class="btn">立即报名</span>
        </template> -->
      </PageListItem>
    </view>
  </view>
</template>

<script>
import PageListItem from "./PageListItem";

export default {
  props: {
    options1: {
      type: Array,
      default: () => [],
    },
    url: {
      type: String,
      default: ''
    },
  },
  components: {
    PageListItem,
  },
  data() {
    return {
      value1: 1,
      value2: 2,
      options2: [
        {
          label: "综合",
          value: 1,
        },
        {
          label: "距离",
          value: 2,
        },
        {
          label: "人气",
          value: 3,
        },
        {
          label: "好评",
          value: 4,
        },
      ],
      list:[],
    };
  },
  created() {
    
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
  },
};
</script>

<style lang="scss" scoped>

.dropdown_con {
  display: flex;
  span {
    display: inline-block;
    width: 50%;
  }
}
</style>