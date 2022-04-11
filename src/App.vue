<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { doRem } from "./utils/setrem";
export default {
  created() {
    doRem();
  },
};
</script>

<style lang="scss" scoped>
</style>
