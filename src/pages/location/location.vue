<template>
  <view class="content">
    <view class="choose_con flex-center">
      <TopTabs :list="tags" :current.sync="current" />
    </view>

    <view class="list_con">
      <ListSimple :list="friendsList" />
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
};
</script>

<style lang="scss" scoped>
.choose_con{
  height:120rpx;
}
</style>