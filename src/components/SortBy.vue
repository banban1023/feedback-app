<template>
  <div class="sort">
    <section class="sort_suggestions">
      <img src="@/assets/suggestions/icon-suggestions.svg" alt="" class="sort_img">
      <p class="sort_msg">6 Suggestions</p>
    </section>
    <van-dropdown-menu ref="menu">
      <van-dropdown-item v-model="value" :options="option">
        <!-- 自定义 title slot，让 Sort by 也可以点击 -->
        <template v-slot:title>
          <span class="dropdown-title" @click="toggleDropdown">
            <span>Sort by:</span> {{ getTextByValue(value) }}
          </span>
        </template>
      </van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '1',
      option: [
        { text: 'Most Upvotes', value: '1' },
        { text: 'Least Upvotes', value: '2' },
        { text: 'Most Comments', value: '3' },
        { text: 'Least Comments', value: '4' }
      ]
    }
  },
  methods: {
    // 获取当前选中的 text
    getTextByValue (val) {
      const item = this.option.find(opt => opt.value === val)
      return item ? item.text : ''
    },
    // 手动打开下拉菜单
    toggleDropdown () {
      this.$refs.menu.toggle()
    }
  }
}
</script>

<style lang="less" scoped>
.sort {
  display: flex;
  height: 56px;
  background-color: @grey-bgi;
  padding: 0 24px;
  align-items: center;
  .sort_suggestions {
    display: flex;
    margin-right: 38px;
    .sort_img {
      margin-right: 16px;
    }
    .sort_msg {
      font-size: 18px;
      font-weight: bold;
      letter-spacing: -0.25px;
      color: #FFFFFF;
    }
  }
  ::v-deep(.van-dropdown-menu__bar) {
    background-color: transparent;
    box-shadow: none;
    .van-dropdown-menu__item {
      justify-content: flex-start;
      .van-dropdown-menu__title {
        color: @grey-bgc-q;
        opacity: 0.75;
        font-size: 14px;
      }
    }
  }
  .dropdown-title {
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    span {
      font-weight: 300;
    }
  }
}
</style>
