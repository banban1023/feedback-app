<template>
  <nav class="primary_nav">
    <section class="sec_title">
      <h1 class="nav_title">Frontend Mentor</h1>
      <h2 class="nav_submittitle">Feedback Board</h2>
    </section>
    <button :class="{'nav_open': !show, 'nav_close': show}" @click="showPopup">open nav</button>
    <van-popup
      v-model="show"
      position="right"
    >
      <PrimaryTag></PrimaryTag>
      <PrimaryMap></PrimaryMap>
    </van-popup>
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
.primary_nav {
  width: 100%;
  height: 72px;
  background: url('@/assets/suggestions/mobile/background-header.png') no-repeat center center/ cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  .sec_title {
    color: #fff;
    .nav_title {
      font-size: 15px;
      letter-spacing: -0.19px;
    }
    .nav_submittitle {
      font-size: 13px;
      font-weight: 500;
    }
  }
  .nav_open,
  .nav_close {
    width: 17px;
    height: 17px;
    border: none;
    font-size: 0;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: transparent;
  }
  .nav_open {
    background-image: url('@/assets/shared/mobile/icon-hamburger.svg');
  }
  .nav_close {
    background-image: url('@/assets/shared/mobile/icon-close.svg');
  }
  ::v-deep(.van-popup) {
    // position: fixed !important;
    top: 72px !important;
    bottom: auto !important;
    left: auto !important;
    right: 0 !important;
    height: calc(100vh - 72px);
    width: 271px;
    transform: none;
    background-color: @blue-bgc;
    padding: 24px;
    .primary_tag {
      margin-bottom: 24px;
    }
  }
  ::v-deep(.van-overlay) {
    position: absolute;
    top: 72px;
    left: 0;
    height: calc(100vh - 72px);
  }

}
</style>
