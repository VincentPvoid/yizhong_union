<template>
  <view class="content">
    <ItemDetail :url="url" :tags="tags" :showFooter="true" />
  </view>
</template>

<script>
import ItemDetail from "@/components/ItemDetail";
export default {
  components: {
    ItemDetail,
  },
  data() {
    return {
      url: "",
      tags: [
        {
          name: "简介",
        },
        {
          name: "活动",
        },
        {
          name: "评价",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding-bottom: 80rpx;
}
</style>