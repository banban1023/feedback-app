<template>
  <div class="home">
    <header>
      <PrimaryNav></PrimaryNav>
      <SortBy></SortBy>
    </header>
  </div>
</template>

<script>
import PrimaryNav from '@/components/PrimaryNav.vue'
import Data from '@/db/data.json'
import SortBy from '@/components/SortBy.vue'
export default {
  name: 'HomeView',
  components: {
    PrimaryNav, SortBy
  },
  data () {
    return {
      Data
    }
  },
  created () {
    console.log(this.Data)
  }
}
</script>

<style lang="less" scoped>

</style>
