<template>
  <view class="content">
    <view class="choose_con flex-center">
      <TopTabs :list="tags" :current.sync="current" />
    </view>

    <view class="list_con" v-if="current === 0">
      <ListSimple :list="friendsList" />
    </view>

    <view class="list_con" v-if="current === 1">
      <ListSimple :list="friendsList" :column="2" />
    </view>


    <custabbar :current-page="0"></custabbar>

  </view>
</template>

<script>
import TopTabs from "@/components/TopTabs.vue";
import ListSimple from "@/components/ListSimple.vue";

export default {
  components: {
    TopTabs,
    ListSimple
  },
  data() {
    return {
      tags: [
        {
          name: "盟友",
        },
        {
          name: "盟商",
        },
      ],
      current: 0,
      friendsList:[], // 盟友列表
      storeList:[], // 盟商列表
    };
  },
  created(){
    this.friendsList = [
      {
        name:'盟友名称',
        bio:'行业：新能源',
        tel:12321312123,
        location:'1.1KM'
      },
      {
        name:'盟友名称',
        bio:'行业：新能源',
        tel:12321312123,
        location:'1.1KM'
      }
    ]
  }
};
</script>

<style lang="scss" scoped>
.choose_con{
  height:120rpx;
}
</style>