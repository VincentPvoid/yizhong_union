<template>
  <view>
    <u-tabs
      :list="list"
      :current="current"
      @change="change"
      active-color="#20a937"
      duration="0.2"
      bar-width="80"
      gutter="20"
    ></u-tabs>
  </view>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    current:{
      type:Number,
      default:0,
    }
  },
  data() {
    return {
      // current: 0,
    };
  },
  methods: {
    change(index) {
      // this.current = index;
      this.$emit('update:current', index)
    },
  },
};
</script>

<style>
</style>