<template>
  <div class="primary_map">
    <section class="map_header">
      <h3 class="map_title">Roadmap</h3>
      <router-link to="/roadmap" class="map_view">View</router-link>
    </section>
    <ul class="map_ul">
      <li
        class="map_li"
        v-for="item in roadmapList"
        :key="item.name"
      >
        {{item.name}}
        <span class="map_count">{{item.count}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState('countmap', ['roadmapList'])
  }
}
</script>

<style lang="less" scoped>
.primary_map {
  width: 223px;
  border-radius: 10px;
  background: #FFFFFF;
  padding: 19px 24px 24px;
  .map_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .map_title {
      color: @grey-btn;
      font-size: 18px;
      letter-spacing: -0.25px;
    }
    .map_view {
      text-decoration: underline;
      font-size: 13px;
      color: @blue-activr;
    }
  }
  .map_ul {
    margin-top: 24px;
    .map_li {
      display: flex;
      justify-content: space-between;
      color: @gery-font-q;
      font-size: 16px;
      margin-top: 8px;
      position: relative;
      padding-left: 24px;
      &::before {
        position: absolute;
        content: '';
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }
      &:nth-of-type(1)::before {
        background: #F49F85;
      }
      &:nth-of-type(2)::before {
        background: #AD1FEA;
      }
      &:nth-of-type(3)::before {
        background: #62BCFA;
      }
      .map_count {
        font-weight: bold;
      }
    }
  }
}
</style>
