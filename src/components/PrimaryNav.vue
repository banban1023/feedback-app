<template>
  <nav class="primary_nav">
    <div class="nav-bgi">
      <section class="sec_title">
        <h1 class="nav_title">Frontend Mentor</h1>
        <h2 class="nav_submittitle">Feedback Board</h2>
      </section>
    </div>
    <button :class="{'nav_open': !show, 'nav_close': show}" @click="showPopup">open nav</button>
    <van-popup
      v-model="show"
      position="right"
    >
      <PrimaryTag></PrimaryTag>
      <PrimaryMap></PrimaryMap>
    </van-popup>
    <PrimaryTag></PrimaryTag>
    <PrimaryMap></PrimaryMap>
  </nav>
</template>

<script>
import PrimaryMap from './PrimaryMap.vue'
import PrimaryTag from './PrimaryTag.vue'
export default {
  data () {
    return {
      show: false
    }
  },
  components: {
    PrimaryTag, PrimaryMap
  },
  methods: {
    showPopup () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/primaryNav.less';
</style>
