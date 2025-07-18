<template>
  <div class="new">
    <header>
      <GoBack></GoBack>
    </header>
  </div>
</template>

<script>
import GoBack from '@/components/GoBack.vue'
export default {
  name: 'NameView',
  components: {
    GoBack
  }
}
</script>

<style lang="less" scoped>
.new {
  height: 88px;
  padding: 0 24px;
  display: flex;
  align-items: center;
}
</style>
