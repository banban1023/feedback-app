<template>
  <div class="goback" @click="$router.back()">
    <span class="goback_icon"></span>
    Go Back
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.goback {
  font-size: 13px;
  font-weight: bold;
  color: #647196;
  .goback_icon {
    width: 4px;
    height: 8px;
    display: inline-block;
    margin-right: 10px;
    background: url('@/assets/shared/icon-arrow-left.svg') no-repeat center center / cover;
  }
}
</style>
