<template>
  <div class="sort">
    <section class="sort_suggestions">
      <img src="@/assets/suggestions/icon-suggestions.svg" alt="" class="sort_img">
      <p class="sort_msg">6 Suggestions</p>
    </section>
    <van-dropdown-menu :overlay="false">
      <van-dropdown-item
        ref="dropdown"
        v-model="value"
        :options="option"
        title-class="custom-title"
      >
        <template #title>
          <span class="dropdown-title" @click.stop="toggleDropdown">
            <span>Sort by:</span> {{ getTextByValue(value) }}
          </span>
        </template>
      </van-dropdown-item>
    </van-dropdown-menu>
    <button class="sort_btn">+ Add Feedback</button>
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
      const dropdown = this.$refs.dropdown
      if (dropdown) {
        dropdown.toggle()
      }
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
  justify-content: space-between;
  .sort_suggestions {
    display: none;
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
  ::v-deep(.van-popup--top) {
    width: 225px;
    height: 192px;
    top: 20px;
    left: 24px;
    border-radius: 10px;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
    .van-dropdown-item__option--active {
      color: #AD1FEA;
      .van-dropdown-item__icon {
        color: #AD1FEA;
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
  .sort_btn {
    width: 134px;
    height: 40px;
    border-radius: 10px;
    background: #AD1FEA;
    border: none;
    font-size: 13px;
    font-weight: bold;
    color: @grey-bgc-q;
  }
}
</style>
