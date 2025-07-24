<template>
  <div class="goback" @click="$router.back()">
    <span class="goback_icon"></span>
    <p>Go Back</p>
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
  display: flex;
  align-items: center;
  p {
    border-bottom: 1px solid transparent;
  }
  &:hover {
    cursor: pointer;
    p {
      border-bottom: 1px solid #fff;
    }
  }
  .goback_icon {
    width: 4px;
    height: 8px;
    display: inline-block;
    margin-right: 10px;
    background: url('@/assets/shared/icon-arrow-left.svg') no-repeat center center / cover;
  }
}
</style>
