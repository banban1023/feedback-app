<template>
  <div class="primary_tag">
    <ul class="tag_ul">
      <li
        v-for="item in tag"
        :key="item"
        class="tag_li"
      ><button class="tag_btn">{{item}}</button></li>
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
    ...mapState('tag', ['tag'])
  }
}
</script>

<style lang="less" scoped>
.primary_tag {
  width: 223px;
  border-radius: 10px;
  background-color: #fff;
  padding: 24px 0 22px 24px;
  .tag_ul {
    display: flex;
    flex-wrap: wrap;
    .tag_li {
      .tag_btn {
        height: 30px;
        margin: 0 8px 14px 0;
        padding: 0 14px;
        background-color: @grey-bgc-q;
        border: none;
        border-radius: 10px;
        color: @blue-font;
      }
    }
  }
}
</style>
